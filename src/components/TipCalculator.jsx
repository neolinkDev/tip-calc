import { useState } from 'react';
import { Bill, Output, Reset, SelectPercentage } from './';


export const TipCalculator = () => {

  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  // calculating tip
  const tip = Math.ceil(bill * ((percentage1 + percentage2) / 2 / 100));

  const handleReset = () => {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);

  }

  return (
    <div>
      <Bill 
        bill={ bill } 
        setBill={ setBill } 
      />

      <SelectPercentage
        percentage={ percentage1 }
        onSelect={ setPercentage1 }
      >
        ¿Te gustó el servicio?
      </SelectPercentage>

      <SelectPercentage
        percentage={ percentage2 }
        onSelect={ setPercentage2 }
      >
        ¿Le gusto el servicio a tu compañero?
      </SelectPercentage>

      {
        bill > 0 && (
          <>
            <Output 
              bill={ bill } 
              tip={ tip }
            />
      
            <Reset onReset={ handleReset} />
          </>
        )
      }
    </div>
  );
};
