const Controller = require('egg').Controller;

class TodoController extends Controller {
    async index() {
        const ctx = this.ctx;
        const todoList = await ctx.service.todo.index();
        ctx.body = {
            data: todoList,
            message: 'ok',
            code: 200
        };
        ctx.status = 200;
    }
    async create() {
        const ctx = this.ctx;
        const result = await ctx.service.todo.create(ctx.request.body);
        ctx.body = { data: result, message: 'ok', code: 200 };
        ctx.status = 200;
    }
    async update() {
        const ctx = this.ctx;
        await ctx.service.todo.update(ctx.params.id);
        ctx.body = { data: null, message: 'ok', code: 200 };
        ctx.status = 200;
    }
    async destroy() {
        const ctx = this.ctx;
        await ctx.service.todo.destroy(ctx.params.id);
        ctx.body = { data: null, message: 'ok', code: 200 };
        ctx.status = 200;
    }
}

module.exports = TodoController;