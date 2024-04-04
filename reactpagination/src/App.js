import React, { useEffect, useState }  from 'react';
import './App.css';

function  App()  {
  
  const [items,setItems] = useState([]);
  const [visible,setVisible] = useState(3);
 
  function morethree (){
    setVisible( item => item += 3)
  }

  /* useEffect(); */
  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
    .then((res)=>res.json())
    .then((data)=>setItems(data.meals)) 
        
  }, [])
  
  
  
  
  
  return (
      <div className="App">
        
        <h1 className='header'> Meals <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/wqurxy1511453156.jpg"></img></h1>
        <div className='container'>

          {items.slice(0,visible).map(item=>(
            <div className='card'>
              <div className='image'>
                <img src={item.strMealThumb}></img>
                </div>
                <p>{item.strMeal}</p>
                </div>
          ))}
         
         <button onClick={morethree}>Click Another 3 Items</button>
        </div>
      </div>
    );
  
}

export default App;
