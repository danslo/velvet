import {GetConfigurationSectionQuery} from "../../../types";
import Group from "../Group/Group";
import React, {useReducer} from "react";
import {configurationReducer} from "../../../reducers/configuration.reducer";

type GroupContainerProps = {
    data: GetConfigurationSectionQuery
}

const GroupContainer = ({data}: GroupContainerProps) => {
    const [groups, dispatch] = useReducer(configurationReducer, data.configurationSection);

    return (
        <>
            {groups.map(group => (
                <Group key={group.label} label={group.label} fields={group.fields} dispatch={dispatch}/>
            ))}
        </>
    )
}

export default GroupContainer;
