const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//GET all exercises
router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

//GET exercise by id
router.route('/:id').get((req, res) => {
    const id = req.params.id;

    Exercise.findById(id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err))
})

//ADD exercise
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const pic = req.body.pic

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
        pic
    });

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//UPDATE exercise
router.route('/update/:id').put((req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const pic = req.body.pic

    Exercise.findByIdAndUpdate(id)
    .then(exercise => {
        exercise.username = username,
        exercise.description = description,
        exercise.duration = duration,
        exercise.date = date,
        exercise.pic = pic

        exercise.save()
        .then(exercise => res.json('Exercise Updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

//DELETE exercise
router.route('/:id').delete((req, res) => {
    const id = req.params.id;

    Exercise.findByIdAndDelete(id)
    .then(() => res.json('Exercise deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;