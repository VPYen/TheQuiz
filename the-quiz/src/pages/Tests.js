// Libraries
import { useLocation } from "react-router-dom";

// Assets
import "./../assets/styles/Tests.css";

// Components
import TestsList from "../components/test/TestsList";

function Tests() {
    const location = useLocation();
    const [ category, setCategory ] = useState(<p className="listError">Something went wrong...</p>);
    const [ tests, setTests] = useState({});
    const [ showModal, setShowModal ] = useState(false);
    const [ editType, setEditType ] = useState("edit");
    const [ selectedItem, setSelectedItem ] = useState({});


    getTests = () => {
        Service.getOneCategory(location.state.id)
        .then(res => {
            if (res.success) {
                setCategory(<h1>{res.category.name}</h1>);
                setTests(<TestList items={res.category.tests} onItemSelect={onItemSelect} modalToggle={handleModalToggle} />);
            }
        });
        console.log(tests);
    }

    return (
        <div id="Tests">
            <div className="pageHeader mb-4">
                {category}
            </div>
            {tests}
        </div>
    );
}

export default Tests;
