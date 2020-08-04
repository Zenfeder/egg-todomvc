exports.keys = 'test123456';

// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
};

// 添加 mongoose 配置
exports.mongoose = {
    client: {
        url: 'mongodb://127.0.0.1:27017/todo',
        options: {},
        // plugins: [createdPlugin, [updatedPlugin, pluginOptions]]
    }
};
