
import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';

interface Iprops {
  id: number;
  selectedKey: number;
  children: ReactNode;
}

const Thumbnail: React.FC<Iprops> = ({ children, id, selectedKey }) => {
  const show = (id === selectedKey);
  
  return (
    <div className={`absolute w-full h-full transition-all duration-4000 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default Thumbnail;