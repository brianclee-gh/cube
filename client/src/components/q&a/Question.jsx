import React from 'react';

function Question(props) {
  console.log(props.questions);
  return (
    <div className="question">
      <h3 className="question-body">
        Q:
        {props.questions.question_body}
      </h3>
    </div>
  );
}

export default Question;
