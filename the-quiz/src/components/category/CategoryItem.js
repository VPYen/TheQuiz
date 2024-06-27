// Libraries

// Assets
import TestsList from  "./../test/TestsList.js";

function CategoryItem({key, item, onItemSelect, modalToggle}) {
    
    return(
       <div className="item card m-3 p-2">
        <div className="card-body">
            <h5 className="card-title">
                {item.title}
            </h5>
        </div>
       </div>
    );
}

export default CategoryItem;