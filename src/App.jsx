import React, { useRef, useState } from 'react';
import './App.css';
import { Arrow } from './Components/Arrow/Arrow';

const App = () => {
  
  const[turnAngle, setTurnAngle] = useState(0);

  const ref = useRef(null);
  
  const generateAngle = (event) => {
    const xClicked = event.pageX;
    const yClicked = event.pageY;
    const pageWidth = ref.current.offsetWidth;
    const pageHeight = ref.current.offsetHeight;

    const xCentr = Math.round(pageWidth / 2);
    const yCentr = Math.round(pageHeight / 2);
    const x = xClicked - xCentr;
    const y = yClicked - yCentr;

    let degrees = 0;

    if (xClicked <= xCentr) {
      if (yClicked <= yCentr) {  //1 part
        degrees = 360 - Math.abs((Math.atan(x/y) * 180 / Math.PI)); 
      } else {   //3 part
        degrees = 180 + Math.abs((Math.atan(x/y) * 180 / Math.PI)); 
      }
    } else {
      if (yClicked <= yCentr) {  //2 part
        degrees = Math.abs((Math.atan(x/y) * 180 / Math.PI));
      } else {   //4 part
        degrees = 90 + Math.abs((Math.atan(y/x) * 180 / Math.PI));
      }
    }
    setTurnAngle(Math.round(degrees));
  }

  return (
    <div 
      className='page' 
      ref={ref} 
      onClick={event => generateAngle(event)}
    >
      <div className='page__arrow'>
        <Arrow turnAngle={turnAngle}/>
      </div>
    </div>
  );
};

export default App;
