import {useParams} from "react-router-dom";
import {withLayout} from "../../Layout/Layout";
import {useGetOrderQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Grid} from "@mui/material";
import React from "react";
import Account from "./Account/Account";
import Information from "./Information/Information";
import Address from "./Address/Address";
import Payment from "./Payment/Payment";
import Shipping from "./Shipping/Shipping";
import Items from "./Items/Items";
import Notes from "./Notes/Notes";
import Totals from "./Totals/Totals";

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
                    <Grid item xs={12} md={6}>
                        <Information/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Account/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Address/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Address/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Payment/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Shipping/>
                    </Grid>
                    <Grid item xs={12}>
                        <Items/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Notes/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Totals/>
                    </Grid>
                </Grid>
            )}
        </LoaderHandler>
    )
}

export default withLayout(Order);
