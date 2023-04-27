const express = require("express");



const date = require(__dirname+"/date.js");

const items = [];
const workItems = [];
const bodyParser = require("body-parser");


const app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.get("/", function (req, res) {
    
    const day = date.getDate();
    


 //below is the more longer way to access day name.
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:console.log("error: currentDay value is "+currentDay);
    //         break;
    // }

// if-else also can be used but it is ByteLengthQueuingStrategy.
// if(currentDay===0){    day = "Sunday"; }else if(currentDay===1){    day
// ="Monday"; }else if(currentDay===2){     day="Tuesday"; }else
// if(currentDay===3){     day="Wednesday"; }else if(currentDay===4){
// day="Thursday"; }else if(currentDay===5){     day="Friday"; }else{
// day="Saturday"; }

    res.render("list", {listTitle: day, newListItems: items});

});
 app.post("/",function(req,res){
    console.log(req.body);
    
     const item = req.body.newItem;
    if(req.body.list==="Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    } 
 
});
     
 

 app.get("/work",function(req,res){
res.render("list",{listTitle: "Work List", newListItems: workItems});
});
    app.get("/about",function(req,res){
      res.render("about");
    });
    
 




app.listen(3000, function () {
    console.log("server is running on port 3000");

});