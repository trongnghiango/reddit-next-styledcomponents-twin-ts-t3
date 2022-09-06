import { useEffect, useState } from "react";
import DotIcon from "./doticon";
import Thumbnail from "./thumbnail";



interface ICarouselProps {
  time?: number;
  children: React.ReactNode[];
}

export const Carousel:React.FC<ICarouselProps> = ({children, time = 3000}) => {
  const [index, setIndex] = useState(0);
  const keys = children.map((child, index) => index);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % keys.length;
      setIndex(newIndex);
    }, time);
    return () => clearInterval(interval);
  });

  const _slides = () => {
    return children.map((child, idx) => (
      <Thumbnail key={idx} id={idx} selectedKey={index}>
        {child}
      </Thumbnail>
    ));
  };

  const _sliderDots = () => {
    return keys.map((key) => (
      <span key={key} onClick={() => setIndex(key)}>
        {<DotIcon selected={key === index} />}
      </span>
    ));
  };

  return (
    <div className="border-dashed border-2 border-gray-100 p-5 m-auto flex justify-center">
      <div className="flex flex-col justify-center items-center w-full bg-slate-400">
        <div className="relative w-full h-full bg-red-100">{_slides()}</div>
        <div className="flex justify-center mt-2">{_sliderDots()}</div>
      </div>
    </div>
  );
};
