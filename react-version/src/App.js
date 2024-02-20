import { useState } from 'react';
import accounts from './cuentas';
import './App.css';
import Welcome from './Welcome/Welcome';
import Login from './Login/Login';
import Summary from './Summary/Summary';
import Movements from './Movements/Movements';
import Balance from './Balance/Balance';
function App() {
  const [account, setAccount] = useState(accounts[3]);
  const { movements = [],owner:user='' } = account;
console.log(movements,account)
  console.log(`El user que voy a mandar es ${user}`)

  //TAREAS
  //1 hacer el componente Welcome
  //recibe una propiedad que sea el nombre de usuario
  //si esta vacio muestra "log in to the started
  //si esta lleno muestra"bienvenido,{nombre de usuario}"

  //2.Hacer los movimientos
  //recibe una propiedad que es el array de movimientos
  //muestra una lista de movimientos que son un componente llamado Movement
  //que recibe una propiedad que es el movimiento

  //3.Hacer el componente Logim-> usar useref como ya hicimos para hacer el login
  return (
    <>
      <nav>
        <Welcome user={user}/>
        <Login />
      </nav>
      
     {user && (
     
      <main className="app">
        <Balance movements={movements} />
        <Movements movements={movements} />
        <Summary movements={movements} />

        <div className="operation operation--transfer">
          <h2>Transfer money</h2>
          <form className="form form--transfer">
            <input type="text" className="form__input form__input--to" />
            <input type="number" className="form__input form__input--amount" />
            <button className="form__btn form__btn--transfer">&rarr;</button>
            <label className="form__label">Transfer to</label>
            <label className="form__label">Amount</label>
          </form>
        </div>{' '}
        <div className="operation operation--loan">
          <h2>Request loan</h2>
          <form className="form form--loan">
            <input
              type="number"
              className="form__input form__input--loan-amount"
            />
            <button className="form__btn form__btn--loan">&rarr;</button>
            <label className="form__label form__label--loan">Amount</label>
          </form>
        </div>{' '}
        <div className="operation operation--close">
          <h2>Close account</h2>
          <form className="form form--close">
            <input type="text" className="form__input form__input--user" />
            <input
              type="password"
              maxlength="6"
              className="form__input form__input--pin"
            />
            <button className="form__btn form__btn--close">&rarr;</button>
            <label className="form__label">Confirm user</label>
            <label className="form__label">Confirm PIN</label>
          </form>
        </div>{' '}
        <p className="logout-timer">
          You will be logged out in <span className="timer">05:00</span>
        </p>
      </main>
      )}
    </>
  );
}
export default App;
