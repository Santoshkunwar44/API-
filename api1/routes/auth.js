const router = require("express").Router();
const Users = require("../model/authSchema");
const bcrypt = require("bcrypt");

//REGISTER THE NEW USER

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const new_user = new Users({
      username: req.body.username,
      password: hashedPass,
      email: req.body.email,
    });
    const user = await new_user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
    try {
 
      const user = await Users.findOne({ username: req.body.username });
      !user && res.status(400).json("USER NOT FOUND!");
  
      const validate = await bcrypt.compare(req.body.password, user.password);
      !validate && res.status(400).json("INVALID PASSWORD");
     
    const {password, ...others}=user._doc;
    res.status(200).json(others)
    } catch (err) {
    } 
  });
  

module.exports = router;
