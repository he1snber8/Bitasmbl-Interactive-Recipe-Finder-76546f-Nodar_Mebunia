<template>
  <div id="app">
    <header><h1>Interactive Recipe Finder</h1></header>
    <main>
      <FiltersPanel />
      <SearchBar @search="onSearch" />
      <RecipeList :recipes="recipes" @select="onSelect" />
      <RecipeDetail :recipe="selected" />
    </main>
  </div>
</template>
<script>
import FiltersPanel from "./components/FiltersPanel.vue"
import SearchBar from "./components/SearchBar.vue"
import RecipeList from "./components/RecipeList.vue"
import RecipeDetail from "./components/RecipeDetail.vue"
export default { components:{FiltersPanel,SearchBar,RecipeList,RecipeDetail}, data(){return{recipes:[],selected:null}}, methods:{onSearch(q){/* hook to call API */},onSelect(r){this.selected=r}} }
</script>