const line = require('@line/bot-sdk');
const token = 'CJjG80i3woYXfPUF8ttj8FhCiESBGo4XxtaKmGmlG86gLzjGLamEBDopN4Hc64udxnfn4jUwwLV2UD6/woghTchN+RSZWCza2PQrIbyNXtEKg34/olmkGzrEdqtCJpavRuFgzJzR5nQpuIcXYBp1IQdB04t89/1O/w1cDnyilFU=';
const client = new line.Client({
  channelAccessToken: token
});

const message = {
  type: 'text',
  text: 'Hello World!'
};

client.replyMessage(token, message)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // error handling
  });