import './Searcher.css'

function Searcher(){
    return(
        <div className="container-searcher"> 
            <input type ="text" id="searcher" placeholder="Search" className="container-searcher_input"/>
            <button className="container-searcher_button"></button>
        </div>
    )

}

export default Searcher;