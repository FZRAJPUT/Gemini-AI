"use client"
import React, { useContext, useEffect, useState } from 'react'
import './sidebar.css'
import { Context } from '@/app/context/Context';

const Sidebar = () => {

    const [extended,setextended] = useState(false);
    const {onSet,prevPrompt,setRecentPrompt} = useContext(Context);


    const loadPrompt =async (prompt)=>{
        setRecentPrompt(prompt);
       await onSet(prompt);
    }

  return (
    <div className='sidebar'>
        <div className='top'>
                <img onClick={()=>setextended(prev=>!prev)} src="/assets/menu_icon.png" alt="" />
            <div className='new-chat'>
            <img src="/assets/plus_icon.png"  alt="" />
                {extended?<p>New Chat</p>:null}
            </div>

            {extended?<div className='recent'>
                <p className='recent-tittle'>Recent</p>
                {prevPrompt.map((item,index)=>{
                    return (
                <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                    <img src="/assets/message_icon.png" alt=""/>
                    <p>{item.slice(0,18)} ....</p>
                </div>
                    )
                })}
            </div>:null}

        </div>
        <div className='bottom'>
            <div className='bottom-item recent-entry'>
                <img src="/assets/question_icon.png" alt=""/>
                {extended?<p>Help</p>:null}
            </div>

            <div className='bottom-item recent-entry'>
                <img src="/assets/history_icon.png" alt=""/>
                {extended?<p>Activity</p>:null}
            </div>

            <div className='bottom-item recent-entry'>
                <img src="/assets/setting_icon.png" alt=""/>
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar