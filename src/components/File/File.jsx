import { useState, useEffect } from 'react';

export const File = ({ fileObject }) => {

  if (fileObject.type === 'directory') {
    return (
      <div></div>
    );
  }

  return (
    <div></div>
  );
}
