// import React,{useEffect,useState} from 'react'

// function YoutubeWana() {
//   const[videos,setVideos]=useState([])
//   useEffect(()=>{
//     fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD6F2qDn7S8DbLS9Lr9QDy-TraPTcWeKsQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`)
//     .then((response)=>response.json())
//     .then((data)=>{
//     let ChangedVideo=data.items
//     setVideos(ChangedVideo)
//     })
// 	.catch(console.log('i cannot get the data')
// 	)
//   },[])
//   return (
//    <section className="youtubeVideosWrapper">
// 			<div className="allVideosWrapper">
// 				<div className="container">
// 					<div className="row justify-content-center text-center">
// 						<div className="col-12">
// 							<div className="title-wraper">
// 								Latest Videos <br />
// 								<br />
// 							</div>
// 						</div>

// 						{videos.map((singleVideo, i) => {
// 							let vidId = singleVideo.id.videoId;
// 							let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
// 							let videoWrapper = (
// 								<div key={i} className="col-sm-12 col-md-6 col-lg-4">
// 									<div className="singleVideoWrapper">
// 										<div className="videoThumbnail">
// 											<a href={vidLink} target="_blank" rel="noreferrer">
// 												<img
// 													src={singleVideo.snippet.thumbnails.high.url}
// 													alt="thumbnails"
// 												/>
// 											</a>
// 										</div>
// 										<div className="videoInfoWrapper">
// 											<div className="videoTitle">
// 												<a href={vidLink} target="_blank" rel="noreferrer">
// 													{singleVideo.snippet.title}
// 												</a>
// 											</div>
// 											<div className="videoDesc">
// 												{singleVideo.snippet.description}
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							);
// 							return videoWrapper;
// 						})}
// 					</div>
// 				</div>
// 			</div>
// 		</section>
//   )
// }

// export default YoutubeWana