const {Router} = require('express');
const router = Router();
const request = require('request');
var data; 

router.get('/Api', (req, res) => {
    request.post({
        url: 'https://dde-us-south.analytics.ibm.com/daas/v1/session',
        auth: {
            username: 'ad268f8a-395b-4b83-85b3-662c5ca4a842',
            password: '854ca8cd3cd8346cfcfa502201fa8c767a38b262',
        } 
        },
        (err, res, body) => {
            if(err){
                return console.log(err);
            }
            this.data = JSON.parse(body);
        }
    );
    res.json(this.data)
})




module.exports = router;