const express = require('express');
const router = express.Router();

// Item Model
const PBackLog = require('../../models/sBackLog');

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

router.get("/", (req, res)=>{  
    PBackLog.find().then(backlog => res.json(backlog));  
});

module.exports = router;
