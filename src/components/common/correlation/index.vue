<template>
    <div>
        <Header></Header>
        <HeaderBot></HeaderBot>
        <Top></Top>
        <TopHeader></TopHeader>
        <Center></Center>
        <Fouter></Fouter>
        <BackTop></BackTop>
    </div>
</template>

<script>
import Header from '../homePage/Header'
import HeaderBot from '../homePage/HeaderBot'
import Top from './Top'
import TopHeader from'./TopHeader'
import Center from './Center'
import Fouter from '../homePage/Fouter'

export default {
    components:{
        Header,
        HeaderBot,
        Top,
        TopHeader,
        Center,
        Fouter
    }
}
</script>

<style scoped>

</style>