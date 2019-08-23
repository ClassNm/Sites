<template>
    <div class="box">
        <div class="header">
            <div style="font-size: 40px;line-height: 40px;color: #2d2d2d;text-align: center;">
                <span style="margin-right: 12px;font-weight: bolder;">好课程</span>
                匠心打造品质好课
            </div>
            <span style="margin-top: 16px;font-size: 12px;color: #9d9d9d;letter-spacing: 5px;text-align: center;">COURSE</span>
            <p style="margin-top: 16px;font-size: 14px;color: #5d5d5d;text-align: center;">全品类在线教育课程，涵盖小学、初中、高中、大学、语言培训、思维训练、从业考证、运动健康、家庭教育等类别。</p>
            <p style="font-size: 14px;color: #5d5d5d;text-align: center;margin-bottom: 50px;">专业的教研团队，与名师一起精心打磨每一门课程，确保课程质量上乘，课堂气氛活跃，知识点通俗易懂。</p>
        </div>
        <div class="Headerbot">
            <Carousel v-model="value1" loop autoplay :arrow="never">
                <CarouselItem>
                    <img src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1ed7ae9760.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1ed7a601ee.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1ed7a9a62b.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1ed7ac1261.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1ed7b5d26a.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1ed7b8f940.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1ed7bcf36a.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1ed7c0fa89.jpg" alt="">
                </CarouselItem>
            </Carousel>
        </div>
        <div class="process">
            <div style="font-size: 40px;color: #000;line-height: 40px;text-align: center;">
                <span style="margin-right: 12px;font-weight: bolder;">好服务</span>
                双师辅导全程伴学
            </div>
            <span style="margin-top: 16px;font-size: 12px;color: #9d9d9d;letter-spacing: 5px;text-align: center;display: block;">SERVICE</span>
            <p style="margin-top: 16px;text-align: center;color: #5d5d5d;font-size: 14px;">辅导老师团队严格从985、211等名牌大学筛选，录用比例仅为5%。</p>
            <p style="text-align: center;color: #5d5d5d;font-size: 14px;margin-bottom:60px;">采用“名师授课+双师辅导”的模式，对学员从课前预习、课堂互动、课后辅导、练习批改等环节全程伴学，监督辅导，让每个学员都能享受优质的教学辅导服务。</p>
            <div class="processPart">
                <div>
                    <img 
                    style="width: 80px;height: 80px;"
                    src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9872e893ff3.png" 
                    alt=""
                    >
                </div>
                <div style="font-size: 20px;color: #2d2d2d;margin-top: 16px;font-weight: bolder;">1. 学情沟通</div>
                <div style="margin-top: 16px;font-size: 14px;color: #5d5d5d;">定期学情沟通，及时了解学习状态</div>
                <img 
                style="width: 24px;height: 20px;position: relative;right: -192px;top: -90px;"
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/02/5c74edede1965.png" alt="">
            </div>
            <div class="processPart">
                <div>
                    <img 
                    style="width: 80px;height: 80px;"
                    src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9872e8d9ab5.png" 
                    alt=""
                    >
                </div>
                <div style="font-size: 20px;color: #2d2d2d;margin-top: 16px;font-weight: bolder;">2. 学习计划制定</div>
                <div style="margin-top: 16px;font-size: 14px;color: #5d5d5d;">针对不同学员，制定专属学习计划</div>
                <img 
                style="width: 24px;height: 20px;position: relative;right: -192px;top: -90px;"
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/02/5c74edede1965.png" alt="">
            </div>
            <div class="processPart">
                <div>
                    <img 
                    style="width: 80px;height: 80px;"
                    src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9872e921f55.png" 
                    alt=""
                    >
                </div>
                <div style="font-size: 20px;color: #2d2d2d;margin-top: 16px;font-weight: bolder;">3. 邮寄配套教材</div>
                <div style="margin-top: 16px;font-size: 14px;color: #5d5d5d;">课前免费邮寄独家配套教材</div>
                <img 
                style="width: 24px;height: 20px;position: relative;right: -192px;top: -90px;"
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/02/5c74edede1965.png" alt="">
            </div>
            <div class="processPart">
                <div>
                    <img 
                    style="width: 80px;height: 80px;"
                    src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9872e961fcc.png" 
                    alt=""
                    >
                </div>
                <div style="font-size: 20px;color: #2d2d2d;margin-top: 16px;font-weight: bolder;">4. 课前预习</div>
                <div style="margin-top: 16px;font-size: 14px;color: #5d5d5d;">课前辅导领学，提醒准时到课</div>
                <img 
                style="width: 24px;height: 20px;position: relative;right: -192px;top: -90px;"
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/02/5c74edede1965.png" alt="">
            </div>
            <div class="processPart">
                <div>
                    <img 
                    style="width: 80px;height: 80px;"
                    src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9872e9a6051.png" 
                    alt=""
                    >
                </div>
                <div style="font-size: 20px;color: #2d2d2d;margin-top: 16px;font-weight: bolder;">5. 课堂伴学</div>
                <div style="margin-top: 16px;font-size: 14px;color: #5d5d5d;">名师线上授课，辅导老师即时答疑</div>
                <img 
                style="width: 24px;height: 20px;position: relative;right: -192px;top: -90px;"
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/02/5c74edede1965.png" alt="">
            </div>
             <div class="processPart">
                <div>
                    <img 
                    style="width: 80px;height: 80px;"
                    src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9872e9e6c58.png" 
                    alt=""
                    >
                </div>
                <div style="font-size: 20px;color: #2d2d2d;margin-top: 16px;font-weight: bolder;">6. 练习布置批改</div>
                <div style="margin-top: 16px;font-size: 14px;color: #5d5d5d;">课后布置线上练习，一对一批改</div>
                <img 
                style="width: 24px;height: 20px;position: relative;right: -192px;top: -90px;"
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/02/5c74edede1965.png" alt="">
            </div>
             <div class="processPart">
                <div>
                    <img 
                    style="width: 80px;height: 80px;"
                    src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9872ea3d5a6.png" 
                    alt=""
                    >
                </div>
                <div style="font-size: 20px;color: #2d2d2d;margin-top: 16px;font-weight: bolder;">7. 答疑辅导</div>
                <div style="margin-top: 16px;font-size: 14px;color: #5d5d5d;">专属答疑群，随时提问一对一解答</div>
                <img 
                style="width: 24px;height: 20px;position: relative;right: -192px;top: -90px;"
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/02/5c74edede1965.png" alt="">
            </div>
             <div class="processPart">
                <div>
                    <img 
                    style="width: 80px;height: 80px;"
                    src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9872ea7d54d.png" 
                    alt=""
                    >
                </div>
                <div style="font-size: 20px;color: #2d2d2d;margin-top: 16px;font-weight: bolder;">8. 回放复习</div>
                <div style="margin-top: 16px;font-size: 14px;color: #5d5d5d;">随时回放，有效期内无限次巩固学习</div>
                <img 
                style="width: 24px;height: 20px;position: relative;right: -192px;top: -90px;"
                src="https://imgs.genshuixue.com/0cms/d/file/content/2019/02/5c74edede1965.png" alt="">
            </div>
            <p style="font-size: 12px;color: #9d9d9d;text-align: center;">*以上服务非全部课程通用，详情请看课程页面描述或咨询客服</p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value1: 0,
                never:"never"
            }
        }
    }
</script>

<style scoped>
    .box{
        width: 1000px;
        margin: 0 auto;
        padding-top: 100px;
    }
    .process{
        margin-top: 80px;
        text-align: left;
    }
    .processPart{
        display: inline-block;
        width: 250px;
        height: 207px;
        height: 207px;
    }
</style>