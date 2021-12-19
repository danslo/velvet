import {Box, Button, Menu} from "@mui/material";
import {VelvetOrder} from "../../../../types";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, {FunctionComponent} from "react";
import Cancel from "./Cancel/Cancel";
import Ship from "./Ship/Ship";
import Invoice from "./Invoice/Invoice";
import Hold from "./Hold/Hold";
import Unhold from "./Unhold/Unhold";
import Refund from "./Refund/Refund";
import {useSnackbar} from "notistack";

type ActionsProps = {
    order: Partial<VelvetOrder>
    orderId: number
}

export type ActionProps = {
    orderId: number
    onComplete: () => void
    onSuccess: () => void
    disabled: boolean
}

const Actions = (props: ActionsProps) => {
    const {enqueueSnackbar} = useSnackbar();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const openMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    const actions: Array<{ component: FunctionComponent<ActionProps>, disabled: boolean, message: string }> = [
        {component: Ship, disabled: !props.order.can_ship, message: "Order was shipped."},
        {component: Cancel, disabled: !props.order.can_cancel, message: "Order was cancelled."},
        {component: Invoice, disabled: !props.order.can_invoice, message: "Order was invoiced."},
        {component: Hold, disabled: !props.order.can_hold, message: "Order was held."},
        {component: Unhold, disabled: !props.order.can_unhold, message: "Order was unheld."},
        {component: Refund, disabled: !props.order.can_creditmemo, message: "Order was refunded"}
    ];

    return (
        <Box sx={{mb: 2}}>
            <Button variant="contained"
                    disableElevation
                    endIcon={<KeyboardArrowDownIcon/>}
                    onClick={openMenu}>Actions</Button>
            <Menu anchorEl={anchorEl} open={open} onClose={closeMenu} sx={{mt: 1}}>
                {actions.map(action => {
                    const Action = action.component;
                    return (
                        <Action
                            key={typeof Action}
                            orderId={props.orderId}
                            disabled={action.disabled}
                            onComplete={closeMenu}
                            onSuccess={() => enqueueSnackbar(action.message)}
                        />
                    )
                })}
            </Menu>
        </Box>
    )
}

export default Actions;
