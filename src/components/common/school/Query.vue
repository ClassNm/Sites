<template>
    <div class="box">
        <div class="Headprim">
            <Input v-model="value" placeholder="输入院校名称" style="width: 300px" />
            <Button type="primary" ghost class="head">查询</Button>
        </div>
        <Divider />
        <div class="Heii">
            <div class="lefrt">
                所属地区 >
            </div>
            <ul>
                    <li>全部</li>
                    <li>北京</li>
                    <li>天津</li>
                    <li>上海</li>
                    <li>重庆</li>
                    <li>河北</li>
                    <li>山西</li>
                    <li>辽宁</li>
                    <li>吉林</li>
                    <li>黑龙江</li>
                    <li>江苏</li>
                    <li>浙江</li>
                    <li>安徽</li>
                    <li>福建</li>
                    <li>江西</li>
                    <li>山东</li>
                    <li>河南</li>
                    <li>湖北</li>
                    <li>湖南</li>
                    <li>广东</li>
            </ul>
        </div>
        <div class="Heii">
            <div class="lefrt">
                院校类型 >
            </div>
            <ul>
                <li>全部</li>
                <li>综合</li>
                <li>理工</li>
                <li>农林</li>
                <li>医药</li>
                <li>师范</li>
                <li>语言</li>
                <li>财经</li>
                <li>政法</li>
                <li>体育</li>
                <li>艺术</li>
                <li>民族</li>
                <li>军事</li>
                <li>其他</li>
            </ul>
        </div>
        <div class="HeiiTwo">
            <div class="lefrt">
            办学类型 >
            </div>
            <ul>
                <li>全部</li>
                <li>普通本科</li>
                <li>独立学院</li>
                <li>专科(高职)</li>
                <li>中外合作办学</li>
                <li>其他</li>
            </ul>
        </div>
        <div class="HeiiTwo">
            <div class="lefrt">
            高校层次 >
            </div>
            <ul>
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
                photo:"https://static-data.eol.cn/upload/logo/32.jpg",
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
                        key: 'tyopp'
                    },
                    {
                        title: '高校对比',
                        key: 'schoolty'
                    }
                ],
                data1: [
                    {
                        name: {
                            src: "https://static-data.eol.cn/upload/logo/32.jpg",
                            nameN: "内蒙古大学"
                        },
                        age: "上海",
                        address: '普通本科',
                        hot:"92",
                        tyopp:"理工类 36",
                        schoolty:"+加入对比",
                        date: '2016-10-03',
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    ul{
        list-style: none;
        width: 700px;
    }
    .lefrt{
        width: 100px;
        float: left;
        height: 70px;
        font-size: 15px;
        /* line-height: 60px; */
    }
    .Tit{
        width: 700px;
        display: inline-block;
    }
    .Heii{
        width: 800px;
        height: 90px;
    }
    .HeiiTwo{
        width: 800px;
        height: 70px;
    }
    .box{
        width: 800px;
        display: inline-block;
        text-align: left;
    }
    .head{
        width: 100px;
        margin-left: 20px;
    }
    .Headprim{
        margin-bottom: 40px;
    }
    li{
        display: inline-block;
        width: 100px;
        font-size: 15px;
    }
    .liTit{
        width: 150px;
    }
</style>