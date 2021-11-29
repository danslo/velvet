import {useParams} from "react-router-dom";
import {useGetOrderQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Grid} from "@mui/material";
import React from "react";
import Information from "./Information/Information";
import Address from "./Address/Address";
import Payment from "./Payment/Payment";
import Shipping from "./Shipping/Shipping";
import Account from "./Account/Account";
import Items from "./Items/Items";
import Notes from "./Notes/Notes";
import Totals from "./Totals/Totals";
import {withLayout} from "../../Layout/Layout";

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
                        <Information caption="Order Information" order={data.order}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Account caption="Account Information" order={data.order}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Address caption="Shipping Address" address={data.order.shipping_address!}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Address caption="Billing Address" address={data.order.billing_address!}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Payment caption="Payment Information" methods={data.order.payment_methods!}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Shipping caption="Shipping Information" shipping_method={data.order.shipping_method!}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Items caption="Items" items={data.order.items!}/>
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
