var path = require("path");

module.exports = function (app){
    //Want homepage to be catch-all, except for /survey
    app.get("*", (req,res)=>{

        if(req.url !== "/survey"){
            res.sendFile(path.join(__dirname,"../public/home.html"));
        }
        else{
            //route for survey page
            app.get("/survey",(req,res)=>{
                res.sendFile(path.join(__dirname, "../public/survey.html"));
            })
        }
    });  
}


