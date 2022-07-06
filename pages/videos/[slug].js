import React from 'react';
import { useRouter } from 'next/router';
import VideoC from '../../components/VideoC';

export default function slug() {
  const query = useRouter().query;
  console.log(query);
  if (query) {
    return (
      <div>
        {/* <video controls src={query.url}></video> */}
        <VideoC url={query.url} />
      </div>
    );
  }
  return <div>it is not present</div>;
}
