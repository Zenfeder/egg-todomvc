const Service = require('egg').Service;

class TodoService extends Service {
    async index() {
        const result = await this.ctx.model.Todo.find({});
        return result;
    }
    async create(item) {
        const result = await this.ctx.model.Todo.create(item);
        return result;
    }
    async update(_id) {
        const result = await this.ctx.model.Todo.update({ _id }, { completed: true });
        return result;
    }
    async destroy(_id) {
        const result = await this.ctx.model.Todo.remove({ _id });
        return result;
    }
}

module.exports = TodoService;