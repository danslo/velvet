import {Box, Paper, Typography} from "@mui/material";
import {Maybe, OrderPaymentMethod} from "../../../../types";

type PaymentInformation = {
    caption: string
    methods: Array<Maybe<OrderPaymentMethod>>
}

const Payment = ({caption, methods}: PaymentInformation) => {
    return (
        <Box component={Paper} sx={{p: 2}}>
            <Typography variant="h6">{caption}</Typography>
            <ul>
                {methods.map(method => (
                    <li>{method!.name}</li>
                ))}
            </ul>
        </Box>
    );
}

export default Payment;
