const MovieModel = require("../models/MovieModel");

module.exports.list = (req, res) => {
    MovieModel.find({ }).exec().then(movies => {
        return res.json(movies)
    })
}

module.exports.show = (req, res)=>{
    MovieModel.findById(req.params.id).exec().then(movie =>{
        return res.json(movie)
    })
}

module.exports.create = (req, res)=>{
    const m = new MovieModel({
        title: req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        year: req.body.year
    });
    m.save().then(savedMovie =>{
        return res.json(savedMovie)
    })
}

module.exports.update = (req, res)=>{
    MovieModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
        (err, movieUpdate)=>{
            if(err) return res.status(500).send(err);
            return res.send(movieUpdate)
        }
    )
}

module.exports.remove = (req, res)=>{
    MovieModel.findByIdAndRemove(req.params.id, (err, movie)=>{
        if(err) return res.status(500).send(err)

        //creating a simple object to send back with a message and the id of the document that was removed
        const response = {
            message: "Movie successfully deleted",
            id: movie._id
        }
        return res.status(200).send(response);
    });
}