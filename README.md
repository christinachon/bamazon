# bamazon

##Description
This is a project for UW Coding bootcamp. THis program allows users to search an online store for their products, price, and quantity. The user is prompted to ask which item they would like and how many they would like to buy. After they have made their decision, the store is updated with the new inventory and the user is informed of their total amount for their purchase.

##Problems
I struggled with having the inputted user information translate to what is filtered in the table.

##Technical Aproach
We used mysql to create a database table for our product information. Inquirer npm was used to ask the user what actions they would like to do and I used cli-table to display the information in a eye-pleasing way.

The inventory is displayed using cli-table, and Inquirer to ask the user what they would like and how many. The program matches the product ID entered with the information of the table for that product. The quantity is updated with subtracting how many were ordered and the price is multiplied by how many items ordered. The information is updated for the next time the program is ran.

If the user enters in a desired quantity more than what is in stock, a message is displayed stating that we do not have enough inventory and no further action is taken.
