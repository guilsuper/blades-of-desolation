<template>
  <div v-if="character.hp < 0.1">
    <strong class="d-flex dead" title="dead">{{character.name}}</strong>
     <img :id="'charImg'+character.id" class="img-fluid w-75 events-none" :src="deadImg" @click="selectCharacter(character)">
  </div>
  <div v-else>
    <HpBar :hp="character.hp" :baseHp="character.baseHp" :selected="selected?.id == character.id" />
    <div class="border border-primary w-100 hp-bar rounded-pill align-items-center d-flex" v-if="character.baseMagic > 0">
      <div class="bg-primary hp-bar text-absolute-center rounded-pill" :style="'width: '+(character.magic > 0 ? (character.magic/character.baseMagic)*100 : 0)+'%'">
        <span class="text-light pb-1 fs-sm">
          {{Math.round(character.magic*10)/10}}/{{character.baseMagic}}
        </span>
      </div>
    </div>
    <div class="position-absolute hit selectable" :id="'hit'+character.id"></div>
    <strong class="d-flex text-light" :class="character.actions < 1 ? 'text-danger' : ''">
      {{character.name}}
    </strong>
    <div>
      <img :id="'charImg'+character.id" :class="dynamicClasses(character, selected)" class="img-fluid w-75 click " :src="character.img" @click="selectCharacter(character)">
    </div>
    <div class="d-flex">
      <p class="border rounded-circle text-light h-25 w-25" title="Strength">
        {{character.strength}}
      </p>
      <p class="border rounded-circle text-light h-25 w-25" title="Actions">
        {{character.actions}}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"
import $store from '@/store/index.js'
import HpBar from "./HpBar.vue"
export default {
  components: { HpBar },
  name: 'CombatCharacter',
  props: {
    character: {type: Object}
  },
  setup(props){
    const state = reactive({
      selected: computed(() => $store.state.selected),
      hp: computed(() => props.character.hp),
      deadImg: computed(()=>$store.state.assetsImgList.find(img => img.includes('dead'))),
    })
    return state
  },
  methods: {
    selectCharacter(character){
      if(character.actions > 0){
        this.$store.commit('selectCharacter', character)
      }
    },
    dynamicClasses(character, selected){
      let classes = ''
      classes += character.statusEffects.map(e => e.negative ? e.name : '').join(' ') 
      classes += selected?.id == character.id ? ' animate__animated animate__slow animate__pulse animate__infinite' : ''
      return classes
    }
  }
}
</script>

<style>
.selected{
  border: green;
}
.exhausted{
  color: yellow
}
.dead{
  color: red;
  cursor: not-allowed;
}
strong{
  white-space: nowrap;
  text-overflow: ellipsis;
  width: auto;
  display: block;
  overflow: hidden
}
.hit{
  left: 75%
}
.selectable{
  filter: drop-shadow(0px 0px 15px gold);
}
.events-none{
  pointer-events: none;
}
.fs-sm{
  font-size: small;
}
</style>