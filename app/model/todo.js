module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const TodoSchema = new Schema({
        title: { type: String },
        completed: { type: Boolean }
    });

    return mongoose.model('Todo', TodoSchema);
};