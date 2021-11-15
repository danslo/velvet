import {useGetConfigurationTabsQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Accordion, AccordionDetails, AccordionSummary, Divider, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";

const Tabs = () => {
    const {data, loading, error} = useGetConfigurationTabsQuery();

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (<>
                {data.configurationTabs.map(tab => (
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography>{tab!.label}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {tab!.sections.map(section => (
                                <>
                                    <Link to={section!.path}>{section!.label}</Link>
                                    <Divider/>
                                </>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </>)}
        </LoaderHandler>
    );
}

export default Tabs;
