function Card(props) {
  return (
    <>
      <img src={props.image} alt={props.alt} />
      <p className="discount">Up to {props.discount} % Off</p>
      <p className="categories">Selected {props.category}</p>
      <a className="bottom-shopnow" href="">
        Shop Now
      </a>
    </>
  );
}

export default Card;
