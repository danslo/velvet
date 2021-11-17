import React, {FunctionComponent, useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import {Alert} from "@mui/material";

export type WithSnackbarProps = {
    snackbarShowMessage: (message: string) => void
}

export const withSnackbar = <P extends WithSnackbarProps>(
    WrappedComponent: React.ComponentType<P>
): FunctionComponent<Pick<P, Exclude<keyof P, keyof WithSnackbarProps>>> => (props) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [duration, setDuration] = useState(2000);

    const showMessage = (message: string, duration = 2000) => {
        setMessage(message);
        setDuration(duration);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <WrappedComponent {...(props as P)} snackbarShowMessage={showMessage}/>
            <Snackbar
                anchorOrigin={{vertical: "top", horizontal: "right"}}
                autoHideDuration={duration}
                open={open}
                onClose={handleClose}
                TransitionComponent={Slide}
            >
                <Alert variant="filled" severity="info" onClose={handleClose}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
};
