const express= require ("express"); 
const path =require("path");  // path module
require("./db/conn");  // conn file importing to connect app with database
const User = require("./models/usermessage");
const hbs = require("hbs");   // hbs view engine 
const {registerPartials} = require("hbs");  // partials means navbar jaisa code using in all files 

const app=express();  // calling express function
const port=process.env.PORT || 3000;   // port 

//setting the path 

const staticpath = path.join(__dirname,"../public"); 
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

//middleware

app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended: true}));
app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views", templatepath);  // app ko bata rahe he views ab templatepath me he
hbs.registerPartials(partialpath);
  
//routine
// app.get( path , callback)

 app.get("/",(req,res)=>{
     res.render("index");  
 })


 app.get("/gallery",(req,res)=>{
    res.render("gallery");
})

app.post("/contact",async(req,res) => {
        try {
            //res.send(req.body);
            const userData = new User(req.body);
            await userData.save();
            res.status(201).render("index");
                } catch (error) {
            res.status(500).send(error);
        }
})

 //server create
 app.listen(port,()=>{ 
     console.log(`My server is Running at port no ${port} `);
 })

