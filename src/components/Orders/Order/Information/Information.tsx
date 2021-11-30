import {Grid} from "@mui/material";
import Summary from "./Summary/Summary";
import Account from "./Account/Account";
import Address from "./Address/Address";
import Payment from "./Payment/Payment";
import Shipping from "./Shipping/Shipping";
import Items from "./Items/Items";
import StatusHistory from "./StatusHistory/StatusHistory";
import Totals from "./Totals/Totals";
import React from "react";
import {OrderViewOrder} from "../../../../types";

type InformationProps = {
    order: Partial<OrderViewOrder>
}

const Information = ({order}: InformationProps) => (
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Summary caption="Order Summary" order={order}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Account caption="Account Summary" order={order}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Address caption="Shipping Address" address={order.shipping_address!}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Address caption="Billing Address" address={order.billing_address!}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Payment caption="Payment Summary" methods={order.payment_methods!}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Shipping caption="Shipping Summary" shipping_method={order.shipping_method!}/>
        </Grid>
        <Grid item xs={12}>
            <Items caption="Items" items={order.items!}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <StatusHistory caption="Status History" status_history={order.status_history!}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Totals caption="Totals" totals={order.total!}/>
        </Grid>
    </Grid>
)

export default Information;
