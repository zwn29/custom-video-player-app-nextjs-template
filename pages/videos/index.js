import { useEffect, useState } from 'react';
import Video from '../../components/Video';
import Navbar from '../../components/Navbar';
import { Toaster } from 'react-hot-toast';
import Videos from '../../components/Videos';

export default function index() {
  return (
    <div>
      <Navbar />
      <Videos />
      <Toaster />
    </div>
  );
}
