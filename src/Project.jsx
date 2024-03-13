import React, {useState} from "react";
import "./Project.css";

function Project() {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="project">
      <h1>My Project</h1>
      <div className="product1">
        <div className="image1">
          <img className="img1" src="Screenshot (221).png" alt="" />
          <div className="name1">
            <h2>Weather App</h2>
            This weather app displays the real-time temperature of a city.
          </div>
          <a
            className="project_clickmore"
            href="https://akritiweather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click more
          </a>
        </div>
        <div className="image1">
          <img className="img1" src="Screenshot (223).png" alt="" />
          <div className="name1">
            <h2>Keeper App</h2>
            {isExpanded ? (
              <>
                This application allows users to create notes by providing a
                title and description.Users can also delete notes using a convenient delete option.
              </>
            ) : (
              <>
                 This application allows users to create notes by providing a
                title and description.
                <span onClick={toggleExpand} >
                  <div >Read more</div>
                </span>
              </>
            )}
          </div>
          <a
            className="project_clickmore"
            href="https://akritikeeperapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click more
          </a>
        </div>
        <div className="image1">
          <img className="img1" src="Screenshot (224).png" alt="" />
          <div className="name1">
            <h2>Todo List</h2>
            In this application, you can add items to a to-do list by entering tasks in the input field and clicking the 'Add' button.
          </div>
          <a
            className="project_clickmore"
            href="https://akrititodolist.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click more
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
