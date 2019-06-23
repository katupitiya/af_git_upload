const StudentRoutes = express.Router();
app.use('/user', StudentRoutes);



StudentRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, user) {
        res.json(user);
    });
});

// StudentRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Todo.findById(id, function(err, todo) {
//         res.json(todo);
//     });
// });

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else
            user.user.student_iT = req.body.user.student_iT;
        user.student_name = req.body.student_name;
        user.student_address = req.body.student_address;
        user.student_state = req.body.student_state;
        user.student_gender = req.body.student_gender;
        user.student_bday = req.body.student_bday;
        user.student_course = req.body.student_course;
        user.student_email = req.body.student_email;

        todo.save().then(todo => {
            res.json('Student updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});