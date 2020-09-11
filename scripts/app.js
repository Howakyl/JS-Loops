//Easy going 
//1)
// for (let i = 1; i < 21; i++) {
//     console.log(i);
// }

//////////////////////////////////////////
//Get Even
// 1)

// for (let i =0; i < 201; i += 2) {
//     console.log(i);
// };

//////////////////////////////////////////

//Excited Kitten
//1) 
// for (i = 0; i < 20; i++) {
//     console.log('Love me, pet me! HSSSSSS!');
// }
//2)
// const catResponses = ['...human...why you taking pictures of me?...',
// '...the catnip made me do it...',
// '...why does the red dot always get away...']

// for (i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         let randomNum = Math.floor(Math.random() * 3);

//         if (randomNum === 0) {
//             console.log(catResponses[0]);
//         } else if (randomNum === 1) {
//             console.log(catResponses[1]);
//         } else if (randomNum === 2) {
//             console.log(catResponses[2]);
//         }
//     } else {
//         console.log('Love me, pet me! HSSSSSS!');
//     }
// }

//////////////////////////////////////////

//Fizz Buzz

for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(i);
    }
};