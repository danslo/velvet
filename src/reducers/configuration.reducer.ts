import {ConfigurationField} from "../types";
import {ConfigurationAction, ConfigurationActionType} from "../actions/configuration.actions";

export function configurationReducer(
    state: Array<ConfigurationField>,
    action: ConfigurationAction
): Array<ConfigurationField> {
    switch (action.type) {
        case ConfigurationActionType.UpdateValue:
            return state.map(field => field!.path !== action.payload.path ? field : {
                ...field, value: action.payload.value
            });
        default:
            return [];
    }
}
