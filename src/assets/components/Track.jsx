
export default function Track(props) {
    return (
        <div className="track">
            <h2>{props.songTitle}</h2>
            <h3>{props.artist}</h3>
            <p>{props.album}</p>
        </div>
    )
}