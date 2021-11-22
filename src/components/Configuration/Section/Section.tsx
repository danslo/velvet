import {useParams} from "react-router-dom";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {
    useGetConfigurationSectionQuery,
    useRestoreConfigurationMutation,
    useSaveConfigurationMutation
} from "../../../types";
import React from "react";
import Group from "../Group/Group";
import {withSnackbar, WithSnackbarProps} from "../../../utils/snackbar";

const Section = ({snackbarShowMessage}: WithSnackbarProps) => {
    const {section = "general"} = useParams();
    const {data, loading, error} = useGetConfigurationSectionQuery({
        variables: {section: section}
    });
    const [restoreConfigurationMutation] = useRestoreConfigurationMutation();
    const [saveConfigurationMutation] = useSaveConfigurationMutation();

    const saveConfiguration = (path: string, value: string) => {
        saveConfigurationMutation({
            variables: {
                path: path,
                value: value
            }
        }).then(() => {
            snackbarShowMessage('Configuration was saved.');
        }).catch((error) => {
            snackbarShowMessage(error.message);
        });
    }

    const restoreConfiguration = (path: string) => {
        restoreConfigurationMutation({
            variables: {
                path: path
            }
        }).then(() => {
            snackbarShowMessage('Configuration was restored.');
        }).catch((error) => {
            snackbarShowMessage(error.message);
        });
    }

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && data.configurationSection.map(group => (
                <Group
                    key={group.label}
                    label={group.label}
                    fields={group.fields}
                    saveConfiguration={saveConfiguration}
                    restoreConfiguration={restoreConfiguration}
                />
            ))}
        </LoaderHandler>
    );
}

export default withSnackbar(Section);
