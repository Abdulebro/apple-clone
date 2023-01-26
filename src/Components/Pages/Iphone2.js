// import React,{useEffect,useState} from 'react'

// function Iphone() {
// const [display,setDisplay]=useState([])
// let aaa={"products":[{
//     "id":"iphone",
//     "product_img":"https://image.winudf.com/v2/image1/Y29tLnZvbHVudGVlcngzNjAuaXBob25lLmlwaG9uZTE0cHJvbWF4LmlwaG9uZTE0cHJvbWF4MjAyMS5sYXVuY2hlcjIwMjEudGhlbWVzMjAyMS5pcGhvbmUxNHByb21heDIwMjEud2FsbHBhcGVyMjAyMS5wcm9tYXhpY29ucy5wcm9tYXgxNF9zY3JlZW5fMTVfMTYxNjYxODY2OF8wMTU/screen-10.jpg?h=710&fakeurl=1&type=.jpg",
//     "product_url":"b",
//     "product_name":"Big and bigger.",
//     "starting_price":"$222",
//     "price_range":"$222 to 333",
//     "product_brief_description":"From $33.29/mo. for 24 mo. or $799 before trade‑in1 "
// },{
//      "id":"iphone 11 pro max",
//     "product_img":"https://www.infofueguina.com/u/fotografias/m/2021/6/2/f768x1-82342_82469_5050.png",
//     "product_url":"beee",
//     "product_name":"iphone 11 pro max",
//     "starting_price":"$222eee",
//     "price_range":"$222 to 333eee",
//     "product_brief_description":"promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X"

// }]}



// useEffect(()=>{
//     fetch(aaa).then((response)=>{
//         response.json();
//     }).then((data)=>{
//      let changed=data.products
//      setDisplay(changed)
//     }).catch(()=>console.log('here')
//     )
// },[])

//   return (
//     <div>
//     {

// display.map((mappedd)=>{
//     console.log(mappedd);
    
// })


//     }
//     </div>
//   )
// }

// export default Iphone