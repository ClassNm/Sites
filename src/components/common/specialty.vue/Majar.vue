<template>
    <div class="Majarbox">
        <div class="Majarheader">
            <Dropdown >
                <Button type="primary" style="width: 100px;">
                    本科
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>211大学</DropdownItem>
                    <DropdownItem>研究生</DropdownItem>
                    <!-- <DropdownItem disabled>豆汁儿</DropdownItem> -->
                    <DropdownItem>博士</DropdownItem>
                    <DropdownItem>专科</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Input v-model="value" placeholder="输入专业名称" style="width: 300px;margin: 0 10px;" />
            <Button type="primary" ghost style="width: 110px;">查询</Button>
        </div>
        <Divider />
        <div class="Majarcenter">
            <div class="Cenhead">
                <div class="Majarlefrt">
                    专业层次 >
                </div>
                <ul class="QueryUl">
                        <li class="Queryli">全部</li>
                        <li class="Queryli">本科</li>
                        <li class="Queryli">专科(高职)</li>
                </ul>
            </div>
           <div>
                <div class="Majarlefrt">
                    专业门类 >
                </div>
                <ul class="QueryUl">
                        <li class="Queryli">全部</li>
                        <li class="Queryli">哲学</li>
                        <li class="Queryli">经济学</li>
                        <li class="Queryli">应用经济学</li>
                        <li class="Queryli">法学</li>
                        <li class="Queryli">政治学</li>
                        <li class="Queryli">社会学</li>
                        <li class="Queryli">民族学</li>
                        <li class="Queryli">马克思主义理论</li>
                        <li class="Queryli">公安学</li>
                        <li class="Queryli">教育学</li>
                        <li class="Queryli">心理学</li>
                        <li class="Queryli">体育学</li>
                        <li class="Queryli">中国史</li>
                        <li class="Queryli">世界史</li>
                        <li class="Queryli">数学</li>
                        <li class="Queryli">物理学</li>
                        <li class="Queryli">化学</li>
                        <li class="Queryli">天文学</li>
                        <li class="Queryli">地理学</li>
                        <li class="Queryli">大气科学</li>
                        <li class="Queryli">海洋科学</li>
                        <li class="Queryli">地球物理学</li>
                        <li class="Queryli">系统科学</li>
                        <li class="Queryli">生态学</li>
                        <li class="Queryli">力学</li>
                        <li class="Queryli">电气工程</li>
                        <li class="Queryli">电子科学与技术</li>
                        <li class="Queryli">建筑学</li>
                        <li class="Queryli">土木工程</li>
                </ul>
           </div>
            
        </div>
        <Divider />
        <div>
            <Table border :columns="columns1" :data="data1"></Table>
        </div>
    </div>
</template>

<script scoped>
    export default {
        data () {
            return {
                value: '',
                 columns1: [
                    {
                        title: '专业类别',
                        key: 'name'
                    },
                    {
                        title: '专业名称',
                        key: 'age',
                        render: (h, params) => {
                            return h('div', [
                            h('p',params.row.age.one),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.age.two),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.age.three),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.age.fout),
                            ])
                        }
                    },
                    {
                        title: '报考热度排名',
                        key: 'address',
                        render: (h, params) => {
                            return h('div', [
                            h('p',params.row.address.one),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.address.two),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.address.three),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.address.fout),
                            ])
                        }
                    },
                    {
                        title: '层次',
                        key: 'gradation',
                        render: (h, params) => {
                            return h('div', [
                            h('p',params.row.gradation.one),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.gradation.two),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.gradation.three),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.gradation.fout),
                            ])
                        }
                    },
                    {
                        title: '就业前景',
                        key: 'job',
                        render: (h, params) => {
                            return h('div', [
                            h('p',params.row.job.one),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.job.two),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.job.three),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.job.fout),
                            ])
                        }
                    },
                    {
                        title: '开设院校',
                        key: 'School',
                        render: (h, params) => {
                            return h('div', [
                            h('p',params.row.School.one),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.School.two),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.School.three),
                            h('div', {
                                style: {
                                margin: '1px 0',
                                height: '1px',
                                background: '#ccc',
                                }
                            }),
                            h('p',params.row.School.fout),
                            ])
                        }
                    },
                ],
                data1: [
                    {
                        name: '哲学类',
                        age: {
                            one:"哲学",
                            two:"逻辑学",
                            three:"宗教学",
                            fout:"伦理学"
                        },
                        address:{
                            one:"全国25 哲学1",
                            two:"全国57 哲学2",
                            three:"全国707 哲学4",
                            fout:"全国679 哲学3"
                        },
                        gradation:{
                            one:"本科",
                            two:"本科",
                            three:"本科",
                            fout:"本科"
                        },
                        job:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        School:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        date: '2016-10-03'
                    },
                    {
                        name: '经济学类',
                        age: {
                            one:"经济学",
                            two:"经济统计学",
                            three:"国民经济管理",
                            fout:"商务经济学"
                        },
                        address:{
                            one:"全国715 经济学12",
                            two:"全国945 经济学15",
                            three:"全国54 经济学5",
                            fout:"全国345 经济学4"
                        },
                        gradation:{
                            one:"本科",
                            two:"本科",
                            three:"本科",
                            fout:"本科"
                        },
                        job:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        School:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        date: '2016-10-03'
                    },
                    {
                        name: '财政学类',
                        age: {
                            one:"财政学",
                            two:"税收学",
                            three:"税务学",
                            fout:"财务学"
                        },
                        address:{
                            one:"全国25 哲学16",
                            two:"全国57 哲学2",
                            three:"全国707 哲学41",
                            fout:"全国679 哲学3"
                        },
                        gradation:{
                            one:"本科",
                            two:"本科",
                            three:"本科",
                            fout:"本科"
                        },
                        job:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        School:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        date: '2016-10-03'
                    },
                    {
                        name: '金融学类',
                        age: {
                            one:"金融学",
                            two:"金融工程",
                            three:"保险学",
                            fout:"投资学"
                        },
                        address:{
                            one:"全国779 经济学13",
                            two:"全国24 经济学3",
                            three:"全国1076 经济学17",
                            fout:"全国300 经济学9"
                        },
                        gradation:{
                            one:"本科",
                            two:"本科",
                            three:"本科",
                            fout:"本科"
                        },
                        job:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        School:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        date: '2016-10-03'
                    },
                     {
                        name: '金融学类',
                        age: {
                            one:"金融学",
                            two:"金融工程",
                            three:"保险学",
                            fout:"投资学"
                        },
                        address:{
                            one:"全国779 经济学13",
                            two:"全国24 经济学3",
                            three:"全国1076 经济学17",
                            fout:"全国300 经济学9"
                        },
                        gradation:{
                            one:"本科",
                            two:"本科",
                            three:"本科",
                            fout:"本科"
                        },
                        job:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        School:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        date: '2016-10-03'
                    },
                     {
                        name: '金融学类',
                        age: {
                            one:"金融学",
                            two:"金融工程",
                            three:"保险学",
                            fout:"投资学"
                        },
                        address:{
                            one:"全国779 经济学13",
                            two:"全国24 经济学3",
                            three:"全国1076 经济学17",
                            fout:"全国300 经济学9"
                        },
                        gradation:{
                            one:"本科",
                            two:"本科",
                            three:"本科",
                            fout:"本科"
                        },
                        job:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        School:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        date: '2016-10-03'
                    },
                     {
                        name: '金融学类',
                        age: {
                            one:"金融学",
                            two:"金融工程",
                            three:"保险学",
                            fout:"投资学"
                        },
                        address:{
                            one:"全国779 经济学13",
                            two:"全国24 经济学3",
                            three:"全国1076 经济学17",
                            fout:"全国300 经济学9"
                        },
                        gradation:{
                            one:"本科",
                            two:"本科",
                            three:"本科",
                            fout:"本科"
                        },
                        job:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        School:{
                            one:"点击查看",
                            two:"点击查看",
                            three:"点击查看",
                            fout:"点击查看"
                        },
                        date: '2016-10-03'
                    },
                ]
            }
        }
    }
</script>

<style>
    .Majarbox{
        width: 800px;
        margin: 0 auto;
    }
    .Majarheader{
        text-align: left;
    }
    .Majarcenter{
        text-align: left;
    }
    .Cenhead{
        width: 800px;
        height: 70px;
    }
    .Majarlefrt{
        width: 100px;
        height: 70px;
        display: inline-block;
        font-size: 15px;
        float: left;
    }
    .QueryUl{
        display: inline-block;
        /* float: left; */
        width: 700px;
        height: 150px;
    }
    .Queryli{
        width: 120px;
    }
    .ivu-table-cell{
        height: 100% !important;
        width: 155px !important;
    }
</style>