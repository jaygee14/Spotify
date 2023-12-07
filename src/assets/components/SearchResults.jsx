//import Track from "./Track"


export default function SearchResults(props) {
    return (
        <div className="results">
            <img src={props.info.photo} alt="Artist Photo" />
            <h3>{ props.info.artist_name }</h3>
        </div>
    )
}