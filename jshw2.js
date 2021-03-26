// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let array1 = [34, 45, 23, 22, 77, 11];
// for (let i = 1; i < array1.length; i++) {
//     console.log(array1[i])
// }

// let array2 = ['Hello', 'my', 'name', 'is' , 'Matthew'];
// for (let i = 0; i < array2.length; i++) {
//     console.log(array2[i])
// }

// let array3 = ['Hello world!', 22, true, 'chill', 15];
// for (let i = 0; i < array3.length; i++) {
//     console.log(array3[i])
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let emptyArr = [];
// emptyArr[0] = 1;
// emptyArr[1]= 4;
// emptyArr[2]= 6;
// emptyArr[3]= 15;
// emptyArr[4]= 10;
// console.log(emptyArr);


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ex excepturi illo iste itaque, laborum maxime molestiae nam optio possimus quo, quod, soluta totam! Blanditiis delectus deleniti facilis illo temporibus.\n'
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${text}</div>`)
//
// }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

 // let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ex excepturi illo iste itaque, laborum maxime molestiae nam optio possimus quo, quod, soluta totam! Blanditiis delectus deleniti facilis illo temporibus.\n'
 //
 // for (let i = 0; i < 10; i++) {
 //     document.write(`<div>${text} ${i}</div>`)
 //
 // }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ex excepturi illo iste itaque, laborum maxime molestiae nam optio possimus quo, quod, soluta totam! Blanditiis delectus deleniti facilis illo temporibus.\n';
// let i = 0;
// while (i<10) {
//     document.write(`<h1>${text}</h1>`);
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ex excepturi illo iste itaque, laborum maxime molestiae nam optio possimus quo, quod, soluta totam! Blanditiis delectus deleniti facilis illo temporibus.\n';
// let i = 0;
// while (i<10) {
//     document.write('<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam doloremque eligendi facilis fugit harum mollitia numquam! Deleniti, expedita fugit incidunt magni' + ' ' + i + ' ' + 'odit quaerat quasi quibusdam quidem ratione reiciendis velit.</h1>');
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numArray = [10, 24 , 15, 67 , 245, 11, 22, 7, 11, 56];
// for (let i = 0; i < numArray.length; i++) {
//     console.log(numArray[i])
// }

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strArray = ['hello', 'str', 'number', 'java', 'python', 'alert', 'meriann', 'chill', 'js', 'okten'];
// for (let i = 0; i < strArray.length; i++) {
//     console.log(strArray[i])
// }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let anyArray = ['hello', 15, true, 10, false, true, 22, 'chill', 'js', 'okten'];
// for (let i = 0; i < anyArray.length; i++) {
//     console.log(anyArray[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let anyArray = ['hello', 15, true, 10, false, true, 22, 'chill', 'js', 'okten'];
// for (let i = 0; i < anyArray.length; i++) {
//     if (typeof anyArray[i] === 'boolean')
//     console.log(anyArray[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let anyArray = ['hello', 15, true, 10, false, true, 22, 'chill', 'js', 'okten'];
// for (let i = 0; i < anyArray.length; i++) {
//     if (typeof anyArray[i] === 'number')
//     console.log(anyArray[i])
// }

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let anyArray = ['hello', 15, true, 10, false, true, 22, 'chill', 'js', 'okten'];
// for (let i = 0; i < anyArray.length; i++) {
//     if (typeof anyArray[i] === 'string')
//     console.log(anyArray[i])
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let emptyArr = [];
// emptyArr[0] = 21;
// emptyArr[1] = 'china';
// emptyArr[2] = false;
// emptyArr[3] = 'aloha';
// emptyArr[4] = 78;
// emptyArr[5] = 23;
// emptyArr[6] = true;
// emptyArr[7] = 45;
// emptyArr[8] = 'js';
// emptyArr[9] = 'front';
//
// for (let i = 0; i < emptyArr.length; i++) {
//     console.log(emptyArr[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i<11; i++) {
//     console.log('Поточний крок №' + i);
//     document.write('Поточний крок №' + i + '<br>')
// }

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i<101; i++) {
//     console.log('Поточний крок №' + i);
//     document.write('Поточний крок №' + i + '<br>')
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i<101; i+=2) {
//     console.log('Поточний крок №' + i);
//     document.write('Поточний крок №' + i + '<br>')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i<101; i++) {
//     if (i % 2 == 0) {
//         console.log('Поточний крок №' + i);
//         document.write('Поточний крок №' + i + '<br>')
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i<101; i++) {
//     if (i % 2 == 1) {
//         console.log('Поточний крок №' + i);
//         document.write('Поточний крок №' + i + '<br>')
//     }
// }

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// string = '';
// for (let i = 0; i < arr.length; i++) {
//     string = string + arr[i];
// }
// console.log(string)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let string = '';
// let i = 0;
// while (i < arr.length) {
//     string = string + arr[i];
//     i++;
// }
// console.log(string);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let a = ''
// for (let string of arr) {
//     a =  a + string;
// }
// console.log(a)

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr = ['a', 'b', 'c'];
let a = ''
for (let string of arr) {
    a =  a + string;
}
console.log(a)*/


//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

/*
let arr = ['a', 'b', 'c'];

for (let i = 1; i < 4; i++) {
    arr.push(i);
}
console.log(arr)
*/

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1, 2, 3];
// let arr2 = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     arr2.push(arr[i]);
// }
// console.log(arr2)


// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr)

// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// arr.shift();
// console.log(arr)

// Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// document.write(arr.pop())

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// let sliceArea = arr.slice(3, 5);
// console.log(sliceArea)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// let sliceArea = arr.slice(0, 2);
// console.log(sliceArea)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr)

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let x = arr.splice(3,5 ,'a', 'b', 'c');
// arr.push(x[0],x[1]);
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,5, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
// console.log(arr)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [1, 2, 3, 4, 5, 45, 22, 11, 77, 24];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
//
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [1, 2, 3, 4, 5, 45, 22, 11, 77, 24];
// let emptyArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     emptyArr.push(arr[i]);
// }
// console.log(emptyArr)

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
/*let arr = [1, 2, 3, 4, 5, 45, 22, 11, 77, 24];
let emptyArr = [];

for (let i = 0; i < 10; i++) {
    emptyArr[i] = arr[i]
}
console.log(emptyArr)*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while:
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// 2. перебрати його циклом for:
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
//
// while (i < arr.length) {
//     if (i % 2 == 1) {
//         console.log(arr[i])
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 1) {
//         console.log(arr[i])
//     }
//
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
//
// while (i < arr.length) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
//
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let word = 'okten'
//
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 3 == 0) {
//        arr [i] = word;
//    }
// }
// console.log(arr)

// 8. вивести масив в зворотньому порядку.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let reverseArr = [];
// for (let i = arr.length - 1; i >= 0 ; i--) {
//     console.log(arr[i])
//     reverseArr.push(arr[i]);
// }
// console.log(reverseArr)

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//1. перебрати його циклом while:
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length - 1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }

// 2. перебрати його циклом for:
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
//
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length - 1;
//
// while (i >= 0) {
//     if (i % 2 == 1) {
//         console.log(arr[i])
//     }
//     i--;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 2 == 1) {
//         console.log(arr[i])
//     }
//
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length - 1;
//
// while (i >= 0) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
//
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let word = 'okten'
//
// for (let i = arr.length - 1; i >= 0; i--) {
//    if (arr[i] % 3 == 0) {
//        arr [i] = word;
//    }
//     console.log(arr[i])
// }

// 10 створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
// let arr1 = [];
// let arr2 = []
// for (let i = 0; i < 50; i++) {
// arr1[i] = i * 2;
// arr2[i] = i * 2 + 1;
// }
// let newArr = arr1.concat(arr2)
// console.log(newArr)

