import React from 'react';
import './review.css';

const test = 4.25;

let first = (test) => {
  if (test >= 1) {
    return 100;
  } else if (test >= 0.75 && test < 1) {
    return 70;
  } else if (test >= 0.5 && test < 0.75) {
    return 50;
  } else if (test >= 0.25 && test < 0.5) {
    return 30;
  } else {
    return 0;
  }
};
let second = (test) => {
  if (test >= 2) {
    return 100;
  } else if (test >= 1.75 && test < 2) {
    return 70;
  } else if (test >= 1.5 && test < 1.75) {
    return 50;
  } else if (test >= 1.25 && test < 1.5) {
    return 30;
  } else {
    return 0;
  }
}
let third = (test) => {
  if (test >= 3) {
    return 100;
  } else if (test >= 2.75 && test < 3) {
    return 70;
  } else if (test >= 2.5 && test < 2.75) {
    return 50;
  } else if (test >= 2.25 && test < 2.5) {
    return 30;
  } else {
    return 0;
  }
}
let fourth = (test) => {
  if (test >= 4) {
    return 100;
  } else if (test >= 3.75 && test < 4) {
    return 70;
  } else if (test >= 3.5 && test < 3.75) {
    return 50;
  } else if (test >= 3.25 && test < 3.5) {
    return 30;
  } else {
    return 0;
  }
};
let fifth = (test) => {
  if (test >= 5) {
    return 100;
  } else if (test >= 4.75 && test < 5) {
    return 70;
  } else if (test >= 4.5 && test < 4.75) {
    return 50;
  } else if (test >= 4.25 && test < 4.5) {
    return 30;
  } else {
    return 0;
  }
};

const widthVar1 = first(test) + "%";
const changeWidth1 = {
  "--width": widthVar1
}

const widthVar2 = second(test) + "%";
const changeWidth2 = {
  "--width": widthVar2
}

const widthVar3 = third(test) + "%";
const changeWidth3 = {
  "--width": widthVar3
}

const widthVar4 = fourth(test) + "%";
const changeWidth4 = {
  "--width": widthVar4
}

const widthVar5 = fifth(test) + "%";
const changeWidth5 = {
  "--width": widthVar5
}

const starRating = () => (
  <div className="starRating">
    <span class="star1 fa fa-star" style={changeWidth1}></span>
    <span class="star2 fa fa-star" style={changeWidth2}></span>
    <span class="star3 fa fa-star" style={changeWidth3}></span>
    <span class="star4 fa fa-star" style={changeWidth4}></span>
    <span class="star5 fa fa-star" style={changeWidth5}></span>
  </div>
);

export default starRating;