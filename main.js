// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str1.length)
// let str2 = 'lorem ipsum';
// console.log(str2.length)
// let str3 = 'javascript is cool';
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str1.toUpperCase())
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase())
// let str3 = 'javascript is cool'
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase())
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase())
// let str3 = 'JAVASCRIPT IS COOL'
// console.log(str3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let s = str.trim()
// console.log(s);
// console.log(s.length)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ',);
// console.log(split)

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map((num) => (num.toString()));
// console.log(map)
//
// // - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від
// значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


function sortNums(numbers, direction) {
    if (direction === 'ascending') {
        numbers.sort(function (a, b){
            return a-b;}
        )
    } else {
        numbers.sort(function (a, b){
            return b-a;}
        )
    }
    console.log(numbers)
}

let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// nums.sort(function (a, b){
//     return b-a;}
// )
// console.log(nums)
//


// //
// // - є масив


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sort = coursesAndDurationArray.sort((m1,m2)=>{
//     return m2.monthDuration - m1.monthDuration;
// })
//
// console.log(sort)
//
// let filtered = coursesAndDurationArray.filter((course)=>{
//     return course.monthDuration > 5;
// })
//
// console.log(filtered)

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
 let cards = [
     {
         cardSuit: 'spade',
         value: 6,
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 6,
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 6,
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 6,
         color: 'black',
     },
     {
         cardSuit: 'spade',
         value: 7,
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 7,
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 7,
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 7,
         color: 'black',
     },
     {
         cardSuit: 'spade',
         value: 8,
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 8,
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 8,
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 8,
         color: 'black',
     },
     {
         cardSuit: 'spade',
         value: 9,
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 9,
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 9,
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 9,
         color: 'black',
     },
     {
         cardSuit: 'spade',
         value: 10,
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 10,
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 10,
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 10,
         color: 'black',
     },
     {
         cardSuit: 'spade',
         value: 'jack',
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 'jack',
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 'jack',
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 'jack',
         color: 'black',
     },
     {
         cardSuit: 'spade',
         value: 'queen',
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 'queen',
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 'queen',
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 'queen',
         color: 'black',
     },
     {
         cardSuit: 'spade',
         value: 'king',
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 'king',
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 'king',
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 'king',
         color: 'black',
     },
     {
         cardSuit: 'spade',
         value: 'ace',
         color: 'black',
     },
     {
         cardSuit: 'diamond',
         value: 'ace',
         color: 'red',
     },
     {
         cardSuit: 'heart',
         value: 'ace',
         color: 'red',
     },
     {
         cardSuit: 'clubs',
         value: 'ace',
         color: 'black',
     },
     {
         cardSuit: '',
         value: 'joker',
         color: 'black',
     },
     {
         cardSuit: '',
         value: 'joker',
         color: 'red',
     }
 ];
console.log(cards)
let picoviiTuz = cards.filter((card)=>{
    return card.value === 'ace' && card.cardSuit === 'spade'
})

console.log(picoviiTuz)

let sixCards = cards.filter((card)=>{
    return card.value === 6
})

console.log(sixCards)

let redCards = cards.filter((card)=>{
    return card.color === 'red'
})

console.log(redCards)

let diamondCards = cards.filter((card)=>{
    return card.cardSuit === 'diamond'
})

console.log(diamondCards)

console.log(cards)

let clubsCards = cards.filter((card)=>{
    return card.cardSuit === 'clubs' && (card.value > 9 || typeof card.value === 'string')
})

console.log(clubsCards)

//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }