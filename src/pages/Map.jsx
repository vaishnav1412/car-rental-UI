import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import bmw from '../components/assests/Animation - 1701162028783.json';

function Map() {
  const [animationInstance, setAnimationInstance] = useState(null);

  useEffect(() => {
    // Load the Lottie animation
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-container'), // ID of the container div
      animationData: bmw, // Your animation data
      loop: true, // Set to true if you want the animation to loop
      renderer: 'svg', // Choose the renderer (svg, canvas)
    });

    setAnimationInstance(animation);

    // Clean up on component unmount
    return () => {
      animation.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div style={{marginTop:'50px'}}>
      <div className='wrapper'>
        <div className='map'>
          <div style={{ width: '100%' }}>
            <iframe
              title="Google Map"
              width="600"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=400&amp;height=500&amp;hl=en&amp;q=kannur+(Car%20rental%20shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <div className='address'>
        <div style={{width:'500px',height:'80px'}} className='mx-auto max-w-screen-md'></div>
          <div id="lottie-container"></div>
          <h1 style={{color:'red',fontSize:'bold',marginBottom:'40px',textShadow:'inherit'}} className=''></h1>
        </div>
      </div>
    </div>
  );
}

export default Map;
