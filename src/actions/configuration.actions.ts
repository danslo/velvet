import {Dispatch} from "react";
import {SaveConfigurationMutationFn} from "../types";

export enum ConfigurationActionType {
    UpdateValue,
    UpdateInherit,
}

export type ConfigurationAction =
    | { type: ConfigurationActionType.UpdateValue, payload: { path: string, value: string } }
    | { type: ConfigurationActionType.UpdateInherit, payload: { path: string, inherit: boolean } }

export const updateConfigurationValue = async (
    dispatch: Dispatch<ConfigurationAction>,
    saveConfiguration: SaveConfigurationMutationFn,
    path: string,
    value: string
) => {

    saveConfiguration({variables: {path: path, value: value}})
        .then(() => {
            // todo: show success mssage
            dispatch({type: ConfigurationActionType.UpdateValue, payload: {path: path, value: value}});
        })
        .catch((err) => {
            // todo: handle errors
        })
}
