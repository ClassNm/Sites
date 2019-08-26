<template>
    <div class="box">
        <div :class="header">
            <div style="font-size: 40px;line-height: 40px;color: #2d2d2d;text-align: center;">
                <span style="margin-right: 12px;font-weight: bolder;">好课程</span>
                匠心打造品质好课
            </div>
            <span style="margin-top: 16px;font-size: 12px;color: #9d9d9d;letter-spacing: 5px;text-align: center;">COURSE</span>
            <p style="margin-top: 16px;font-size: 14px;color: #5d5d5d;text-align: center;">全品类在线教育课程，涵盖小学、初中、高中、大学、语言培训、思维训练、从业考证、运动健康、家庭教育等类别。</p>
            <p style="font-size: 14px;color: #5d5d5d;text-align: center;margin-bottom: 50px;">专业的教研团队，与名师一起精心打磨每一门课程，确保课程质量上乘，课堂气氛活跃，知识点通俗易懂。</p>
        </div>
        <div :class="Headerbot">
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
            <div :class="processHeader" style="font-size: 40px;color: #000;line-height: 40px;text-align: center;">
                <span style="margin-right: 12px;font-weight: bolder;">好服务</span>
                双师辅导全程伴学
            </div>
            <span :class="processHeader" style="margin-top: 16px;font-size: 12px;color: #9d9d9d;letter-spacing: 5px;text-align: center;display: block;">SERVICE</span>
            <p :class="processHeader" style="margin-top: 16px;text-align: center;color: #5d5d5d;font-size: 14px;">辅导老师团队严格从985、211等名牌大学筛选，录用比例仅为5%。</p>
            <p :class="processHeader" style="text-align: center;color: #5d5d5d;font-size: 14px;margin-bottom:60px;">采用“名师授课+双师辅导”的模式，对学员从课前预习、课堂互动、课后辅导、练习批改等环节全程伴学，监督辅导，让每个学员都能享受优质的教学辅导服务。</p>
            <div :class="processPart" 
            style="
            display: inline-block;
            width: 250px;
            height: 207px;
            "
            >
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
            <div :class="processPart" 
             style="
            display: inline-block;
            width: 250px;
            height: 207px;
            "
            >
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
            <div :class="processPart" 
             style="
            display: inline-block;
            width: 250px;
            height: 207px;
            "
            >
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
            <div :class="processPart" 
             style="
            display: inline-block;
            width: 250px;
            height: 207px;
            "
            >
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
            <div :class="processPart" 
             style="
            display: inline-block;
            width: 250px;
            height: 207px;
            "
            >
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
             <div :class="processPart" 
              style="
            display: inline-block;
            width: 250px;
            height: 207px;
            "
             >
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
             <div :class="processPart"
              style="
            display: inline-block;
            width: 250px;
            height: 207px;
            "
             >
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
             <div :class="processPart"
              style="
            display: inline-block;
            width: 250px;
            height: 207px;
            "
             >
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
        <div class="fouter">
            <div :class="fouterHead" style="font-size: 40px;color: #fff;line-height: 40px;text-align: center;">
                <span style="margin-right: 12px;font-weight: bolder;">高科技</span>
                助力学习效率翻倍
            </div>
            <span :class="fouterHead"  style="display: block;opacity: .5;font-size: 12px;color: #fff;letter-spacing: 5px;text-align: center;">HIGH-TECH</span>
            <span :class="fouterHead"  style="margin-left: 50px;display: block;font-size: 14px;color: #fff;text-align: center;">跟谁学秉承“科技让教育更美好”的理念，投入巨大的人力和财力组建强大的研发团队，用高科技助力学习，为您的学习保驾护航，采用大数据精准分析，比学校更懂你。</span>
            <div style="margin-top: 80px;">
                <div :class="fouterLeft" style="border-radius: 15px;background: #fff;float: left;width: 240px;height: 470px;margin:0 5px;">
                    <img style="width: 100%;height: 162px;" src="https://i.gsxcdn.com/0cms/d/file/content/2019/07/5d41841c2f6ce.png" alt="">
                    <h2 style="margin-top: 32px;line-height: 24px;margin-bottom: 16px;">在线直播教学</h2>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  随时随地在线学习、实时互动</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  支持电脑、手机、平板等多终端上课</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  支持课堂小测、举手提问、互动抽奖等多种互动方式</div>
                </div>
                <div :class="fouterLeft" style="border-radius: 15px;background: #fff;float: left;width: 240px;height: 470px;margin:0 5px;">
                    <img style="width: 100%;height: 162px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9890385b402.png" alt="">
                    <h2 style="margin-top: 32px;line-height: 24px;margin-bottom: 16px;">课程随时回放</h2>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  支持下载后离线观看学习</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  有效期内无限次回放，巩固知识点</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  再也不用担心错过老师讲的重点难点</div>
                </div>
                <div :class="fouterRight" style="border-radius: 15px;background: #fff;float: left;width: 240px;height: 470px;margin:0 5px;">
                    <img style="width: 100%;height: 162px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c98903882ab3.png" alt="">
                    <h2 style="margin-top: 32px;line-height: 24px;margin-bottom: 16px;">在线练习系统</h2>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  课后配套在线练习</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  手机App随时随地查看并完成练习</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  支持文字、语音、图片等多种方式答题</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  高科技助力，告别无法课后练习的烦恼</div>
                </div>
                <div :class="fouterRight" style="border-radius: 15px;background: #fff;float: left;width: 240px;height: 470px;margin:0 5px;">
                    <img style="width: 100%;height: 162px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c989038b4cf5.png" alt="">
                    <h2 style="margin-top: 32px;line-height: 24px;margin-bottom: 16px;">大数据驱动</h2>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  基于跟谁学百万学员数据，科学制定课程方案，比学校更懂你</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  记录每一个学员的学习行为轨迹</div>
                    <div style="font-size: 16px;color: #2d2d2d;margin-top: 12px;">-  精准分析，个性化定制不同学习方案</div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div :class="bottomTop" style="color: #2d2d2d;font-size: 40px;line-height: 40px;">
                <span style="font-weight: bolder;margin-right: 12px;">优秀</span>
                学员
            </div>
            <div :class="bottomTop" style="margin-top: 16px;font-size: 12px;color: #9d9d9d;letter-spacing: 5px;text-align: center;">STUDENT</div>
            <div :class="bottomTop" style="margin-top: 16px;font-size: 14px;color: #5d5d5d;text-align: center;margin-bottom: 70px;">来自学员和家长的真实反馈，看得见的高品质、好效果。</div>

            <Carousel :class="bottomBot" autoplay v-model="value2" loop :arrow="hover" :dots="outside">
                <CarouselItem>
                    <div class="carousel">
                        <div>
                            <img style="width: 16px;height: 16px;font-size: 14px;vertical-align: middle;margin-right: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88ac8db85cc.png" alt="">
                            中国·湖北
                        </div>
                        <div style="font-weight: bolder;font-size: 32px;color: #2d2d2d;line-height: 32px;margin-top: 45px;">段相年家长</div>
                        <div style="margin-top: 45px;font-size: 14px;color: #2d2d2d;height: 66px;">“孩子议论文以前总要丢5、6分，现在每次接近满分，作为家长很开心，问他怎么做到的，说按照曹老师的方法写的，真的非常感谢跟谁学和曹老师，期待以后会有更多优秀的老师。”</div>
                        <img style="position: relative;top: -200px;left: 320px;width: 96px;height: 96px;border-radius: 50%;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1f933c657f.jpg" alt="">
                    </div>
                    <div class="carousel">
                        <div>
                            <img style="width: 16px;height: 16px;font-size: 14px;vertical-align: middle;margin-right: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88ac8db85cc.png" alt="">
                            中国·上海
                        </div>
                        <div style="font-weight: bolder;font-size: 32px;color: #2d2d2d;line-height: 32px;margin-top: 45px;">杨姝明</div>
                        <div style="margin-top: 45px;font-size: 14px;color: #2d2d2d;height: 66px;">“和宋老师学习词根、前、后缀方法学单词，让我有拨云见日的感觉，阅读能力明显提高，成功考下BEC中级证书，非常感谢宋老师。”</div>
                        <img style="position: relative;top: -200px;left: 320px;width: 96px;height: 96px;border-radius: 50%;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1f93373dcd.jpg" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carousel">
                        <div>
                            <img style="width: 16px;height: 16px;font-size: 14px;vertical-align: middle;margin-right: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88ac8db85cc.png" alt="">
                            中国·河北
                        </div>
                        <div style="font-weight: bolder;font-size: 32px;color: #2d2d2d;line-height: 32px;margin-top: 45px;">刘婷萱</div>
                        <div style="margin-top: 45px;font-size: 14px;color: #2d2d2d;height: 66px;">“非常感谢傲德老师，老师的系统授课，让我掌握了学习数学的方法技巧，学习数学的动力也有很大提高，开班考比之前提升了13分，在初中的最后阶段成绩有了很大提升。”</div>
                        <img style="position: relative;top: -200px;left: 320px;width: 96px;height: 96px;border-radius: 50%;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1f9343363a.jpg" alt="">
                    </div>
                    <div class="carousel">
                        <div>
                            <img style="width: 16px;height: 16px;font-size: 14px;vertical-align: middle;margin-right: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88ac8db85cc.png" alt="">
                            中国·浙江
                        </div>
                        <div style="font-weight: bolder;font-size: 32px;color: #2d2d2d;line-height: 32px;margin-top: 45px;">陈惟肖</div>
                        <div style="margin-top: 45px;font-size: 14px;color: #2d2d2d;height: 66px;">“上了张老师的课后，我每次做题都能指导错在哪里然后进行改正，感谢老师耐心的教导，虽然从未和老师见过面，但感觉老师一直在我身旁指导着。希望以后能再次上老师的课。”</div>
                        <img style="position: relative;top: -200px;left: 320px;width: 96px;height: 96px;border-radius: 50%;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1f93261bee.jpg" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carousel">
                        <div>
                            <img style="width: 16px;height: 16px;font-size: 14px;vertical-align: middle;margin-right: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88ac8db85cc.png" alt="">
                            中国·上海
                        </div>
                        <div style="font-weight: bolder;font-size: 32px;color: #2d2d2d;line-height: 32px;margin-top: 45px;">朱芷璇</div>
                        <div style="margin-top: 45px;font-size: 14px;color: #2d2d2d;height: 66px;">“虽然只跟春燕老师学习了几个月，但我很喜欢春燕老师。老师讲课幽默风趣活泼生动，同学们都乐于回答问题。春燕老师的教学方法也很好，我每周最期待的就是和春燕老师上课。”</div>
                        <img style="position: relative;top: -200px;left: 320px;width: 96px;height: 96px;border-radius: 50%;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1f932cca24.jpg" alt="">
                    </div>
                    <div class="carousel">
                        <div>
                            <img style="width: 16px;height: 16px;font-size: 14px;vertical-align: middle;margin-right: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88ac8db85cc.png" alt="">
                            中国·江苏
                        </div>
                        <div style="font-weight: bolder;font-size: 32px;color: #2d2d2d;line-height: 32px;margin-top: 45px;">庄江煜</div>
                        <div style="margin-top: 45px;font-size: 14px;color: #2d2d2d;height: 66px;">“特别感谢张老师的悉心教导，跟着老师学习写作近两年了，学习了很多方法和技巧。老师还教会我如何有效的进行课外阅读，往后一直跟着张老师努力学习，争取更上一层楼！”</div>
                        <img style="position: relative;top: -200px;left: 320px;width: 96px;height: 96px;border-radius: 50%;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1f93301811.jpg" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carousel">
                        <div>
                            <img style="width: 16px;height: 16px;font-size: 14px;vertical-align: middle;margin-right: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88ac8db85cc.png" alt="">
                            中国·山东
                        </div>
                        <div style="font-weight: bolder;font-size: 32px;color: #2d2d2d;line-height: 32px;margin-top: 45px;">李佳睿</div>
                        <div style="margin-top: 45px;font-size: 14px;color: #2d2d2d;height: 66px;">“以前我看到数学题就非常讨厌，在李老师的帮助下，我找到了学习数学的兴趣和方法，由此喜欢上了数学。它不仅锻炼了我的学习数学的思维能力，还使我的成绩有了很大的进步。”</div>
                        <img style="position: relative;top: -200px;left: 320px;width: 96px;height: 96px;border-radius: 50%;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1f9329ba21.jpg" alt="">
                    </div>
                    <div class="carousel">
                        <div>
                            <img style="width: 16px;height: 16px;font-size: 14px;vertical-align: middle;margin-right: 8px;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88ac8db85cc.png" alt="">
                            中国·浙江
                        </div>
                        <div style="font-weight: bolder;font-size: 32px;color: #2d2d2d;line-height: 32px;margin-top: 45px;">陈惟肖</div>
                        <div style="margin-top: 45px;font-size: 14px;color: #2d2d2d;height: 66px;">“上了张老师的课后，我每次做题都能指导错在哪里然后进行改正，感谢老师耐心的教导，虽然从未和老师见过面，但感觉老师一直在我身旁指导着。希望以后能再次上老师的课。”</div>
                        <img style="position: relative;top: -200px;left: 320px;width: 96px;height: 96px;border-radius: 50%;" src="https://imgs.genshuixue.com/0cms/d/file/content/2019/04/5ca1f93261bee.jpg" alt="">
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value1: 0,
                never:"never",
                value2: 0,
                hover:"hover",
                outside:"outside",
                header:"",
                Headerbot:"",
                processHeader:"",
                processPart:"",
                fouterHead:"",
                fouterRight:"",
                fouterLeft:"",
                bottomTop:"",
                bottomBot:""
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            handleScroll(){
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if(scrollTop>2000&&scrollTop<2100){
                    this.header = "header"
                    this.Headerbot = "Headerbot"
                
                }else if(scrollTop>2700&scrollTop<2900){
                    this.processHeader = "processHeader"
                    this.processPart = "processPart"
                    // this.bottmRight = "bottmRight"
                }else if(scrollTop>3400&scrollTop<3600){
                    this.fouterHead = "fouterHead"
                    this.fouterLeft = "fouterLeft"
                    this.fouterRight = "fouterRight"
                }else if(scrollTop>4300&scrollTop<4500){
                    this.bottomTop = "bottomTop"
                    this.bottomBot = "bottomBot"
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
        padding-top: 100px;
    }
    .header{
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
    .Headerbot{
        animation:Headerbot 1s infinite;
        -webkit-animation:Headerbot 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes Headerbot
    {
        from {display: none !important;position: relative;top: 100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }

    @-webkit-keyframes Headerbot
    {
        from {display: none !important;position: relative;top: 100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .processHeader{
        animation:processHeader 1s infinite;
        -webkit-animation:processHeader 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes processHeader
    {
        from {display: none !important;position: relative;top: -100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }

    @-webkit-keyframes processHeader
    {
        from {display: none !important;position: relative;top: -100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .process{
        margin-top: 80px;
        text-align: left;
    }
    .processPart{
        animation:processPart 1s infinite;
        -webkit-animation:processPart 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes processPart
    {
        from {display: none !important;position: relative;top: 100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }

    @-webkit-keyframes processPart
    {
        from {display: none !important;position: relative;top: 100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .fouterHead{
        animation:fouterHead 1s infinite;
        -webkit-animation:fouterHead 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes fouterHead
    {
        from {display: none !important;position: relative;top: -100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }

    @-webkit-keyframes fouterHead
    {
        from {display: none !important;position: relative;top: -100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .fouterLeft{
        animation:fouterLeft 1s infinite;
        -webkit-animation:fouterLeft 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes fouterLeft
    {
        from {display: none !important;position: relative;left: -200px;opacity: -0.6;}
        to {display: block !important;position: relative;left: 0;opacity: 0.4;}
    }

    @-webkit-keyframes fouterLeft
    {
        from {display: none !important;position: relative;left: -200px;opacity: -0.6;}
        to {display: block !important;position: relative;left: 0;opacity: 0.4;}
    }
    .fouterRight{
        animation:fouterRight 1s infinite;
        -webkit-animation:fouterRight 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes fouterRight
    {
        from {display: none !important;position: relative;right: -200px;opacity: -0.6;}
        to {display: block !important;position: relative;right: 0;opacity: 0.4;}
    }

    @-webkit-keyframes fouterRight
    {
        from {display: none !important;position: relative;right: -200px;opacity: -0.6;}
        to {display: block !important;position: relative;right: 0;opacity: 0.4;}
    }
    .fouter{
        background-image: url(https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c9cb0de5ba43.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        padding-top: 80px;
        width: 100%;
        height: 824px;
        margin-top: 80px;
    }
    .bottom{
        margin-top: 80px;
    }
    .bottomTop{
        animation:bottomTop 1s infinite;
        -webkit-animation:bottomTop 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes bottomTop
    {
        from {display: none !important;position: relative;top: -100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }

    @-webkit-keyframes bottomTop
    {
        from {display: none !important;position: relative;top: -100px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .bottomBot{
        animation:bottomBot 1s infinite;
        -webkit-animation:bottomBot 1s infinite;
        animation-iteration-count:1;
    }
     @keyframes bottomBot
    {
        from {display: none !important;position: relative;top: 200px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }

    @-webkit-keyframes bottomBot
    {
        from {display: none !important;position: relative;top: 200px;opacity: -0.6;}
        to {display: block !important;position: relative;top: 0;opacity: 0.4;}
    }
    .carousel{
        background-image: url(https://imgs.genshuixue.com/0cms/d/file/content/2019/03/5c88b02ec52db.png);
        background-repeat: no-repeat;
        background-size: 500px 70px;
        background-position: 0 200px;
        background-color: #fff;
        width: 480px;
        margin: 0 10px;
        height: 268px;
        float: left;
        border-radius: 8px;
        text-align: left;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.08);
    }
</style>