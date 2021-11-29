import {Box, List, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import {Maybe, SalesCommentItem} from "../../../../types";

type NotesProps = {
    caption: string
    notes: Maybe<Array<Maybe<SalesCommentItem>>>
}

const Notes = ({caption, notes}: NotesProps) => (
    <Box component={Paper} sx={{p: 2}}>
        <Typography variant="h6">{caption}</Typography>
        {(notes && (
            <List>
                <ListItem disablePadding>
                    {notes.map(note => (
                        <ListItemText sx={{m: 0}} primary={note!.message}/>
                    ))}
                </ListItem>
            </List>
        )) || <Typography sx={{my: 1}}>No notes.</Typography>}
    </Box>
)

export default Notes;
