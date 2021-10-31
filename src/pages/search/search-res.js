import { useLocation } from "react-router";
function SearchResult(){
    const location = useLocation(); 
    console.log("Search Page"); 
    console.log(location.state); 
    return(
        <div>

        </div>
    ); 
}

export default SearchResult; 