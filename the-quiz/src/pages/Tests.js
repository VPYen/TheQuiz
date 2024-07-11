// Libraries
import { useState } from "react";
import { useLocation } from "react-router-dom";

// Assets
import "./../assets/styles/Tests.css";

// Components
import TestsList from "../components/test/TestsList";

function Tests() {
    const location = useLocation();
    const [ showModal, setShowModal ] = useState(false);
    const [ editType, setEditType ] = useState("edit");
    const [ selectedItem, setSelectedItem ] = useState({});

    const onItemSelect = (type, item) => {
        setEditType(type);
        setSelectedItem(item);
      };
      
      const handleModalToggle = (event) => {
        setShowModal(event);
        if(!event) {
          setSelectedItem({});
        }
      };

    const category = location.state.category;
    const tests = location.state.category ? 
                <TestsList items={category.tests} 
                            onItemSelect={onItemSelect} 
                            modalToggle={handleModalToggle} /> : {};

    return (
        <div id="Tests" className="fadeIn">
            <div className="pageHeader mb-4">
                <h1>{location.state.category ? category.name : <p className="listError">Something went wrong...</p>}</h1>
            </div>
            {location.state.category ? tests : ""}
        </div>
    );
}

export default Tests;
