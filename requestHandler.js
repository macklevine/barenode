var defaultHeaders = {
  "access-control-allow-origin": "*", //allows access for cors requests
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/plain"
};

var messages = "";

var requests = {
  'POST': function(request, response){
    var dataString = "";
    request.on("data", function(chunk){
      dataString += chunk;
    });
    request.on("end", function(){
      messages = messages + (JSON.stringify(dataString) + " / ");
      console.log("message received: " + dataString);
    });
    response.writeHead(200, defaultHeaders)
    // response.write(dataString);
    response.end();
  },
  'GET': function(request, response){
    response.writeHead(200, defaultHeaders);
    // response.write(messages);
    response.end(messages);
  },
  'OPTIONS': function(request, response){
    response.writeHead(200, defaultHeaders);
    response.end;
  }
}

var requestHandler = function(request, response){
  if (requests[request.method]){
    requests[request.method](request, response);
  }
}

module.exports = requestHandler;