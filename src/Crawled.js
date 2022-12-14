import { LinearProgress, Paper } from '@mui/material';
import React,{useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "./crawled.css"
import crawl_data from './db/crawling.json';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Home from '@mui/icons-material/Home'
import NavigateNext from '@mui/icons-material/NavigateNext'
import NavigateBefore from '@mui/icons-material/NavigateBefore'
import LogoMenu from './component/LogoMenu';
export default function Crawled() {
    document.body.style.padding=0;
    var [crawled_id,setID]=useState(1);
    var [menu_index,setIndex]=useState(0)

    const set_id=(id)=>{
        setID(id)
    }

    const leftClick=()=>{
        setIndex(menu_index-1<=0?0:menu_index-1)
        setID(menu_index-1<=0?1:(menu_index-1)*6+1)
    }

    const rightClick=()=>{
        setIndex(menu_index+1>9?9:menu_index+1)
        setID(menu_index+1>9?55:(menu_index+1)*6+1)
    }

    /*
<div className='menu-item' onClick={()=>set_id(index+1)}>{data.title}<br/>
                                    <a href={data.link}>바로가기</a><br/>{data.date}</div>
                                    */
    return ( 
        <div>
        <LogoMenu></LogoMenu>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:1}} >
                <div className='container1'>
                    <div >
                    {crawled_id != 0 ? <img className='img-item' src={`./img/${crawled_id}.png`} alt='Cannot_Found' ></img>:<></>}
                    </div>
                    <div className='menu-container'>
                        {
                            crawl_data.map((data,index)=>{
                                if(index<((menu_index+1)*6) && index>=(menu_index*6)){
                                    return (
                                        <div style={{"border" : "1px solid black"} }>
                                        <Card onClick={()=>set_id(index+1)} sx={{ maxWidth: 275 ,minHeight:220,maxHeight:220}}>
                                        <CardContent>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {data.title}
                                          </Typography>
                                          <Typography sx={{ mb: 0.5 }} color="text.secondary">
                                            {data.date}
                                          </Typography>
                                        </CardContent>                                     
                                       </Card>
                                      <Button size="small" href={data.link} endIcon={<Home/>} >Go to Site</Button>
                                      </div>
                                    )
                                }
                            })
                        }
                    <div style={{"display":"flex","gap":"10px"}}>
                    <Button variant='contained' className='button-item' startIcon={<NavigateBefore/>} onClick={leftClick}></Button>
                    <Button variant='contained' className='button-item' endIcon={<NavigateNext/>} onClick={rightClick}></Button>
                    <box style={{"fontSize":"large","top":"50%"}}>{`${menu_index+1}/10`}</box>
                    </div>
                    </div>
                    
            </div>
            <div class="blank" style={{ "height": "60px", "width": "99vw", "background": "white" }}></div>
            <div class="label" style={{ "height": "20px", "width": "99vw", "background": "#a5090b" }}></div>
            </motion.div>
        </div>
    );
} 
