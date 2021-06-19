import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import './File.scss';

import { BASE_URL } from '.env';

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
  } else {
    insideContents = (
      <div>
        <Image src={`${BASE_URL}${fileObject.filePath}`}/>
        <div className="img-name text-start px-3 py-2">
          {fileObject.name}
        </div>
      </div>

    );
    link = `${BASE_URL}${fileObject.filePath}`;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-dec">
      <div className="file-card my-2">
        {insideContents}
      </div>
    </a>
  );
}
