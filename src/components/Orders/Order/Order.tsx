import {useParams} from "react-router-dom";
import {useGetOrderQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Grid} from "@mui/material";
import React from "react";
import {withLayout} from "../../Layout/Layout";
import Actions from "./Actions/Actions";
import Information from "./Information/Information";
import Tabs from "./Tabs/Tabs";

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
                <Grid container spacing={2}>
                    <Grid container justifyContent="flex-end" sx={{mb: 2}}>
                        <Actions orderId={parseInt(orderId!)} order={data.order}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Tabs/>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Information order={data.order}/>
                    </Grid>
                </Grid>
            )}
        </LoaderHandler>
    )
}

export default withLayout(Order);
