// Task 1
/* Написать скриптик, который сосчитает и 
выведет результат от возведения 2 в степень 10, начиная со степени 1 */
let i = 1;
let result = 1;
while(i < 11) {
    result = result * 2
    i++
}
console.log(result);

//Task 1*
/* Преобразовать 1 задачу в функцию, принимающую на вход степень,
в которую будет возводиться число 2 */

const numbers = function(num) {
    return Math.pow(2, num)
}
console.log(numbers(10));

// Task 2 
/* Написать скрипт, который выведет 5 строк в консоль таким образом,
чтобы в первой строчке выводилось :), во второй :):) и так далее */
let smile = ':)';
let result2 = '';
for(let x = 1; x <=5; x++) {
    result2 += smile
    console.log(result2)
}

// Task 2*
/* Преобразовать 2 задачу в функцию, принимающую на вход строку,
которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода */
function printSmile(stroka, numberOfRows) {
    for(let y = 1; y <= numberOfRows; y++) {
        console.log(stroka.repeat(y))
    }
}
printSmile(';)', 5)


//Task 3**
/*  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list' */
function getWordStructure(word) {
    const vowels = 'aeiouy'.split('')
    const consonants = 'bcdfghjklmnbvcxzwrtpqs'.split('')
    let numberOfVowels = 0;
    let numberofConsonants = 0;
    for(char of word.toLowerCase()) {
        if(vowels.includes(char)) numberOfVowels++;
        if (consonants.includes(char)) numberofConsonants++;
    }
    console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberofConsonants} согласных букв` )
}

getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')

//Task 4**
/* Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba' */
function isPalindrom(word) {
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
}
 console.log(`${isPalindrom('Abba') ? 'It is a palindrom' : 'It is not a palidrom'}`) 