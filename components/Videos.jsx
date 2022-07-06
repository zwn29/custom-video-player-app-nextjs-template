import React from 'react';
import { useState, useEffect } from 'react';
import getVideos from '../lib/essentials';
import Video from './Video';

export default function Videos({ videosProps }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setVideos(getVideos());
    return () => {};
  }, []);

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      Hello
    </div>
  );
}

// export async function getStaticProps() {
//   const clientToken =
//     '7f9c24146648831fbeace6317c22483818001e6761d89e55c1d996fbe93d1eab';

//   function createUrl(url) {
//     return 'https://videos.us-southeast-1.linodeobjects.com/' + url;
//   }

//   async function getVideos() {
//     const res = await fetch(
//       'https://api.linode.com/v4/object-storage/buckets/us-southeast-1/videos/object-list',
//       {
//         method: 'GET',
//         headers: {
//           Authorization: 'Bearer ' + clientToken,
//         },
//       }
//     );
//     const data = res.json();
//     const videos = data.data;
//     return videos;
//   }
//   try {
//     const videos = await getVideos();
//     videos.forEach((video) => (video.url = createUrl(video.name)));
//     // let videosArray = [];
//     // videos.forEach((video) => {
//     //   videosArray.push({ ...data });
//     // });
//     // console.log(data, 'ze');
//     return {
//       props: {
//         videosProps: JSON.stringify(videos) || [],
//         // videosProps: videos,
//       },
//     };
//   } catch (onemorelesson) {
//     return {
//       props: {},
//     };
//   }
// }
