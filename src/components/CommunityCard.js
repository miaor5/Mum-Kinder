function CommunityCard(props) {
  return (
    <>
      <img src={props.image} alt={props.alt} />
      <p className="title">{props.communitytitle} </p>
      <p className="description">{props.description}</p>
      <a className="bottom-card" href="">
        Find out more
      </a>
    </>
  );
}

export default CommunityCard;
