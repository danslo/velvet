import {useParams} from "react-router-dom";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {
    useGetConfigurationSectionQuery,
    useRestoreConfigurationMutation,
    useSaveConfigurationMutation
} from "../../../types";
import React from "react";
import Group from "../Group/Group";
import Field from "../Field/Field";
import {useScopeContext} from "../../../context/scope";
import {useSnackbar} from "notistack";

const Section = () => {
    const {enqueueSnackbar} = useSnackbar();
    const {currentScope} = useScopeContext();
    const {section = "general"} = useParams();
    const {data, loading, error} = useGetConfigurationSectionQuery({
        variables: {
            section: section,
            scope_type: currentScope?.type,
            scope_id: currentScope?.scope_id
        }
    });
    const [restoreConfigurationMutation] = useRestoreConfigurationMutation();
    const [saveConfigurationMutation] = useSaveConfigurationMutation();

    const saveConfiguration = (path: string, value: string) => {
        saveConfigurationMutation({
            variables: {
                path: path,
                value: value,
                scope_type: currentScope?.type,
                scope_id: currentScope?.scope_id
            }
        }).then(() => {
            enqueueSnackbar('Configuration was saved.');
        }).catch((error) => {
            enqueueSnackbar(error.message);
        });
    }

    const restoreConfiguration = (path: string) => {
        restoreConfigurationMutation({
            variables: {
                path: path,
                scope_type: currentScope?.type,
                scope_id: currentScope?.scope_id
            }
        }).then(() => {
            enqueueSnackbar('Configuration was restored.');
        }).catch((error) => {
            enqueueSnackbar(error.message);
        });
    }

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && data.configurationSection.map(group => (
                <Group key={group.label} label={group.label}>
                    {group.fields.map(field => (
                        <Field
                            key={field.path}
                            field={field}
                            saveConfiguration={saveConfiguration}
                            restoreConfiguration={restoreConfiguration}/>
                    ))}
                </Group>
            ))}
        </LoaderHandler>
    );
}

export default Section;
