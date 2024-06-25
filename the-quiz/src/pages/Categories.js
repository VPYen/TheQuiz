// Libraries
import { useEffect, useState } from "react";

// Assets
import "./../assets/styles/Categories.css";

// Components
import CategoriesList from "../components/category/CategoriesList";
import Service from "../components/Service";

function Categories(props) {
  const [ categories, setCategories ] = useState(<p className="listError">Something went wrong...</p>);
  const [ showModal, setShowModal ] = useState(false);
  const [ editType, setEditType ] = useState("edit");;
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
  
  const getCategories = () => {
    Service.getAllCategories()
    .then(res => {
      setCategories(<CategoriesList items={res} onItemSelect={onItemSelect} modalToggle={handleModalToggle} />);
    });
    console.log(categories);
  };

  const onSubmit = async (type, item) => {

  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div id="Categories">
      <div className="pageHeader mb-4">
        <h1>Categories</h1>
      </div>
      {categories}
    </div>
  );
}

export default Categories;
