function countDown(seconds){
    var intervalId = setInterval(function(){
        seconds --;
        
        if(seconds==0){
            clearInterval(intervalId);
            console.log("Ring Ring Ring!!!");
        }
        else{
            console.log("Timer: ", seconds)
        }
    }, 1000);
    
}