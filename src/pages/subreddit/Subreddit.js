import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link,useParams} from "react-router-dom";


function Subreddit() {
    const controller =  new AbortController();
    const { subredditId } = useParams();
    const [aboutSubReddit, setAboutSubReddit] = useState()
    async function fetchsubReddit() {
        try{
            const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`)
            console.log(response.data.data)
            console.log(response.data.data.description)
           setAboutSubReddit(response.data)

        }
        catch(e) {
            console.error(e)
        }
    }
    useEffect(()=>{
        // acties die uitgevoerd worden na mount
        console.log("mounting")
        fetchsubReddit();

        return function cleanup() {
            // acties die uitgevoerd worden na unmount
            console.log("fetching cleanedUp - Unmounting")
            controller.abort(); // <--- request annuleren
        }
    },[])

    return (
        <>
        {
            aboutSubReddit &&
                    <>
                    <div> Subredit</div>

                    <div>{aboutSubReddit.data.description}</div>

                    <div> ... <Link to="/">Take me back </Link></div>
                    </>
        }
        </>
    );
}

export default Subreddit;