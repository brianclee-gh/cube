import React, { useContext } from 'react';
import './sizeComfort.css';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';

function sizeComfort() {
  const { metaData } = useContext(ReviewsContext);

  const size = () => {
    if (metaData.characteristics.Size === undefined) {
      return null;
    } else {
      let num = metaData.characteristics.Size;
      return {name: 'Size', value: Number(num.value).toFixed(0), id: num.id}
    }
  };

  const fit = () => {
    if (metaData.characteristics.Fit === undefined) {
      return null;
    } else {
      let num = metaData.characteristics.Fit;
      return {name: 'Fit', value: Number(num.value).toFixed(0), id: num.id}
    }
  };

  const comfort = () => {
    if (metaData.characteristics.Comfort === undefined) {
      return null;
    } else {
      let num = metaData.characteristics.Comfort;
      return {name: 'Comfort', value: Number(num.value).toFixed(0), id: num.id}
    }
  };

  const length = () => {
    if (metaData.characteristics.Length === undefined) {
      return null;
    } else {
      let num = metaData.characteristics.Length;
      return {name: 'Length', value: Number(num.value).toFixed(0), id: num.id}
    }
  };

  const quality = () => {
    if (metaData.characteristics.Quality === undefined) {
      return null;
    } else {
      let num = metaData.characteristics.Quality;
      return {name: 'Quality', value: Number(num.value).toFixed(0), id: num.id}
    }
  };

  const width = () => {
    if (metaData.characteristics.Width === undefined) {
      return null;
    } else {
      let num = metaData.characteristics.Width;
      return {name: 'Width', value: Number(num.value).toFixed(0), id: num.id}
    }
  };

  const comfortNum = comfort();
  const sizeNum = size();
  const fitNum = fit();
  const lengthNum = length();
  const widthNum = width();
  const qualityNum = quality();

  const arrMix = () => {
    let arrayValue = [];
    if (comfortNum !== null) {
      arrayValue.push(comfortNum);
    }
    if (sizeNum !== null) {
      arrayValue.push(sizeNum);
    }
    if (fitNum !== null) {
      arrayValue.push(fitNum);
    }
    if (lengthNum !== null) {
      arrayValue.push(lengthNum);
    }
    if (widthNum !== null) {
      arrayValue.push(widthNum);
    }
    if (qualityNum !== null) {
      arrayValue.push(qualityNum);
    }
    return arrayValue;
  };

  let arrayValues = arrMix();

  if (metaData !== null) {
    return (
      <div className="sizeComfort">
        {arrayValues.map(props =>
          <div className="sizeComfort_map" key={props.id} >{props.name}: {props.value}
          </div>
          )}
      </div>
    );
  } else {
    return null;
  }
}

export default sizeComfort;