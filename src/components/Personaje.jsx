
function Personaje({personaje}) {

  const cardStyle = {
    width: '18rem'
  };

  return (
    <div className="card bg-dark text-white border-primary" style={cardStyle}>
        <img src={personaje.image} className="card-img-top py-1 px-1" alt={personaje.name} />
        <div className="card-body ">
          <h3 className="card-text fw-bold text-center ">{personaje.name}</h3>
          <p className="card-text text-center">{personaje.origin.name}</p>
        </div>
    </div>
  )
}

export default Personaje