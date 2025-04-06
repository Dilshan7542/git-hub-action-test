import express from "express";
import fs from "fs";
const app=express();
const customerList = JSON.parse(fs.readFileSync("./db/customerList.json", "utf8"));

const connectDB=()=>{
    const dummyPromise=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Database connected");
        },2000);
    });
    return dummyPromise;
}
app.get("/",(req,res)=>{
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <title>Service 02</title>
</head>
<body style="background-color: rgb(128, 81, 214);">
    <h1>Hello this is <b style="color: red;">Service 01</b></h1>
</body>
</html>
        
        `);
});
app.get("/customers",(req,res)=>{
    res.json(customerList);
});

app.get("/customers",(req,res)=>{
    res.json(customerList);
});
app.get("/customers/:id", (req, res) => {
    const customerId = req.params.id;
    const customer = customerList.find(cust => cust.id == customerId); // Check by ID

    if (customer) {
        res.json(customer);
    } else {
        res.status(404).json({ message: "Customer not found" });
    }
});

 connectDB().then(r=>{
    console.log(r);
    
 });  
app.listen(3000);