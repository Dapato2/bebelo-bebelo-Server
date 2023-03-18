const router = require("express").Router();
const gameRoutes = require("./game.routes")
const playersRoute = require("./players.routes")
/* const userRoutes = require("./user.routes") */

const authRoutes = require("./auth.routes")



router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.use("/auth",authRoutes)

router.use("/game",gameRoutes);

router.use("/players",playersRoute)


/* 
router.use("/user", userRoutes)
*/

module.exports = router;
