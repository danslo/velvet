import {useParams} from "react-router-dom";
import {withLayout} from "../../Layout/Layout";
import {useGetOrderQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Box, Paper} from "@mui/material";

const Order = () => {
    const {orderId} = useParams();

    const {data, loading, error} = useGetOrderQuery({
        variables: {
            id: parseInt(orderId!)
        }
    });

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <Box component={Paper}>
                    <h1>{data.order.number}</h1>
                </Box>
            )}
        </LoaderHandler>
    )
}

export default withLayout(Order);
