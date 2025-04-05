console.log("Hello world!")
//alert("Testing!!!!")
function duel() {
    console.log("Cool")
    const p1Health = getAttributeValue("p1-health");
    const p1Armor = getAttributeValue("p1-armor");
    const p1DPS = getAttributeValue("p1-attack");

    const p2Health = getAttributeValue("p2-health");
    const p2Armor = getAttributeValue("p2-armor");
    const p2DPS = getAttributeValue("p2-attack");
    let p1 = p1Health + p1Armor 
    let p2 = p2Health + p2Armor
    let p1ARMOR = p1Health * 2
    let p2ARMOR = p2Health * 2
    const p1armortime = p1Armor / (p2DPS / 2)
    const p2armortime = p2Armor / (p1DPS / 2)
    const p1completehealth = p1Health / p2DPS
    const p2completehealth = p2Health / p1DPS
    const p1dpstime = p1armortime + p1completehealth
    const p2dpstime = p2armortime + p2completehealth
    if(p1Health == null || p1Armor == null || p1DPS == null ||
        p2Health == null || p2Armor == null || p2DPS == null) {
            alert("Please fill out all fields before continuing!")

        } else if(Math.abs(p1dpstime - p2dpstime) <= 0.1) { 
                alert("It's a tie") 
        
        } else if (p1dpstime > p2dpstime) {
        
            alert(`Player 2 wins by ${p2dpstime.toFixed(1)}`)
        } else if (p2dpstime > p1dpstime) {
        
            alert(`Player 1 wins by${p1dpstime.toFixed(1)}`)
        
        } else {
        alert("It's a tie") 


    }
        
}
    
// // TODO Do the simulation and alert the user of the results!
// let p1 = p1Health + p1Armor 
// let p2 = p2Health + p2Armor
// let p1ARMOR = p1Health * 2
// let p2ARMOR = p2Health * 2
// let sum_health = p1Health - p2Health
// let sum_armor = p1Armor - p2Armor
// const p1armortime = p1Armor / (p2DPS / 2)
// const p2armortime = p2Armor / (p1DPS / 2)
// const p1completehealth = p1Health / p2DPS
// const p2completehealth = p2Health / p1DPS
// const p1dpstime = p1armortime + p1completehealth
// const p2dpstime = p2armortime + p2completehealth
//  {

//     let winner = '';
//     let totaltime = 0;
// if (p1dpstime > p2dpstime) {

//     alert("Player 2 wins!")
// } else if (p2dpstime > p1dpstime) {

//     alert("Player 2 wins!")
// }
// }
// if (const p1Health == null){
//     alert("Need an integer input");
// }
// } //Health + two times damage /

// function getNumberInput(name) {
// if (val === '') {

//     return null; 
// } else {
//     return parseFloat(val);


// }

// function getResult(p1, p2) {
// let duel; 
// if (p1 + p1ARMOR > p2 + p2ARMOR){
//     return ("Player one wins!") }
// else if (p2 + p2ARMOR > p1 + p1ARMOR) {
//     return ("Player two wins!") }
// }