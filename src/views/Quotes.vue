<template>
<div id="quotes">
    <NameTitle/>
    <div id="quotes-container">
        <div class="quote">
        "There is a basin in the mind where words float around on
        thought and thought on sound and sight. Then there is a depth
        of thought untouched by words, and deeper still a gulf of
        formless feelings untouched by thought."<br>
        --Their Eyes Were Watching God
        </div>
        <div class="quote">
        "Anything you tell a child, you prevent him from discovering for himself."<br>
        --Jean Piaget
        </div>
        <div class="quote">
        "The future rests with the ones who tend the future."<br>
        --Antigone
        </div>
        <div class="quote">
        "If you change the way you look at things, the things around you change."<br>
        --Dr. Wayne Dyer
        </div>
        <div class="quote">
        "Chance favors only the prepared mind"<br>
        --Louis Pasteur
        </div>
        <div class="quote">
        "Luck happens when preparation meets opportunity"<br>
        --Unknown (by me)
        </div>
        <div class="quote">
        "To err is human; to forgive, divine"<br>
        --Alexander Pope
        </div>
        <div class="quote">
        "Though argument does not create conviction, the lack of it destroys
        belief. What seems to be proved may not be embraced; but what no one
        shows that ability to defend is quickly abandoned. Rational argument
        does not create belief, but it maintains a climate in which belief
        may flourish."<br>
        --Austin Farrer
        </div>
        <div class="quote">
        "Love all, trust a few, do wrong to none."<br>
        --William Shakespeare
        </div>
        <div class="quote">
        "To the organized mind, death is but the next great adventure"<br>
        --Albus Dumbledore
        </div>
        <div class="quote">
        “Forgetting happens only when memory is quashed by routine.”<br>
        --Erik Freeze
        </div>
        <div class="quote">
        "How lucky I am to have something in my life that makes saying goodbye so hard."<br>
        --A. A. Mills
        </div>
        <div class="quote">
        "People say nothing is impossible, but I do nothing every day."<br>
        --A. A. Mills
        </div>
        <div class="quote">
        "We do not need to learn how to defeat our enemies. We need to learn
        how to live above them"<br>
        --Dr. Strange
        </div>
        <div class="quote">
        “Better to be silent and be thought a fool than to speak and to
        remove all doubt.”<br>
        -—Abraham Lincoln
        </div>
        <div class="quote">
        "Until man is nothing, God can make nothing out of him."<br>
        --Martin Luther
        </div>
        <div class="quote">
        "Service is the rent we pay to live on this planet. We have all
        warmed ourselves by fires we did not build, and drunk from wells
        we did not dig. We must now dig more wells and build more fires."<br>
        --Nido Qubein
        </div>
        <div class="quote">
        "The most pathetic person is the world is he who has sight but no
        vision."<br>
        --Helen Keller
        </div>
        <div class="quote">
        “Bad experiences are a school that only fools keep going to.“<br>
        -—Pres. Benson
        </div>
        <div class="quote">
        "A great man shows his greatness by the way he treats little men."<br>
        --Carlyle
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import NameTitle from '@/components/NameTitle.vue'

export default {
  name: 'Quotes',
  components: {
    NameTitle
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

.quote {
  display: flex;
  margin: 30px;
  width: 75%;
}

</style>