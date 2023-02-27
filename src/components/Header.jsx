import './Header.css';

const Header = () => {

    let titulos = ["Home", "Catálogo", "About us", "Contact"]

  return (
    <>
      <ul className="titles">
        {titulos.map((titulo, index) => <p key={index}>{titulo}</p>)}
      </ul>
    </>
  )
}

export default Header
