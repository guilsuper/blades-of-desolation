<template>
<div class="modal fade text-dark" id="itemPouchModal" tabindex="-1" role="dialog" aria-labelledby="itemPouchModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content text-light font-weight-bold">
      <div class="modal-header">
        <div class="modal-title container">
          <h5>Items</h5>
        </div>
      </div>
      <div class="modal-body container">
        <div class="row px-3">
          <ul v-if="items.length > 0" >
            <Item v-for="item in filteredItems" :key="item.id" :item="item" :qty="$store.state.player.items.filter(i => i.name == item.name).length"/>
          </ul>
          <p v-else>No items in pouch</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { reactive } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"
import $store from "@/store/index"
import Item from "@/components/Item.vue"

export default {
  name: 'ItemPouchModal',
  components: { Item },
  setup(){
    const state = reactive({
      items: computed(()=> $store.state.player.items),
      filteredItems: computed(()=> $store.state.player.items.filter((fi,i)=> $store.state.player.items[i+1]?.name != fi.name))
    })
    return state
  },
  methods: {
  }
}
</script>

<style>
li{
  text-align: justify;
}
</style>