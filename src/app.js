const express= require ("express"); 
const path =require("path");  // path module
const db = require("./db/conn");  // conn file importing to connect app with database
const contact = require("./models/usermessage");
const newsletter = require("./models/newsletter");
const divsub = require("./models/subscribe")
const image = require("./models/images")



const hbs = require("hbs");   // hbs view engine 
// registering partials in node js
const {registerPartials} = require("hbs");  // partials means navbar jaisa code using in all files 

const app=express();  // calling express function
const port=process.env.PORT || 3000;   // port

//setting the path 

const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");


//middleware
// app.use('/css', express.static(path.join(__dirname, "css")));
// app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
//app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended: true}));
app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views", templatepath);  // app ko bata rahe he views ab templatepath me he
hbs.registerPartials(partialpath);
  
//routine
// app.get( path , callback)

app.get("/", async (req, res) => { 
    const data = await image.find({})
    price1=data[0].price,
    res.render("index", {
        price1:data[0].price,
        price2:data[1].price,
        price3:data[2].price,
        price4:data[3].price,
        price5:data[4].price,
        price6:data[5].price,
        price7:data[6].price,
        price8:data[7].price,
        price9:data[8].price,
        price10:data[9].price,
        price11: data[10].price,
        price12:data[11].price 
    })
})

 app.get("/index",async (req,res)=>{
     const data = await image.find({})
     price1=data[0].price,
     res.render("index", {
         price1:data[0].price,
         price2:data[1].price,
         price3:data[2].price,
         price4:data[3].price,
         price5:data[4].price,
         price6:data[5].price,
         price7:data[6].price,
         price8:data[7].price,
         price9:data[8].price,
         price10:data[9].price,
         price11: data[10].price,
         price12:data[11].price 
     })
 })

 
//  app.get("/dummy",async (req,res)=>{
//      res.render("dummy");
// })




app.get("/addCard/:id", async (req, res) => {
    const _id = req.params.id

    const data = await image.findById({_id})
    
    res.render("addCard", {
       
         price:data.price, 
    })
 })







 app.get("/product",async (req,res)=>{
    const data = await image.find({})
    price1=data[0].price,
    res.render("product", {
        price1:data[0].price,
        price2:data[1].price,
        price3:data[2].price,
        price4:data[3].price,
        price5:data[4].price,
        price6:data[5].price,
        price7:data[6].price,
        price8:data[7].price,
        price9:data[8].price,
        price10:data[9].price,
        price11: data[10].price,
        price12:data[11].price 
    })
})
 app.get("/about",(req,res)=>{
    res.render("about");  
 })
 app.get("/blog_list",(req,res)=>{
    res.render("blog_list");  
 })

app.get("/addCard", (req, res) => {
    res.render("addCard");
 })

app.post("/contact",async(req,res) => {  // contact is action method POST
        try {
            //res.send(req.body);
            const userData = new contact(req.body);  // calling schema
            await userData.save();  // saving data
            res.status(201).render("contact"); // submit ke bad jaha jana he wo page render kro
                } catch (error) {
            res.status(500).send(error);
        }
})

app.post("/dummy",async(req,res) => {  // contact is action method POST
    try {
        // res.send(req.body);
        
        const subData = new image(req.body);  // calling schema
        await subData.save();  // saving data
        res.status(201).render("dummy"); // submit ke bad jaha jana he wo page render kro
    } catch (error) {
       
        res.status(500).send(error);

    }
})





app.post("/newsletter",async(req,res) => {  // contact is action method POST
    try {
        // res.send(req.body);
        
        const subData = new newsletter(req.body);  // calling schema
        await subData.save();  // saving data
        res.status(201).send(); // submit ke bad jaha jana he wo page render kro
    } catch (error) {
       
        res.status(500).send(error);

    }
})

app.post("/subscribed",async(req,res) => {  // contact is action method POST
    try {
        // res.send(req.body);
        
        const subData = new divsub(req.body);  // calling schema
        await subData.save();  // saving data
        res.status(201).send(); // submit ke bad jaha jana he wo page render kro
    } catch (error) {
       
        res.status(500).send(error);

    }
})


 //server create
     app.listen(port, () => {
         console.log(`My server is Running at port no ${port} `)
     })
