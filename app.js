const express = require('express')
const mysql = require('mysql2');
const consoleTable = require('console.table');
const dbOps = require('./dbOps');
//const mongoose = require('mongoose')

//Environment Config
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// Require other project modules
const userRoute = require('./route/userRoute.js');
const productRoute = require('./route/productRoute.js');

const conSQL = require('./config/db.js');
const app = express();
var  router = express.Router();

//Body Parser Init
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//app.use('/api/users', userRoute);
//app.use('/api/products', productRoute);

app.use('/',router);
router.route('/').get((req, res) => res.status(200).json({
    status: 'Success',
    data: {
        msg : 'Hello User'
    }
}))
router.route('/patients').get(dbOps.getPatients);
    
// router.route('/patients').get((req,res)=>({
//     // dbOps.getOrders.then((data)=> {
//     //     res.json(data[0]);
// }));

var result = conSQL.query("SELECT * FROM test.rs_static_quality_measures limit 10", function(err, res, fields){
    console.table(res);
});

// async  function  getData() {
//     try {
//       let  pool = await  mysql.connect(config);
//       let  products = await  conSQL.request().query("SELECT * from Orders");
//       return  products.recordsets;
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }


//console.table(result);
//var tabRes = consoleTable.getTable(result);
//console.log(`Hello ${tabRes}`);
// const query = async () => {
//     try{
//         const allData = await conSQL.query("SELECT * FROM test.rs_static_quality_measures limit 10");
//         console.log("Query Successful", allData);
//     }catch(err){
//         console.log(`Query Failed with error : ${err}`);
//     }
// }
//query();
//console.log("Hello ", allData);

const PORT = process.env.PORT || 6000
app.listen(PORT, console.log(`Process running in ${process.env.ENV_MODE} mode on ${PORT} `));






