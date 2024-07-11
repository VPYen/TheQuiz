// Libraries

// Components

function TestItem({key, item, onItemSelect, modalToggle}) {
    if (!item) {
        item.name = <p className="listError">Something went wrong...</p>;
    }

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

export default TestItem;