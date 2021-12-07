// const mongoose = require('mongoose');


// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL)
//         console.log(`Database Connection Successfull`);
//     } catch (err) {
//         console.log(`Connection Failed with error : ${err}`)
//         process.exit(1) //Process Exited With Failed Status Code
//     }
// }

// module.exports = connectDB
const mysql = require('mysql2');
const conSQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ada123',
    database: 'test'
});
module.exports = conSQL;
// const connectDB = async () => {
//     try {
//         await conSQL.connect()
//         console.log(`Database Connection Successfull on MySQL`);
//     } catch (err) {
//         console.log(`Connection Failed with error : ${err}`)
//         process.exit(1) //Process Exited With Failed Status Code
//     }
// }
// connectDB();
// console.log("I dont know how this ran");

// const connectDB = connection.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
//     console.log('Connected to the MySQL server.');
//   });
  
// module.exports = conSQL;