// Libraries
import { useNavigate } from "react-router-dom";

// Components

function TestItem({key, item, onItemSelect, modalToggle}) {
    const navigate = useNavigate();

    return(
        <div className="item card m-3 p-2">
        <div className="card-body">
            <h5 className="card-title">
                {item ? item.name : <p className="listError">Something went wrong...</p>}
            </h5>
            <p>{item.description ? item.description : ""}</p>
        </div>
       </div>
    );
}

export default TestItem;