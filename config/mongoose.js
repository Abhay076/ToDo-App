const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abhay:abhay123@cluster0.pbi4d.mongodb.net/task_list_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));
db.once('open', function(){
    console.log('Successfully connected to database');
});