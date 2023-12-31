import Swal from '../../node_modules/sweetalert2/src/sweetalert2.js'
import $store from '@/store/index'
import { spellsService } from "@/services/SpellsService.js"
export default class Notify {
  /**
 *
 * @param {string} title The title text.
 * @param {string} text The body text.
 * @param {string} icon 'success', 'error', 'info', 'warning', or 'question'.
 * @param {string} confirmButtonText The text of your confirm button.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static async confirm(title = 'New Quest', text = "Mysterious", icon = 'question', confirmButtonText = 'Yes, Accept!') {
    try {
      const res = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }
  static async selectChar(title = 'Learn spell', cost = 1000, description = '') {
    try {
      const res = await Swal.fire({
        title: 'Learn '+title,
        text: description,
        input: 'select',
        inputOptions: getCharOptions(title),
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Learn Spell('+cost+'<i class="fad fa-coins"></i>)'
      })
      if (res.isConfirmed) {
        return res.value
      }
      return false
    } catch (error) {
      return false
    }
  }
  static async cheat() {
    try {
      const res = await Swal.fire({
        input: 'text',
        confirmButtonColor: '#3085d6',
        confirmButtonText: '???'
      })
      if (res.isConfirmed) {
        return res.value
      }
      return false
    } catch (error) {
      return false
    }
  }
  static async selectTarget(title = 'Select Target', confirmText = 'Cast Spell') {
    try {
      const res = await Swal.fire({
        title: title,
        input: 'select',
        inputOptions: getTargetOptions(),
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText
      })
      if (res.isConfirmed) {
        return res.value
      }
      return false
    } catch (error) {
      return false
    }
  }

    static async selectOptions(options = {baseHp: 'Hp', baseStrength: 'Strength', baseActions: 'Actions'}, title = 'Level Up', text = 'Select a option to improve.', btnText = 'Improve stat!') {
      try {
        const res = await Swal.fire({
          title: title,
          text: text,
          input: 'select',
          inputOptions: options,
          confirmButtonColor: '#3085d6',
          confirmButtonText: btnText
        })
        if (res.isConfirmed) {
          return res.value
        }
        return false
      } catch (error) {
        return false
      }
    }

  /**
 *
 * @param {string} title The title text
 * @param {string} display 'success', 'error', 'info', 'warning', or 'question'.
 * @param {string} position 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
 * @param {number} timer Time in milliseconds.
 * @param {boolean} progressBar Show progress bar or not respectively.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static toast(title = 'Warning!', display = 'warning', position = 'center-end', timer = 5000, progressBar = true) {
    Swal.fire({
      title: title,
      icon: display,
      position: position,
      timer: timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false
    })
  }
}

function getCharOptions(spellName){
  let options = {}
  let chars = $store.state.player.characters.filter(c => spellsService.canLearnSpell(spellName, c))
  if(chars.length < 1){
    return {0:'No one can learn this spell'}
  }
  chars.forEach(c => {
    options[c.id] = c.name
  })
  return options
}
function getTargetOptions(){
  let options = {}
  let monsters = $store.state.combatMonsters
  let chars = $store.state.player.characters
  monsters.forEach(m => {
    options[m.id] = m.name
  })
  chars.forEach(c => {
    options[c.id] = c.name
  })
  return options
}