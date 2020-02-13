alert ("hola");

var etiqueta;

function onloadFcn(){
	
	etiqueta= document.getElementById("led");
	etiqueta.innerHTML="led 1";
}



  // Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("tailor.cloudmqtt.com",30013, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    useSSL: true,
    userName: "tdflyaxj",
    password: "gtmLUNhJYIY_",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
  topic_rx="led";
  topic_tx="test";
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
	
    client.subscribe(topic_rx);
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName =topic_tx;
    
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("el mensaje fue:"+message.payloadString);
	accion(message.payloadString);
	
  }
  
    // called when a message arrives
  function sensor1(msg) {
    message = new Paho.MQTT.(msg);Message
    message.destinationName =topic_tx;
    client.send(message);
  }
  
function sensor2(msg) {
    message = new Paho.MQTT.(msg);Message
    message.destinationName =topic_tx;
    client.send(message);
  }
    // called when a message arrives
function ledOnn() {
	publicar('led=1')	
  }
  
function ledOff() {
	publicar('led=0')	
  }	
	
 
function ledONN() {
	publicar('led=1')	
  }
  
function ledOFF() {
	publicar('led=0')	
  }	