// import React,{useEffect,useState} from 'react'

// function YoutubeWithout() {

//   const[videos,setVideos]=useState([])
//   useEffect(()=>{
//     fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCWIWdXXTTTQaSRLRYO8m4cwcVAPLgo5y4&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`)
//     .then((response)=>response.json())
//     .then((data)=>{
//     let ChangedVideo=data.items
//     setVideos(ChangedVideo)
//     })
// 	.catch(console.log('i cannot get the data')
// 	)
//   },[])
//   return (
// <div>
// 						{videos.map((singleVideo, i) => {
// 							let vidId = singleVideo.id.videoId;
// 							let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//                             let title=singleVideo.snippet.title
//                            let url= singleVideo.snippet.thumbnails.high.url
//                            let discription=singleVideo.snippet.description
// 							let videoWrapper = (
// 								<div>
//                              <a href={vidLink}> <h4>  {title}</h4></a>
//                              <a href={vidLink}> <img alt='' src={url}> </img></a>
//                               <h3>  {url}</h3>
//                               <h4>  {discription}</h4>

//                                 </div>
// 							);
// 							return videoWrapper;
// 						})}
// 					</div>
			
			
		
//   )
// }

// export default YoutubeWithout