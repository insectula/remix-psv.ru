import { Icon } from "@mui/material";
import Map from './../assets/SVG/map.svg'

const RussiaIcon = (props) => {
    const size = props.fontSize === 'medium' && '1em'
    return(
    <Icon>
        <img src={Map} color={props.sx.color}/>
    </Icon>
)}
export default RussiaIcon;