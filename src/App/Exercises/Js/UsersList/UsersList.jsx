import './userslist.css';
import { useState } from 'react';

export function UsersList() {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState(
    JSON.parse(window.localStorage.getItem('users')) || ''
  );

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const sendFormValue = () => {
    setUsers((prevState) => [
      ...prevState,
      { id: users.length + 1, name: inputValue },
    ]); //funkcja reacta prevState, dodawanie elementow do tablicy
    setInputValue('');
  };

  const sendToStorage = () => {
    window.localStorage.setItem('users', JSON.stringify(users));
  };

  const removeValue = (id) => {
    setUsers((currentState) => currentState.filter((obj) => obj.id !== id));
  };

  return (
    <div className="welcomeview">
      <div className="welcomeview-inline-block">
        <div className="welcomeview-input">
          <label>NICK</label>
        </div>

        <div className="welcomeview-input-box">
          <input
            type="text"
            name="nick input"
            value={inputValue}
            placeholder="jaras_2000"
            onChange={changeInputValue}
          />
        </div>

        <div className="welcomeview-button">
          <button
            type="button"
            onClick={sendFormValue}
            // disabled={inputValue.length === 0 ? true : false}
            // disabled={inputValue.length === 0 || false}
            disabled={!inputValue.length}
          >
            <p>DODAJ</p>
          </button>

          <button type="button" onClick={sendToStorage(users)}>
            <p>ZAPISZ</p>
          </button>
        </div>
      </div>
      <div className="welcomeview-inline-block">
        <div className="welcomeview-placeholder-box">
          <ul>
            {users.map(({ id, name }) => (
              <li key={id}>
                <p>
                  {name}
                  <span onClick={() => removeValue(id)}> usuń</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
