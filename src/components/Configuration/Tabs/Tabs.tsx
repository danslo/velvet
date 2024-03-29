import {useGetConfigurationTabsQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";
import {useScopeContext} from "../../../context/scope";

const Tabs = () => {
    const {currentScope} = useScopeContext();
    const {data, loading, error} = useGetConfigurationTabsQuery({variables: {scope_type: currentScope?.type}});

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (<>
                {data.configurationTabs.map(tab => (
                    <Accordion key={tab.label}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography>{tab.label}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {tab.sections.map(section => (
                                <Box sx={{mb: 1}} key={section.path}>
                                    <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                                          to={"/configuration/" + section.path}>
                                        {section.label}
                                    </Link>
                                </Box>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </>)}
        </LoaderHandler>
    );
}

export default Tabs;
