<template>
  <div class="container mt-5">
    <div v-if="activeShop == 'general'">
      <GeneralShop :storeItems="storeItems" />
    </div>
    <div v-if="activeShop == 'sell'">
      <SellShop />
    </div>
    <div v-if="activeShop == 'magic'">
      <MagicShop :spellList="spellList" />
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity"
import { computed, onMounted } from "@vue/runtime-core"
import $store from "@/store/index.js"
import { itemsService } from "@/services/ItemsService"
import { getRarityFullName } from '@/utils/getRarityFullName'
import { questService } from "@/services/QuestService"
import { characterService } from "@/services/CharacterService"
import Notify from "@/utils/Notify"
import { spellsService } from "@/services/SpellsService"
import SellShop from "@/components/SellShop.vue"
import GeneralShop from "@/components/GeneralShop.vue"
import MagicShop from "@/components/MagicShop.vue"
export default {
  name: 'MainShop',
  components: {
   SellShop, GeneralShop, MagicShop
  },
  setup(){
    onMounted(async()=> {
      // random chance to get a quest request 
      let luck = 1+characterService.getPartyLuck()
      let chance = Math.ceil(Math.random()*25)
      if(luck > chance && !$store.state.player.quest.objective){
        let index = Math.floor(Math.random()*$store.state.quests.length)
        let newQuest = questService.getQuest($store.state.quests[index])
        // TODO make ability to accept up to 3 quests
        if(await Notify.confirm(newQuest.objective, newQuest.target+' | Reward: '+newQuest.reward)){
          $store.state.player.quest = newQuest
        }
      }
      questService.checkQuestProgress()
      $store.state.shopItems = itemsService.getStoreItems()
    })
    const state = reactive({
      playersGold: computed(()=> $store.state.player.gold),
      storeItems: computed(()=> $store.state.shopItems),
      quest: null,
      activeShop: computed(()=> $store.state.shop),
      spellList: computed(()=> spellsService.getRandomSpellList()),
    })
    return state
  },
  methods: {
    getRarityFullName : getRarityFullName
  }
}
</script>

<style>
li{
  cursor: pointer;
}
.mh-100{
  height: 75vh;
  overflow-y: auto;
}
</style>