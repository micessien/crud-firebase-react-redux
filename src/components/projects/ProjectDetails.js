import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            delectus, velit dignissimos sapiente a sequi voluptates dolore
            aliquam consectetur laboriosam expedita aspernatur voluptatum
            maiores deserunt beatae ipsum officia provident quod.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
