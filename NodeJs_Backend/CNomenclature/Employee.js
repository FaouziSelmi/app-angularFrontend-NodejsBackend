var dbQuery=require ('../CDATA/NjsQuery.js');
console.log(dbQuery.TesterConnection.connect);
///****************************************** */
var urlpathAll='/employees';
var sqlqueryAll='select * from employee E \
inner join direction d \
where E.idDir=D.idDir';
dbQuery.getAllData(urlpathAll,sqlqueryAll)
/***************************************** */
var urlpathOne='/employees/:id';
var sqlqueryOne='select * from employee where id=?';
dbQuery.getOneRecordData(urlpathOne,sqlqueryOne)
/*********************************************** */
var urlpathDelete='/employees/:id';
var sqlqueryDelete='delete from employee where id=?';
dbQuery.deleteRecordData(urlpathDelete,sqlqueryDelete)
/*********************************************** */
var urlpath='/addEmployee'
dbQuery.app.post(urlpath, function(req, res, next) {
    sqlquery=`insert into employee(firstName,lastName,emailId) values
    ("${req.body.firstName}","${req.body.lastName}","${req.body.emailId}")`;
    dbQuery.TesterConnection.query(sqlquery, function(err, result) {
      if (err) throw err;
     res.send('data inserted successfully');
    });
  });
/************************************************************ */
var urlpath='/editEmployee/:id'
dbQuery.app.put(urlpath, function (req, res) {
    dbQuery.TesterConnection.query('UPDATE `employee` SET `firstName`=?,`lastName`=?,`emailId`=? where `id`=?',
        [req.body.firstName,req.body.lastName, req.body.emailId, req.params.id], 
        function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify(results));
      });
    });