import { useEffect, useState } from "react";
import Track from "./Track";
import {artists} from '../../../data'


export default function SearchResult() {
    const [data, setData] = useState([])
    useEffect(
        () => {
            setData(artists["J.Cole"].topTen);
        }, []
    )
        console.log(data)
    return (
        <div className="search-results">
            {data.map((song) => <Track songName={song} artist={'J. Cole'} album={'Born Sinner'} />)}
        </div>
    )
}