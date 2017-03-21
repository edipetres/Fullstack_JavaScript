let router = require("express").Router();
let Joke = require("../models/Jokes");

/*router.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});*/

// Get all jokes
router.get('/jokes', (req, res) => {
  Joke.find({}, function (err, users) {
    if (!err) {
      res.json(users);
    }
    else {
      res.json({ msg: "An error occured." })
    }
  });
});

router.get('/jokes/:id', (req, res) => {
  let jokeID = req.params.id;
  Joke.findById(jokeID, function (err, singleJoke) {
    if (!err) {
      if (singleJoke) {
        res.json(singleJoke);
      }
      else {
        res.json({ error: "Joke could not be found." });
      }
    }
    else {
      res.json({ error: err });
    }
  })
});

// Add new joke
router.post('/jokes', (req, res) => {
  let p_joke = req.body.joke;
  let p_category = req.body.category;
  let p_reference = req.body.reference;

  let newJoke = Joke({
    joke: p_joke,
    category: p_category,
    reference: p_reference
  });

  newJoke.save(function (err) {
    if (err) {
      throw err;
    }
    console.log("Joke added!")
  })
  res.json(newJoke);
});

router.put('/jokes/:id', (req, res) => {
  let submittedJoke = req.body;
  let jokeID = req.params.id;

  Joke.findByIdAndUpdate(jokeID, submittedJoke, function (err, joke) {
    if (!err) {
      console.log("Joke updated successfully.")
      res.json(joke);
    }
    else {
      res.json({ error: err })
    }
  })
});

router.delete('/jokes/:id', (req, res) => {
  let jokeID = req.params.id;

  Joke.findByIdAndRemove(jokeID, function (err, result) {
    if (err) { throw err; }

    if (result) {
      //console.log("Joke removed with ID: ", jokeID, err, result)
      res.status(204);
      res.json({ msg: "Joke deleted successfully." })
    }
    else {
      //console.log("Joke could not be deleted");
      res.json({ error: "Joke could not be deleted" })
    }
  });
});


module.exports = router;
