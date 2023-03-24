import React, {useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom'
import { BsFillTrashFill, BsFillPenFill } from 'react-icons/bs'
import { AiTwotoneCalendar } from 'react-icons/ai'
import 'reactjs-popup/dist/index.css';
import Delete from './Delete';


function HackathonHead(title) {
  const [buttonpopup, setbuttonpopup] = useState(false)
  const [favourite, setFavourite] = useState(false);

  var curObj;
  const obj=JSON.parse(window.localStorage.getItem('Hackathons'))
  for(var i = 0; i < obj.length; i++){
    if(obj[i].inputs.title == title.title){
      curObj=obj[i];
    }
  }

  const toggleFav = () => {
    var temp=[];
    var value;
    var obj=JSON.parse(window.localStorage.getItem('Hackathons'))
    for(var i = 0; i < obj.length; i++){
      if(obj[i].inputs.title == title.title){value=obj[i];}
      else{temp.push(obj[i]);}
    }
    
    if(favourite){
      value.inputs.favourite=false;
      curObj.inputs.favourite=false;
      console.log(curObj.inputs.favourite);
    }else{
      value.inputs.favourite=true;
      curObj.inputs.favourite=true;
      console.log(curObj.inputs.favourite);
    }
    setFavourite(!favourite);
    temp.push(value);
    window.localStorage.setItem('Hackathons',JSON.stringify(temp));
    console.log(value.inputs['favourite']);

  };

  useEffect(() => {
    setFavourite(curObj.inputs.favourite);
  }, []);

  return (
    <>
    <div className='HomeHead_bg margin_set'>
      <div className='ContestName'>
        <div style={{flex: 65}}>
          <div className='ContestImg'>
            <span><img src={curObj.inputs[""]} alt="" /></span>
            <h1>{curObj.inputs.title}</h1>
          </div>
          <p>{curObj.inputs.summary}</p>
          <div className='ContestFav'>
            <span><i className={`${favourite===true? "fas":"far"} fa-star`} onClick={toggleFav}></i> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span> 
              <button> <AiTwotoneCalendar/> 12 March</button>
          </div>
        </div>
        <div className='ContestEdit'  style={{flex: 35, alignItems: "flex-end", justifySelf: "flex-end"}} >
          <NavLink to={"../.././edit/"+curObj.inputs.title}>
              <span><BsFillPenFill/>Edit</span>
          </NavLink>
            <span onClick={() => setbuttonpopup(true)}><BsFillTrashFill/>Delete</span>
        </div>
      </div>
    </div>
    <Delete title={title} trigger={buttonpopup} setTrigger = {setbuttonpopup} />
    </>
  )
}

export default HackathonHead