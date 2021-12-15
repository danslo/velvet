import {Box, LinearProgress} from "@mui/material";
import {useContext} from "react";
import {LoaderContext} from "../../context/loader";

const ProgressBar = () => {
    const {loading} = useContext(LoaderContext);
    return loading ? (<LinearProgress/>) : (<Box sx={{height: "4px"}}/>);
}

export default ProgressBar;
