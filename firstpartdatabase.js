var mysql = require('mysql');
var inquirer = require("inquirer");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "N@w@l123",
  database: "bamazon"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  
inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the id you would like to have?"
      },
      {
        name: "numberofproduct",
        type: "input",
        message: "What is the number of product would like to have?"
      }
      ]).then(function(answer) {
      	let chosenItem;
      	let ser;
        for (var i = 0; i < result.length; i++) {
          if (result[i].item_id === parseInt(answer.id)) {
            chosenItem = result[i];
          }
          
        }

      con.query(
            "UPDATE product SET ? WHERE ?",
            [
              {
                stock_quantity: (parseInt(chosenItem.stock_quantity)  -  parseInt(answer.numberofproduct) )
              },
              {
                item_id: answer.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log(" placed successfully!");
              ser =   parseInt(answer.numberofproduct) * chosenItem.price;
              console.log("total cost is  " + ser);
          }
          );
          });
      });
});