// Libraries

// Components
import TestItem from "./TestItem.js";


function TestsList({items, itemOnSelect}) {
    let renderObject;

    if (items){
        renderObject = items.map(item => {
           // map items to Test Item 
        });
    }

    return(
        <table>
            
        </table>
    );
}

export default TestsList;