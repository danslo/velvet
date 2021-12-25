import React, {FunctionComponent} from "react";
import LoaderHandler from "../LoaderHandler/LoaderHandler";
import Header from "../Header/Header";
import {Button, Paper} from "@mui/material";
import {ApolloError} from "@apollo/client/errors";

type FormLayoutProps = {
    loading: boolean
    error?: ApolloError,
    showDelete: boolean,
    header: string,
    onDelete: () => void
    onSave: () => void
}

const FormLayout: FunctionComponent<FormLayoutProps> = (props) => (
    <LoaderHandler loading={props.loading} error={props.error}>
        {!props.loading && (
            <>
                <Header text={props.header}>
                    <Button variant="contained" onClick={props.onSave}>Save</Button>
                    {props.showDelete && (
                        <Button sx={{ml: 1}} variant="contained" onClick={props.onDelete}>Delete</Button>
                    )}
                </Header>
                <Paper sx={{p: 3}}>{props.children}</Paper>
            </>
        )}
    </LoaderHandler>
);

export default FormLayout;
