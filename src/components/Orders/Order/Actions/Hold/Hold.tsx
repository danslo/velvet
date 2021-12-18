import {useHoldOrderMutation} from "../../../../../types";
import {ActionProps} from "../Actions";
import {MenuItem} from "@mui/material";
import React from "react";

const Hold = (props: ActionProps) => {
    const [holdOrderMutation] = useHoldOrderMutation({refetchQueries: ['getOrder']});

    const holdOrder = () => {
        holdOrderMutation({variables: {order_id: props.orderId}})
            .then((result) => {
                if (result.data?.holdOrder) {
                    props.onSuccess();
                }
            });
        props.onComplete();
    }

    return (
        <MenuItem disabled={props.disabled} onClick={holdOrder}>Hold</MenuItem>
    )
}

export default Hold;
