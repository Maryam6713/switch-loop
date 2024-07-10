//---------switch loop---------//

switch('thursday'){
       case 'sunday':
        console.log('today is holiday');
        break;
        case'monday':
        console.log("it is not your class day")
        break;
        case'thursday':
        console.log("it is your class day")
        break;
        default :
        console.log("holiday")
    
    }

    switch('karachi'){
        case 'punjab':
         console.log('the biggest city of population ');
         break;
         case'karachi':
         console.log("the city of light")
         break;
         case'kashmir':
         console.log("the city of beautines")
         break;
         default :
         console.log("Do not know about this place")
     
     }

     ///----------------------------------------------------------------------//

     function priceChecker(milkShakes) {
    var price;
    var quantity;
    switch (milkShakes) {
        case 'mango':
            price = 300;
            quantity = 100;
            break;
        case 'banana':
            price = 250;
            quantity = 150;
            break;
        case 'strawbarry':
            price = 350;
            quantity = 80;
            break; 
        case 'chocolate':
            price = 450;
            quantity = 60
            break;
            default :
            price = 0;
            quantity = 0;
            console.log('product is not available');
    
    }
    var output =userChoice + ' shake price is  Rs.' + price + ' and quantities are ' + quantity;
    return output
}
var userChoice = prompt("Enter the flavour of shake")
var functionCall = priceChecker(userChoice)
console.log(functionCall);



///----------------while loop-------------------//

var i = 5
while(i <= 10){
  console.log(i);
  i++
}
//-----table 2 by while loop---------//
var str = 2
var i = 1
while(i <= 10){
  console.log(str + " X " + i + " = " + str*i);
  i++
}

var flag = true;
var count= 0
while (flag){
    count += 5
    console.log(count)
    if(count === 50){
        flag = false
    }
    
}

///-------------------Do while loop---------------//
var number = 5
var i = 1
do{
    console.log('lets do')
    i++
}while(i<= 10){
    console.log(number + " X " + i + " = " + number*i)
}


    