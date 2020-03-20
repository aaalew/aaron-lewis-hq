<template>
<div id="quotes">
    <NameTitle/>
    <div id="quotes-container">
        <div class="quote-box" v-for="quote in quotes" :key="quote.id">
          <div class="quote">{{quote.quote}}</div>
          <div class="author">--{{quote.author}}</div>
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

#quotes::-webkit-scrollbar {
  width: 0 !important;
}

#quote-container {
  display: flex;
  justify-content: center;
}

.quote-box {
  padding: 10px;
  margin-top: 20px;
}

.quote-box:hover {
  background-color: #7750FA;
  font-weight: bold;
  margin: 40px 10px;
}

.quote {
  display: flex;
  width: 75%;
}

</style>