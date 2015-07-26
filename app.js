var sendMessage = function(message){
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000',
    data: message,
    contentType: 'text/plain',
    success: function(data){
      console.log("message sent!");
    },
    error: function(){
      console.log("you fucked up!");
    }
  });
}

var getMessages = function(){
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000',
    // data: messages,
    contentType: 'text/plain',
    success: function(data){
      console.log(data);
    },
    error: function(){
      console.log("you fucked up!");
    }
  })
}