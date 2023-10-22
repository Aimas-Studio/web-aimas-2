import {useState} from 'react';
import './clic.css';

export default function Clic() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div>
      <button className={isActive ? 'show' : ''} onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
