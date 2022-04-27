import React from "react";

const Cards = ({ item, index }) => {
  return (
    <div class="card" style={{"width": "18rem", "margin": "10px", "background-color": "" }}>
      <div class="card-body">
        <h5 class="card-title">{item.Name}</h5>
        <h6 class="card-subtitle mb-2 text-muted"><span class="badge rounded-pill bg-primary">{item.Category}</span></h6>
        <p class="card-text">
          {item.Description}
        </p>

        <div style={{"position" : "absolute", "right": "20px", "bottom": "20px"}}>
        <i class="far fa-edit" style={{"color": "black", "margin-right": "15px"}}></i>
        <i class="fas fa-trash-alt" style={{"color": "black"}}></i>

        
        </div>
        {/* <a href="#" class="card-link">
          Card link
        </a>
        <a href="#" class="card-link">
          Another link
        </a> */}
      </div>
    </div>
  );
};

export default Cards;
