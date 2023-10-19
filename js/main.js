// 1. Дан масив. Знайти суму та кількість позитивних елементів.
let numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const filteredNumbers = numbers.filter(item => item > 0);
const sum = filteredNumbers.reduce((sum, current) => sum + current, 0);
console.log('1. Сума позитивних елементів масиву: ' + sum + '; Кількість позитивних елементів масиву: ' + filteredNumbers.length);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
const initialAccumulator = { value: undefined, index: undefined }; const minValueObj = numbers.reduce(function (accumulator, item, index) {
    if (index === 0) { accumulator.value = item; accumulator.index = index; } else if (item < accumulator.value) { accumulator.value = item; accumulator.index = index; }
    return accumulator;
}, initialAccumulator);
console.log('2. Мінімальний елемент масиву: ' + minValueObj.value + '; порядковий номер: ' + minValueObj.index);

// 3. Знайти максимальний елемент масиву та його порядковий номер.
const maxInitialAccumulator = { value: undefined, index: undefined };
const maxValueObj = numbers.reduce(function (accumulator, item, index) {
    if (index === 0) {
        accumulator.value = item;
        accumulator.index = index;
    } else if (item > accumulator.value) {
        accumulator.value = item;
        accumulator.index = index;
    }
    return accumulator;
},
    maxInitialAccumulator);
console.log('3. Максимальний елемент масиву: ' + maxValueObj.value + '; порядковий номер: ' + maxValueObj.index);

//4.  Визначити кількість негативних елементів.
const filteredNegativeNumbers = numbers.filter(item => item < 0);
console.log('4. Кількість негативних елементів масиву: ' + filteredNegativeNumbers.length);

//5. Знайти кількість непарних позитивних елементів.
const filteredPosOddNumbers = numbers.filter(item => item > 0 && (item % 2));
console.log('5. Кількість непарних позитивних елементів масиву: ' + filteredPosOddNumbers.length);

//6. Знайти кількість парних позитивних елементів.

const filteredPosEvenNumbers = numbers.filter(item => item > 0 && !(item % 2));
console.log('6. Кількість парних позитивних елементів масиву: ' + filteredPosEvenNumbers.length);

//7. Знайти суму парних позитивних елементів.
const PosEvenNumbersSum = filteredPosEvenNumbers.reduce((PosEvenNumbersSum, current) => PosEvenNumbersSum + current, 0);
console.log('7. Сума парних позитивних елементів масиву: ' + PosEvenNumbersSum);

//8. Знайти суму непарних позитивних елементів.
const PosOddNumbersSum = filteredPosOddNumbers.reduce((PosOddNumbersSum, current) => PosOddNumbersSum + current, 0);
console.log('8. Сума непарних позитивних елементів масиву: ' + PosOddNumbersSum);

//9. Знайти добуток позитивних елементів.
const product = filteredNumbers.reduce((product, current) => product *= current, 1);
console.log('9. Добуток позитивних елементів масиву: ' + product);

//10. Знайти найбільший серед елементів масиву, інші обнулити.
let max = Math.max(...numbers);
let indexOfMax = numbers.indexOf(max);
let res = numbers.map(function (currentValue) {
    return currentValue === max ? currentValue : 0;
});
console.log('10. Знайти найбільший серед елементів масиву, інші обнулити. max=' + max + '; index=' + indexOfMax + '; newArray=[' + res.join(', ') + ']');