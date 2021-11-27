import {useParams} from "react-router-dom";
import {withLayout} from "../../Layout/Layout";

const View = () => {
    const {orderId} = useParams();

    return (
        <h1>Order {orderId}</h1>
    )
}

export default withLayout(View);
