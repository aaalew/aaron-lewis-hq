<template>
<div id="quotes">
    <NameTitle/>
    <div id="quotes-container">
        <div class="quote-box" v-for="quote in quotes" :key="quote.id">
          <div class="quote">{{quote.quote}}</div>
          <div class="author">--{{quote.author}}--</div>
        </div>
    </div>
    <div style="height: 33%;"></div>
</div>
</template>

<script>
// @ is an alias to /src
import NameTitle from '@/components/NameTitle.vue'

export default {
  name: 'Quotes',
  components: {
    NameTitle
  },
  data() {
    return {
    }
  },
  computed: {
    quotes() {
      return this.$root.$data.quotes;
    }
  }
}
</script>

<style scoped>

#quote-container {
  display: flex;
  justify-content: center;
}

.quote-box {
  padding: 10px;
  margin-top: 10px;
}

.quote-box:hover {
  background-color: #7750FA;
}

.quote,
.author {
  width: 75%;
  border-left: 4px #7750FA solid;
  padding-left: 10px;
}

.author {
  padding-left: 30px;
}

@media only screen and (max-width: 400px) {

  .quote,
  .author {
    width: 100%;
    border-left: 4px #7750FA solid;
    padding-left: 10px;
  }

  .author {
    padding-left: 30px;
  }
}

</style>