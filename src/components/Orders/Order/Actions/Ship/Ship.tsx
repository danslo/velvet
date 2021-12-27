import {useShipOrderMutation} from "../../../../../types";
import {ActionProps} from "../Actions";
import {MenuItem} from "@mui/material";
import React from "react";

const Ship = (props: ActionProps) => {
    const [shipOrderMutation] = useShipOrderMutation({refetchQueries: ['getOrder']});

    const shipOrder = () => {
        shipOrderMutation({variables: {order_id: props.orderId}})
            .then((result) => {
                if (result.data?.shipOrder) {
                    props.onSuccess();
                }
            })
            .catch(error => props.onError(error.message));
        props.onComplete();
    }

    return (
        <MenuItem disabled={props.disabled} onClick={shipOrder}>Ship</MenuItem>
    )
}

export default Ship;
