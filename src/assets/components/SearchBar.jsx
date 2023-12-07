import { useState, useEffect } from "react";
import SearchResults from './SearchResults';
import find from "./script/find";
import getToken from "./script/key";


export default function SearchBar(){
    const [search, setSearch] = useState('J.Cole');
    const [info, setInfo] = useState({});
    const [input, setInput] = useState('');
    const [token, setToken] = useState('BQDwp-VOa4c5MMMbNtu-kEq8QiYRLMwM1KFILMtoPsNord6oDsm1xywgzx-T8q26mUNTN2-_3mFfc_AOqqefMW6BkSzI8zOrvC_ikLZrdtN2-c1L6eM');

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleSubmit = (formData)  => {
        formData.preventDefault();
        setSearch(input)
    };

    async function call() {
        const token = await getToken()
        const access = await token.access_token;
        setToken(access);
    }

    /*useEffect(
        () => {
            call();
        }, []
    )*/

    useEffect(
        () => {
            find(token, search).then(response => setInfo(
                {
                    artist_name : response.artists.items[0].name,
                    photo : response.artists.items[0].images[2].url
                }

            ))
        } , [search]
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