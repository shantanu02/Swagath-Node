const express = require('express');
const router = express.Router();
const nonemp = require('../middlewares/nonemp');

router.get('/getNonEmps' , async (req, res) => {
    try {

        const result = await nonemp.getNonEmps();
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.get('/getNonEmp/:name' , async (req, res) => {
    try {
        console.log(req.params.name);
        const result = await nonemp.getNonEmp(req.params.name);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.get('/getNonEmpbyId/:id' , async (req, res) => {
    try {
        console.log("vipul");
        const result = await nonemp.getNonEmpbyId(req.params.id);
        
        res.send(result).status(200);

        console.log(result);

    } catch (error) {
        res.send(error.message).status(500);
    }
});


router.post('/addNonEmp',async(req, res)=>{
    try {

        const result = await nonemp.addNonEmp(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.put('/updateNonEmp',async(req, res)=>{
    try {

        const result = await nonemp.updateNonEmp(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});


router.delete('/deleteNonEmp/:id',async(req, res)=>{
    try {
        //console.log(req.params.id);
        const result = await nonemp.deleteNonEmp(req.params.id);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});



module.exports = router;