<template>
  <div class="hello">
    <div id="title-name">Aaron Lewis</div>
  </div>
</template>

<script>
export default {
  name: 'NameTitle',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#title-name {
  font-size: 4vw;
  font-family: 'Caveat', cursive;
  text-align: center;
}

</style>
