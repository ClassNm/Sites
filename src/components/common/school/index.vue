<template>
    <div class="boxL">
        <Header></Header>
        <HeaderBot></HeaderBot>
        <Query class="quert"></Query>
        <LeftTit class="lefttit"></LeftTit>
        <Fouter class="fouter"></Fouter>
    </div>
</template>

<script>
import Header from '../homePage/Header'
import HeaderBot from '../homePage/HeaderBot'
import Query from './Query'
import LeftTit from './LeftTit'
import Fouter from './Fouter'
export default {
    components:{
        Header,
        HeaderBot,
        Query,
        LeftTit,
        Fouter
    }
}
</script>


<style scoped>
    .boxL{
        width: 1000px;
        margin: 0 auto;
    }
    .quert{
        width: 800px;
        float: left;
        margin-top: 30px;
    }
    .lefttit{
        width: 200px;
        float: left;
        margin-top: 60px;;
    }
    .fouter{
        width: 1000px;
        margin-top: 60px;
        float: left;
    }
</style>