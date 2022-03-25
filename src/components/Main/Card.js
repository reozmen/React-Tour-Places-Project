

const Card = (item) => {
    console.log("data : ", item)
  return (
    <div className="cards">
        <div className="title">
            <h1>{item.title}</h1>
        </div>
        <img src={item.image} alt={item.title} />

        <div className="card-over">
            <p>
                {item.desc}
            </p>
        </div>
    </div>
  )
}

export default Card