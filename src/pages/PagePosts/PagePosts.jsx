import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsListPost from "../../components/ProductsListPost/ProductsListPost";
import Searcher from "../../components/Searcher/Seacher";
import "./PagePosts.css"


function PagePosts(){
    return(
        <>
            <Header/>
            <main className="container-models">
                <h2 className="container-models_title">Models</h2>
                <Searcher />
                <Filter/> 
                <div className="separador" />
                <ProductsListPost/>
                <button className="shopping-cart"></button>

            </main>
            <Footer/>
        </>
    )
}

export default PagePosts;