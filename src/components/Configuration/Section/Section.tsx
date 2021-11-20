import {useParams} from "react-router-dom";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {useGetConfigurationSectionQuery} from "../../../types";
import React from "react";
import GroupContainer from "../GroupContainer/GroupContainer";

const Section = () => {
    const {section = "general"} = useParams();
    const {data, loading, error} = useGetConfigurationSectionQuery({
        fetchPolicy: "network-only",
        variables: {
            section: section
        }
    });

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && <GroupContainer configurationData={data}/>}
        </LoaderHandler>
    );
}

export default Section;
