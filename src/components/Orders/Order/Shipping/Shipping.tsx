import {Box, Paper, Typography} from "@mui/material";

type ShippingProps = {
    caption: string
    shipping_method: string
}

const Shipping = ({caption, shipping_method}: ShippingProps) => {
    return (
        <Box component={Paper} sx={{p: 2}}>
            <Typography variant="h6">{caption}</Typography>
            <Typography>{shipping_method}</Typography>
        </Box>
    )
}

export default Shipping;
