import Filter from "../../components/Filter/Filter";
import ProductsListPost from "../../components/ProductsListPost/ProductsListPost";
import Searcher from "../../components/Searcher/Seacher";
import "./PagePosts.css"


function PagePosts(){
    return(
        <>
            <main className="container-models">
                <h2 className="container-models_title">Models</h2>
                <Searcher />
                <Filter/> 
                <div className="separador" />
                <ProductsListPost/>
                <button className="shopping-cart"></button>

            </main>
        </>
    )
}

export default PagePosts;