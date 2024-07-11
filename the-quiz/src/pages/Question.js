// Libraries
import { useLocation } from "react-router-dom";

// Assets
import "./../assets/styles/Question.css";

// Components

function Question() {
  const location = useLocation();

  return (
    <div className="Question fadeIn">
       <div className="card-body">
            <h1 className="pageHeader mb-4">
                {location.state.test ? location.state.test.name : 
                <p className="listError">Something went wrong...</p>}
            </h1>
        </div>
    </div>
  );
}

export default Question;
