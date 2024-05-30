// src/components/FileList.js
import React, { useEffect, useState } from 'react';
import { storage } from '../MyComponents/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const FileList = () => {
  const [files, setFiles] = useState([]);
    console.log(files);
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storageRef = ref(storage, '');
        const fileList = await listAll(storageRef);

        const fileUrls = await Promise.all(
          fileList.items.map((item) => getDownloadURL(item))
        );

        setFiles(fileUrls);
      } catch (error) {
        console.error("Error fetching files from Firebase Storage:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Files</h1>
      <ul className='grid lg:grid-cols-3 md:grid-cols-2 md:mx-2 gap-5'>
        {files.map((fileUrl, index) => (
          <li key={index}>
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              
            <img src={fileUrl} key={9} alt="" className='rounded-2xl ' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
