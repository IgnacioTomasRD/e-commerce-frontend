import Header from "../Header/Header";
import Searcher from "./Searcher/Seacher";
import './Models.css'
import Filter from "./Filter/Filter";
import Products from "./Products-Models/Products";

function Models(){
    return(
        <>
            <main className="container-models">
                <h2 className="container-models_title">Models</h2>
                <Searcher />
                <Filter/>
                <Products/>

                <button className="shopping-cart"></button>

            </main>
        </>
    )
}

export default Models;