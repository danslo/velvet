import {DashboardTotals} from "../../../types";
import {Grid, Typography} from "@mui/material";

type TotalsProps = {
    totals: DashboardTotals
}

const Totals = ({totals}: TotalsProps) => {
    return (
        <Grid container spacing={2} textAlign="center">
            <Grid item xs={3}>
                <Typography variant="h6">Revenue</Typography>
                {totals.revenue}
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h6">Tax</Typography>
                {totals.tax}
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h6">Shipping</Typography>
                {totals.shipping}
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h6">Quantity</Typography>
                {totals.quantity}
            </Grid>
        </Grid>
    );
}

export default Totals;
