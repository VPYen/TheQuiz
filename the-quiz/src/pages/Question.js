// Libraries
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Assets
import "./../assets/styles/Question.css";

// Components
import Service from "../components/Service";

function Question() {
  const location = useLocation();
  var questions = [];
  
  const getTest = async (id) => {
    let response = await Service.getOneTest(id)
    if (response.success){
      for (let i = 0; i < response.test.inquiries.length; ++i) {
        questions.push(
          <tr key={response.test.inquiries[i].id}>
            <td>
              {response.test.inquiries[i].question}
            </td>
          </tr>
        );
      }
    }
    console.log(questions);
  };

  useEffect(() => {
    if (location.state.test){
      getTest(location.state.test.id);
    }
  }, []);

  return (
    <div className="Question fadeIn">
       <div className="card-body">
            <h1 className="pageHeader mb-4">
                {location.state.test ? location.state.test.name : <p className="listError">Something went wrong...</p>}
            </h1>
            <table>
              <thead>
                <tr>
                  <th>Questions</th>
                </tr>
              </thead>
              <tbody>
                {questions}
              </tbody>
            </table>
        </div>
    </div>
  );
}

export default Question;
