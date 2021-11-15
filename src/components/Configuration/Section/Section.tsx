import {useParams} from "react-router-dom";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {useGetConfigurationSectionQuery} from "../../../types";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Field from "../Field/Field";

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
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography dangerouslySetInnerHTML={{__html: group!.label}}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            {group!.fields.map(field => (<Field field={field!}/>))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </>)}
        </LoaderHandler>
    );
}

export default Section;
