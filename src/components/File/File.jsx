import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import './File.scss';

export const File = ({ fileObject }) => {

  let insideContents;
  let link;

  if (fileObject.type === 'directory') {
    insideContents = (
      <h4>{fileObject.name}</h4>
    );
    link = `http://localhost:3010${fileObject.fileName}`;
  } else {
    insideContents = (
      <Image src={`http://localhost:3010${fileObject.filePath}`}/>
    );
    link = `http://localhost:3010${fileObject.filePath}`;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="file-card py-2 my-2">
        {insideContents}
      </div>
    </a>
  );
}
