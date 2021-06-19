import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import './File.scss';

export const File = ({ fileObject, clickHandler }) => {

  let insideContents;
  let link;

  if (fileObject.type === 'directory') {
    insideContents = (
      <h4 className="py-2 folder text-start ps-3">{fileObject.name}</h4>
    );

    return (
      <div className="file-card my-2" onClick={() => {clickHandler(fileObject.name)}}>
        {insideContents}
      </div>
    );
    link = `http://localhost:3010${fileObject.name}`;
  } else {
    insideContents = (
      <div>
        <Image src={`http://localhost:3010${fileObject.filePath}`}/>
        <div className="img-name text-start px-3 py-2">
          {fileObject.name}
        </div>
      </div>

    );
    link = `http://localhost:3010${fileObject.filePath}`;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-dec">
      <div className="file-card my-2">
        {insideContents}
      </div>
    </a>
  );
}
