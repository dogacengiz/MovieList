const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//User Model
const User = require('../../models/User');
 router.post('/', (req, res) => {
    const {name, email, password, password2} = req.body;


    if(!name || !email || !password || !password2){
        return res.status(400).json({msg: 'Please enter all fileds!'});
    }

    if (password !== password2) {
        return res.status(400).json({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
        return res.status(400).json({ msg: 'Password must be at least 6 characters' });
    }
    

    User.findOne({email}).then(user => {
            if(user) return res.status(400).json({msg: 'User already exists!'});

            const newUser = new User({
                name,
                email,
                password
            });

            bcrypt.genSalt(10, (err,salt) =>{
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id},
                                config.get('jwtSecret'),
                                { expiresIn: 3600},
                                (err, token) =>{
                                    if(err) throw err;
                                    res.json({
                                      token,
                                      user:{
                                        id: user.id,
                                        name: user.name,
                                        email: user.email
                                    }
                                });
                            })
                    }); 
                })
            })
        })

});

 

module.exports = router;