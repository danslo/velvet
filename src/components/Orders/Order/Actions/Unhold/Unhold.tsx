import {useUnholdOrderMutation} from "../../../../../types";
import {ActionProps} from "../Actions";
import {MenuItem} from "@mui/material";
import React from "react";

const Unhold = (props: ActionProps) => {
    const [unholdOrderMutation] = useUnholdOrderMutation({refetchQueries: ['getOrder']});

    const unholdOrder = () => {
        unholdOrderMutation({variables: {order_id: props.orderId}})
            .then((result) => {
                if (result.data?.unholdOrder) {
                    props.onSuccess();
                }
            })
            .catch(error => props.onError(error.message));
        props.onComplete();
    }

    return (
        <MenuItem disabled={props.disabled} onClick={unholdOrder}>Unhold</MenuItem>
    )
}

export default Unhold;
