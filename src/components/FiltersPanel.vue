<template>
  <div class="filters">
    <label><input type="checkbox" v-model="vegan" @change="emitFilter"> Vegan</label>
    <label><input type="checkbox" v-model="glutenFree" @change="emitFilter"> Gluten-free</label>
  </div>
</template>
<script>
export default {
  data(){return{vegan:false,glutenFree:false}},
  methods:{emitFilter(){this.$emit('filter',{vegan:this.vegan,glutenFree:this.glutenFree})}}
}
</script>