/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const withClickTracker = (Component) => {
  const reportClick = (e, currentWidget) => { // 'Modal'
    const data = {
      clickedElement: e.target,
      component: currentWidget || 'Not a Widget',
      time: (new Date()).toTimeString(),
    };
    console.log(data);
    // do something with data
  };

  return (props) => (
    <Component
      {...props}
      reportClick={reportClick}
    />
  );
};

export default withClickTracker;
