import React from "react";

const Cards = ({ item, index, deleteTask }) => {
    let a=0;
    if(item.Category){
       a = parseInt(item.Category);
    }
  const colors = [
    {
        primaryColor : "#000",
        secondaryColor: "#fff"
     },
      {
         primaryColor : "#CC0000",
         secondaryColor: "#ff4444"
      },
      {
        primaryColor : "#FF8800",
        secondaryColor: "#ffbb33"
     },
     {
        primaryColor : "#007E33",
        secondaryColor: "#00c851"
     }
    ];

    const handleDelete = ()=>{
        deleteTask(index);
    }

  return (
    <div
      className="card"
      style={{ "width": "18rem", "margin": "10px", "backgroundColor": colors[a].secondaryColor }}
    >
      <div className="card-body">
        <h5 className="card-title">{item.Name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Status: 
          <span className="badge rounded-pill" style={{"backgroundColor": colors[a].primaryColor}}>{item.Category}</span>
        </h6>
        <p className="card-text">{item.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit"
            style={{ color: "black", "marginRight": "15px", "cursor": "pointer"}}
            
          ></i>
          <i className="fas fa-trash-alt" style={{ "color": "black" , "cursor": "pointer"}} onClick={handleDelete}></i>
        </div>
      </div>
    </div>
  );
};

export default Cards;
