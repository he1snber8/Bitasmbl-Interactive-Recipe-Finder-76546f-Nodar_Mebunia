<template>
  <div class="search">
    <input v-model="q" @input="onInput" placeholder="Search recipes or ingredients" />
  </div>
</template>
<script>
export default {
  data(){return{q:''}},
  methods:{onInput(){this.$emit('search',this.q)}}
}
</script>