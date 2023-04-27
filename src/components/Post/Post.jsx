import "./Post.css"


function Post(/*{name,description,characteristics,price,stock,imgs}*/){
    let {name,description,characteristics,price,stock,imgs} = 
        {
            name: "BMW",
            price:1000,
            description: "its a nice car!",
            characteristics:[
                {name: "Potencia", description: "280CV"},
                {name:"KM", description: "0KM"},
                {name:"Airbag", description: "si"}
            ],
            imgs: ['src/assets/imgs/bmw.png','src/assets/imgs/bmw.png','src/assets/imgs/bmw.png']
        }
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
                    <span className = "plus"></span>
                    <span className = "minus"></span>
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
            <div className="line"/>
            <div className="container-item">
                <div className="title-item">
                    <h3>Characteristics:  </h3>
                    <div className="up-arrow"></div>
                </div>
                <ul className="characteristics">
                {
                    characteristics.map(ch =>{
                        return(
                            <li className="container-ch-item">
                                <div className="container-ch-item__name"> {ch.name}</div>
                                <div className="container-ch-item__description">{ch.description}</div>
                            </li>
                        );
                    })    
                }
                </ul>
            </div>
        </main>
    )

}

export default Post;