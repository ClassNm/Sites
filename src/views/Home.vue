<template>
  <div class="home">
    <Header></Header>
    <HeaderBot></HeaderBot>
    <Shuffling></Shuffling>
    <ShufflingBotto></ShufflingBotto>
    <Teacher></Teacher>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../components/common/Header'
import HeaderBot from '../components/common/HeaderBot'
import Shuffling from '../components/common/Shuffling'
import ShufflingBotto from '../components/common/ShuffingBott'
import Teacher from '../components/common/Teacher'

export default {
  name: 'home',
  components: {
    Header,
    HeaderBot,
    Shuffling,
    ShufflingBotto,
    Teacher
  }
}
</script>
