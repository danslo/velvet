import {ConfigurationGroup} from "../types";
import {ConfigurationAction, ConfigurationActionType} from "../actions/configuration.actions";

export function configurationReducer(
    state: Array<ConfigurationGroup>,
    action: ConfigurationAction
) {
    switch (action.type) {
        case ConfigurationActionType.UpdateValue:
            return state.map(group => {
                return {
                    ...group,
                    fields: group.fields.map(field => {
                        return field.path !== action.payload.path ? field : {
                            ...field,
                            value: action.payload.value
                        }
                    })
                };
            });
        default:
            return [];
    }
}
