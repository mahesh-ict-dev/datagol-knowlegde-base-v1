import React from 'react';
import GiscusComments from '@site/src/components/GiscusComments';
import FeedbackButtons from '@site/src/components/FeedbackButtons';

export default function DocItemFooter(props) {
  return (
    <>
      {/* Existing Footer Code if any */}
      <FeedbackButtons />
      <GiscusComments />
    </>
  );
}
