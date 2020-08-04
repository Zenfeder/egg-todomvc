const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index(ctx) {
        await ctx.render('todo/home.tpl');
    }
}

module.exports = HomeController;