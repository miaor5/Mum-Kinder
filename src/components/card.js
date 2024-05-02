function Card(props) {
  return (
    <>
      <img src={props.image} alt={props.alt} />
      <p>Up to 40 % Off</p>
      <a href="">SHOP NOW</a>
    </>
  );
}

export default Card;
