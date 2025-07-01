import express from 'express';


const app = express();
import cors from 'cors';
app.use (cors(
    {
        origin: "http://localhost:5174",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials : true,
        }
));



// app.get ('/id', (req, res) => { 

//     const arr=[
//         {id:1,name:'John' , mobile :1234567890},
//         {id:2,name:'Jane' , mobile :9876543210},
//         {id:3,name:'Alice' , mobile :1111111111},
//         {id:4,name:'Bob' , mobile :2222222222}
//         ];

//         const obj = arr.filter((user)=> user.mobile === Number(req.params.id) );
//         res.send(obj);
    
   
//     });

app.get ('/', (req, res) => {
    res.send ('Hello World!');
    });

app.get ("/:color", (req, res) => {
    console.log("first")
    res.send (req.params.color)
    });


    
    app.listen (8000, () => {
        console.log ('Server is running on port 3000');
        });
