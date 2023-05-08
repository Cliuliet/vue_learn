export default {
    install(Vue,x,y,z) {
        console.log("@@@install",Vue)
        console.log(x,y,z)

        // 全局过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0,4);
        })

        // 定义全局指令
        // ...

        // 定义混入
        Vue.mixin({
            methods: {
                showName() {
                    alert(this.name)
                }
            }
        })

        // 给vue原型上添加一个方法（vm和vc都能用了）
        Vue.prototype.hello = () => {alert('你好啊')}
    }
}