import './Welcome.css';

function Welcome({user}) {
  //obtener el nombre del usuario sin apellido

  const name=user.split(' ')[0]
  //si el usuario esta vacio, mostrar log in started

  return (
    <>
      <p className="welcome">{user ? `Bienvenido ${name}`:'Log in started' }</p>
      <img src="logo.png" alt="Logo" className="logo" />
    </>
  )
  }
export default Welcome
