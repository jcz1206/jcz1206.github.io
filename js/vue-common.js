
            // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

            // 1. 定义（路由）组件。
            // 可以从其他文件 import 进来
            const Foo = { template: '#indexPage',data:function(){
              return {
                ttype:[
                  {
                    id:'x001',
                    title:'赛事1'
                  },
                  {
                    id:'x002',
                    title:'赛事2'
                  },
                  {
                    id:'x003',
                    title:'赛事3'
                  }
                ],
                t:[],
                tAll:{
                    'x001':[{ index:'001',
                      author:'是克莱斯勒',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/1.jpg'
                    },
                    { index:'002',
                      author:'是克莱斯勒',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/1.jpg'
                    },
                    { index:'003',
                      author:'是克莱斯勒',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/1.jpg'
                    }]
                  ,
                  
                    'x002':[{ index:'001',
                      author:'是克莱斯勒2',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/2.jpg'
                    },
                    { index:'002',
                      author:'是克莱斯勒2',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/2.jpg'
                    },
                    { index:'003',
                      author:'是克莱斯勒2',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/2.jpg'
                    }]
                  ,                  
                    'x003':[{ index:'001',
                      author:'是克莱斯勒3',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/3.jpg'
                    },
                    { index:'002',
                      author:'是克莱斯勒3',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/3.jpg'
                    },
                    { index:'003',
                      author:'是克莱斯勒3',
                      name:'作品名称',
                      num:2563,
                      state:3,
                      image:'images/build/3.jpg'
                    }]
                  
                  }
              }
            } ,
            created:function(){
              this.initIndex();
            },
            mounted:function(){
            },
          methods:{
            initIndex:function(){
              this.t=this.tAll['x001'];
            },
            changeDetail:function(id){
              this.t=this.tAll[id];
            }
          }}
            const Bar = { template: '<div>bar</div>' }

            // 2. 定义路由
            // 每个路由应该映射一个组件。 其中"component" 可以是
            // 通过 Vue.extend() 创建的组件构造器，
            // 或者，只是一个组件配置对象。
            // 我们晚点再讨论嵌套路由。
            const routes = [
              { path: '', component: Foo },
              { path: '/foo', component: Foo },
              { path: '/bar', component: Bar }
            ]

            // 3. 创建 router 实例，然后传 `routes` 配置
            // 你还可以传别的配置参数, 不过先这么简单着吧。
            const router = new VueRouter({
              routes // （缩写）相当于 routes: routes
            })

            // 4. 创建和挂载根实例。
            // 记得要通过 router 配置参数注入路由，
            // 从而让整个应用都有路由功能
            const app = new Vue({
                router
            }).$mount('#app')

            // 现在，应用已经启动了！