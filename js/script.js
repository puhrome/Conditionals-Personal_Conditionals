/**
 * Conditionals Personal Created by Phirom Yim on 5/22/14.
 */

//if condition is true print to console
//calculate the recipe for making coffee in a french press

var water = Number(prompt ("Enter how many cups of water did you drink today?"));//user input cups of water

if(water){//if condition is true
    console.log("You have had " + water + " cup(s) of water!");//print to concatenation to console
}else{//if no input
    alert("Please enter a valid number!");//alert error
}
var dailyNeed = 8;//cup minimum is amount of beans times amount of water
var requiredWater = dailyNeed - water;//set up calculation to find out how much water is required
//dailyneed minus water input gives required water needed
if(water >= dailyNeed){//if condition is less than or equal to
    console.log("Great job on the water drinking!");//print to console
    alert("Great job on the water drinking!");//print alert if condition is true
    //print to console if true
}else{//if condition is not
    console.log("You need" + " " + requiredWater + " more cup(s) of water!");//print to console if false
    alert("You need" + " " + requiredWater + " more cup(s) of water!");//print alert with concatenation

}

