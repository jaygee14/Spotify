import Track from "./Track"


export default function SearchResults(props) {
    return (
        <div className="results">
            {props.info.map((song, i) => song ? <Track key={'song_' + i} songTitle={song} artist={props.search} album='Born Sinner' /> : <h2>Not Available</h2> )}
        </div>
    )
}