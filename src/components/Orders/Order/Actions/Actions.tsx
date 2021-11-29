import {Box} from "@material-ui/core";
import {Button} from "@mui/material";
import {
    OrderViewOrder,
    useCancelOrderMutation,
    useHoldOrderMutation,
    useInvoiceOrderMutation,
    useShipOrderMutation,
    useUnholdOrderMutation
} from "../../../../types";
import {withSnackbar, WithSnackbarProps} from "../../../../utils/snackbar";

type ActionsProps = {
    order: Partial<OrderViewOrder>
    orderId: number
} & WithSnackbarProps;

const Actions = ({order, orderId, snackbarShowMessage}: ActionsProps) => {
    const [cancelOrderMutation] = useCancelOrderMutation({refetchQueries: ['getOrder']});
    const [shipOrderMutation] = useShipOrderMutation({refetchQueries: ['getOrder']});
    const [holdOrderMutation] = useHoldOrderMutation({refetchQueries: ['getOrder']});
    const [unholdOrderMutation] = useUnholdOrderMutation({refetchQueries: ['getOrder']});
    const [invoiceOrderMutation] = useInvoiceOrderMutation({refetchQueries: ['getOrder']});

    // Beware, intentional duplication.
    // In the future, these mutations will provide different payloads.
    // For example, an order might be partially shipped.

    const cancelOrder = () => {
        cancelOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.cancelOrder) snackbarShowMessage('Order was cancelled.');
            });
    }

    const shipOrder = () => {
        shipOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.shipOrder) snackbarShowMessage('Order was shipped.');
            });
    }

    const holdOrder = () => {
        holdOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.holdOrder) snackbarShowMessage('Order was held.');
            });
    }

    const unholdOrder = () => {
        unholdOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.unholdOrder) snackbarShowMessage('Order was unheld.');
            });
    }

    const invoiceOrder = () => {
        invoiceOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.invoiceOrder) snackbarShowMessage('Order was invoiced.');
            });
    }

    return (
        <Box sx={{my: 1}}>
            <Button variant="contained" size="large" disabled={!order.can_ship} onClick={shipOrder}>Ship</Button>
            <Button variant="contained" size="large" disabled={!order.can_cancel} onClick={cancelOrder}
                    sx={{ml: 1}}>Cancel</Button>
            <Button variant="contained" size="large" disabled={!order.can_invoice} onClick={invoiceOrder}
                    sx={{ml: 1}}>Invoice</Button>
            <Button variant="contained" size="large" disabled={!order.can_hold} onClick={holdOrder}
                    sx={{ml: 1}}>Hold</Button>
            <Button variant="contained" size="large" disabled={!order.can_unhold} onClick={unholdOrder}
                    sx={{ml: 1}}>Unhold</Button>
        </Box>
    )
}

export default withSnackbar(Actions);
