<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '清华大学',
                address: '郑州'
            }
        }
    }
</script>

<style scoped>
    .demo {
        background-color: skyblue;
    }
</style>