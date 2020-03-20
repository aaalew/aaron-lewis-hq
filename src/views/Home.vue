<template>
  <div class="home">
    <div id="title-name">Aaron Lewis</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>

.home {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

#title-name {
  font-size: 8vw;
  font-family: 'Caveat', cursive;
}

@media only screen and (max-width: 400px) {
  #title-name {
    font-size: 60px;
  }
}

</style>