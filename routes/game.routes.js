const router = require("express").Router();
const authRoutes = require("./auth.routes")
const { isAuthenticated } = require("../middleware/auth")
const {gameCreateCntrl,listOfCreatedCntrl,gameDefault} = require("../controllers/game.controller")


router.post('/create',isAuthenticated,gameCreateCntrl)

router.get('/play-default/:id',gameDefault)

router.get('/games-created',isAuthenticated,listOfCreatedCntrl)




module.exports = router;