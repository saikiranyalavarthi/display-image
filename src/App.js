import React from 'react';
import Carousel from './Carousel';
import './App.css'

const App = () => {
  const images = [
    {
      url: 'https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0',
      
      alt: 'Image 1',
      details: 'Details for Image 1',
     
      
    },
    {
      url: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
     
      alt: 'Image 1',
      details: 'Details for Image 2',
      
     
    },
    {
      url: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
     
      alt: 'Image 1',
      details: 'Details for Image 3',
    
     
    },
    {
      url: 'https://wallpapercave.com/wp/wp2599594.jpg',
      alt: 'Image 1',
      details: 'Details for Image 4',
   
     
    },
    {
      url: 'https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gAAAA?pid=ImgDet&rs=1',
     
      alt: 'Image 1',
      details: 'Details for Image 5',
     
     
    },
    {
      url: 'https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0',
     
      alt: 'Image 1',
      details: 'Details for Image 6',
     
      
    },
    
  ];

  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App;
