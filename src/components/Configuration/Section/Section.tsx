import {useParams} from "react-router-dom";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {useGetConfigurationSectionQuery} from "../../../types";

const Section = () => {
    const {section = "general"} = useParams();
    const {data, loading, error} = useGetConfigurationSectionQuery({
        variables: {
            section: section
        }
    })


    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (<>
                {data.configurationSection.map(group => (
                    <>
                        <h4>{group!.label}</h4>
                        {group!.fields.map(field => (
                            <>
                                <p>{field!.label} ({field!.type})</p>
                                {field!.comment && (<p>{field!.comment}</p>)}
                                <hr />
                            </>
                        ))}
                    </>
                ))}
            </>)}
        </LoaderHandler>
    );
}

export default Section;
