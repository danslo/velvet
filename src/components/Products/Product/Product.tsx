import {useParams} from "react-router-dom";
import {withLayout} from "../../../hocs/layout";
import {useGetProductQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Accordion, AccordionDetails, AccordionSummary, FormControl, Grid, Typography} from "@mui/material";
import {FieldComponents} from "../../FieldComponents/FieldComponents";
import React from "react";

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
                        <Accordion>
                            <AccordionSummary>{group.label}</AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    {group.attributes.map(attribute => (
                                        <>
                                            <Grid item xs={5}
                                                  sx={{mb: 2, pr: 3, textAlign: "right"}}>{attribute.label}</Grid>
                                            <Grid item xs={5} sx={{mb: 2}}>
                                                <FormControl fullWidth sx={{pr: 4}}>
                                                    {(FieldComponents[attribute.type]?.({
                                                        disabled: false,
                                                        value: attribute.value,
                                                        setValue: (value) => {
                                                        },
                                                        options: attribute.options ?? [],
                                                        required: attribute.required
                                                    }))
                                                    || <>{attribute.type} not implemented</>}
                                                </FormControl>
                                            </Grid>
                                        </>
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
