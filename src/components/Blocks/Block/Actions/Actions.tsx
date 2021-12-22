import {Button} from "@mui/material";
import React from "react";

type ActionsProps = {
    canDelete: boolean
    onSave: () => void
    onDelete: () => void
}

const Actions = (props: ActionsProps) => {
    return (
        <>
            <Button variant="contained" onClick={props.onSave}>Save</Button>
            {props.canDelete && (
                <Button sx={{ml: 1}} variant="contained" onClick={props.onDelete}>Delete</Button>
            )}
        </>
    );
}

export default Actions;
