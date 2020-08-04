<html>
    <head>
        <title>Egg TodoMVC</title>
        <link rel="stylesheet" href="/public/css/home.css" />
    </head>
    <body>
        <div id="app">
            <h2 class="page-title">Todo Panel</h2>
            <input placeholder="请输入任务名称" v-model="todoTitle" />
            <button @click="this.createTodo">添加任务</button>
            
            <template v-if="todoList.length > 0">
                <div class="todo-item" v-for="item in todoList" :key="item._id">
                    <div class="todo-item-title" v-text="item.title"></div>
                    <div class="todo-item-status" v-text="item.completed ? '已完成' : '未完成'"></div>
                    <div class="todo-item-update">
                        <button v-show="!item.completed" @click="completeTodo(item)">done</button>
                        <button @click="removeTodo(item)">remove</button>
                    </div>
                </div>
            </template>
            <template v-else>
                <p class="empty">暂无任务</p>
            </template>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="//cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/js-cookie/src/js.cookie.min.js"></script>
        <script src="/public/js/home.js"></script>
    </body>
</html>