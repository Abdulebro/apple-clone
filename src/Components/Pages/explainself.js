
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import IMG from '../../commonResource/images/home/air-pods.jpg'

function Iphh() {
const [disp,setDisp]=useState([])
useEffect(()=>{
fetch("http://localhost:2145/apple/fetch")
.then((product)=>product.json())
.then((data)=>{
	const product=data.products
	setDisp(product)
})
},[])
									// <div className="prodict-image">
									// 	<img src={require('../../commonResource/images/home/actors.jpg')} alt="product" />
									// </div>
// 
//   return (
// 	<div>{

// disp.map((variable)=>{
// console.log(variable);
// 						let id = variable.product_url;
// 						let title = variable.product_name;
// 						let img = variable.product_img;
// 						let Brief = variable.product_brief_description;
// 						let StartPrice = variable.starting_price;
// 						let PriceRange = variable.price_range;
// 												// let order1 = 1;
// 						// let order2 = 2;
// 						// if (order !== 1) {
// 						// 	order1 = 2;
// 						// 	order2 = 1;
// 						// 	order--;
// 						// } else {
// 						// 	order++;
// 						// }
// 							let div=(<div>
// 							<div className={`col-sm-12 col-md-6 order-${id}`}>				
// 								{id} <br></br>
// 								{title} <br></br>
// 								{Brief} <br></br>
// 								{StartPrice} <br></br>
// 								{PriceRange} <br></br></div>
													
// 					<div className={`prodict-image col-sm-12 col-md-6 order-${id}`}></div>
// 								<img src={img} ></img><br></br>
										
// 								</div>)
// 							return div


// })


// 	}
// 	<p>abebebeeeee</p>
// 		</div>
//   )
let order = 1;
	return (
		<div>
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12 mt-5">
							<div className="title-wraper font-weight-bold">Iphones</div>
							<div className="brief-description">
								The best for the brightest.
							</div>
						</div>
					</div>
					{
                        disp.map((value)=>{
                            let img=value.product_img
                            let abebe=(<div>
                                <p>{value.product_url}</p>
                                <p>{value.product_name}</p>
                                <p>{value.product_brief_description}</p>
                                <p>{value.starting_price}</p>
                                <p>{value.price_range}</p>
                                 <img src={img} alt="heyyy" /> 
                             
                            
           
                                </div>)
                                return abebe
                        })
                    }
				</div>
			</section>
		</div>
	);

}

export default Iphh