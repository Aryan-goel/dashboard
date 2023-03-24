import React from 'react'
import { useParams } from "react-router-dom";
import HackathonHead from './HackathonHead';
import HackathonBody from './HackathonBody';

function Hackathon() {
  let { id } = useParams();
  
  return (
    <>
      <HackathonHead title={id} />
      <HackathonBody title={id}/>
    </>
  )
}

export default Hackathon