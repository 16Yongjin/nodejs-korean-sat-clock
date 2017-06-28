const express = require('express');
const moment = require('moment');
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

app.get('/keyboard', (req, res) => {
    menu = {
        "type": "buttons",
        "buttons" : ["수능 D-day", "수능까지 남은 시간", "수능 꿀팁"]
    }

    res.send(menu);
});

app.post('/message', (req, res) => {
    var sendData = {};
    if (!req.body['user_key'] || !req.body['type'] || !req.body['content']) {
        sendData['success'] = 0;
        sendData['error'] = 'invalid request';
        res.send(JSON.stringify(sendData));
        return;
    }
    var today = moment().add(9, 'h');
    var dday = moment("2017-11-16T08:40:00.000");

    var message = req.body['content'];
    if (message == '수능 D-day') {


        var leftDay = dday.diff(today, 'days');
        
        sendData = {
            'message': {
                'text': `${leftDay}일 남았습니다. 째깍`
            },
            'keyboard': {
                "type" : "buttons",
                "buttons" : ["수능 D-day", "수능까지 남은 시간", "수능 꿀팁"]
            }
        }
    } else if (message == "수능까지 남은 시간") {
        var leftHour = dday.diff(today, 'hours');
        sendData = {
            'message': {
                'text': `${leftHour}시간 남았습니다. 째깍`
            },
            'keyboard': {
                "type" : "buttons",
                "buttons" : ["수능 D-day", "수능까지 남은 시간", "수능 꿀팁"]
            }
        }

    } else if (message == "수능 꿀팁") {
        var random = Math.floor(Math.random() * 5);  
        var urls = ['https://www.youtube.com/watch?v=wWKkWEMMzJI', 'https://www.youtube.com/watch?v=roughtzsCDI', 'https://www.youtube.com/watch?v=cuHiiIQjsWM&feature=youtu.be', 'https://www.youtube.com/watch?v=df9_a4ySCcE']
        switch (random) {
            case 0:
                sendData = {
                    'message': {
                    'text': urls[0]
                    },
                    'keyboard': {
                    "type" : "buttons",
                    "buttons" : ["수능 D-day", "수능까지 남은 시간", "수능 꿀팁"]
                    }
                }
                break;
            case 1:
                var imgUrl = 'http://www.ittoday.co.kr/news/photo/201411/54406_64683_1528.jpg';
                sendData = {
                    'message': {
                    'text': '화이팅',
                    'photo': {
                        'url': imgUrl,
                        'width': 517,
                        'height': 514
                        }
                    },
                    'keyboard': {
                    "type" : "buttons",
                    "buttons" : ["수능 D-day", "수능까지 남은 시간", "수능 꿀팁"]
                    }
                }
                break;
            case 2: 
                sendData = {
                    'message': {
                    'text': urls[1]
                    },
                    'keyboard': {
                    "type" : "buttons",
                    "buttons" : ["수능 D-day", "수능까지 남은 시간", "수능 꿀팁"]
                    }
                }
                break;
            case 3: 
                sendData = {
                    'message': {
                    'text': urls[2]
                    },
                    'keyboard': {
                    "type" : "buttons",
                    "buttons" : ["수능 D-day", "수능까지 남은 시간", "수능 꿀팁"]
                    }
                }
                break;
            case 4: 
                sendData = {
                    'message': {
                    'text': urls[3]
                    },
                    'keyboard': {
                    "type" : "buttons",
                    "buttons" : ["수능 D-day", "수능까지 남은 시간", "수능 꿀팁"]
                    }
                }
                break;
            

        } 
    }

    res.send(sendData);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
