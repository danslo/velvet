import {Box, List, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import {Maybe, OrderPaymentMethod} from "../../../../../types";

type PaymentInformation = {
    caption: string
    methods: Array<Maybe<OrderPaymentMethod>>
}

const Payment = ({caption, methods}: PaymentInformation) => {
    return (
        <Box component={Paper} sx={{p: 2}}>
            <Typography variant="h6">{caption}</Typography>
            <List>
                <ListItem disablePadding>
                    {methods.map(method => (<ListItemText key={method!.name} sx={{m: 0}} primary={method!.name}/>))}
                </ListItem>
            </List>
        </Box>
    );
}

export default Payment;
