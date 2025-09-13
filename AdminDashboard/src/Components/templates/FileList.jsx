
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFile } from '../../conentFile';
import Display from '../organisms/Display';

const FileList = () => {
  const files = useSelector((state) => state.adminDashboard.files);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFile({ id }));
  };

  const handleEdit = (id) => {
    dispatch(removeFile({ id }));
  };

  return (
    <div>
      <h2>Files</h2>
      {files.map((file) => (
        <Display
          key={file.id}
          text1={file.filename}
          text2={file.desc}
          del={() => handleDelete(file.id)}
          edit={() => handleEdit(file.id)}
        />
      ))}
    </div>
  );
};

export default FileList;
