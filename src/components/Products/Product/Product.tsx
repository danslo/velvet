import {useParams} from "react-router-dom";
import {useGetProductQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography} from "@mui/material";
import React from "react";
import Attribute from "./Attribute/Attribute";
import {useForm} from "react-hook-form";
import {withLayout} from "../../../hocs/layout";

const Product = () => {
    const {productId} = useParams();
    const {control, handleSubmit, setValue} = useForm();
    const {data, loading, error} = useGetProductQuery({
        variables: {
            product_id: parseInt(productId!)
        }
    });

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <form onSubmit={handleSubmit(data => console.log(data))}>
                    <Button type="submit" variant="contained" color="primary"
                            sx={{position: "fixed", right: 0, mr: 3, zIndex: 10000}}>Save Product</Button>

                    <Typography variant="h6" sx={{mb: 2}}>{data.productView.sku}</Typography>
                    {data.productView.attribute_groups.map(group => (
                        <Accordion key={group.label} defaultExpanded={group.label === 'Product Details'}>
                            <AccordionSummary>{group.label}</AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    {group.attributes.map(attribute => (
                                        <Attribute
                                            key={attribute.code}
                                            attribute={attribute}
                                            control={control}
                                            setValue={setValue}
                                            // @ts-ignore
                                            product={data.productView}
                                        />
                                    ))}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </form>
            )}
        </LoaderHandler>
    )
}

export default withLayout(Product);
