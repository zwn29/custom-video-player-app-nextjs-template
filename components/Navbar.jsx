import React from 'react';
import Link from 'next/link';
import { LightningBoltIcon } from '@heroicons/react/solid';
import toast from 'react-hot-toast';

export default function Navbar() {
  return (
    <div className="border-b-2 shadow-md border-gray-100 ">
      <nav className="flex justify-center ">
        <div className=" flex flex-col md:flex-row justify-center md:space-y-0 my-4 space-y-4  text-center text-gray-500">
          <a className="mx-8 ">
            <LightningBoltIcon
              onClick={() => {
                toast.custom(
                  (t) => (
                    <div
                      className={`${
                        t.visible ? 'animate-enter' : 'animate-leave'
                      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                      <div className="flex-1 w-0 p-4 select-none">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 pt-0.5">
                            <img
                              className="h-10 w-10 rounded-full fill-neutral-500"
                              src="https://i.ibb.co/vx83y1t/image.jpg"
                              alt=""
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              zenf
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              I hope you are doing well
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex border-l border-gray-200 select-none">
                        <button
                          onClick={() => toast.dismiss(t.id)}
                          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ),
                  {
                    position: 'bottom-right',
                  }
                );
              }}
              className="text-gray-500 h-6 hover:text-green-600 cursor-pointer"
            />
          </a>

          <Link href="/">
            <a className="mx-8 hover:text-red-900 active" aria-current="page">
              {' '}
              Home{' '}
            </a>
          </Link>
          <Link href="/about">
            <a className="mx-8 hover:text-red-900"> About </a>
          </Link>
          <a href="#" className="mx-8 hover:text-red-900">
            {' '}
            Docs{' '}
          </a>
          <Link href="/check">
            <a className="mx-8 hover:text-red-900"> Videos</a>
          </Link>
          <a href="#" className="mx-8 hover:text-red-900">
            {' '}
            IN{' '}
          </a>
        </div>
      </nav>
    </div>
  );
}
