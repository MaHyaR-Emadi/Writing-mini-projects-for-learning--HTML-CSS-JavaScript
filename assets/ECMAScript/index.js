// const num1 = 20;
// const num2 = 55;
// const num3=1;
const highestNumber = (num1, num2, num3) => {
    if ( num1 > num2 && num1 > num3){
        return num1;
    }else if ( num2 > num1 && num2 > num3){
        return num2;
    } else {
        return num3
    }
};

console.log(`highest Number is : ${highestNumber(-11,-1,-110)} `);

// const city = `vancuver` ;
// const citystat = city === "vancuver" || city === "dubai" || city === "california"
// ? true : false ;
// const charge = 81 ;
// const chargestate = charge >= 15 && charge <= 80 ;
// console.log ( citystat && chargestate === true ? "you have an update"
// : "go sleep you dont have any update cyka blyat"  ) ;

// const samaneData = [
//     "Samane",
//     "Yaghoobi",
//     26,
//     "Software engineer",
//     ["Sahar", "Hasti", "Negin", "Mahla"],
//   ];

//   const samaneObjectData = {
//     firstName: "Samane",
//     lastName: "Yaghoobi",
//     age: 26,
//     job: "Software engineer",
//     friends: ["Sahar", "Hasti", "Negin", "Mahla"],
//   };

//   samaneObjectData.country = "Iran";

//   console.log(samaneObjectData);

//   delete samaneObjectData.friends;
//   console.log(samaneObjectData);
