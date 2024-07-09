// Libraries

// Assets

function CategoryItem({key, item, onItemSelect, modalToggle}) {

    return(
       <div className="item card m-3 p-2">
        <div className="card-body">
            <h5 className="card-title">
                {item.name}
            </h5>
        </div>
       </div>
    );
}

export default CategoryItem;