// Libraries

// Components
import CategoryItem from "./CategoryItem.js";

function CategoriesList({items, onItemSelect, modalToggle}) {
    let renderObject;
    
    if (items){
        renderObject = items.map(item => 
           <CategoryItem 
                key={item.id}
                item={item}
                onItemSelect={onItemSelect}
                modalToggle={modalToggle}
            />
        );
    }else {
        renderObject = <p className="listError">Something went wrong...</p>
    }

    return(
       <div className="list row">
            {renderObject}
       </div>
    );
}

export default CategoriesList;