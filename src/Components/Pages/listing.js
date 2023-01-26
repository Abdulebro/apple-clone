import React, { useState } from "react";

// import "./styles.css";

function Lister() {
  const list = [
    "Abuko","AmbaSel","DebreSina","Dessie","DessieZuria",
    "Jama","Kalu","Kelela","Kombolcha","Kutaber","Legahida","Legambo","Magdala","MehalSayint","Sayint","Tehuledere","Wegde","WereBabu","WereIlu"
  ];

  const [filterList, setFilterList] = useState(list);
  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
// console.log(list[0]);

function filterer(item) {
    let change =item.toLowerCase()
   let  values=event.target.value.toLowerCase()
    
    return change.indexOf(values) !== -1
}


    const filteredValues = list.filter(filterer);
    setFilterList(filteredValues);
  };

  return (
    <div className="appp">
      <div>
        Search: <input  type="text" onChange={handleSearch} />
      </div>
      <hr></hr>
      { filterList.map((item,index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
  );
}

export default Lister;