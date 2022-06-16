//  Task 1
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

const elemOut = document.querySelector(".out-1");
t1 = () => {
  let out = "";
  for (let i = 0; i < 17; i++) {
    out = out + i + "_";
  }
  elemOut.innerHTML = out;
};

document.querySelector(".b-1").onclick = t1;

//  Task 2
// Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
// 12_14_16_18_20_22_24_26_28_30_32_34_36_38_
//Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
const elemOut2 = document.querySelector(".out-2");
t2 = () => {
  let out = "";
  for (let i = 12; i < 40; i = i + 2) {
    out = out + i + "_";
  }

  elemOut2.innerHTML = out;
};

document.querySelector(".b-2").onclick = t2;

//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
const elemOut3 = document.querySelector(".out-3");
t3 = () => {
  let out = "";
  for (let i = 25; i > 6; i--) {
    out = out + i + "_";
  }

  elemOut3.innerHTML = out;
};

document.querySelector(".b-3").onclick = t3;

//  Task 4
// Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

const elemOut4 = document.querySelector(".out-4");
t4 = () => {
  let out = "";
  for (let i = 77; i >= 35; i = i - 3) {
    out = out + i + "_";
  }

  elemOut4.innerHTML = out;
};

document.querySelector(".b-4").onclick = t4;

//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

const elemOut5 = document.querySelector(".out-5");
t5 = () => {
  let out = "";
  for (let i = 1; i <= 17; i++) {
    i % 2 == 0 ? (out = out + i + "_**") : (out = out + i + "_*");
  }

  elemOut5.innerHTML = out;
};

document.querySelector(".b-5").onclick = t5;

//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//
const input6 = document.querySelector(".i-6");
const elemOut6 = document.querySelector(".out-6");
t6 = () => {
  const inputValue = input6.value;
  let out = "";
  for (let i = 1; i <= inputValue; i++) {
    out += "*<br>";
  }

  elemOut6.innerHTML = out;
};

document.querySelector(".b-6").onclick = t6;

//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция t7, которая выводит в .out-7 числа от введенного пользователем до нуля включительно.
// Разделитель - знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4_3_2_1_0_
// Задача решается с помощью цикла.

const input7 = document.querySelector(".i-7");
const elemOut7 = document.querySelector(".out-7");
const t7 = () => {
  const inputValue = +input7.value;
  let out = "";
  for (let i = inputValue; i > 0; i--) {
    out += i + "_";
  }

  elemOut7.innerHTML = out;
};

document.querySelector(".b-7").onclick = t7;

//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция t8, которая выводит в .out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//  4_5_6_7_8_
// Задача решается с помощью цикла.

const inputMin = document.querySelector(".i-81");
const inputMax = document.querySelector(".i-82");
const elemOut8 = document.querySelector(".out-8");
const t8 = () => {
  let out = "";
  for (let i = inputMin.value; i <= inputMax.value; i++) {
    out += i + "_";
  }

  elemOut8.innerHTML = out;
};

document.querySelector(".b-8").onclick = t8;

//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция t9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель - подчеркивание. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
// 4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один
const input91 = document.querySelector(".i-91");
const input92 = document.querySelector(".i-92");
const elemOut9 = document.querySelector(".out-9");
const t9 = () => {
  let inputValue1 = input91.value;
  let inputValue2 = input92.value;
  let min = 0;
  let max = 0;
  let out = "";
  if (inputValue1 > inputValue2) {
    min = inputValue2;
    max = inputValue1;
  } else {
    min = inputValue1;
    max = inputValue2;
  }
  for (let i = min; i <= max; i++) {
    out += i + "_";
  }

  elemOut9.innerHTML = out;
};

document.querySelector(".b-9").onclick = t9;

//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1970 включительно.
// Разделитель - знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).

const elemOut10 = document.querySelector(".out-10");
const t10 = () => {
  const min = 1950;
  const max = 1970;
  let out = "";
  for (let i = min; i <= max; i = i + 2) {
    out += i + "_";
  }
  elemOut10.innerHTML = out;
};

document.querySelector(".b-10").onclick = t10;

//  Task 11
// Кнопка .b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11 в переменную divs11
// перебрать их с помощью цикла. Обращение к div выглядит так divs[i].innerHTML
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_
const divs11 = document.querySelectorAll(".div-11");
const elemOut11 = document.querySelector(".out-11");
const t11 = () => {
  for (let i = 0; i < divs11.length; i++) {
    elemOut11.innerHTML += divs11[i].textContent + "_";
  }
};

document.querySelector(".b-11").onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
const divs12 = document.querySelectorAll(".div-12");
// const elemOut12 = document.querySelector(".out-12");

const t12 = () => {
  for (let i = 0; i < divs12.length; i++) {
    divs12[i].style.background = "orange";
  }
};

document.querySelector(".b-12").onclick = t12;

//  Task 13
// С помощью цикла присвойте всем input .i-13 value равное 1 для первого, 2 для второго и 3 для третьего.
const input13 = document.querySelectorAll(".i-13");
const t13 = () => {
  for (let i = 0; i < input13.length; i++) {
    input13[i].value += i + 1;
  }
};

document.querySelector(".b-13").onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
const input14 = document.querySelectorAll(".i-14");
let out14 = document.querySelector(".out-14");
const t14 = () => {
  let out = "";
  for (let i = 0; i < input14.length; i++) {
    if (input14[i].checked) {
      out = input14[i].value;
    }
  }
  out14.innerHTML = out;
};

document.querySelector(".b-14").onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Подсказка (10 - i) + '_' + i + '_'
let out15 = document.querySelector(".out-15");
const t15 = () => {
  let out = "";
  for (let i = 10; i > 0; i--) {
    out += i + "_" + (10 - i) + "_";
  }
  out15.innerHTML = out;
  console.log(out15);
};

document.querySelector(".b-15").onclick = t15;
