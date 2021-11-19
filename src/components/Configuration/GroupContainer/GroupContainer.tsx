import {GetConfigurationSectionQuery} from "../../../types";
import Group from "../Group/Group";
import React, {useReducer} from "react";
import {configurationReducer} from "../../../reducers/configuration.reducer";

type GroupContainerProps = {
    configurationData: GetConfigurationSectionQuery
}

const GroupContainer = ({configurationData}: GroupContainerProps) => {
    const [groups, dispatch] = useReducer(configurationReducer, configurationData.configurationSection);

    return (
        <>
            {groups.map(group => (
                <Group key={group.label} label={group.label} fields={group.fields} dispatch={dispatch}/>
            ))}
        </>
    )
}

export default GroupContainer;
