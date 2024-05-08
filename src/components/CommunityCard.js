function CommunityCard(props) {
  return (
    <>
      <img src={props.image} alt={props.alt} />
      <p className="discount">{props.communitytitle} </p>
      <p className="categories">{props.description}</p>
      <a className="bottom-card" href="">
        Find out more
      </a>
    </>
  );
}

export default CommunityCard;
