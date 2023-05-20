import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = (props) => {
  return (
    <a href="#" className="menu-item">
      {props.text}
    </a>
  );
};
// Chceme, aby komponenta MenuItem přijímala prop s názvem onSelect. Ta bude očekávat callback, který se zavolá, když uživatel vybere danou položku. Předejte tedy callback handleSelectItem všem komponentám MenuItem jako prop s názvem onSelect.
const App = () => {
  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };
  const [menuOpened, setMenuOpened] = useState(true);
  return (
    <>
      <header>
        <div className={menuOpened ? 'menu menu--closed' : 'menu'}>
          <button
            className="menu__btn"
            onClick={() => {
              setMenuOpened(!menuOpened);
            }}
          ></button>
          <div className="menu__items">
            <MenuItem text="Domů" />
            <MenuItem text="Naše nabídka" />
            <MenuItem text="Náš tým" />
            <MenuItem text="Blog" />
            <MenuItem text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
