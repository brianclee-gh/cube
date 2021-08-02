import React, { useState, useEffect } from 'react';
import './characteristics.css';

let charObject = {};

const characteristics = ({ char, change }) => {
  const [charObj, setCharObj] = useState(null);
  let charArray = [];

  const characteristicsName = (props) => {
    for (const key in props) {
      charArray.push(key);
    }
  };
  characteristicsName(char);

  const onChangeCharacteristics = (e) => {
    charObject[e.target.name] = e.target.value;
    setCharObj(charObject);
  };

  useEffect(() => {
    change(charObj);
  }, [charObj]);

  return (
    <div className="writeReviewCharacteristic">
      <div className="writeReviewCharacteristic_title">
        Characteristic *
      </div>
      <div>
        {charArray.includes('Size') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Size:
            </div>
            <input type="radio" id="sizeCharReview1" value="1" name={char.Size.id} required/>
              <label htmlFor="sizeCharReview1">(1) A size too small</label>
            <input type="radio" id="sizeCharReview2" value="2" name={char.Size.id} />
              <label htmlFor="sizeCharReview2">(2) ½ a size too small</label>
            <input type="radio" id="sizeCharReview3" value="3" name={char.Size.id} />
              <label htmlFor="sizeCharReview3">(3) Perfect</label>
            <input type="radio" id="sizeCharReview4" value="4" name={char.Size.id} />
              <label htmlFor="sizeCharReview4">(4) ½ a size too big</label>
            <input type="radio" id="sizeCharReview5" value="5"  name={char.Size.id} />
              <label htmlFor="sizeCharReview5">(5) A size too wide</label>
          </div>
          : null}
      </div>
      <div>
        {charArray.includes('Width') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Width:
            </div>
            <input type="radio" id="widthCharReview1" value="1" name={char.Width.id} required/>
              <label htmlFor="sizeCharReview1">(1) Too narrow</label>
            <input type="radio" id="widthCharReview2" value="2" name={char.Width.id} />
              <label htmlFor="widthCharReview2">(2) Slightly narrow</label>
            <input type="radio" id="widthCharReview3" value="3" name={char.Width.id} />
              <label htmlFor="widthCharReview3">(3) Perfect</label>
            <input type="radio" id="widthCharReview4" value="4" name={char.Width.id} />
              <label htmlFor="widthCharReview4">(4) Slightly wide</label>
            <input type="radio" id="widthCharReview5" value="5"  name={char.Width.id} />
              <label htmlFor="widthCharReview5">(5) Too wide</label>
          </div>
          : null}
      </div>
      <div>
        {charArray.includes('Comfort') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Comfort:
            </div>
            <input type="radio" id="comfortCharReview1" value="1" name={char.Comfort.id} required/>
              <label htmlFor="comfortCharReview1">(1) Uncomfortable</label>
            <input type="radio" id="comfortCharReview2" value="2" name={char.Comfort.id} />
              <label htmlFor="comfortCharReview2">(2) Slightly uncomfortable</label>
            <input type="radio" id="comfortCharReview3" value="3" name={char.Comfort.id} />
              <label htmlFor="comfortCharReview3">(3) Ok</label>
            <input type="radio" id="comfortCharReview4" value="4" name={char.Comfort.id} />
              <label htmlFor="comfortCharReview4">(4) Comfortable</label>
            <input type="radio" id="comfortCharReview5" value="5"  name={char.Comfort.id} />
              <label htmlFor="comfortCharReview5">(5) Perfect</label>
          </div>
          : null}
      </div>
      <div>
        {charArray.includes('Quality') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Quality:
            </div>
            <input type="radio" id="qualityCharReview1" value="1" name={char.Quality.id} required/>
              <label htmlFor="qualityCharReview1">(1) Poor</label>
            <input type="radio" id="qualityCharReview2" value="2" name={char.Quality.id} />
              <label htmlFor="qualityCharReview2">(2) Below average</label>
            <input type="radio" id="qualityCharReview3" value="3" name={char.Quality.id} />
              <label htmlFor="qualityCharReview3">(3) What I expected</label>
            <input type="radio" id="qualityCharReview4" value="4" name={char.Quality.id} />
              <label htmlFor="qualityCharReview4">(4) Pretty great</label>
            <input type="radio" id="qualityCharReview5" value="5"  name={char.Quality.id} />
              <label htmlFor="qualityCharReview5">(5) Perfect</label>
          </div>
          : null}
      </div>
      <div>
        {charArray.includes('Length') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Length:
            </div>
            <input type="radio" id="lengthCharReview1" value="1" name={char.Length.id} required/>
              <label htmlFor="lengthCharReview1">(1) Runs Short</label>
            <input type="radio" id="lengthCharReview2" value="2" name={char.Length.id} />
              <label htmlFor="lengthCharReview2">(2) Runs slightly short</label>
            <input type="radio" id="lengthCharReview3" value="3" name={char.Length.id} />
              <label htmlFor="lengthCharReview3">(3) Perfect</label>
            <input type="radio" id="lengthCharReview4" value="4" name={char.Length.id} />
              <label htmlFor="lengthCharReview4">(4) Runs slightly long</label>
            <input type="radio" id="lengthCharReview5" value="5"  name={char.Length.id} />
              <label htmlFor="lengthCharReview5">(5) Runs long</label>
          </div>
          : null}
      </div>
      <div>
        {charArray.includes('Fit') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Fit:
            </div>
            <input type="radio" id="fitCharReview1" value="1" name={char.Fit.id} required/>
              <label htmlFor="fitCharReview1">(1) Runs tight</label>
            <input type="radio" id="fitCharReview2" value="2" name={char.Fit.id} />
              <label htmlFor="fitCharReview2">(2) Runs slightly tight</label>
            <input type="radio" id="fitCharReview3" value="3" name={char.Fit.id} />
              <label htmlFor="fitCharReview3">(3) Perfect</label>
            <input type="radio" id="fitCharReview4" value="4" name={char.Fit.id} />
              <label htmlFor="fitCharReview4">(4) Runs slightly long</label>
            <input type="radio" id="fitCharReview5" value="5"  name={char.Fit.id} />
              <label htmlFor="fitCharReview5">(5) Runs long</label>
          </div>
          : null}
      </div>
    </div>
  )
};

export default characteristics;