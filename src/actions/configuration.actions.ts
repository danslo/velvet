import {Dispatch} from "react";

export enum ConfigurationActionType {
    UpdateValue,
    UpdateInherit
}

export type ConfigurationAction =
    | { type: ConfigurationActionType.UpdateValue, payload: { path: string, value: string } }
    | { type: ConfigurationActionType.UpdateInherit, payload: { path: string, inherit: boolean } }

export const updateConfigurationValue = async (
    dispatch: Dispatch<ConfigurationAction>,
    path: string,
    value: string
) => {
    dispatch({type: ConfigurationActionType.UpdateValue, payload: {path: path, value: value}});
}
