import './Card.css'

const Card = ({pizza}) => {
  return (
    <div key={pizza.id} className='card'>
      {console.log(pizza)};
      <img src={pizza.img} alt="" className='cardImg' />
      <h3 className='cardTitle'>{pizza.tipo}</h3>
      <h4 className='cardPrice'>{pizza.precio}</h4>
    </div>
  );
};

export default Card;
