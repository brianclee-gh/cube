/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import moment from 'moment';
// import { ProductsContext } from '../state/ProductsContext.jsx';
import QASearch from './QASearch.jsx';
import Question from './Question.jsx';
import sampleQData from './questionsSample.js';
// import sampleAData from './answersSample';

// import './qa-style.scss';

const QAList = () => {
//   const { currentProduct, getData } = useContext(ProductsContext);
  const [productId, setProductId] = useState(sampleQData.product_id);
  const [questions, setQuestions] = useState(sampleQData.results);

//   useEffect(() => {
//     console.log('hi');
//   });

  return (
    <div>
      <h2>Questions & Answers</h2>
      <div>
        <QASearch />
        {
          questions.map((q) => {
            return <Question question={q} key={q.question_id} />
          })
        }
      </div>
    </div>
  );
};
// function QAList(props) {
//   return (
//     <div id="qa-list">
//       <ul>
//         {props.questions.map((q) => (
//           <li key={q.question_id}>
//             <h3 className="question-body">
//               Q:
//               {' '}
//               {q.question_body}
//             </h3>
//             {Object.keys(q.answers).map((a, i) => (
//               <li key={i}>
//                 <h3 className="answer-body">
//                   A:
//                   {' '}
//                   {q.answers[a].body}
//                 </h3>
//                 <span>
//                   by
//                   {' '}
//                   {q.answers[a].answerer_name}
//                   ,
//                   {' '}
//                   {moment(q.answers[a].date).format('LL')}
//                   {'   '}
//                   Helpful?
//                   {' '}
//                   <a href="https://www.google.com">Yes</a>
//                   {' '}
//                   (
//                   {q.answers[a].helpfulness}
//                   )
//                   {'   '}
//                   <a href="https://www.google.com">Report</a>
//                 </span>
//               </li>
//             ))}
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>

//   );
// }

export default QAList;
