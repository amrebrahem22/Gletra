const router = require('express').Router();
const User = require('../models/User');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    // check if user exist

    const checkUser = await User.findOne({username});

    if (checkUser) return res.status(400).json({message: 'User Already exists'})
    
    try {

        const hashPass = crypto.AES.encrypt(
            password,
            process.env.SECRET_KEY,
        ).toString();

        const newUser = new User({ username, email, password: hashPass });

        const user = await newUser.save();
        
        return res.status(201).json(user);

    } catch(err) {
        res.status(500).json(err.message)
    }

})

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});

        !user && res.status(401).json({'message': 'Wrong Password or Email'})

        const bytes = crypto.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(crypto.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json({'message': 'Wrong Password or Email'});

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            {expiresIn: '5d'}
        );

        const {password, ...info} = user._doc;

        res.status(200).json({...info, accessToken});
    } catch(err) {
        res.status(500).json(err.message)
    }
})

module.exports = router;