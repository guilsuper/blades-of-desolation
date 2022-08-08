import { Item } from "@/models/Item"
import $store from '@/store/index'
import Notify from "@/utils/Notify"
import { characterService } from "./CharacterService"
class QuestService{
  acceptQuest(newQuest){
    let quest = Object.assign({}, newQuest)
    let lvl = characterService.getAverageCharacterLvl()
    if(quest.objective == 'kill'){
      let monstersList = $store.state[quest.target][lvl]
      let index = Math.floor(Math.random()*monstersList.length)
      quest.target = monstersList[index].name
      quest.goal += ($store.state.player.kills[quest.target] ?? 0)*(lvl > 0 ? lvl : 1)
      quest.reward = quest.reward*(lvl > 0 ? lvl : 1)
    }
    if(quest.objective == 'find'){
      let itemList = $store.state[quest.target+'s'].filter(i => i.rarity == quest.goal)
      let index = Math.floor(Math.random()*itemList.length)
      quest.target = itemList[index].name
      itemList = $store.state[newQuest.target+'s'].filter(i => i.rarity == quest.reward)
      index = Math.floor(Math.random()*itemList.length)
      quest.reward = itemList[index].name
    }
    if(quest.objective == 'explore'){
      let row = Math.ceil(Math.random()*10)
      let col = Math.ceil(Math.random()*12)
      quest.target = $store.state.player.explored.filter(e => e.length > 0).length
      quest.goal = quest.target+'-'+row+'-'+col
      quest.reward = (quest.target+1)*row*col
    }
    $store.state.player.quest = quest
  }
  updateQuest(){
    let quest = $store.state.player.quest
    if(quest.objective == 'kill'){
      $store.state.combatMonsters.forEach(m => {
        if(m.name == quest.objective && quest.goal < quest.progress){
          quest.progress++
        }
      })
      if(quest.progress >= quest.goal){
        this.completeQuest()
      }
    }
    if(quest.objective == 'find'){
      $store.state.player.items.forEach(i => {
        if(i.name == quest.target){
          this.completeQuest()
        }
      })
    }
    if(quest.objective == 'explore'){
      let currentLocation = $store.state.player.explored[$store.state.location][$store.state.player.explored[$store.state.location].length -1]
      if(quest.goal == currentLocation){
        this.completeQuest()
      }
    }
  }
  completeQuest(){
    let quest = $store.state.player.quest
    if(quest.objective == 'find'){
      $store.state.player.items = $store.state.player.items.filter(i => i.name != quest.name)
      let item = $store.state.items.filter(i => i.name == quest.reward)
      $store.state.player.items.push(new Item(item[0]))
    }
    if(quest.objective == 'kill'){
      $store.state.player.gold += quest.goal
    }
    if(quest.objective == 'explore'){
      $store.state.player.characters.forEach(c => c.exp += quest.reward)
    }
    Notify.toast('Quest Complete', 'success')
    $store.state.player.quest = {}
  }
}

export const questService = new QuestService()