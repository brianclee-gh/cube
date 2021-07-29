import React from 'react';
import './review.css';

const starRating = (score) => {
  // const [ratings, setRatings] = useState();

  const first = (test) => {
    if (test >= 1) {
      return 100;
    } if (test >= 0.75 && test < 1) {
      return 70;
    } if (test >= 0.5 && test < 0.75) {
      return 50;
    } if (test >= 0.25 && test < 0.5) {
      return 30;
    }
    return 0;
  };
  const second = (test) => {
    if (test >= 2) {
      return 100;
    } if (test >= 1.75 && test < 2) {
      return 70;
    } if (test >= 1.5 && test < 1.75) {
      return 50;
    } if (test >= 1.25 && test < 1.5) {
      return 30;
    }
    return 0;
  };
  const third = (test) => {
    if (test >= 3) {
      return 100;
    } if (test >= 2.75 && test < 3) {
      return 70;
    } if (test >= 2.5 && test < 2.75) {
      return 50;
    } if (test >= 2.25 && test < 2.5) {
      return 30;
    }
    return 0;
  };
  const fourth = (test) => {
    if (test >= 4) {
      return 100;
    } if (test >= 3.75 && test < 4) {
      return 70;
    } if (test >= 3.5 && test < 3.75) {
      return 50;
    } if (test >= 3.25 && test < 3.5) {
      return 30;
    }
    return 0;
  };
  const fifth = (test) => {
    if (test >= 5) {
      return 100;
    } if (test >= 4.75 && test < 5) {
      return 70;
    } if (test >= 4.5 && test < 4.75) {
      return 50;
    } if (test >= 4.25 && test < 4.5) {
      return 30;
    }
    return 0;
  };

  const widthVar1 = `${first(score)}%`;
  const changeWidth1 = {
    '--width': widthVar1,
  };

  const widthVar2 = `${second(score)}%`;
  const changeWidth2 = {
    '--width': widthVar2,
  };

  const widthVar3 = `${third(score)}%`;
  const changeWidth3 = {
    '--width': widthVar3,
  };

  const widthVar4 = `${fourth(score)}%`;
  const changeWidth4 = {
    '--width': widthVar4,
  };

  const widthVar5 = `${fifth(score)}%`;
  const changeWidth5 = {
    '--width': widthVar5,
  };

  return (
    <div className="starRating">
      <span className="star1 fa fa-star" style={changeWidth1} />
      <span className="star2 fa fa-star" style={changeWidth2} />
      <span className="star3 fa fa-star" style={changeWidth3} />
      <span className="star4 fa fa-star" style={changeWidth4} />
      <span className="star5 fa fa-star" style={changeWidth5} />
    </div>
  );
};

export default starRating;
