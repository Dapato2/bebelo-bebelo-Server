const router = require("express").Router();
const {signupCtrl,loginCtrl,verifyCtrl} = require("../controllers/auth.controller")
const {isAuthenticated} = require("../middleware/auth")


router.post("/signup",signupCtrl)
router.post("/login",loginCtrl)
router.get("/verify",isAuthenticated,verifyCtrl)


//subir imagen
//router.patch("/edit-profile")


module.exports = router;