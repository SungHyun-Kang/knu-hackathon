import React,{useRef, useState} from 'react';
import "./Information.css";
import data from '../db/data.json'
import { Box } from '@mui/system';
export default function Information({hp_id}) {
  var ind = data.hospitals[hp_id-1].detail2.contents;
  console.log()
  var length =Object.keys(ind).length;
  

  const [pos,setPos]=useState(0)
  const click=(add)=>{
    if(pos+add>=0&&pos+add<length){
      setPos(pos+add);
    }
    else{
      setPos(pos);
    }
  };

    return ( 
        <>
        <div className='flex-container'>
        <div id={-1} className='flex-item' style={{"visibility":"hidden"}}/>
            {
              data.hospitals[hp_id-1].detail2.contents.map((cont,index)=>{
                return <div key={index} className='flex-item'>
                  <li id={index} key={index}>{cont.title}</li>
                  <Box>{cont.content}</Box>
                </div>
              })  
            }
          <div id={length} className='flex-item' style={{"visibility":"hidden"}}/>
          <div className='flex-item' style={{"visibility":"hidden"}}/>
        </div>
        <a href={"#"+(pos-1)} onClick={()=>click(-1)} className='fixed-button' style={{"left":"10px","top":"100px"}}>
              <button style={{"backgroundColor":"gray"}}>left</button>
            </a>
            <a href={"#"+(pos+1)} onClick={()=>click(1)} className='fixed-button' style={{"right":"10px","top":"100px"}}>
              <button style={{"backgroundColor":"gray"}}>right</button>
            </a>
        </>
    );
} 