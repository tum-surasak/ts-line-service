const express = require('express')
const middleware = require('@line/bot-sdk').middleware
//const token = 'CJjG80i3woYXfPUF8ttj8FhCiESBGo4XxtaKmGmlG86gLzjGLamEBDopN4Hc64udxnfn4jUwwLV2UD6/woghTchN+RSZWCza2PQrIbyNXtEKg34/olmkGzrEdqtCJpavRuFgzJzR5nQpuIcXYBp1IQdB04t89/1O/w1cDnyilFU=';


const app = express()

const config = {
  channelAccessToken: 'CJjG80i3woYXfPUF8ttj8FhCiESBGo4XxtaKmGmlG86gLzjGLamEBDopN4Hc64udxnfn4jUwwLV2UD6/woghTchN+RSZWCza2PQrIbyNXtEKg34/olmkGzrEdqtCJpavRuFgzJzR5nQpuIcXYBp1IQdB04t89/1O/w1cDnyilFU=',
  //channelSecret: 'YOUR_CHANNEL_SECRET'
}

app.post('/webhook', middleware(config), (req, res) => {
  res.json(req.body.events) // req.body will be webhook event object
  res.sendStatus(200)
})

app.listen(8080)