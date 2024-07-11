// Libraries
import { useNavigate } from "react-router-dom";

// Assets

function CategoryItem({key, item, onItemSelect, modalToggle}) {
    const navigate = useNavigate();

    const navigateTest = () => {
        navigate(`/category/${item.name}`, { state: {id: key, item: item}})
    };

    return(
       <div className="item card m-3 p-2">
        <div className="card-body" onClick={navigateTest()}>
            <h5 className="card-title">
                {item.name}
            </h5>
        </div>
       </div>
    );
}

export default CategoryItem;