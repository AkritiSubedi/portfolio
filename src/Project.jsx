import React, {useState} from "react";
import "./Project.css";

function Project() {

  const Text=[
    {
      id:1,
      img:"../public/Screenshot (227).png",
      heading:"E-commerce Webpage",
      href:"https://akriti1webpage.netlify.app/",
      click:"click more",
      desc:"I created a dynamic e-commerce site with a captivating homepage and easy navigation. Users can browse products effortlessly and make purchases with 'Buy Now' and 'Add to Cart' buttons. Seamless transitions enhance the shopping experience."

    },
    {
      id:2,
      img:"../public/Screenshot (221).png",
      heading:"Weather App",
      href:"https://akritiweather.netlify.app/",
      click:"click more",
      desc:"I've built a weather app where users input a city name to instantly get the live temperature, weather conditions, humidity, and wind speed, providing quick access to essential weather information."

    },
    {
      id:3,
      img:"../public/Screenshot (223).png",
      heading:"Keeper App",
      href:"https://akritikeeperapp.netlify.app/",
      click:"click more",
      desc:"This application allows users to create notes by providing a title and description.Users can also delete notes using a convenient delete option.This application allows users to create notes by providing a title and description. "
    },
    {
      id:4,
      img:"../public/Screenshot (224).png",
      heading:"Todo List",
      href:"https://akriti1todolist.netlify.app/",
      click:"click more",
      desc:"In this to-do list app, users can effortlessly add tasks by typing them into the input field and clicking 'Add'. Additionally, task removal is streamlined, allowing users to simply click on tasks they wish to delete. "

    },
   
    {
      id:5,
      img:"../public/Screenshot (225).png",
      heading:"Drum Kit",
      href:"https://akriti1drumkit.netlify.app",
      click:"click more",
      desc:"I've developed a drum kit application that allows users to play various drum sounds by clicking on labeled elements or pressing corresponding keys on their keyboard. It offers a virtual drum set experience, enabling users to create rhythms and beats interactively."
    },
  ]
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="project">
      <h1 className="headings">My Project</h1>
      <div className="product1">
      {Text.map((value,index)=>(
  <div className="image1" key={value.id}>
    <img className="img1" src={value.img} alt="" /> 
    <div className="name1">
      <h2>{value.heading}</h2>
      {value.desc.length > 100 ? (
        <>
          {isExpanded ? (
            <>
              {value.desc}
              <span onClick={toggleExpand}>
                <div>.show less</div>
              </span>
            </>
          ) : (
            <>
              {value.desc.slice(0, 100)}
              <span onClick={toggleExpand}>
                <div>..show more</div>
              </span>
            </>
          )}
        </>
      ) : (
        <>
          {value.desc}
        </>
      )}
    </div>
    <a
      className="project_clickmore"
      href={value.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value.click}
    </a>
  </div>
))}

        {/* <div className="image1">
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
        </div> */}
        {/* <div className="image1">
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
        </div> */}
      </div>
    </div>
  );
}
export default Project;
