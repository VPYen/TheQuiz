// Libraries

// Components
import TestItem from "./TestItem.js";


function TestsList({items, onItemSelect, modalToggle}) {
    let renderObject;

    if (items){
        renderObject = items.map(item => 
           <TestItem 
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
            {renderObject.reverse()}
        </div>
    );
}

export default TestsList;