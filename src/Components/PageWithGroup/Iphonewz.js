import React,{useEffect,useState} from 'react'

function Iphonewz() {

const [display,setDisplay]=useState([])
useEffect(()=>{
  fetch('http://localhost:3099/iphones')
  .then((response)=>response.json())
  .then((data)=>{
    let tilaye=data.products
    setDisplay(tilaye)
  }).catch(console.log('i cant find the page u asked me')
  )
},[])


  return (
    <div>
{
  display.map((sinatyehu,i)=>{
    console.log(sinatyehu);
    let displayed=(<div key={i}>
      {sinatyehu.product_name
}<br></br>
<h1>{sinatyehu.product_brief_description
}</h1>
<h1>{sinatyehu.starting_price
}</h1>

<img src={sinatyehu.product_img
}></img>
</div>)
    return displayed
  })
}

    </div>
  )
}

export default Iphonewz