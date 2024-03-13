const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay, // Corrected the syntax here
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export { fadeIn };


// import React from "react";
// import "./Project.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {Carousel} from "react-responsive-carousel"
// function Project() {
//   return (
//     <div>
//       <div className="project_container">
//       <Carousel infiniteLoop autoPlay >
//         <div className="project_project">
//           <img className="project_image" src="" alt="" />
//           <div className="project_body">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. In aperiam
//             voluptates dolorem provident nemo ad nesciunt, velit nobis magni
//             atque porro architecto aspernatur quia culpa reprehenderit aut
//             voluptate illum voluptatum?
//             </div>
//             <a
//               className="project_clickmore"
//               href="https://akritiweather.netlify.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               click more
//             </a>
         
//         </div>

//         <div className="project_project">
//           <img className="project_image" src="" alt="" />
//           <div className="project_body">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. In aperiam
//             voluptates dolorem provident nemo ad nesciunt, velit nobis magni
//             atque porro architecto aspernatur quia culpa reprehenderit aut
//             voluptate illum voluptatum?
//             </div>
//             <a
//              className="project_clickmore"
//               href="https://akritiweather.netlify.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               click more
//             </a>
          
//         </div>
//         <div className="project_project">
//           <img className="project_image" src="" alt="" />
//           <div className="project_body">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. In aperiam
//             voluptates dolorem provident nemo ad nesciunt, velit nobis magni
//             atque porro architecto aspernatur quia culpa reprehenderit aut
//             voluptate illum voluptatum?
//             </div>
//             <a
//               className="project_clickmore"
//               href="https://akritiweather.netlify.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               click more
//             </a>
//         </div>
//       </Carousel>
//       </div>
//     </div>
//   );
// }
// export default Project;

// @media screen and (max-width: 768px) {
//     .about_skills1 {
//         padding-top: 20px;
//         padding-left: 20px;
//         font-size: 0.8rem;
//     }

//     .aboutskills2,
//     .aboutskills11,
//     .aboutskills12,
//     .aboutskills13,
//     .aboutskills14 {
//         margin-left: 20px;
//         margin-right: 20px;
//     }
// }

// @media screen and (max-width: 480px) {
//     .about_skills1 {
//         padding-top: 10px;
//         padding-left: 10px;
//         font-size: 0.7rem;
//     }

//     .aboutskills2,
//     .aboutskills11,
//     .aboutskills12,
//     .aboutskills13,
//     .aboutskills14 {
//         margin-left: 10px;
//         margin-right: 10px;
//     }
// }