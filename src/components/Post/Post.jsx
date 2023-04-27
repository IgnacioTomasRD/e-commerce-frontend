import "./Post.css"


function Post(/*{name,description,characteristics,price,stock}*/){
    let {name,description,characteristicas,price,stock} = {name: "BMW",price:1000,description: "its a nice car!"}
    const counter = 1;

    return(
        <main className="container-post">
            <h2 className="name-product">{name}</h2>
            <button className="arrow-circle-left"></button>
            <div className="imagen-container">
                <img src='src/assets/imgs/bmw.png' alt="" />
            </div>
            <div className="container-specs">
                <h3>Price: ${price}</h3>
                <h3>Stock: {counter} {counter === 1 ? "unit" : "units"}</h3>
                <div className="container-specs__units">
                    <h3> units: {counter} </h3>
                </div>
            </div>
            <div className="container-item">
                <div className="title-item">
                    <h3>Description:  </h3>
                    <div className="up-arrow"></div>
                </div>
                <div className="description">
                    <h3>{description}</h3>
                </div>
            </div>
            <div className="container-item">
                <div className="title-item">
                    <h3>Characteristics:  </h3>
                    <div className="up-arrow"></div>
                </div>
                <div className="characteristics">
                    <h3>{description}</h3>
                </div>
            </div>
        </main>
    )

}

export default Post;