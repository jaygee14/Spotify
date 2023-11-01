import { useState } from "react"


export default function SearchBar() {

    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return <input type="search" name="search" id="search" value={search} onChange={handleChange}/>
}