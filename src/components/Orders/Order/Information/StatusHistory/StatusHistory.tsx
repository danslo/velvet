import {Box, Divider, List, ListItemText, Paper, Typography} from "@mui/material";
import {OrderStatus} from "../../../../../types";

type NotesProps = {
    caption: string
    status_history: Array<OrderStatus>
}

const StatusHistory = ({caption, status_history}: NotesProps) => (
    <Box component={Paper} sx={{p: 2}}>
        <Typography variant="h6">{caption}</Typography>
        <List>
            {status_history.map(status => (
                <Box sx={{mb: 2}}>
                    <ListItemText sx={{textTransform: "capitalize"}} primary={status.status}
                                  secondary={status.created_at}/>
                    <ListItemText primary={"Customer Notified: " + (status.customer_notified ? "Yes" : "No")}/>
                    {status.comment && (
                        <ListItemText primary={status.comment}/>
                    )}
                    <Divider/>
                </Box>
            ))}
        </List>
    </Box>
)

export default StatusHistory;
