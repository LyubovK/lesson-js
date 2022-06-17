// Task 1
// При нажатии b-1 выполняете функцию f1.
// Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

function f1() {
  let a1 = {
    one: 15,
    two: 16,
    five: 20,
  };
  document.querySelector(".out-1").innerHTML = a1.two;
}

document.querySelector(".b-1").onclick = f1;

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"

function f2() {
  let a2 = {
    one: "hello",
    two: "mahai",
    five: "hi",
  };

  return a2.five;
}

document.querySelector(".b-2").onclick = () => {
  document.querySelector(".out-2").innerHTML = f2();
};

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a3.
// Возвратите это значение. Вывод - через пробел.
// Вывод, как и в предыдущем задании пишем "руками"

function f3() {
  let a3 = {
    one: "hello",
    two: "mahai",
    five: "hi",
    test: 21,
    odd: "hi",
    mix: "mix",
  };
  return a3.odd;
}

document.querySelector(".b-3").onclick = () => {
  document.querySelector(".out-3").innerHTML = f3();
};

// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4.
// Формат вывода - ключ пробел значение перенос строки +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!

let a4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
function f4() {
  let out = "";
  for (const key in a4) {
    out += a4[key] + " <br>";
  }

  return out;
}

document.querySelector(".b-4").onclick = () => {
  document.querySelector(".out-4").innerHTML = f4();
};

// Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).

function f5(arr, block) {
  let out = "";
  for (const key in arr) {
    out += arr[key] + " <br>";
  }
  document.querySelector(block).innerHTML = out;
  // тут вывод в блок block
}

// давайте протестируем f5

document.querySelector(".b-5").onclick = () => {
  let a5 = {
    one: 1,
    two: 2,
  };
  f5(a5, ".out-5");
};

// Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ,
// а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.

let a6 = {
  b: 17,
  e: 22,
};

const i61 = document.querySelector(".i-61");
const i62 = document.querySelector(".i-62");

function f6() {
  a6[i61.value] = i62.value;
  f5(a6, ".out-6");
}

document.querySelector(".b-6").onclick = f6;

// Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел

let a20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};

function f20() {
  let out = "";
  let x = 2;
  for (line in a20) {
    let state = a20[line];
    for (let i = 0; i < state.length; i++) {
      let data = state[i];
      console.log("1", data);
      for (let k = 0; k < data.length; k++) {
        if (x == data[k]) {
          out += line + " ";
        }
      }
    }
  }
  document.querySelector(".out-20").innerHTML = out;
}

document.querySelector(".b-20").onclick = f20;
