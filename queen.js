let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
shuffle(values);
alert(values);

function play(values) {
  let turn = 0;
  let card;
  while (values.length > 0) {
    turn++;
    if (turn % 2 != 0) {
      alert("You pick card!");
      card = values.pop();

      // alert(values);
    } else {
      alert("I pick card!");
      //------------
    }
    alert(card);
    if (card == "Q") {
      if (turn % 2 != 0) {
        alert("You win!");
      }
    }
  }
}

play(values);
