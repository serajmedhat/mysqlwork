var mysql = require('mysql');
var inquirer = require("inquirer");
var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "N@w@l123",
  database: "bamazon"
});


var questions = ["View Products for Sale","View Low Inventory", "Add to Inventory","Add New Product"];
askedquestions();
 function askedquestions(){
 	con.connect(function(err) {
            if (err) throw err;
	inquirer.prompt([
            {
              name: "que",
              type: "rawlist",
              message: "Who would you like to choose?",
              choices: questions
            }
          ]).then(function(answer) {

           if (answer.que == "View Products for Sale") {
            
	        con.query("SELECT item_id,product_name,price,stock_quantity FROM product  WHERE stock_quantity > 0", function (err, result1, fields) {
	        if (err) throw err;
	        console.log(result1);
	           });
	       



}
           else if (answer.que == "View Low Inventory") {
            
	        con.query("SELECT item_id,product_name,price,stock_quantity FROM product  WHERE stock_quantity > 5", function (err, result2, fields) {
	        if (err) throw err;
	        console.log(result2);
	           });
	       

             

            }

           else if (answer.que == "Add to Inventory") { 
             con.query("SELECT product_name FROM product  WHERE stock_quantity > 0", function (err, result3, fields) {
	        if (err) throw err;
             var q = [];
	        for (var i = 0 ; i < result3.length ; i++){
             q.push(result3[i].product_name);
	        }
	        
	        
	        
	        inquirer.prompt([
            {
              name: "qu",
              type: "rawlist",
              message: "Who would you like to choose?",
              choices: q
            },
            {
        name: "name",
        message: "how many number of item you would to add "
      }
          ]).then(function(answer) {
          	var r;
          	var u = answer.qu;
          	var n;
          	 con.query("SELECT stock_quantity FROM product  WHERE product_name = ?", u , function (err, result4, fields) {
	        if (err) throw err;
             console.log(result4);
             r = result4[0].stock_quantity;
             console.log(r);
             let n = parseInt(answer.name) + r;
             console.log(n);
	        
          	 con.query(
            "UPDATE product SET   ? WHERE  ?",
            [
              {
                stock_quantity: n
              },
              {
                product_name: answer.qu
              }
            ],
            function(error) {
              if (error) throw err;
              console.log(" placed successfully!");
          }
          );
          	});

          });

	        });
             

}
else if (answer.que == "Add New Product") {
 inquirer.prompt([
            
       { name: "name1",
        message: "adding product  name "
      },
      { name: "name2",
        message: "adding department name "
      },
      { name: "name3",
        message: "adding item price "
      },
      { name: "name4",
        message: "adding stock quantity "
      }
      ]).then(function(answer) {
      con.query(
        "INSERT INTO product SET ?",
        {
          product_name: answer.name1,
          department_name: answer.name2,
          price: parseInt( answer.name3),
          stock_quantity: parseInt(answer.name4)
        },
        function(err) {
          if (err) throw err;
      }
      );

	});
}
});
      });
 }