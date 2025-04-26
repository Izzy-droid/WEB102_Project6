import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import supabase from './client';

function Createpage() {
  

  const addMob = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.elements.name?.value || ''; 
    const personality = form.elements.personality?.value || '';
    const mob_type = form.elements.mob_type?.value || ''

    console.log({ name, personality, mob_type }); 


    const {error} = await supabase .from('Mobs') .insert([{
      name,
      personality,
      mob_type,
    }])
    if (error) {
      console.log('Error adding mob:', error);
    } 
    if (!name || !personality || !mob_type) {
      console.log('All fields are required.');
      return;
    }
    else {
      console.log('Mob added successfully');
    }
  }

  return (
    <>
       <div className='create-col'>
        <div className='arrange-form'>
          <div className="arrange-title">
            <p className='create-title'>Welcome, create your own mob!</p>
            <p className='create-title'>Select attributes below</p>
          </div>
          <div className="fix-inner">
            <form onSubmit={addMob}>
             
              <div id='creeper-awwman'>
              <img className="create-img" src='./mob.png' alt="creating mob photo" />
            
              </div>
              <label htmlFor="fname">Name: </label>
              <input type="text" id="fname" name="name" />
              <div className="">
                <p>Personality type: </p>
                <input type="radio" id="sneaky" name="personality" value="Sneaky" />
                <label htmlFor="sneaky">Sneaky</label><br />
                <input type="radio" id="lively" name="personality" value="Lively" />
                <label htmlFor="lively">Lively</label><br />
                <input type="radio" id="depressed" name="personality" value="Depressed" />
                <label htmlFor="depressed">Depressed</label><br/>
                <br/>
                <p>Mob type: </p>
                <input type="radio" id="creeper" name="mob_type" value="Creeper" />
                <label htmlFor="creeper">Creeper</label><br />
                <input type="radio" id="enderman" name="mob_type" value="Enderman" />
                <label htmlFor="enderman">Enderman</label><br />
                <input type="radio" id="zombie" name="mob_type" value="Zombie" />
                <label htmlFor="zombie">Zombie</label><br/>
                <br/>
                
              </div>
              <div className='button-align'>
              <button  type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createpage;