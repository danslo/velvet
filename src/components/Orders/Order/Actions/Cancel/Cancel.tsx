import {useCancelOrderMutation} from "../../../../../types";
import {ActionProps} from "../Actions";
import {MenuItem} from "@mui/material";
import React from "react";

const Cancel = (props: ActionProps) => {
    const [cancelOrderMutation] = useCancelOrderMutation({refetchQueries: ['getOrder']});

    const cancelOrder = () => {
        cancelOrderMutation({variables: {order_id: props.orderId}})
            .then((result) => {
                if (result.data?.cancelOrder) {
                    props.onSuccess();
                }
            });
        props.onComplete();
    }

    return (
        <MenuItem disabled={props.disabled} onClick={cancelOrder}>Cancel</MenuItem>
    )
}

export default Cancel;
