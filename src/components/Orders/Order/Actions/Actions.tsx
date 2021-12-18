import {Box, Button, Menu, MenuItem} from "@mui/material";
import {
    useCancelOrderMutation,
    useHoldOrderMutation,
    useInvoiceOrderMutation,
    useRefundOrderMutation,
    useShipOrderMutation,
    useUnholdOrderMutation,
    VelvetOrder
} from "../../../../types";
import {withSnackbar, WithSnackbarProps} from "../../../../hocs/snackbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";

type ActionsProps = {
    order: Partial<VelvetOrder>
    orderId: number
} & WithSnackbarProps;

const Actions = ({order, orderId, snackbarShowMessage}: ActionsProps) => {
    const [cancelOrderMutation] = useCancelOrderMutation({refetchQueries: ['getOrder']});
    const [shipOrderMutation] = useShipOrderMutation({refetchQueries: ['getOrder']});
    const [holdOrderMutation] = useHoldOrderMutation({refetchQueries: ['getOrder']});
    const [unholdOrderMutation] = useUnholdOrderMutation({refetchQueries: ['getOrder']});
    const [invoiceOrderMutation] = useInvoiceOrderMutation({refetchQueries: ['getOrder']});
    const [refundOrderMutation] = useRefundOrderMutation({refetchQueries: ['getOrder']});

    // Beware, intentional duplication.
    // In the future, these mutations will provide different payloads.
    // For example, an order might be partially shipped.

    const cancelOrder = () => {
        cancelOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.cancelOrder) snackbarShowMessage('Order was cancelled.');
            });
        closeMenu();
    }

    const shipOrder = () => {
        shipOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.shipOrder) snackbarShowMessage('Order was shipped.');
            });
        closeMenu();
    }

    const holdOrder = () => {
        holdOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.holdOrder) snackbarShowMessage('Order was held.');
            });
        closeMenu();
    }

    const unholdOrder = () => {
        unholdOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.unholdOrder) snackbarShowMessage('Order was unheld.');
            });
        closeMenu();
    }

    const invoiceOrder = () => {
        invoiceOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.invoiceOrder) snackbarShowMessage('Order was invoiced.');
            });
        closeMenu();
    }

    const refundOrder = () => {
        refundOrderMutation({variables: {order_id: orderId}})
            .then((result) => {
                if (result.data?.refundOrder) snackbarShowMessage('Order was refunded.');
            });
        closeMenu();
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const closeMenu = () => {
        setAnchorEl(null);
    }

    return (
        <Box sx={{my: 1, mb: 5, zIndex: 1000}}>
            <Button variant="contained"
                    sx={{position: "fixed", right: 0, mr: 3}}
                    disableElevation
                    endIcon={<KeyboardArrowDownIcon/>}
                    onClick={openMenu}>Actions</Button>

            <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
                <MenuItem disabled={!order.can_ship} onClick={shipOrder}>Ship</MenuItem>
                <MenuItem disabled={!order.can_cancel} onClick={cancelOrder}>Cancel</MenuItem>
                <MenuItem disabled={!order.can_invoice} onClick={invoiceOrder}>Invoice</MenuItem>
                <MenuItem disabled={!order.can_hold} onClick={holdOrder}>Hold</MenuItem>
                <MenuItem disabled={!order.can_unhold} onClick={unholdOrder}>Unhold</MenuItem>
                <MenuItem disabled={!order.can_creditmemo} onClick={refundOrder}>Refund</MenuItem>
            </Menu>
        </Box>
    )
}

export default withSnackbar(Actions);
