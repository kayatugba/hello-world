import SockJS from "sockjs"
import StompJs from "stompjs"

const _backendServerPath = "http://localhost:8090"

let _stompClient = null;
let _socket = null;
let _clientConnected = false;

function _connect(){

    if (_clientConnected) return;

    _socket = new SockJS(`${_backendServerPath}/ws`);
  
    _stompClient = StompJs.Stomp.over(_socket);
    _stompClient.debug =  (message) => { console.log(message)}
    //_stompClient.maxWebSocketFrameSize = 1024 * 1024;
    //_stompClient.maxWebSocketChunkSize = 1024*1024;
    //_stompClient.splitLargeFrames = true;

    _stompClient.onWebSocketClose = function(frame) {
        console.log("stompClient disconnected:" + JSON.stringify(frame));
        _disconnect();
    }

  /*  _stompClient.connect(
        //token,
        /*{},
        frame => {
          _clientConnected = true;
          connected();
          console.log(`Connected: ${frame}`);
    
          //_subscribeTopic("/user/queue/notify");
        },
        message => {
          if (message.startsWith('Whoops! Lost connection to')) {
            console.log(`stompClient disconnected: ${message}`);
            _disconnect();
          }
        },
      );*/
      _stompClient.connect("", function (frame) {
    	//setConnected(true);
    	console.log("connected, session id: " + _socket.sessionId);
    	console.log(_socket);
    });
}

let connected = function c(data){
    console.log("abv")
};

function _subscribeTopic(topic){
    _stompClient.subscribe(topic, message => {
        console.log(message);
    });
}

function _disconnect() {
    if (_stompClient !== null) {
      _stompClient.disconnect();
    }
    _clientConnected = false;
    //_disconnectedCallBack();
    console.log('Disconnected');
}

export default function initWebsocketConnection(){
    _connect();
}