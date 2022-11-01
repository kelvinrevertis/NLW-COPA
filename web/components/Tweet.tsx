import { text } from "stream/consumers";

export function Tweet(props){
    return(
        <div>
        <h1>Tweet</h1>
        <p>Loren asdlasdlkasdlaksdlaks</p>
        <p>{props.text}</p>
        </div>
    )
}