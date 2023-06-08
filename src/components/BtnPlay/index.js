import { useDispatch } from "react-redux";
import { PlayCircleOutlined} from '@ant-design/icons';
import { OPEN_MODAL } from "../../reducers/constants/ModalTrailer";

// import './style.less'

export default function BtnPlay(props){
    const dispatch  = useDispatch()
    const {cssRoot, width, height, urlYoutube} = props
    const btnPlayIconStyle = {
        width: width ? width : "70%",
        height: height ? height : "70%",
        color:  "#d8d8d8",
        transition: "all .2s",
        ':hover':{
            opacity: 1
        }
    }

    const btnPlayStyle = (height,width) => {
        return {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:"translate(-50%,-50%)",
            zIndex: 1,
            opacity: 0,
            border: "none",
            height: height ? height : 70,
            width: width ? width : 70,
            fontSize: props.fontSize ? props.fontSize : '70px',
            transition: "all .2s"
        }
    }

    const openModal = () =>{
        dispatch({
            type: OPEN_MODAL,
            payload:{
                open: true,
                urlYoutube,
            }
        })
    }
    return (
        
        <div className="btn-play" style= {btnPlayStyle()}>
            <PlayCircleOutlined style={btnPlayIconStyle} onClick={() => openModal()} className="btn-play-icon"/>
        </div>
    )
}