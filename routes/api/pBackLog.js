const express = require('express');
const router = express.Router();
const ObjectId =  require("bson");

// Item Model
const PBackLog = require('../../models/pBackLog');

router.post("/", (req, res)=>{
    name = req.body.name;
    description = req.body.description;
    status = 0;
    
    const pBackLog = new PBackLog({
        name,
        description,
        status
    });
    pBackLog.save().then(backlog => res.json(backlog));  
});

router.get("/:id", (req, res)=>{  
    const id = req.params.id;
    PBackLog.findById(id)
        .then(backlog => res.json(backlog))
        .catch(err => res.json("Error"))
});

module.exports = router;
