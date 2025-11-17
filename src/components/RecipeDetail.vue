<template>
  <aside v-if="recipe" class="detail">
    <h2>{{ recipe.title }}</h2>
    <h3>Ingredients</h3>
    <ul><li v-for="ing in recipe.ingredients" :key="ing">{{ing}}</li></ul>
    <h3>Steps</h3>
    <ol><li v-for="(s,i) in recipe.steps" :key="i">{{s}}</li></ol>
  </aside>
</template>
<script>
export default { props:['recipe'] }
</script>