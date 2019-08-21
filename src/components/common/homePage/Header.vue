<template>
    <div class="box">
        <img src="//i.gsxcdn.com/0cms/d/file/content/2018/08/5b84fcc533627.png" alt="">
        <div class="tit">
            首页
        </div>
        <div class="tit">
            关于我们
        </div>
        <input class="Inp" type="text" placeholder="搜索你感兴趣的课程" autocomplete="off" aria-label="搜索框">
        <div class="tit" style="color:orange;">
            登陆/注册
            <i class="iconfont">&#xe604;</i>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style  scoped>
    .box{
        width: 1000px;
        margin: 0 auto;
        height: 100px;
        /* background: #ff6c00 */
    }
    .tit{
        width:15%;
        height: 100px;
        line-height: 100px;
        font-size: 20px;
        display: inline-block;
        color: #000;
        /* overflow: hidden; */
        text-align: center;
    }
    img{
        width: 15%;
        height: 80px;
        /* display: inline-block; */
        float: left;
        /* line-height: 100px; */
    }
    .Inp{
        width: 40%;
        height: 45px;
        text-indent: 40px;
        font-size: 14px;
        border: 1px solid #ff984c;
        border-radius: 18px;
        outline: none;
        caret-color: #ff6c00;
    }
    .tit:hover{
        background-color: #f2f2f2;
    }
    @font-face {
        font-family: 'iconfont';  /* project id 1362413 */
        src: url('//at.alicdn.com/t/font_1362413_w4o2borwak.eot');
        src: url('//at.alicdn.com/t/font_1362413_w4o2borwak.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1362413_w4o2borwak.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1362413_w4o2borwak.woff') format('woff'),
        url('//at.alicdn.com/t/font_1362413_w4o2borwak.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1362413_w4o2borwak.svg#iconfont') format('svg');
    }
    .iconfont{
        font-family:"iconfont";
        font-size:30px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale; 
        padding-left:5px
    }
</style>