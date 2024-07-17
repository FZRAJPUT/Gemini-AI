"use client"
import React, { useContext } from 'react'
import './main.css'
import { Context } from '@/app/context/Context'

const Main = () => {

    const {prevPrompt,setPrevPrompt,onSet,recentPrompt,setRecentPrompt,showResult,loading,input,setInput,resultData,} = useContext(Context)

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src="/assets/user_icon.png" alt=""/>
        </div>

        <div className='main-container'>

        {!showResult?<>
            <div className='greet'>
                <p><span>Hello, Dev.</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src="/assets/compass_icon.png" alt="" />
                </div>

                <div className='card'>
                    <p>Briefly summerize this concept: urban planning</p>
                    <img src="/assets/bulb_icon.png" alt="" />
                </div>

                <div className='card'>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src="/assets/message_icon.png" alt="" />
                </div>

                <div className='card'>
                    <p>Improve the readability of the following code</p>
                    <img src="/assets/code_icon.png" alt="" />
                </div>
            </div>
        </>:<div className='result'>
            <div className='result-tittle'>
                <img src="/assets/user_icon.png" alt="" />
                <p>{recentPrompt}</p>
            </div>

            <div className='result-data'>
            <img src="/assets/gemini_icon.png" alt="" />
            {loading?
            <div className='loader'>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
            </div>:
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            </div>
        </div>
        }

            
            <div className='main-bottom'>
                <div className='search-box'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                    <div>
                        <img  src='/assets/gallery_icon.png' alt="" />
                        <img src='/assets/mic_icon.png' alt="" />
                        <img onClick={onSet} src='/assets/send_icon.png' alt="" />
                    </div>
                </div>
                    <p className='bottom-info'>Gemini may display inaccurate info, including about peaople, so double-check its response. Your privacy and gemini Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Main