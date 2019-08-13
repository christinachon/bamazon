var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;

    connection.query('SELECT * FROM products', function (err, response) {
        if (err) throw err;

        var displayInventory = new Table({
            head: ["Item ID", "Product Name", "Department Name", "Price($)", "Quantity"],
            colWidths: [10, 25, 25, 10, 14]
        });

        for (var i = 0; i < response.length; i++) {
            displayInventory.push(
                [response[i].item_id, response[i].product_name, response[i].department_name, response[i].price, response[i].stock_quantity]
            );
        }
        console.log(displayInventory.toString());
        askQuestion();


    })


});




var askQuestion = function () {

    inquirer.prompt([
        {
            name: "ID",
            message: "What is the ID of the product you would like to buy?",
            filter: Number
        },
        {
            name: "quantity",
            message: "How many would you like to buy?",
            filter: Number
        },

    ]).then(function (answers) {
        var purchaseQuantity = answers.quantity;
        var purchaseID = answers.ID;
        purchaseOrder(purchaseID, purchaseQuantity);
    });

};

function purchaseOrder (ID, amtNeeded){
    connection.query('SELECT * FROM products WHERE item_id = ' + ID, function(err, response){
        if (err) {
            console.log(err)
        };
        if (amtNeeded <= response[0].stock_quantity){
            var totalCost = response[0].price * amtNeeded;
            console.log("Your total is " + totalCost + ". Thank you for your purchase.");
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + " WHERE item_id = " + ID);
            connection.end();
        } else {
            console.log("I'm sorry, we do not have enough in stock.")
            connection.end();
        }
    })
}