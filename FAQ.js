const buttons = [];
const paragraphs = [];
const icons = [];
const boxes = [];
const minus_icon = `<img src="material/icon-minus.svg">`;
const plus_icon = `<img src="material/icon-plus.svg">`;

for (let i = 1; i <= 4; i++) {
  buttons.push(document.getElementById(`Q${i}-btn`));
  paragraphs.push(document.getElementById(`Q${i}-p`));
  icons.push(document.getElementById(`Q${i}-icon`));
  boxes.push(document.getElementById(`Q${i}`));
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    // Hide all other answers
    for (let j = 0; j < buttons.length; j++) {
      if (j !== i) {
        boxes[j].style.height = "60px";
        boxes[j].style.borderBottom = "1px solid rgb(230, 230, 230)";
        paragraphs[j].style.visibility = "hidden";
        icons[j].innerHTML = plus_icon;
      }
    }

    // Toggle the current answer
    if (paragraphs[i].style.visibility === "hidden") {
      boxes[i].style.height = "120px";
      paragraphs[i].style.visibility = "visible";
      boxes[i].style.borderBottom = "none";
      icons[i].innerHTML = minus_icon;
    } else {
      boxes[i].style.height = "60px";
      boxes[i].style.borderBottom = "1px solid rgb(230, 230, 230)";
      paragraphs[i].style.visibility = "hidden";
      icons[i].innerHTML = plus_icon;
    }
  };
}
