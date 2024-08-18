import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MediaCover() {
  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      strings: [
        'Explore Kerala on Wheels',
        'Discover the Beauty of God\'s Own Country',
        'Memorable Journeys Await You',
        'Embrace the Freedom of the Open Road',
        'Unwind with Scenic Drives in Kerala',
        'Your Adventure Starts with Our Premium Car Rentals',
      ],
      autoStart: true,
      loop: true,
    });

    return () => {
      
      typewriter.stop();
    };
  }, []);

  return (
   <div className='sample1 col-sm-12'>
     <Box>
      <Card component="li" sx={{ minWidth: 400, minHeight: '80vh', flexGrow: 1, position: 'relative', boxShadow: 5 }}>
        <CardCover className='col-sm-12 ' sx={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(to bottom, #1db954, rgba(0, 0, 0, 0.7))' }}>
          <video
          className='col-sm-12 '
            autoPlay
            loop
            muted
            sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source
            className='col-sm-12 '
              src="https://res.cloudinary.com/ddzrpelib/video/upload/v1699865177/welcome/production_id_3752531_1080p_ruj0uu.mp4"
              type="video/mp4"
            />vediosam
          </video>
        </CardCover>
        <CardContent sx={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Typography className="col-md-12 " id="typewriter" variant="h3" style={{color:'white', backgroundColor:'rgba(0,0,0,0.5)' }} sx={{ fontFamily: 'cursive', fontWeight: 'bold', letterSpacing: 1, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', whiteSpace: 'nowrap', overflow: 'hidden', marginBottom: '20px', fontSize: '2.5rem' }}>
           
          </Typography>
          <Typography className="col-sm-12 vediosam" variant="subtitle1" style={{color:'white'}} sx={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', fontSize: '1.2rem' }}>
            - Your perfect companion on the roads of Kerala
          </Typography>
        </CardContent>
      </Card>
    </Box>
   </div>
  );
}
