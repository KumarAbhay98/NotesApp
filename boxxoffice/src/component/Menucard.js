import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <section className="main-card--container">
      {menuData.map((curElem) => {
        const { id, name, branch, image, semester, description, watch } = curElem;
        return (
          <React.Fragment key={id}>
            <div className="cardd">
              <div className="card-body">
                <span className="card-number card-rectangle subtle">Id: {id}</span>
                <span className="card-author"> {branch}</span>
                <span className="card-author">Semester: {semester}</span>
                <h2 className="card-title"> {name} </h2>
                <span className="card-description">{description}</span>
                <div className="animate-border"></div>
              </div>
              <img
                src={image}
                alt={`Poster for ${name}`}  
                className="card-media"
                style={{ objectFit: 'cover' }}  
              />
              <a target="_blank" rel="noreferrer" className="card-tag" href={watch}>
                Watch Now
              </a>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default MenuCard;
