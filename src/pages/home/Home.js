import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './Home.css'

function Home(props) {
    const [reddit,setReddit] = useState([]);
    const controller =  new AbortController();
    async function fetchHomePage () {
        try{
            const response = await axios.get("https://www.reddit.com/hot.json?limit=15")
            console.log(response.data.data.children)
            setReddit(response.data.data.children)
        }
        catch(e) {
            console.error(e)
        }
    }
    useEffect(()=>{
        // acties die uitgevoerd worden na mount
        console.log("mounting")
        fetchHomePage();

        return function cleanup() {
            // acties die uitgevoerd worden na unmount
            console.log("fetching cleanedUp - Unmounting")
            controller.abort(); // <--- request annuleren
        }
    },[])

    return (
        <>
            <div className="main-header">
                <h2>
                    Hottest post
                </h2>
                <h5 className="normal-text">
                    on Reddit right now
                </h5>
            </div>
            <div className="main-page">
                {reddit.map((sub)=>{
                    return(
                        <article className="each-box">
                            <h3 > <Link to={`/subreddit/${sub.data.subreddit}`}>{sub.data.subreddit} </Link></h3>
                            <div>
                                <a href={sub.data.url}> {sub.data.title}</a>
                                <p>Comments {sub.data.num_comments} -
                                    Ups {sub.data.ups} </p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </>
    );
}

export default Home;
