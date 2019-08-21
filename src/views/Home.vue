<template>
  <div class="home">
    <Header></Header>
    <HeaderBot></HeaderBot>
    <Shuffling></Shuffling>
    <ShufflingBotto></ShufflingBotto>
    <Teacher></Teacher>
    <MovThree></MovThree>
    <Join></Join>
    <Fouter></Fouter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../components/common/homePage/Header'
import HeaderBot from '../components/common/homePage/HeaderBot'
import Shuffling from '../components/common/homePage/Shuffling'
import ShufflingBotto from '../components/common/homePage/ShuffingBott'
import Teacher from '../components/common/homePage/Teacher'
import MovThree from '../components/common/homePage/MovThree'
import Join from '../components/common/homePage/Join'
import Fouter from '../components/common/homePage/Fouter'

export default {
  name: 'home',
  components: {
    Header,
    HeaderBot,
    Shuffling,
    ShufflingBotto,
    Teacher,
    MovThree,
    Join,
    Fouter
  }
}
</script>
