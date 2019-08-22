<template>
    <div class="boxL">
        <Header></Header>
        <HeaderBot></HeaderBot>
        <HeaderSpe></HeaderSpe>
        <Majar class="Majar"></Majar>
        <LeftTit class="Left"></LeftTit>
        <Fouter></Fouter>
        <FouterBottm></FouterBottm>
    </div>
</template>

<script>
import Header from '../homePage/Header'
import HeaderBot from '../homePage/HeaderBot'
import HeaderSpe from './HeaderSpe'
import Majar from './Majar'
import LeftTit from '../school/LeftTit'
import Fouter from './Fouter'
import FouterBottm from '../school/Fouter'
export default {
    components:{
        Header,
        HeaderBot,
        HeaderSpe,
        Majar,
        LeftTit,
        Fouter,
        FouterBottm
    }
}
</script>

<style scoped>
    .boxL{
        width: 1000px;
        margin: 0 auto;
    }
    .Majar{
        width: 800px;
        float: left;
    }
    .Left{
        width: 200px;
        float: left;
    }
</style>