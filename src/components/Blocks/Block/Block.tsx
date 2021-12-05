import {withLayout} from "../../../hocs/layout";
import {useParams} from "react-router-dom";

const Block = () => {
    const {blockId} = useParams();

    return (
        <>{blockId}</>
    )
}

export default withLayout(Block);
