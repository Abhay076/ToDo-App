//this is entry point
const express = require('express');
const port = process.env.PORT || 8000;

const app = express();

// Redirect all to index.js inside routes directory
app.use('/', require('./routes'));

// Setting view engine as ejs
app.set('view engine', 'ejs');
// Setting path for views
app.set('views', './views');

const session = require('express-session');
const MongoStore = require('connect-mongo');
// to use static files, present in assets directory
app.use(express.static('assets'));

// Setting express to listen to port 8000
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    store: MongoStore.create(
        {
            mongoUrl:'mongodb://localhost/task_list_db',
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongoDB setup ok');
        }
    )
 }));
app.listen(port, function(err){
    if(err){
        console.log("Error Occurred while trying to run server on port : ", port);
        return;
    }
    console.log("Express Server is up and Running on port : ", port);
});
