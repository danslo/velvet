import {useParams} from "react-router-dom";
import {withLayout} from "../../Layout/Layout";
import {useGetOrderViewQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Box, Paper} from "@mui/material";

const View = () => {
    const {orderId} = useParams();

    const {data, loading, error} = useGetOrderViewQuery({
        variables: {
            id: parseInt(orderId!)
        }
    });

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <Box component={Paper}>
                    <h1>{data.orderView.number}</h1>
                </Box>
            )}
        </LoaderHandler>
    )
}

export default withLayout(View);
