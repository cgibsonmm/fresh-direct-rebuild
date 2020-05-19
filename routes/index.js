const { Router } = require("express");
// const controllers = require("../controllers");
// const restrict = require("../helpers");

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

// //sign up and sign in
// router.post('/sign-up', controllers.signUp)
// router.post('/sign-in', controllers.signIn)
// router.get('/verify', controllers.verifyUser)

// //read data
// router.get('/products', controllers.getProducts)
// router.get('/products/:id', controllers.getProduct)

// //create update and delete data
// router.post('/products', restrict, controllers.createProduct)
// router.put('/products/:id', restrict, controllers.updateProduct)
// router.delete('/products/:id', restrict, controllers.deleteProduct)

module.exports = router;
