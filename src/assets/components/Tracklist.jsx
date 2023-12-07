import { Linter } from "eslint";

export default function TrackList(props){
    return (
        <div className="tracklist">
            <h1 className="title">{props.title}</h1>
            <ul className="tracks">
                {props.info.map(song => <li className="track"></li>)}
            </ul>
        </div>
    )
}