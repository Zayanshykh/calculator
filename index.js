#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number ", type: "number", name: "secondnumber" },
    { message: "select any operator to perform operation ", type: "list",
        name: "operator", choices: ["Addition", "Subtraction", "divison", "multipition", "reminder", "exponentiation"]
    }
]);
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.operator === "divison") {
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else if (asnwer.operator === "multipition") {
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.operator === "reminder") {
    console.log(asnwer.firstnumber % asnwer.secondnumber);
}
else if (asnwer.operator === "exponentiation") {
    console.log(asnwer.firstnumber ** asnwer.secondnumber);
}
else {
    console.log("please select valid operator");
}
