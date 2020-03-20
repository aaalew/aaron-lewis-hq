<template>
  <div class="hello">
    <router-link to="/" id="title-name">
      <p>Aaron Lewis</p>
    </router-link>
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

@media only screen and (max-width: 400px) {
  #title-name{
    font-size: 10vw;
    height: 10%;
  }
}

</style>
