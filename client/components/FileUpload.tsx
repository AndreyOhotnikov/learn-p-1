import { useRouter } from 'next/router';
import React from 'react';
import { useRef } from 'react';



interface FileUploadProps {
  file: any;
  setFile: Function
  accept: string;
  children: any
}

const FileUpload: React.FC<FileUploadProps> = ({file, setFile, accept, children}) => {
  const router = useRouter()
  const onChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
  }
 
  const ref = useRef<HTMLInputElement>()
  
  return (
    <div onClick={() => ref.current.click()}>
      <input type="file" 
        accept={accept}
        style={{display: 'none'}}
        ref={ref}
        onChange={onChenge}
      />
      {children}
    </div>
    )
}

export default FileUpload
