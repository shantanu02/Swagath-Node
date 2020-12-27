const express = require('express');
const router = express.Router();
const users = require('../middlewares/user');

router.get('/getAllUser' , async (req, res) => {
    try {

        const result = await users.getusers();
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.get('/getUser/:id' , async (req, res) => {
    try {

        const result = await users.getuser(req.params.id);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});


router.post('/addUser',async(req, res)=>{
    try {

        const result = await users.addUser(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.put('/updateUser',async(req, res)=>{
    try {

        const result = await users.updateUser(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});


router.delete('/deleteUser/:id',async(req, res)=>{
    try {
        //console.log(req.params.id);
        const result = await users.deleteUser(req.params.id);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});



module.exports = router;

