import {useInvoiceOrderMutation} from "../../../../../types";
import {ActionProps} from "../Actions";
import {MenuItem} from "@mui/material";
import React from "react";

const Invoice = (props: ActionProps) => {
    const [invoiceOrderMutation] = useInvoiceOrderMutation({refetchQueries: ['getOrder']});

    const invoiceOrder = () => {
        invoiceOrderMutation({variables: {order_id: props.orderId}})
            .then((result) => {
                if (result.data?.invoiceOrder) {
                    props.onSuccess();
                }
            })
            .catch(error => props.onError(error.message));
        props.onComplete();
    }

    return (
        <MenuItem disabled={props.disabled} onClick={invoiceOrder}>Invoice</MenuItem>
    )
}

export default Invoice;
