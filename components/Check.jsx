import React from 'react';
import { useRouter } from 'next/router';

export default function Check() {
  const router = useRouter();
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <div className="border-2 px-4 py-2 drop-shadow  rounded-md md:w-96 md:h-60 flex flex-col items-center justify-center">
        <h2 className="m-5 text-xl text-center">Are you over 18 ?</h2>
        <div className="flex justify-center ">
          <button
            onClick={() => router.push('/videos')}
            className="m-2 text-center border-2 py-1 px-3 rounded-md border-red-600 hover:scale-105 active:scale-95 text-gray-600"
          >
            Yes
          </button>
          <button
            onClick={() => router.push('/chibie')}
            className="m-2 text-center border-green-600 border-2 py-1 px-4 rounded-md  hover:scale-105 active:scale-95 text-gray-600"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
