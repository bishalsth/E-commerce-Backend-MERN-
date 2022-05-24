const router = require("express").Router();

router.get("/usertest",(req,res)=>{
    res.send("usertest is successfull");
});

module.exports = router;