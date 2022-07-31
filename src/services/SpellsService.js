import { battleService } from "./BattleService"
import $store from "@/store/index"
import { Spell } from "@/models/Spell"
import { characterService } from "./CharacterService"
import Notify from "@/utils/Notify"

class SpellsService{
  castSpell(castSpell, target){
    let spell = Object.assign({}, castSpell)
    if(spell.areaEffect){
      if(target == 'enemies'){
        $store.state.combatMonsters.forEach(m => {
          spell['areaEffect'] = false
          this.castSpell(spell, m)
        })
      }else{
        $store.state.player.characters.forEach(c => {
          spell['areaEffect'] = false
          this.castSpell(spell, c)
        })
      }
      return
    }
    if(spell.strength && (!spell.buff || !spell.debuff)){
      spell['actions'] = 1
      spell['hp'] = 1
      spell['lifeSteal'] = 0
      spell['luck'] = 0
      battleService.handleAttack(spell, target)
      characterService.autoSelect()
    }
    if(spell.effect){
      if(Array.isArray(target[spell.effect])){
        target[spell.effect].push(spell.value)
      }else if(typeof spell.value !== 'number'){
        target[spell.effect] = spell.value
      }else{
        if(spell.buff){
          target[spell.effect] += spell.value
        }else{
          target[spell.effect] -= spell.value
        }
      }
    }
    if(spell.temp){
      if(spell.debuff){
        target['debuffs'].push({effect: spell.effect, value: spell.value})
      }
      if(spell.buff){
        target['buffs'].push({effect: spell.effect, value: spell.value})
      }
    }
  }
  findRandomLearnableSpell(character){
    let spellLvl = Math.floor((Math.random()*(character.level ?? 0))/2)
    if(character.classType == 'wizard' || character.classType == 'unknown'){
      return $store.state.spells[spellLvl][Math.floor(Math.random()*$store.state.spells[spellLvl].length)].name
    }
    let spell = false
    do {
      let potientalSpell = $store.state.spells[spellLvl][Math.floor(Math.random()*$store.state.spells[spellLvl].length)]
      let canLearn = true
      if(potientalSpell.reqs){
        for(let req in potientalSpell.reqs){
          if(character[req] != potientalSpell.reqs[req]){
            canLearn = false
          }
        }
      }
      if(canLearn){
        spell = potientalSpell.name
      }
    } while (!spell);
    return spell
  }
  learnSpell(spellName, character){
    if(!this.canLearnSpell(spellName, character)){
      return false
    }
    if(character.spells.find(s => s.name == spellName)){
      this.levelUpSpell(spellName, character)
      return
    }
    let spellData = $store.state.spells.find(spells => spells.find(s => s.name == spellName)).find(s => s.name == spellName)
    character.spells.push(new Spell(spellData))
    Notify.toast(character.name+' Learned '+spellName, 'success')
  }
  canLearnSpell(spellName, character){
    let spell = character.spells.find(s => s.name == spellName)
    if(!spell){
      spell = $store.state.spells.find(spell => spell.find(s => s.name == spellName)).find(s => s.name == spellName)
    }else{
      return spell.level < character.level
    }
    for(let req in spell.reqs){
      if(character[req] != spell.reqs[req] && character[req] != 'unknown' && character[req] != 'wizard'){
        return false
      }
    }
    return spell.level <= character.level
  }
  levelUpSpell(spellName, character){
    let spell = character.spells.find(s => s.name == spellName)
    let originalSpell = $store.state.spells.find(spell => spell.find(s => s.name == spellName))
    originalSpell = originalSpell.find(s => s.name == spellName)

    spell.level++
    if(spell.strength){
      spell.strength += originalSpell.strength
    }
    if(spell.value){
      spell.value += originalSpell.value
    }
    Notify.toast(character.name+' Level up '+spellName, 'success')
  }
}

export const spellsService = new SpellsService()