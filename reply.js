// Reply with two static messages

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000


var firebase = require("firebase-admin");

var serviceAccount = require("./ts-line-service-firebase-adminsdk-idllq-4ec2654705.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://ts-line-service.firebaseio.com"
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/db', (req,res) => {
    var db = firebase.database(),
    current_path = 'ts-line-service'
    newKey = db.ref(current_path).push().key
    newObject = { name:'surasak rittong', timestamp: Date.now() }
    db.ref(current_path + '/' + newKey).set(newObject)
    res.setHeader('Content-Type', 'text/html')
    res.send(newObject)
})
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    var db = firebase.database(),
    current_path = 'ts-line-service'
    newKey = db.ref(current_path).push().key
    newObject = req.body.events[0]
    db.ref(current_path + '/' + newKey).set(newObject)
    reply(reply_token)
    //res.send(reply_token);
    res.sendStatus(200)
})
app.listen(port, () => console.log('http://localhost:' + port + '/db'))
function reply(reply_token) {
    let token = 'CJjG80i3woYXfPUF8ttj8FhCiESBGo4XxtaKmGmlG86gLzjGLamEBDopN4Hc64udxnfn4jUwwLV2UD6/woghTchN+RSZWCza2PQrIbyNXtEKg34/olmkGzrEdqtCJpavRuFgzJzR5nQpuIcXYBp1IQdB04t89/1O/w1cDnyilFU='
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            "type": "sticker",
            "packageId": "1",
            "stickerId": "1"
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}