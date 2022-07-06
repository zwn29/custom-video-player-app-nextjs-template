import React from 'react';
import { useRouter } from 'next/router';

export default function Video({ video }) {
  const router = useRouter();
  return (
    <div className="md:m-3 m-1 p-2 md:h-60  h-full  overflow-hidden">
      <video
        className="hover:scale-105   transition-all max-h-60  h-full w-full object-fill"
        src={video.url}
        onMouseEnter={(e) => {
          setTimeout(() => {
            try {
              e.target.play();
            } catch (e) {
              console.log(e);
            }
          }, 2000);
        }}
        onMouseLeave={(e) => {
          try {
            e.target.pause();
          } catch (e) {
            console.log(e);
          }
        }}
        muted
        onClick={(e) => {
          router.push({
            pathname: `/videos/${video.etag}`,
            query: { url: video.url },
          });
        }}
      ></video>
    </div>
  );
}
