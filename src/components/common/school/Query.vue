<template>
    <div class="Querybox">
        <div class="Headprim">
            <Input v-model="value" placeholder="输入院校名称" style="width: 300px" />
            <Button type="primary" ghost class="Queryhead">查询</Button>
        </div>
        <Divider />
        <div class="Heii">
            <div class="lefrt">
                所属地区 >
            </div>
            <ul class="QueryUl">
                    <li class="Queryli">全部</li>
                    <li class="Queryli">北京</li>
                    <li class="Queryli">天津</li>
                    <li class="Queryli">上海</li>
                    <li class="Queryli">重庆</li>
                    <li class="Queryli">河北</li>
                    <li class="Queryli">山西</li>
                    <li class="Queryli">辽宁</li>
                    <li class="Queryli">吉林</li>
                    <li class="Queryli">黑龙江</li>
                    <li class="Queryli">江苏</li>
                    <li class="Queryli">浙江</li>
                    <li class="Queryli">安徽</li>
                    <li class="Queryli">福建</li>
                    <li class="Queryli">江西</li>
                    <li class="Queryli">山东</li>
                    <li class="Queryli">河南</li>
                    <li class="Queryli">湖北</li>
                    <li class="Queryli">湖南</li>
                    <li class="Queryli">广东</li>
            </ul>
        </div>
        <div class="Heii">
            <div class="lefrt">
                院校类型 >
            </div>
            <ul class="QueryUl">
                <li class="Queryli">全部</li>
                <li class="Queryli">综合</li>
                <li class="Queryli">理工</li>
                <li class="Queryli">农林</li>
                <li class="Queryli">医药</li>
                <li class="Queryli">师范</li>
                <li class="Queryli">语言</li>
                <li class="Queryli">财经</li>
                <li class="Queryli">政法</li>
                <li class="Queryli">体育</li>
                <li class="Queryli">艺术</li>
                <li class="Queryli">民族</li>
                <li class="Queryli">军事</li>
                <li class="Queryli">其他</li>
            </ul>
        </div>
        <div class="HeiiTwo">
            <div class="lefrt">
            办学类型 >
            </div>
            <ul class="QueryUl">
                <li class="Queryli">全部</li>
                <li class="Queryli">普通本科</li>
                <li class="Queryli">独立学院</li>
                <li class="Queryli">专科(高职)</li>
                <li class="Queryli">中外合作办学</li>
                <li class="Queryli">其他</li>
            </ul>
        </div>
        <div class="HeiiTwo">
            <div class="lefrt">
            高校层次 >
            </div>
            <ul class="QueryUl">
                <li class="liTit">全部</li>
                <li class="liTit">985工程</li>
                <li class="liTit">211工程</li>
                <li class="liTit">一流大学建设高校</li>
                <li class="liTit">一流学科建设高校</li>
                <li class="liTit">教育部直属</li>
                <li class="liTit">中央部委</li>
                <li class="liTit">自主招生试点</li>
            </ul>
        </div>
        <Table border :columns="columns1" :data="data1"></Table>
        <Divider />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '',
                columns1: [
                    {
                        title: '学校名称',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('img', {
                                    attrs: {
                                        src: params.row.name.src
                                    },
                                    style: {
                                        width: '30px',
                                        height: '30px',
                                        float:"left"
                                    }
                                }),
                                h('p', params.row.name.nameN)
                            ]);
                        }
                    },
                    {
                        title: '所在地',
                        key: 'age'
                    },
                    {
                        title: '办学类型',
                        key: 'address'
                    },
                    {
                        title: '全国热度排名',
                        key: 'hot'
                    },
                    {
                        title: '类别热度排名',
                        key: 'tyopp',
                        style:{
                            marginTop:'10px',
                        }
                    },
                    {
                        title: '高校对比',
                        render:(h,params) => {
                            return h('div',[
                                h('input', {
                                    attrs: {
                                        value : params.row.schoolty,
                                        type:'button'
                                    },
                                    style: {
                                        width: '100px',
                                        height: '35px',
                                        marginTop:'6%',
                                        border: '1px solid #2E9AFE',
                                        background: 'white',
                                        color: '#2E9AFE'
                                    }
                                }),
                            ])
                        }
                    }
                ],
                data1: [
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/32.jpg",
                            nameN: "内蒙古大学"
                        },
                        age: "内蒙古",
                        address: '211 双一流',
                        hot:"92",
                        tyopp:"理工类 36",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/318.jpg",
                            nameN: "上海对外经贸大学"
                        },
                        age: "上海",
                        address: '普通本科',
                        hot:"282",
                        tyopp:"财经类 30",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/573.jpg",
                            nameN: "北京协和医学院"
                        },
                        age: "北京",
                        address: '双一流',
                        hot:"113",
                        tyopp:"理工类 45",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/419.jpg",
                            nameN: "东北林业大学"
                        },
                        age: "东北",
                        address: '211 双一流',
                        hot:"271",
                        tyopp:"医药类 11",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                     {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/1020.jpg",
                            nameN: "福建医科大学"
                        },
                        age: "福建",
                        address: '普通本科',
                        hot:"979",
                        tyopp:"医药类 96",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                     {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/289.jpg",
                            nameN: "广州中医药大学"
                        },
                        age: "广州",
                        address: '双一流',
                        hot:"429",
                        tyopp:"理工类 150",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                     {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/242.jpg",
                            nameN: "浙江工业大学"
                        },
                        age: "浙江",
                        address: '普通本科',
                        hot:"546",
                        tyopp:"财经类 45",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                     {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/142.jpg",
                            nameN: "东北师范大学"
                        },
                        age: "东北",
                        address: '211 双一流',
                        hot:"532",
                        tyopp:"财经类 44",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/137.jpg",
                            nameN: "东北农业大学"
                        },
                        age: "东北",
                        address: '211 双一流',
                        hot:"532",
                        tyopp:"财经类 27",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/230.jpg",
                            nameN: "中国医科大学"
                        },
                        age: "辽宁",
                        address: '普通本科',
                        hot:"532",
                        tyopp:"综合类 196",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/287.jpg",
                            nameN: "华南农业大学"
                        },
                        age: "广东",
                        address: '普通本科',
                        hot:"532",
                        tyopp:"理工类 251",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/158.jpg",
                            nameN: "徐州医科大学"
                        },
                        age: "徐州",
                        address: '普通本科',
                        hot:"532",
                        tyopp:"语言类 16",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/175.jpg",
                            nameN: "江西财经大学"
                        },
                        age: "江西",
                        address: '普通本科',
                        hot:"532",
                        tyopp:"综合类 33",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                ]
            }
        }
    }
</script>
<style>
    ul{
        list-style: none;
    }
    .Querybox{
        width: 800px;
        display: inline-block;
        text-align: left;
    }
    .QueryUl{
        width: 700px;
    }
    .lefrt{
        width: 100px;
        float: left;
        height: 70px;
        font-size: 15px;
    }
    .Heii{
        width: 800px;
        height: 90px;
    }
    .HeiiTwo{
        width: 800px;
        height: 70px;
    }
    .Queryhead{
        width: 100px;
        margin-left: 20px;
    }
    .Headprim{
        margin-bottom: 40px;
    }
    .Queryli{
        display: inline-block;
        width: 100px;
        font-size: 15px;
    }
    .liTit{
        display: inline-block;
        width: 150px;
    }
    .ivu-table-cell{
        height: 60px;
        width: 140px;
    }
</style>