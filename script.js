// // Assignmnt No 1

// // Create a class called PersonAccount.It has firstname, lastname, incomes, expenses properties and 
// // it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
// // Incomes is an array of objects income and its description and expenses is also an array of objects
// //  having expense and its description.

// class PersonAccount {
//     constructor(firstname, lastname, incomes, expense) {

//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.incomes = incomes;
//         this.expense = expense;
//         this.accountInfo();
//         this.totalIncome();
//         this.totalExpense();
//         this.addIncome();
//         this.addExpense();
//         this.accountBalance();
//     }
//     accountInfo() {
//         document.write("Account Holder name is " + this.firstname + " " + this.lastname + " His Income is " + this.incomes + " and expense is " + this.expense + "<br>");
//     }
//     totalIncome() {

//         document.write(" Your total income is " + this.incomes + "<br>");
//     }
//     totalExpense() {

//         document.write(" Your total expense is " + this.expense);
//         document.write("<br>");
//     }

//     addIncome() {
//         var amnt = prompt("Enter amount to add in income");
//         amnt = parseInt(amnt);
//         if (amnt > 0) {
//             this.incomes += amnt;
//             document.write("\nYou added " + amnt + " to your account");
//             document.write("<br>");
//             document.write("\nYour income after added to your account is " + this.incomes)
//             // console.log(this.incomes);
//         }
//         document.write("<br>");

//     }
//     addExpense() {
//         var amnt = prompt("Enter amount to add in expense");
//         amnt = parseInt(amnt);
//         if (amnt > 0) {
//             this.expense += amnt;
//             document.write("\nYou added " + amnt + " for expense");
//             document.write("<br>");
//             if (amnt > this.incomes) {
//                 alert("Your account does not have enough money")
//             }
//             else {
//                 document.write("\nYour expense after added to your account is " + this.expense)
//             }
//             // console.log(this.incomes);
//         }

//     }
//     accountBalance() {
//         document.write("<br>" + "**********************" + "<br>");
//         document.write(this.firstname + " " + this.lastname + " account info" + "\n");
//         document.write("<br> Total income: " + this.incomes);
//         document.write("<br> Total expense: " + this.expense);
//         var saving = this.incomes - this.expense;
//         document.write("<br>" + " Account bank balance: " + saving);
//         document.write("<br>" + "**********************");

//     }

// }


// const PersonAccount1 = new PersonAccount('Muhammad', 'Sameer', 500, 300);






// *************************************************************************** //




// Assignment No 2


// *************************************************************************** //

// // Create an Automobile class. The class will have name, model, color, type properties and
// // create different methods e.g openOrCloseDoor() logs doors are opened or closed, start()
// // logs car is ready for drive.


// class Automobile {
//     constructor ( name , model , color , type) {
//         this.name  = name ;
//         this.model = model ;
//         this.color = color ;
//         this.type  = type ;
//         this.openDoor() ;
//         this.closeDoor() ;
//         this.start(name) ;

//     }
//         openDoor(){

//            document.write( this.name + " doors are opened");
//            document.write("<br>");
//         }

        
//         closeDoor(){

//             document.write( this.name + " doors are closed");
//             document.write("<br>");
//         }

//         start(){

//             document.write( this.name + " is Ready For Drive") ;
//             document.write("<br>");
//         }


//     }

//    const auto = new Automobile( 'Civic' , '2020' , 'Black' , 'Automatic') ;






// *************************************************************************** //


// Assignment No 3


// *************************************************************************** //

   
// // Create Car, Bus and Truck child class from the Automobile Class.


    // class Car extends Automobile {
    //       constructor ( name , model , color , type ){
    //         super( name , model , color , type)
    //       }
          
    // }

    // class Bus extends Automobile {
    //     constructor ( name , model , color , type , horns , seats) {
    //         super( name , model , color , type )
    //         this.horns = horns ;
    //         this.seats = seats;

    //     }
    // }
   

    // class Truck extends Automobile {
    //     constructor ( name , model , color , type , tyre , loadedItems) {
    //         super( name , model , color , type )
    //         this.tyre = tyre ;
    //         this.loadedItems = loadedItems;
    // }
    
    // }































