import { useEffect } from 'react';
import './starsBackground.css'

const StarsBackground = () => {
  useEffect(() => {
    function random(max) {
      return Math.floor(Math.random() * max);
    }

    function multipleBoxShadow(n) {
      let value = `${random(2000)}px ${random(2000)}px #FFF`;
      for (let i = 2; i <= n; i++) {
        value += `, ${random(2000)}px ${random(2000)}px #FFF`;
      }
      return value;
    }

    const shadowsSmall = multipleBoxShadow(700);
    const shadowsMedium = multipleBoxShadow(200);
    const shadowsBig = multipleBoxShadow(100);

    const stars = document.getElementById("stars");
    const stars2 = document.getElementById("stars2");
    const stars3 = document.getElementById("stars3");

    stars.style.boxShadow = shadowsSmall;
    stars.style.animation = "animStar 50s linear infinite";
    stars.style.background = "transparent";

    const starsAfter = document.createElement("div");
    starsAfter.style.content = " ";
    starsAfter.style.position = "absolute";
    starsAfter.style.top = "2000px";
    starsAfter.style.width = "1px";
    starsAfter.style.height = "1px";
    starsAfter.style.background = "transparent";
    starsAfter.style.boxShadow = shadowsSmall;

    stars.appendChild(starsAfter);

    stars2.style.boxShadow = shadowsMedium;
    stars2.style.animation = "animStar 100s linear infinite";
    stars2.style.background = "transparent";

    const stars2After = document.createElement("div");
    stars2After.style.content = " ";
    stars2After.style.position = "absolute";
    stars2After.style.top = "2000px";
    stars2After.style.width = "2px";
    stars2After.style.height = "2px";
    stars2After.style.background = "transparent";
    stars2After.style.boxShadow = shadowsMedium;

    stars2.appendChild(stars2After);

    stars3.style.boxShadow = shadowsBig;
    stars3.style.animation = "animStar 150s linear infinite";
    stars3.style.background = "transparent";

    const stars3After = document.createElement("div");
    stars3After.style.content = " ";
    stars3After.style.position = "absolute";
    stars3After.style.top = "2000px";
    stars3After.style.width = "3px";
    stars3After.style.height = "3px";
    stars3After.style.background = "transparent";
    stars3After.style.boxShadow = shadowsBig;

    stars3.appendChild(stars3After);
  }, []); 

  return (
    <div className='absolute top-0 left-0 w-full h-[1200px] md:h-[700px] -z-10 pointer-events-none overflow-hidden'>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
  )
}

export {StarsBackground}