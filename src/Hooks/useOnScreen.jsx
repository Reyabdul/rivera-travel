import React, { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const options = {
    root: null, //it is the view port
    threshold: 0, //0 - 1 scale (default 0)
    //rootMargin: "-150px"
  };

  //Intersection Observer
  //- referenced: https://www.youtube.com/watch?v=T8EYosX4NOo
  const observer = new IntersectionObserver(([entry], i) => {
    //console.log(entry); //provides an array, key info are 'target','isIntersecting', and 'isVisible'
    setIsOnScreen(entry.isIntersecting);
  }, options);

  useEffect(() => {
    observer.observe(ref.current);

    return;
  });

  return isOnScreen;
};
