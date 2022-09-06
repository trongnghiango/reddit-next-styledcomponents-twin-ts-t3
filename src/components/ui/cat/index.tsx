import { ReactElement, useEffect, useRef, useState } from "react";
import DotIcon from "../doticon";
import Thumbnail from "../thumbnail";
interface ICarouselProps {
  time?: number;
  children: ReactElement[];
}
export const Cat: React.FC<ICarouselProps> = ({ children, time = 4000 }) => {
  const [index, setIndex] = useState(0);
  const keys = children.map((child, index) => index);

  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    if (refDiv) console.log('Height::', refDiv.current?.clientHeight);
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % keys.length;
      setIndex(newIndex);
    }, time);
    return () => clearInterval(interval);
  });

  const _sliderDots = () => {
    return keys.map((key) => (
      <span key={key} onClick={() => setIndex(key)}>
        {<DotIcon selected={key === index} />}
      </span>
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="relative bg-slate-400">
        {Array.isArray(children)
          ? children.map((child, idx) => (
              <Thumbnail key={idx} id={idx} selectedKey={index}>
                {child}
              </Thumbnail>
            ))
          : null}
      </div>
      <div className="flex w-full justify-center">{_sliderDots()}</div>
    </div>
  );
};
