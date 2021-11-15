import {useParams} from "react-router-dom";

const Section = () => {
    const {tab = "general"} = useParams();


    return <>{tab}</>
}

export default Section;
