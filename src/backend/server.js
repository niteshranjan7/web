// express:	Express is a fast and lightweight web framework for Node.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');
//CORS is a node.js package providing a Express middleware, used to enable CORS with various options
//Cross-origin resource sharing CORS allows restricted resource on a web page to be requested from another domain, 
//the domain from which 1st resource was served
app.use(cors());
//body-parser:	Node.js body parsing middleware.
app.use(bodyParser.json());
//mongoose:	A Node.js framework which lets us access MongoDB in an object-oriented way.
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err,data){
        if(err) {
            console.log(err);
        } else {
            res.json(data);
            // send('Hello')
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
        Todo.findById(req.params.id, function(err, data) {
            if(err) {
                res.json({err})
            }
            res.json(data)
        })
        });


todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.name = req.body.name;
            todo.email = req.body.email;
            todo.subject = req.body.subject;
            todo.content = req.body.content;
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});