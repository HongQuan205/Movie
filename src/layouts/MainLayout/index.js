import { makeStyles } from '@mui/styles';
import Header from "./Header";

const useStyles = makeStyles((theme) => (
    {
        top: {
            marginTop: 64,
            [theme.breakpoints.down("xs")] : { marginTop:56 }
        },
    }
))

export default function MainLayout(props){
    const classes = useStyles()

    return (
        <div>
           Quan
        </div>
    )
}