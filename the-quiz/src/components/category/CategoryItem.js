// Libraries

function CategoryItem({key, item, onItemSelect, modalToggle}) {
    console.log(item);
    return(
       <div className="item">
            <p>
              {item.name}  
            </p>
       </div>
    );
}

export default CategoryItem;