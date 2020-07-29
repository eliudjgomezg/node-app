const express= require('express');
const router = express.Router();
const { Client } = require('../models/client');
const { HairCut } = require('../models/haircut');
const { auth } = require('../middleware/auth');

router.post("/saveClient", auth,(req, res) => {

    const client = new Client(req.body);

    client.save((err,client)=> {
         console.log(err)

        if(err) return res.json({success:false, err});
        return res.status(200).json({
             success:true
            });
    });
});

router.get("/listClient",auth, (req, res) => {
    Client.find({ useFrom: req.body.useFrom }).exec((err, clients) => {
      if (err) return status(400).send(err);
      res.status(200).json({ success: true, clients });
    });
  });


  module.exports = router;
