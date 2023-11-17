import { useState, useEffect } from "react";
import SearchResults from './SearchResults';
import { artists } from '../../../data.js';



export default function SearchBar(){
    const [search, setSearch] = useState('J.Cole');
    const [info, setInfo] = useState([])
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleSubmit = (formData)  => {
        formData.preventDefault();
        setSearch(input)
    };

    useEffect(
        () => {setInfo(artists[search].topTen)}, [search]
    )


    return (
    <div className="search">
        <form onSubmit={handleSubmit} >
                <input type="search" name="search" onChange={handleChange} />
                <button type='submit' >Submit</button>
        </form>
        <SearchResults info={info} search={search} />    
    </div>
    )
    
}