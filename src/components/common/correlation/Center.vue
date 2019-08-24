<template>
    <div class="box">
        <div class="header">
            <div style="text-align: center;font-size: 40px;line-height: 40px;color: #fff;padding-top: 50px;padding-bottom: 80px;">
                <span style="margin-right: 12px;font-weight: bolder;">学员</span>
                评价
                <div style="font-size: 12px;opacity: .5;letter-spacing: 5px;line-height: 12px;margin-top: 16px;">EVALUATE</div>
            </div>
            <Carousel autoplay v-model="value2" loop :dots="none">
                <CarouselItem>
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b041eb3.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b066a5a.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b094030.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b0b7694.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;"  src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f36981eb4b.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;"  src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f36981eb4b.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;"  src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35af251b2.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;"  src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35af5a45d.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35af85709.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35afb8883.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35afe5d4e.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b015dd1.jpg" alt="">
                </CarouselItem>
                <CarouselItem>
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b041eb3.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b066a5a.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b094030.jpg" alt="">
                    <img style="width:220px;height:400px;margin:0 15px;border-radius: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8f35b0b7694.jpg" alt="">
                </CarouselItem>
            </Carousel>
        </div>
        <div class="headertop">
            <div style="text-align: center;font-size: 40px;color: #000;letter-spacing: 0;">
                <span style="margin-right: 8px;font-weight: bolder;">关于</span>
                我们
                <div style="font-size: 12px;color: #9d9d9d;letter-spacing: 5px;margin-top: 12px;line-height: 12px;margin-bottom: 50px;">ABOUT</div>
            </div>
            <div style="text-align:left;">
                <div style="width:500px;z-index: 5;display: inline-block;position: relative">
                    <img style="width:500px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c8092c5bb53f.jpg" alt="">
                </div>
                <div 
                style="width:500px;
                background: #fff;
                height: 440px;
                padding: 30px 50px 0;
                box-shadow: 0 4px 24px 0 rgba(0,0,0,.08);
                border-radius: 16px;
                z-index: 6;
                color: #2d2d2d;
                display: inline-block;
                position: relative;
                top: 20px;
                right: 50px;
                ">
                    <div style="color: #2d2d2d;font-weight: bolder;">跟谁学</div>
                    <div style="margin-top: 8px;font-size: 14px;font-size: 14px;margin-bottom: 8px;">美国纽交所上市公司</div>
                    <div style="margin-top: 16px;font-size: 14px;">跟谁学隶属于北京百家互联科技有限公司，是一家中国领先的互联网教育科技公司，2014年6月，陈向东带领创建跟谁学，团队成员主要由来自新东方等著名教育培训机构及百度、阿里、腾讯等顶级互联网公司的精英组成。 2015年3月30日，宣布A轮融资5000万美元，刷新了中国创业公司A轮融资纪录。2019年6月6日，成功登陆美国纽约证券交易所（NYSE：GSX）。</div>
                    <div style="margin-top: 16px;font-size: 14px;">秉承“在线学习更高效”的学习理念，坚持“好老师、好课程、好服务、高科技”的价值主张，全力打造“直播+辅导”双师模式，优选名师，打造上千门精品课程。优秀辅导老师全程服务，课堂互动多，课程有回放，提供的课程服务涵盖小学，初中，高中，大学，成人英语，思维训练，瑜伽，家庭教育，国学，从业考证等几十个品类。通过专职专业的教学辅导团队和强大的技术能力，致力于为学生和家长提供个性化、互动化、智能化的在线学习体验。</div>
                </div>
                <div 
                style="
                width: 800px;
                height: 380px;
                background: #ff6c00;
                border-radius: 16px;
                position: relative;
                top: -330px;
                left: 200px;
                opacity: .3;
                "
                >
                </div>
            </div>
        </div>
        <div class="top">
            <div>
                <div style="font-size: 40px;color: #000;line-height: 40px;">
                    <span style="margin-right: 8px;font-weight: bolder;">未来</span>
                    我们仍在努力
                </div>
                <div style="font-size: 12px;color: #9d9d9d;letter-spacing: 5px;margin-top: 16px;">FUTURE</div>
                <div style="font-size: 14px;color: #5d5d5d;margin: 16px 0 60px 0;">人民日报、CCTV权威报道，荣获多项教育大奖</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c910709f31e5.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">央视网</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">“跟谁学”要做想学习的首选</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c91070a39b4d.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">科技日报</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">陈向东做不一样的教育</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c91070a5f342.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">人民日报</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">“跟谁学”带来教育新理念</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c91070a8b2a1.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">CCTV财经</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">陈向东和他的跟谁学</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5cb57220af118.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">央视《经济半小时》</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">新创业演绎：像淘宝一样“淘”学</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c91070acdac3.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">新华网</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">中国教育行业影响力APP</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c91070b09f3a.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">中国网</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">人气教育APP</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c91070b3c4fb.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">央广网</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">中国受欢迎教育APP品牌</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c91070b6f53e.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">中国网</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">影响力在线教育品牌</div>
            </div>
            <div style="margin-bottom:30px;width:180px;margin-right:20px;height:200px;float: left;">
                <img style="width: 180px;height: 130px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c91070ba3514.png" alt="">
                <div style="font-size: 16px;color: #2d2d2d;font-weight: bolder;margin-top: 16px;">网易教育</div>
                <div style="margin-top: 4px;font-size: 14px;color: #5d5d5d;">最受用户喜欢教育APP</div>
            </div>
        </div>
        <div class="fouter">
            <div 
            style="
            width: 450px;
            height: 274px;
            box-shadow: 0 4px 24px 0 rgba(0,0,0,.08);
            -webkit-box-shadow: 0 4px 24px 0 rgba(0,0,0,.08);
            border-radius: 16px;
            padding-left: 28px;
            padding-top: 28px;
            background: #fff;
            text-align: left;
            display: inline-block;
            bottom: 140px;
            position: relative;
            "
            >
                <!-- <div style="border-left: 13px solid #fff;right: -13px;width: 0;height: 0;border-bottom: 13px solid transparent;position: relative;top: 33px;border-top: 13px solid transparent;"></div> -->
                <div style="font-size: 12px;color: #cdcdcd;text-align:right;margin-right: 30px;">年度大事件</div>
                <div style="font-size: 32px;color: #2d2d2d;line-height: 32px;margin-bottom: 16px;font-weight: bolder;">2017</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- 跟谁学荣膺“2017最具价值中国创业品牌TOP50”</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- “跟谁学”荣膺“中国创业企业新苗榜100强”</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- 展现创新力量 跟谁学获“年度在线教育平台”大奖</div>
                <div style="color: #555;background-color: transparent;text-align:right;margin-top: 40px;margin-right: 30px;">MORE ></div>
            </div>
            <div style="height:500px;width:100px;display: inline-block;">
                <div>
                    <div style="font-size: 24px;color: #ff6c00;text-align: center;">2017</div>
                    <div style="width: 2px;height: 124px;background:#ffbf7a;margin:8px auto;"></div>
                </div>
                <div>
                    <div style="font-size: 24px;color: #ff6c00;text-align: center;">2016</div>
                    <div style="width: 2px;height: 124px;background:#ffbf7a;margin:8px auto;"></div>
                </div>
                <div>
                    <div style="font-size: 24px;color: #ff6c00;text-align: center;">2015</div>
                    <div style="width: 2px;height: 124px;background:#ffbf7a;margin:8px auto;"></div>
                </div>
            </div>
            <div 
            style="
            width: 450px;
            height: 274px;
            box-shadow: 0 4px 24px 0 rgba(0,0,0,.08);
            -webkit-box-shadow: 0 4px 24px 0 rgba(0,0,0,.08);
            border-radius: 16px;
            padding-left: 28px;
            padding-top: 28px;
            background: #fff;
            text-align: left;
            display: inline-block;
            "
            >
                <div style="font-size: 12px;color: #cdcdcd;text-align:right;margin-right: 30px;">年度大事件</div>
                <div style="font-size: 32px;color: #2d2d2d;line-height: 32px;margin-bottom: 16px;font-weight: bolder;">2016</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- 教育APP领跑者 跟谁学摘“中国教育+”两项大奖</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- 领先的教育APP 跟谁学获网易“最受用户喜欢教育APP”</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- 跟谁学荣获新浪2016中国教育盛典“中国影响力科技创新教育机构”</div>
                <div style="color: #555;background-color: transparent;text-align:right;margin-top: 40px;margin-right: 30px;">MORE ></div>
            </div>
            <div 
            style="
            width: 450px;
            height: 274px;
            box-shadow: 0 4px 24px 0 rgba(0,0,0,.08);
            -webkit-box-shadow: 0 4px 24px 0 rgba(0,0,0,.08);
            border-radius: 16px;
            padding-left: 28px;
            padding-top: 28px;
            background: #fff;
            text-align: left;
            position: relative;
            bottom: 155px;
            "
            >
                <div style="font-size: 12px;color: #cdcdcd;text-align:right;margin-right: 30px;">年度大事件</div>
                <div style="font-size: 32px;color: #2d2d2d;line-height: 32px;margin-bottom: 16px;font-weight: bolder;">2015</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- 跟谁学荣获2015新华教育论坛“中国教育行业影响力APP”</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- 跟谁学荣获腾讯2015教育年度总评榜“年度人气教育APP ”</div>
                <div style="margin-top: 16px;font-size: 14px;color: #2d2d2d;">- 跟谁学获福布斯“2015中国最快成长科技公司”</div>
                <div style="color: #555;background-color: transparent;text-align:right;margin-top: 40px;margin-right: 30px;">MORE ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value2: 0,
                none:"none"
            }
        }
    }
</script>

<style scoped>
    .box{
        width: 1000px;
        margin: 70px auto;
    }
    .header{
        width: 1000px;
        height: 774px;
        background-image: url(https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c98703e1407f.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
    }
    .headertop{
        margin-top: 80px;
    }
    .top{
        height: 700px;
        width: 1000px;
    }
    .fouter{
        width: 1000px;
        text-align: left;
        margin-top: 80px;
    }
</style>