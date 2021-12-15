import {LinearProgress} from "@mui/material";
import {useContext} from "react";
import {LoaderContext} from "../../context/loader";

const ProgressBar = () => {
    const {loading} = useContext(LoaderContext);
    return loading ? (<LinearProgress/>) : null;
}

export default ProgressBar;
