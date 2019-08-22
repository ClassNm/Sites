<template>
    <div class="box">
        <div class="boxSone">
            <ul>
                <li @click="SchoolName">查大学</li>
                <li @click="Majar">查专业</li>
                <li>高考直播间</li>
                <li>国际游学</li>
                <li>生涯规划师</li>
                <li>在线课堂</li>
                <li>学长帮</li>
                <li>研学营</li>
                <div class="bot">
                    <i class="iconfont">&#xe618;</i>
                    4000-180-810
                </div>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    methods:{
        SchoolName(){
            this.$router.push('/School')
        },
        Majar(){
            this.$router.push('/Specialty')
        }
    }
}
</script>
<style scoped>
    ul{
        list-style: none;
    }
    .box{
        width: 1000px;
        margin: 0 auto;
        background: #f2f2f2;
    }
    .boxSone{
        width: 1000px;
        margin: 0 auto;
    }
    li{
        display: inline-block;
        width: 100px;
        height: 80px;
        line-height: 80px;
        color: #000;
        font-size: 15px;
    }
    li:hover{
        color: orange;
        cursor:pointer
    }
    .bot{
        display: inline-block;
        font-size: 15px;
        width: 200px;
        height: 20px;
        line-height: 80px;
        color: #000;
        /* margin-left: 10%; */
    }
    @font-face {
        font-family: 'iconfont';  /* project id 1362410 */
        src: url('//at.alicdn.com/t/font_1362410_kpatruz69p.eot');
        src: url('//at.alicdn.com/t/font_1362410_kpatruz69p.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1362410_kpatruz69p.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1362410_kpatruz69p.woff') format('woff'),
        url('//at.alicdn.com/t/font_1362410_kpatruz69p.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1362410_kpatruz69p.svg#iconfont') format('svg');
    }
    .iconfont {
          font-family:"iconfont" !important;
          display: inline-block;
          font-size:15px;
          font-style:normal;
          -webkit-font-smoothing: antialiased;
          -webkit-text-stroke-width: 0.2px;
          -moz-osx-font-smoothing: grayscale;
    }
</style>