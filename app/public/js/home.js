axios.defaults.headers.common['x-csrf-token'] = Cookies.get('csrfToken'); // 这个是 egg 框架自带的安全校验
axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = new Vue({
    el: '#app',
    data: function () {
        return {
            todoTitle: '',
            todoList: []
        }
    },
    mounted: function() {
        this.fetchTodoList();
    },
    methods: {
        fetchTodoList: function(completed) {
            axios.get('/api/todo', { params: { completed } }).then(({ data }) => {
                this.todoList = data.data;
            });
        },
        createTodo: function() {
            const value = this.todoTitle.trim();
            if(!value) return;
            const item = {
                title: value,
                completed: false
            };
            axios.post('/api/todo', item).then(({ data }) => {
                this.todoList.push(data.data);
            });
        },
        completeTodo: function(item) {
            item.completed = !item.completed;
            axios.put(`/api/todo/${item._id}`).then(({ data }) => {
                console.log(data);
            });
        },
        removeTodo: function(item) {
            axios.delete(`/api/todo/${item._id}`).then(({ data }) => {
                this.fetchTodoList();
            });
        }
    }
});