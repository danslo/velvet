import {useParams} from "react-router-dom";
import {withLayout} from "../../../hocs/layout";
import {useGetProductQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from "@mui/material";
import React from "react";
import Attribute from "./Attribute/Attribute";

const Product = () => {
    const {productId} = useParams();

    const {data, loading, error} = useGetProductQuery({
        variables: {
            product_id: parseInt(productId!)
        }
    });

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <>
                    <Typography variant="h6" sx={{mb: 2}}>{data.productView.sku}</Typography>
                    {data.productView.attribute_groups.map(group => (
                        <Accordion defaultExpanded={group.label === 'Product Details'}>
                            <AccordionSummary>{group.label}</AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    {group.attributes.map(attribute => (
                                        <Attribute attribute={attribute}/>
                                    ))}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </>
            )}
        </LoaderHandler>
    )
}

export default withLayout(Product);
