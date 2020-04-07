<template>
<div id="links">
    <NameTitle/>
    <div id="links-title">Partake of my links:</div>
    <a class="link" href="https://nbatrends.aaronlewishq.com/" target="_blank">NBA Trends</a>
    <a class="link" href="https://lab1.aaronlewishq.com/" target="_blank">CS 260 - Lab 1 (Clarity)</a>
    <a class="link" href="https://lab2.aaronlewishq.com/" target="_blank">CS 260 - Lab 2 (Bee Boop Weather)</a>
    <a class="link" href="https://lab3a.aaronlewishq.com/" target="_blank">CS 260 - Lab 3a (Comics)</a>
    <a class="link" href="https://lab3b.aaronlewishq.com/" target="_blank">CS 260 - Lab 3b (Grocery Store)</a>
    <a class="link" href="https://lab4.aaronlewishq.com/" target="_blank">CS 260 - Lab 4 (Photo Museum)</a>
</div>
</template>

<script>
// @ is an alias to /src
import NameTitle from '@/components/NameTitle.vue'

export default {
  name: 'Links',
  components: {
    NameTitle
  }
}
</script>

<style scoped>

#links {
  width: 100%;
}

#links-title {
  font-size: 2vw;
  font-weight: bold;
  margin: 30px 0px;
}

.link {
  border-left: 4px #7750FA solid;
}

.link:link,
.link:visited {
  display: flex;
  text-decoration: none;
  background-color: #111111;
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: 20px;
  margin: 30px 0;
}

.link:hover,
.link:visited:hover {
  padding-left: 50px;
  color: #FFF;
  background-color: #7750FA;
}

@media only screen and (max-width: 400px) {

  #links-title {
    font-size: 4vw;
    text-align: center;
  }

  .link {
    border-left: 4px #7750FA solid;
    border-right: 4px #7750FA solid;
  }

  .link:link,
  .link:visited {
    justify-content: center;
    margin: 30px 20px;
    padding-left: 0;
  }

  a {
    text-align: center;
  }
}

</style>