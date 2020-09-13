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

// for (let i = 1; i < 101; i++) {
//     if (i % 15 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else {
//         console.log(i);
//     }
// };

//////////////////////////////////////////

//Getting to Know You

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

//1)
kenny.shift();
kenny.unshift('Gameboy');
console.log(kenny);

//2)
jimClark[1] += 1;
console.log(jimClark);

//3)
ryan[2] = 'Gotham City';
console.log(ryan);

//4) 
reuben.splice(2,1,'Chicago');
console.log(reuben);

//5)
jimHaff.splice(2,3,'Seattle' , 'San Fransisco' , 'Portland');
console.log(jimHaff);

//6)
jimHaff.splice(2, 1);
console.log(jimHaff);
