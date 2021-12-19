import {useParams} from "react-router-dom";
import {useGetOrderQuery, VelvetOrder} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Grid} from "@mui/material";
import React from "react";
import {withLayout} from "../../../hocs/layout";
import Actions from "./Actions/Actions";
import Information from "./Information/Information";
import Tabs from "./Tabs/Tabs";
import Shipments from "./Shipments/Shipments";
import Invoices from "./Invoices/Invoices";
import Creditmemos from "./Creditmemos/Creditmemos";
import Header from "../../Header/Header";

const Order = () => {
    const {orderId, tab = "information"} = useParams();
    const actualOrderId = parseInt(orderId!);
    const {data, loading, error} = useGetOrderQuery({
        variables: {
            id: actualOrderId
        }
    });

    const renderTab = (tab: string, order: VelvetOrder) => {
        switch (tab) {
            case 'invoices':
                return <Invoices invoices={order.invoices!}/>
            case 'shipments':
                return <Shipments shipments={order.shipments!}/>
            case 'creditmemos':
                return <Creditmemos creditmemos={order.credit_memos!}/>
            default:
                return <Information order={order}/>
        }
    }

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <>
                    <Header text={"Order #" + data.order.number}>
                        <Actions orderId={actualOrderId} order={data.order}/>
                    </Header>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Tabs orderId={actualOrderId}/>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            {renderTab(tab, data.order)}
                        </Grid>
                    </Grid>
                </>
            )}
        </LoaderHandler>
    )
}

export default withLayout(Order);
