import React, { useState, useEffect } from 'react';
import './Characteristics.css';

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
    charObject[e.target.name] = Number(e.target.value);
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
      <div className="writeReviewWrapper">
        {charArray.includes('Size') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Size
            </div>

            <div className="writeReviewCharacteristic_inputDescriptions" >

            <input type="radio" id="sizeCharReview1" value="1" name={char.Size.id} required/>
            <input type="radio" id="sizeCharReview2" value="2" name={char.Size.id} />
            <input type="radio" id="sizeCharReview3" value="3" name={char.Size.id} />
            <input type="radio" id="sizeCharReview4" value="4" name={char.Size.id} />
            <input type="radio" id="sizeCharReview5" value="5"  name={char.Size.id} />

            <label htmlFor="sizeCharReview1" className="sizeReviewOption1">
              <div className="writeReviewDot"></div>
              <div className="writeReviewText">
                A size too small
              </div>
            </label>

            <label htmlFor="sizeCharReview2" className="sizeReviewOption2">
            <div className="writeReviewDot"></div>
              <div className="writeReviewText">
                ½ a size too small
              </div>
            </label>

            <label htmlFor="sizeCharReview3" className="sizeReviewOption3">
            <div className="writeReviewDot"></div>
              <div className="writeReviewText">
                Perfect
              </div>
            </label>

            <label htmlFor="sizeCharReview4" className="sizeReviewOption4">
            <div className="writeReviewDot"></div>
              <div className="writeReviewText">
                ½ a size too big
              </div>
            </label>

            <label htmlFor="sizeCharReview5" className="sizeReviewOption5">
            <div className="writeReviewDot"></div>
              <div className="writeReviewText">
                A size too wide
              </div>
            </label>
            </div>
          </div>
          : null}
      </div>
      <div className="writeReviewWrapper">
        {charArray.includes('Width') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Width
            </div>
            <div className="writeReviewCharacteristic_inputDescriptions" >

            <input type="radio" id="widthCharReview1" value="1" name={char.Width.id} required/>
            <input type="radio" id="widthCharReview2" value="2" name={char.Width.id} />
            <input type="radio" id="widthCharReview3" value="3" name={char.Width.id} />
            <input type="radio" id="widthCharReview4" value="4" name={char.Width.id} />
            <input type="radio" id="widthCharReview5" value="5"  name={char.Width.id} />

              <label htmlFor="widthCharReview1" className="widthReviewOption1">
                <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                  Too narrow
                </div>
              </label>

              <label htmlFor="widthCharReview2" className="widthReviewOption2">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Slightly narrow
                </div>
              </label>

              <label htmlFor="widthCharReview3" className="widthReviewOption3">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Perfect
                </div>
                </label>

              <label htmlFor="widthCharReview4" className="widthReviewOption4">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Slightly wide
                </div>
                </label>

              <label htmlFor="widthCharReview5" className="widthReviewOption5">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Too wide
                </div>
                </label>
            </div>
          </div>
          : null}
      </div>
      <div className="writeReviewWrapper">
        {charArray.includes('Comfort') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Comfort
            </div>
            <div className="writeReviewCharacteristic_inputDescriptions" >

            <input type="radio" id="comfortCharReview1" value="1" name={char.Comfort.id} required/>
            <input type="radio" id="comfortCharReview2" value="2" name={char.Comfort.id} />
            <input type="radio" id="comfortCharReview3" value="3" name={char.Comfort.id} />
            <input type="radio" id="comfortCharReview4" value="4" name={char.Comfort.id} />
            <input type="radio" id="comfortCharReview5" value="5"  name={char.Comfort.id} />

              <label htmlFor="comfortCharReview1" className="comfortReviewOption1">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Uncomfortable
                </div>
                </label>

              <label htmlFor="comfortCharReview2" className="comfortReviewOption2">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Slightly uncomfortable
                </div>
                </label>

              <label htmlFor="comfortCharReview3" className="comfortReviewOption3">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Ok
                </div>
                </label>

              <label htmlFor="comfortCharReview4" className="comfortReviewOption4">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Comfortable
                </div>
                </label>

              <label htmlFor="comfortCharReview5" className="comfortReviewOption5">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Perfect
                </div>
                </label>

              </div>

          </div>
          : null}
      </div>
      <div className="writeReviewWrapper">
        {charArray.includes('Quality') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Quality
            </div>
            <div className="writeReviewCharacteristic_inputDescriptions" >

            <input type="radio" id="qualityCharReview1" value="1" name={char.Quality.id} required/>
            <input type="radio" id="qualityCharReview2" value="2" name={char.Quality.id} />
            <input type="radio" id="qualityCharReview3" value="3" name={char.Quality.id} />
            <input type="radio" id="qualityCharReview4" value="4" name={char.Quality.id} />
            <input type="radio" id="qualityCharReview5" value="5"  name={char.Quality.id} />


              <label htmlFor="qualityCharReview1" className="qualityReviewOption1">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Poor
                </div>
                </label>

              <label htmlFor="qualityCharReview2" className="qualityReviewOption2">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Below average
                </div>
                </label>

              <label htmlFor="qualityCharReview3" className="qualityReviewOption3">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                What I expected
                </div>
                </label>

              <label htmlFor="qualityCharReview4" className="qualityReviewOption4">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Pretty great
                </div>
                </label>

              <label htmlFor="qualityCharReview5" className="qualityReviewOption5">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Perfect
                </div>
                </label>

              </div>

          </div>
          : null}
      </div>
      <div className="writeReviewWrapper">
        {charArray.includes('Length') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Length
            </div>
            <div className="writeReviewCharacteristic_inputDescriptions" >

            <input type="radio" id="lengthCharReview1" value="1" name={char.Length.id} required/>
            <input type="radio" id="lengthCharReview2" value="2" name={char.Length.id} />
            <input type="radio" id="lengthCharReview3" value="3" name={char.Length.id} />
            <input type="radio" id="lengthCharReview4" value="4" name={char.Length.id} />
            <input type="radio" id="lengthCharReview5" value="5"  name={char.Length.id} />

              <label htmlFor="lengthCharReview1" className="lengthReviewOption1">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Runs Short
                </div>
                </label>

              <label htmlFor="lengthCharReview2" className="lengthReviewOption2">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Runs slightly short
                </div>
                </label>

              <label htmlFor="lengthCharReview3" className="lengthReviewOption3">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Perfect
                </div>
                </label>

              <label htmlFor="lengthCharReview4" className="lengthReviewOption4">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Runs slightly long
                </div>
                </label>

              <label htmlFor="lengthCharReview5" className="lengthReviewOption5">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Runs long
                </div>
                </label>

              </div>

          </div>
          : null}
      </div>
      <div className="writeReviewWrapper">
        {charArray.includes('Fit') ?
          <div onChange={onChangeCharacteristics}>
            <div className="writeReviewCharacteristic_subtitle">
              Fit
            </div>
            <div className="writeReviewCharacteristic_inputDescriptions" >

            <input type="radio" id="fitCharReview1" value="1" name={char.Fit.id} required/>
            <input type="radio" id="fitCharReview2" value="2" name={char.Fit.id} />
            <input type="radio" id="fitCharReview3" value="3" name={char.Fit.id} />
            <input type="radio" id="fitCharReview4" value="4" name={char.Fit.id} />
            <input type="radio" id="fitCharReview5" value="5"  name={char.Fit.id} />


              <label htmlFor="fitCharReview1" className="fitReviewOption1">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Runs tight
                </div>
                </label>

              <label htmlFor="fitCharReview2" className="fitReviewOption2">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Runs slightly tight
                </div>
                </label>

              <label htmlFor="fitCharReview3" className="fitReviewOption3">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Perfect
                </div>
                </label>

              <label htmlFor="fitCharReview4" className="fitReviewOption4">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Runs slightly long
                </div>
                </label>

              <label htmlFor="fitCharReview5" className="fitReviewOption5">
              <div className="writeReviewDot"></div>
                <div className="writeReviewText">
                Runs long
                </div>
                </label>

              </div>

          </div>
          : null}
      </div>
    </div>
  )
};

export default characteristics;