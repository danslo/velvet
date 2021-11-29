import {Box} from "@material-ui/core";
import {Button} from "@mui/material";
import {OrderViewOrder} from "../../../../types";

type ActionsProps = {
    order: Partial<OrderViewOrder>
}

const Actions = ({order}: ActionsProps) => {
    return (
        <Box sx={{my: 1}}>
            <Button variant="contained" size="large" disabled={!order.can_ship}>Ship</Button>
            <Button variant="contained" size="large" disabled={!order.can_cancel} sx={{ml: 1}}>Cancel</Button>
            <Button variant="contained" size="large" disabled={!order.can_invoice} sx={{ml: 1}}>Invoice</Button>
            <Button variant="contained" size="large" disabled={!order.can_hold} sx={{ml: 1}}>Hold</Button>
            <Button variant="contained" size="large" disabled={!order.can_unhold} sx={{ml: 1}}>Unhold</Button>
        </Box>
    )
}

export default Actions;
