// Libraries

// Components
import TestItem from "./TestItem.js";


function TestsList({items, itemOnSelect}) {
    let renderObject;

    if (items){
        renderObject = items.map(item => {
            <TestItem
            key={item.id}
            item={item}
            onItemSelect={onItemSelect}
            modalToggle={modalToggle}
        />
        });
    }else {
        renderObject = <p className="listError">Something went wrong...</p>
    }

    return(
        <div className="list row">
            {renderObject}
        </div>
    );
}

export default TestsList;