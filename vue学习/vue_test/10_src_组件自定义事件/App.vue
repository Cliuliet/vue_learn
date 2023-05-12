<template>
    <div class="app">
        <h1>{{ msg }} 学生姓名：{{ studentName }}</h1>
        <!-- 两种子组件给父组件传递数据的实现 -->
        <!-- props -->
        <School :getSchoolName="getSchoolName"/>
        <!-- 自定义事件 @或v-on或ref -->
        <!-- <Student v-on:qinghua="getStudentName"/> -->
        <Student ref="student" @demo="m1"/>
    </div> 
</template>

<script>
    import Student from "./components/Student.vue";
    import School from "./components/School.vue";

    export default {
        name: "App",
        components: {Student, School},
        data() {
            return {
                msg: '你好啊！',
                studentName: '',
                schoolName: '',
            }
        },
        methods: {
            getSchoolName(name) {
                this.schoolName = name;
                // console.log("App收到了学校名：", name);
            },
            getStudentName(name) {
                this.studentName = name;
                // console.log('getStudentName被调用了！', name);
            },
            m1() {
                console.log('demo事件被触发了');
            }
        },
        mounted() {
            this.$refs.student.$on('qinghua', this.getStudentName)
        }
    }
</script>

<style>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>