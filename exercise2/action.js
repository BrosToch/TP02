

var canvas = document.getElementById('canvas');
var video = document.createElement('video');
video.autoplay = true
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
    (function loop(){
        console.log("calls");
        canvas.getContext('2d').drawImage(video, 0, 0,canvas.width, canvas.height);
        setTimeout(loop, 1000 /30); 
        ;
        
    })();



    })
    .catch(function(err) {
        console.log("An error occurred! " + err);
    });