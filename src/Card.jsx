import cardImage from './assets/cropped-image (2).png'

function Card(){
  return(
    <div className="card">
      <img className='card-img' src={cardImage} alt="" />
      <h3 className='card-title'>MY first card</h3>
      <p>this is a sample card for checking my react </p>
    </div>
  );
}

export default Card;