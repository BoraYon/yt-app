import {useState, useEffect} from 'react';
import youtube from "../apis/youtube";

const KEY = 'AIzaSyCHvEyik8d2NIK8jyob4iPbHjN5NqztU0U';

const useVideos=({ defaultSearchTerm })=>{
    const [videos,setVideos] = useState([]);

    //componentdidMount() online one time run
    useEffect(()=>{
        search(defaultSearchTerm); // deafult search terms
    },[defaultSearchTerm]);

    const search = async term => {
        console.log(term);
        const response = await youtube.get("/search", {
            params:{
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        setVideos(response.data.items);

    };
    return [videos, search]

};

export default useVideos;
