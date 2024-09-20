import React from 'react';
import { useState } from 'react';

export const TestHook = () => {
  const [showContent, setShowContent] = useState(false);

  return <div>{showContent ? <div></div> : <button>Show Content</button>}</div>;
};
