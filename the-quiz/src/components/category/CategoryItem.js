// Libraries
import { useNavigate } from "react-router-dom";

// Assets

function CategoryItem({key, item, onItemSelect, modalToggle}) {
    const navigate = useNavigate();

    const navigateTestPage = () => {
        navigate(`/category/${item.name}`, { state: {categoryID: key, category: item}});
    };

    return(
       <div className="item card m-3 p-2">
        <div className="card-body" onClick={navigateTestPage}>
            <h5 className="card-title">
                {item ? item.name : <p className="listError">Something went wrong...</p>}
            </h5>
        </div>
       </div>
    );
}

export default CategoryItem;