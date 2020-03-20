<template>
<div id="contact">
    <NameTitle/>
    <div class="links-grid">
        <div class="links-row">
        <div class="links-column">
            <a class="button" target="_blank" href="https://github.com/aaalew">GitHub</a>
            <a class="button" target="_blank" href="https://www.linkedin.com/in/aaron-lewis-1aab62114/">LinkedIn</a>
        </div>
        <div class="links-column">
            <a class="button" target="_blank" href="https://www.instagram.com/a_lew/">Instagram</a>
            <a class="button" target="_blank" href="#">allew617@gmail.com</a>
        </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import NameTitle from '@/components/NameTitle.vue'

export default {
  name: 'Contact',
  components: {
    NameTitle
  }
}
</script>

<style scoped>

#contact {
    width: 100%;
    height: 100%;
}

#title-name {
  font-size: 4vw;
  font-family: 'Caveat', cursive;
  height: 10%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.links-grid {
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: center;
  align-items: center;
}

.links-row {
  display: flex;
  flex-direction: row;
}

.links-column {
  display: flex;
  flex-direction: column;
}

.button:link,
.button:visited {
  display: flex;
  text-decoration: none;
  background-color: #111111;
  font-weight: bold;
  width: 300px;
  height: 300px;
  margin: 10px;
  justify-content: center;
  align-items: center;
}

.button:hover,
.button:visited:hover {
  color: #FFF;
  background-color: #7750FA;
}

</style>