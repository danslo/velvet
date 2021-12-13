import {useParams} from "react-router-dom";
import {withLayout} from "../../../hocs/layout";

const Product = () => {
    const {productId} = useParams();
    return (
        <h1>Product {productId}</h1>
    )
}

export default withLayout(Product);
