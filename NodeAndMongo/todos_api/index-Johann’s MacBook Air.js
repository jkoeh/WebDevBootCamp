var express = require('express'),
    app=express(), 
    port = process.env.PORT || 3000

app.get('/', function(req, res){
    res.json({evil:"king of the south"})
});
app.listen(port, function(){
    console.log("app is running on port " + port);
});