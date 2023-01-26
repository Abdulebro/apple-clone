import React,{useState,useEffect} from 'react'

function Iphoneee() {
    const[displayed,setDesplayed]=useState([])
    useEffect(()=>{
        fetch('http://localhost:2145/apple/abebe')
        .then((Response)=>Response.json())
        .then((data)=>{
              let iphone =data.products
              setDesplayed(iphone)
        }).catch(()=>{
            console.log('i cannot get the data');
            
        })
    },[])

  return (
    <div className='withoutcss'>
    {
        displayed.map((value)=>{
            console.log(value);
            let price=value.price_range;
          let pbd = value.product_brief_description
         let pd= value.product_description
        let img= value.product_img
      //  let pn= value.product_name
      //  let sp=value.starting_price
      //  let pur=value.product_url
       let displayer=(<div>
        <p>{price}</p>
        <h3>{pbd}</h3>
        <h5>{pd}</h5>
        <p>{price}</p>
        <img alt={'/'} src={img}></img>
        
        </div>)
        return displayer  
        })
    }
    
    
    </div>
  )
}

export default Iphoneee