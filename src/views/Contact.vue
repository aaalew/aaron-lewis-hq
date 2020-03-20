<template>
<div id="contact">
    <NameTitle/>
    <div class="links-grid">
        <div class="links-row">
        <div class="links-column">
            <a class="button" target="_blank" href="https://github.com/aaalew/"><i class="fab fa-github fa-3x icon"></i>GitHub</a>
            <a class="button" target="_blank" href="https://www.linkedin.com/in/aaron-lewis-1aab62114/"><i class="fab fa-linkedin-in fa-3x icon"></i>LinkedIn</a>
        </div>
        <div class="links-column">
            <a class="button" target="_blank" href="https://www.instagram.com/a_lew/"><i class="fab fa-instagram fa-3x icon"></i>Instagram</a>
            <a class="button" target="_blank" href="#"><i class="far fa-envelope-open fa-3x icon"></i>Email</a>
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

.links-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
}

.links-row {
  display: flex;
}

.links-column {
  display: flex;
  flex-direction: column;
}

.icon {
  margin: 20px 0;
}

.button {
  border-left: 4px #7750FA solid;
  border-right: 4px #7750FA solid;
}

.button:link,
.button:visited {
  display: flex;
  flex-direction: column;
  background-color: #111111;
  width: 300px;
  height: 300px;
  margin: 10px;
  justify-content: center;
  align-items: center;
}

.button:hover,
.button:visited:hover {
  color: #FFFFFF;
  background-color: #7750FA;
}

@media only screen and (max-width: 400px) {

  .links-grid {
    height: 90%;
  }

  .links-row {
    flex-direction: column;
  }

  .button:link,
  .button:visited {
    width: 200px;
    height: 125px;
    margin: 20px 0;
  }
}

</style>