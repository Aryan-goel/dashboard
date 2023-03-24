import React, { useState } from 'react' 
import { AiOutlineSearch } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import Card from './Card'

function HomeBody() {
  const [active, setActive] = useState("1");
  const [increasing, setincreasing] = useState(true);

  var temp;
  const updateorder = (event) => {
    const value = event.target.value;
    if(value=="Newest"){
      setincreasing(true);
    }else{
      setincreasing(false);
    }
  }
  let preDefinded = [] 


  return (
    <div className=' margin_set'>
        <div className='HeadNav'>
            <div className='subSection'>
                <span 
                  className={`${active === "1" ? "selected" : "unselected"}`}
                  onClick={() => setActive("1")}
                >
                    All Submission
                </span>
                <span 
                  className={`${active === "2" ? "selected" : "unselected"}`}
                  onClick={() => setActive("2")}
                >
                    Favourite Submission
                </span>
            </div>    
            <div className='subSection2' >
                <span><AiOutlineSearch width={'10px'}/>  &nbsp; Search
                </span>
                <span className='select'><select onChange={updateorder} name="order" id="order">
                  <option value="Newest">Newest &nbsp; &nbsp;</option>
                  <option value="Oldest">Oldest &nbsp; &nbsp;</option>
                </select></span>
            </div>   
        </div>

        <div className="cardFlex">
        {window.localStorage.getItem('Hackathons')!=null?JSON.parse(window.localStorage.getItem('Hackathons')).map((event) => {
            temp="/contest/"+event.inputs.title
            if(active=="2") {
              if(event.inputs.favourite){
                return (
                  <>
                    <NavLink to={temp} style={{textDecoration: "none"}}>
                  <Card name={event.inputs.title} img={event.inputs[""]} date={event.curDate} desc={event.inputs.summary}/>
                    </NavLink>
                  </>
                )
              }
            }
            else {
              return (
              <>
                <NavLink to={temp} style={{textDecoration: "none"}}>
                  <Card name={event.inputs.title} img={event.inputs[""]} date={event.curDate} desc={event.inputs.summary}/>
                </NavLink>
              </>
              );
            }
        }): console.log(temp)}

        {preDefinded.sort((a, b) => increasing?b.date - a.date:a.date-b.date).map((event) => {
          if(active=="2") { 
          }
          else {
            return (<>
                <Card name={event.name} img={event.img} desc={event.desc} date={event.date}/>
              </>
            );
          }
        })}
        </div>
    </div> 
  )
}

export default HomeBody