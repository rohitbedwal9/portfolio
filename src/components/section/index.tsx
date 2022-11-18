import { Props } from "@components/types"

export const Section: React.FC = (props:Props) => {
    return(
        <div id={props.id} className="section h-screen pt-16" style={{backgroundColor:props.bgClr}}>
            <div className="text-4xl font-bold text-center">{props.title}</div>
        </div>
    )
}
