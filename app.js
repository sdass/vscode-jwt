//followed from: https://www.youtube.com/watch?v=7nafaH9SddU
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) =>{
    console.log('request rcvd. from' + req.baseUrl+req.url);
    res.json({ message: 'Welcome to jwt app', status: 'OK', route: req.url});
});

app.post('/api/posts', (req, res) => {
    console.log('POST request rcvd. from' + req.baseUrl+req.url);
    res.json({one: 1, two: 2, three: 3, seven: 7 });
    //res.json({one: 1}); //, two: 2, three: 3, seven: 7 });
} );

app.post('/api/login', (req, res) => {
    //Mock user
    var secret = 'a1b2c3';
    const user = { id: 1, username: 'brad', email: 'brad@gmail.com'};
    jwt.sign({user: user}, secret, {expiresIn: '120s'}, (err, token) =>{ 
        res.json({token: token});
    } );
    //req.params

} );

app.post('/api/posts/protected', verifyToken, (req, res) => {
    console.log('POST request rcvd. on protected' + req.baseUrl+req.url);
    const secret = 'a1b2c3';
    console.log('5...@');
    
    jwt.verify(req.token, secret, (err, verifiedAuthData)=> {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({one: 1, two: 2, three: 3, seven: 7, 
                jwtAuth: 'BRAVO!',
                authData: verifiedAuthData
            
        });
        }
    });
    
    //res.json({one: 1}); //, two: 2, three: 3, seven: 7 });
} );


//verifyToken function
function verifyToken(req, res, next){
    console.log('verifyToken() called');
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    console.log('2..');

    if(typeof bearerHeader !== 'undefined'){
        console.log('2a..');
        //expected format //Authorization: Bearer <access_token>
        //split at the space
        const bearer = bearerHeader.split(' '); //[0,1]
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next(); //middleware function        
    }else {
        // authorization token is not passed or wrong format
        console.log('forbidden section');
        res.sendStatus(403); //Forbidden
    }

    
}

app.listen(4000, () => console.log('server listens on port 4000') );