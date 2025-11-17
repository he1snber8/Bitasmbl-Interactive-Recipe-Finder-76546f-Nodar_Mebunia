<template>
  <section class="list">
    <ul>
      <li v-for="r in recipes" :key="r.id">
        <button @click="$emit('select',r)">{{ r.title }}</button>
      </li>
    </ul>
  </section>
</template>
<script>
export default { props:['recipes'] }
</script>