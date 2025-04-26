import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import supabase from './client';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [mobs, setMobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMobs = async () => {
      const { data, error } = await supabase
        .from('Mobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching mobs:', error);
        setError(error);
      } else {
        console.log('Mobs fetched successfully:', data);
        setMobs(data);
      }
    };

    fetchMobs();
  }, []);

  return (
    <>
      <div className='other-col'>
        <div className="gall-box">
          {error && <p>Error loading mobs: {error.message}</p>}
          
            {mobs.map((mob) => (
              <div key={mob.id} className="gall-mini">
                <img className="create-img" src='./mob.png' alt={mob.name} />
                <h3>{mob.name}</h3>
                <p>{mob.personality}</p>
                <p>{mob.mob_type}</p>
             </div>
            ))}
        
        </div>
      </div>
    </>
  );
}



export default Gallery;