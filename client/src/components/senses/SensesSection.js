import React from 'react'
import Senses from './Senses'
import cham from '../img/cham.jpg';
const SensesSection = () => {
  return (
    <div>
        <Senses image={cham} title={"ahla"}/>
        <Senses image={cham}/>
        <Senses image={cham}/>
        <Senses image={cham}/>
        <Senses image={cham}/>
    </div>
  )
}

export default SensesSection