import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../../commonResource/images/icons/search-icon-sm.png'
export default function Four04() {
  const listS = [
    "Store","Mac","iPad","iPhone","Watch",
    "AirPads","TV & Home","Only on Apple","Accessories","Support"
  ];
  const [List, setList] = useState([]);
  const doSearch = (e) => {
    if (e.target.value === '') {
      setList(listS);
    }
    // IPHONE
    // i
    function filterer(item) {
    let change =item.toUpperCase() //iphone
   let  values=e.target.value.toUpperCase() //iphone
    return change.indexOf(values) !== -1
}
    let filteredValues = listS.filter(filterer);
    setList(filteredValues);
  };
  return (
    <div className='four04search'>
<form > <h1>The page you’re looking for can’t be found.Search below</h1>     
   <div className='foursearch'> 
   <img className='fourimg' alt='search' src={search}></img>
       <div className="appp">
      <div className='aaaaa'>
         <input  placeholder='Search apple.com' type="text" onChange={doSearch} />
      </div>
    
      { List.map((item,index) => {
        <p>suggested searches</p>
        let displayed=(<div >
          <Link to={item} >{item}</Link>
          </div>)
        return displayed
      }
        
       )}
    </div>

 </div>
    <br></br>
    <br></br>
    <br></br>
    <Link className='map' to='./'>or see our site map </Link>

</form>
    </div>
  )
}

