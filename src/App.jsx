import React, { useEffect, useState, useCallback } from 'react';

const Keylogger = () => {
  const [loggedKeys, setLoggedKeys] = useState([]);

  const handleKeyDown = useCallback(
    (event) => {
      const keys = JSON.parse(localStorage.getItem('loggedKeys')) || [];
      keys.push(event.key);
      localStorage.setItem('loggedKeys', JSON.stringify(keys));
      setLoggedKeys(keys);
    },
    [setLoggedKeys]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <h2>Записанные нажатия клавиш:</h2>
      
    </div>
  );
};

export default Keylogger;