import {useParams} from "react-router-dom";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {useGetConfigurationSectionQuery} from "../../../types";
import React from "react";
import Group from "../Group/Group";

const Section = () => {
    const {section = "general"} = useParams();
    const {data, loading, error} = useGetConfigurationSectionQuery({
        variables: {
            section: section
        }
    })

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && data.configurationSection.map(group => (
                <Group label={group.label} initialFields={group.fields}/>
            ))}
        </LoaderHandler>
    );
}

export default Section;
