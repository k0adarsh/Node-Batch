const  sql = require('mysql2');
const conSQL = require('./config/db.js');

exports.getPatients = async  (req, res) => {
    try {
      let  patients = await  conSQL.promise().query("SELECT * FROM test.rs_static_quality_measures limit 10");
      res.status(200).json({
        status: 'Success',
        data: {
            patients
        }
    })
    }catch (error) {
      console.log(error);
    }
}
