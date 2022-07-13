import React, { useState } from "react";


const Categories = (props) => {

  const [activeCat, setActiveCat] = useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]



  return (
    <div className="categories">
      <ul>
        {categories.map((value, id) =>{
          return <li onClick={() => setActiveCat(id)}
           key={id}
            className={activeCat == id ? 'active' : ''}>{value}</li>
        })}
      </ul>
    </div>
  );
};

export default Categories;
