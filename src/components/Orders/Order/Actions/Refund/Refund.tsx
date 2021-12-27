import {useRefundOrderMutation} from "../../../../../types";
import {ActionProps} from "../Actions";
import {MenuItem} from "@mui/material";
import React from "react";

const Refund = (props: ActionProps) => {
    const [refundOrderMutation] = useRefundOrderMutation({refetchQueries: ['getOrder']});

    const refundOrder = () => {
        refundOrderMutation({variables: {order_id: props.orderId}})
            .then((result) => {
                if (result.data?.refundOrder) {
                    props.onSuccess();
                }
            })
            .catch(error => props.onError(error.message));
        props.onComplete();
    }

    return (
        <MenuItem disabled={props.disabled} onClick={refundOrder}>Refund</MenuItem>
    )
}

export default Refund;
