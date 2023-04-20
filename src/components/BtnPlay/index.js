import { useDispatch } from "react-redux";
import { PlayCircleOutlined} from '@ant-design/icons';
// import './style.less'

export default function BtnPlay(props){
    const {cssRoot, width, height, urlYoutube} = props
    // const dispatch = useDispatch()
    const btnPlayIconStyle = {
        width: width ? width : "70%",
        height: height ? height : "70%",
        color:  "#d8d8d8",
        transition: "all .2s",
        ':hover':{
            opacity: 1
        }
    }

    const btnPlayStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform:"translate(-50%,-50%)",
        zIndex: 1,
        opacity: 0,
        fontSize: props.fontSize ? props.fontSize : '70px',
        transition: "all .2s"
    }
    return (
        <div className="btn-play" style= {btnPlayStyle}>
            <PlayCircleOutlined style={btnPlayIconStyle} className="btn-play-icon"/>
        </div>
    )
}