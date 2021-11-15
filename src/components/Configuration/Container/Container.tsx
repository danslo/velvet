import {useParams} from "react-router-dom";

const Container = () => {
    const {tab = "general"} = useParams();
    return <>{tab}</>
}

export default Container;
