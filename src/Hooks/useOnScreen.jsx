import React, { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const options = {
    root: null, //it is the view port
    //rootMargin: "-50px",
    threshold: 0.5, //0 - 1 scale (default 0)
  };

  //Intersection Observer
  //- referenced: https://www.youtube.com/watch?v=T8EYosX4NOo
  const observer = new IntersectionObserver(([entry], i) => {
    //console.log(entry); //provides an array, key info are 'target','isIntersecting', and 'isVisible'
    setIsOnScreen(entry.isIntersecting);
    //observer.unobserve(entry.target);
  }, options);

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return isOnScreen;
};
