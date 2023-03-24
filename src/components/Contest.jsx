import React from 'react'
import ContestHead from "./ContestHead"
import ContestBody from './ContestBody'
import { useParams } from "react-router-dom";

function Contest() {
  let { id } = useParams();
  
  return (
    <>
      <ContestHead title={id} />
      <ContestBody title={id}/>
    </>
  )
}

export default Contest