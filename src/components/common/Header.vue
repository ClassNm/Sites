<template>
    <div class="box">
        <div class="tit">
            <img src="//i.gsxcdn.com/0cms/d/file/content/2018/08/5b84fcc533627.png" style="width:100px;height:30px;" alt="">
        </div>
        <div class="tit">
            首页
        </div>
        <div class="tit">
            关于我们
        </div>
        <div class="tit">
            <input style="width:100px;height:30px;" class="Inp" type="text" placeholder="搜索你感兴趣的课程" autocomplete="off" aria-label="搜索框">
        </div>
        <div class="tit">
            我的课表
        </div>
        <div class="tit" style="color:orange;">
            登陆/注册
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
        /* text-align: center */
        margin: 0 auto;
    }
    .tit{
        width:100px;
        height: 100px;
        line-height: 100px;
        font-size: 20px;
        margin-right: 30px;
        display: inline-block;
        color: #000;
    }
    .Inp{
        width: 100px;
        height: 36px;
        text-indent: 40px;
        font-size: 14px;
        border: 1px solid #ff984c;
        border-radius: 18px;
        outline: none;
        caret-color: #ff6c00;
    }
    .tit:hover{
        background-color: silver;
    }
</style>