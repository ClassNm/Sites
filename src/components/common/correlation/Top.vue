<template>
    <div class="box">
        <div style="width:1000px;height:400px;">
            <img :class="header" src="https://i.gsxcdn.com/0cms/d/file/content/2019/07/5d41841be4571.png" alt="">
        </div>
        <div class="headertit">GENSHUIXUE</div>
        <div class="headerbox">
            <div class="headerdataitem">
                <div class="headertop">累计注册学员</div>
                <div class="headerbot">1300+</div>
            </div>
            <div class="headerbottom"></div>
            <div class="headerdataitem">
                <div class="headertop">累计开设课程</div>
                <div class="headerbot">9000+门</div>
            </div>
            <div class="headerbottom"></div>
            <div class="headerdataitem">
                <div class="headertop">学员覆盖</div>
                <div class="headerbot">194个国家</div>
            </div>
            <div class="headerbottom"></div>
            <div class="headerdataitem">
                <div class="headertop">平均好评率</div>
                <div class="headerbot">95%以上</div>
            </div>
        </div>
        <div class="fouter">
            <span :class="fouterTop" style="display: block;font-size: 40px;color: #fff;line-height: 40px;padding:80px 0 40px 0;">为什么选择跟谁学</span>
            <span :class="fouterTop" style="display: block;font-size: 12px;color: #fff;line-height: 12px;margin:0 0;">GEN SHUI XUE</span>
            <span :class="fouterTop" style="display: block;font-size: 18px;color: #fff;line-height: 18px;margin:40px 0;">线下辅导班痛点一次解决，在线学习更加高效便捷。</span>
            <div :class="fouterTopBottom" style="border: 1px solid #ff6c00;height: 220px;width: 990px;margin: 0 auto;margin-bottom: 100px;">
                <div class="fouterdataitem">
                    <div class="fouterheader">优选全国名师</div>
                    <div class="fouterbottom">不受教育资源限制</div>
                    <div class="fouterbottom">您的家就是学区房</div>
                </div>
                <div style="width: 2px;height: 88px;background: #ff6c00;display: inline-block; "></div>
                 <div class="fouterdataitem">
                    <div class="fouterheader">双师全程辅导</div>
                    <div class="fouterbottom">专业的主讲+辅导团队</div>
                    <div class="fouterbottom">教得好管的严提分快</div>
                </div>
                <div style="width: 2px;height: 88px;background: #ff6c00;display: inline-block; "></div>
                 <div class="fouterdataitem">
                    <div class="fouterheader">学习高效便捷</div>
                    <div class="fouterbottom">不受时间地点限制</div>
                    <div class="fouterbottom">随时随地想学就学</div>
                </div>
                <div style="width: 2px;height: 88px;background: #ff6c00;display: inline-block; "></div>
                 <div class="fouterdataitem">
                    <div class="fouterheader">课程费用更低</div>
                    <div class="fouterbottom">在线学习性价更高</div>
                    <div class="fouterbottom">价格仅为线下1/3</div>
                </div>
            </div>
        </div>
        <div class="bottm">
            <div :class="bottmLeftOne" 
            style="width: 500px;
                 margin-top: 80px;
                float: left;">
                <h1 style="margin-left: 20px;font-size: 40px;color: #000;line-height: 40px;">好老师 严格优选全国名师</h1>
                <p style="margin-left: 20px;font-size: 12px;color: #9d9d9d;letter-spacing: 5px;margin-top: 16px;">TEACHER</p>
                <p style="margin-left: 20px;font-size: 14px;color: #5d5d5d;margin-top: 16px;">依托跟谁学强大的教师资源，从平台上60万名好老师中严格挑选出数十名优秀名师，万里挑一打造一流主讲老师团队。</p>
                <p style="margin-left: 20px;font-size: 14px;color: #5d5d5d;margin-top: 16px;">这些老师包括有全国百佳名师、中高考押题专家、原新东方名师、教师培训师等。</p>
            </div>
            <div :class="bottomCenter" 
            style="
            width: 500px;
            margin-top: 80px;
            float: left;
            "
            >
                <img 
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c984edb464f3.jpg" 
                style="width:500px;display: inline-block;"
                alt="">
            </div>
            <div :class="bottmRight" 
            style="
            width: 500px;
            display: inline-block;
            background-image: -webkit-linear-gradient(0deg,#ff6c00 0,#ff9100 100%);
            box-shadow: 0 0 32px 0 rgba(255,108,0,.3);
            height: 260px;
            border-radius: 8px;
            position: relative;
            left: 134px;
            top: -100px;
            "
            >
                <h2 style="padding-left: 40px;color: #fff;padding-top: 50px;">陈 君</h2>
                <span style="font-size: 14px;color: #fff;padding-left: 40px;letter-spacing: -.4px;margin-top: 15px;display: block;font-weight: bolder;">思维导图国际认证讲师TLI / 心智图法国际认证讲师</span>
                <span style="font-size: 14px;color: #fff;padding-left: 40px;display:block;letter-spacing: -.4px;margin-top: 0;font-weight: bolder!important;">最强大脑记忆大师冠军教练</span>
                <p style="margin-top: 25px;color: #fff;padding-left: 40px;">13年英语教学经验，原一线省公立学校英语教学创新名师。2013年将记忆法和思维导图融入学科教学，其一名学员打破三项世界纪录！线上教学所服务学生超过50万人。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            header:"",
            // box:"box",
            fouterTop:"",
            fouterTopBottom:"",
            bottmLeftOne:"",
            bottomCenter:"",
            bottmRight:"",

        }
    },
    created(){
        // this.box="box"
        // this.updateTransition()
        // var a = this.updateTransition();
    },
    mounted(){
        this.header = "header"
         window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>400&&scrollTop<600){
                this.fouterTop = "fouterTop"
                this.fouterTopBottom = "fouterTopBottom"
                // alert('400')
            
            }else if(scrollTop>1000&scrollTop<1300){
                this.bottmLeftOne = "bottmLeftOne"
                this.bottomCenter = "bottomCenter"
                this.bottmRight = "bottmRight"

            }
            // console.log(scrollTop)
        }

    }
}
</script>

<style scoped>
    .box{
        width: 1000px;
        margin: 0 auto;
    }
    .fouterTopBottom{
        animation:fouterTopBottom 1s infinite;
        -webkit-animation:fouterTopBottom 1s infinite;
        animation-iteration-count:1;
    }
    @keyframes fouterTopBottom
    {
        from {display: none !important;position: relative;top: 200px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    @-webkit-keyframes fouterTopBottom 
    {
        from {display: none !important;position: relative;top: 200px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .header{
        /* display: none; */
        width: 100%;
        position:relative;
	    animation:mymove 1s infinite;
	    -webkit-animation:mymove 1s infinite; /*Safari and Chrome*/
        animation-iteration-count:1;

        margin-top: 50px;
    }
    @keyframes mymove
    {
        from {margin-top: -100px;display: none;opacity: -0.6;}
        to {margin-top: 50px;display: block;opacity: 0.4;}
    }

    @-webkit-keyframes mymove 
    {
        from {margin-top: -100px;display: none;opacity: -0.6;}
        to {margin-top: 50px;display: block;opacity: 0.4;}
    }
    .fouterTop{
        
        animation:fouterTop 1s infinite;
        -webkit-animation:fouterTop 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes fouterTop
    {
        from {display: none !important;position: relative;display: none;top: -70px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }

    @-webkit-keyframes fouterTop /*Safari and Chrome*/
    {
        from {display: none !important;position: relative;display: none;top: -70px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .headertit{
        left: 0;
        height: 180px;
        display: inline-block;
        width: 100%;
        position: absolute;
        top: 500px;
        font-size: 150px;
        color: rgba(255,175,37,.1);
        line-height: 150px;
        width: 100%;
        z-index: 1;
        font-weight: bolder;
    }
    .headerbox{
        width: 1000px;
        border: 1px solid #ededed
    }
    .headerdataitem{
        width: 247px;
        background: white;
        display: inline-block;
        text-align: center;
    }
    .headertop{
        margin-top: 32px;
        font-size: 16px;
        color: #5d5d5d;
    }
    .headerbot{
        margin-top: 16px;
        font-size: 32px;
        color: #000;
        font-weight: bolder;
    }
    .headerbottom{
        width: 2px;
        height: 60px;
        background: #ededed;
        display: inline-block;
    }
    .fouter{
        width: 100%;
        height: 640px;
        background-image: url('https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9cacec4e58e.jpg');
        background-repeat: no-repeat;
    }
    .fouterdataitem{
        width: 243px;
        text-align: center;
        display: inline-block;
    }
    .fouterheader{
        font-size: 24px;
        color: #fff;
        line-height: 24px;
        margin-top: 70px;
        font-weight: 700;
    }
    .fouterbottom{
        font-size: 14px;
        margin-top: 24px;
        color: #fff;
    }
    .bottm{
        text-align: left;
        background: #fff7f2;
        /* position: absolute; */
    }
    .bottmLeft{
        width: 500px;
        margin-top: 80px;
        float: left;
        
    }
    .bottmLeftOne{
        animation:bottmLeftOne1 1s infinite;
        -webkit-animation:bottmLeftOne1 1s infinite;
        animation-iteration-count:1;
    }
    @keyframes bottmLeftOne1
    {
        from {display: none !important;position: relative;top: -100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }

    @-webkit-keyframes bottmLeftOne1
    {
        from {display: none !important;position: relative;top: -100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .bottomCenter{
        animation:bottmLeftTwo 1s infinite;
        -webkit-animation:bottmLeftTwo 1s infinite;
        animation-iteration-count:1;
    }
    @keyframes bottmLeftTwo
    {
        from {display: none !important;position: relative;left: 201px;opacity: -0.6;}
        to {display: block !important;position: relative;left: 0;opacity: 0.4;}
    }

    @-webkit-keyframes bottmLeftTwo
    {
        from {display: none !important;position: relative;left: 201px;opacity: -0.6;}
        to {display: block !important;position: relative;left: 0;opacity: 0.4;}
    }
    .bottmRight{
        animation:bottmLeftThre1 1s infinite;
        -webkit-animation:bottmLeftThre1 1s infinite;
        animation-iteration-count:1;
    }
    @keyframes bottmLeftThre1
    {
        from {display: none !important;position: relative;top: 100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: -100;pxopacity: 0.4;}
    }

    @-webkit-keyframes bottmLeftThre1
    {
        from {display: none !important;position: relative;top: 100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: -100px;opacity: 0.4;}
    }
</style>