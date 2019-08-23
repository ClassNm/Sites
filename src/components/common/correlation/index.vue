<template>
    <div>
        <Header></Header>
        <HeaderBot></HeaderBot>
        <Top></Top>
        <TopHeader></TopHeader>
    </div>
</template>

<script>
import Header from '../homePage/Header'
import HeaderBot from '../homePage/HeaderBot'
import Top from './Top'
import TopHeader from'./TopHeader'

export default {
    components:{
        Header,
        HeaderBot,
        Top,
        TopHeader
    }
}
</script>

<style scoped>

</style>