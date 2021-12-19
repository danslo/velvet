import {useParams} from "react-router-dom";
import {useGetProductQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid} from "@mui/material";
import React from "react";
import Attribute from "./Attribute/Attribute";
import {useForm} from "react-hook-form";
import {withLayout} from "../../../hocs/layout";
import Header from "../../Header/Header";

const Product = () => {
    const {productId} = useParams();
    const {control, handleSubmit, setValue} = useForm();
    const {data, loading, error} = useGetProductQuery({variables: {product_id: parseInt(productId!)}});

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <form onSubmit={handleSubmit(data => console.log(data))}>
                    <Header text={"Product: " + data.productView.sku}>
                        <Button type="submit" variant="contained" color="primary">Save Product</Button>
                    </Header>
                    {data.productView.attribute_groups.map(group => (
                        <Accordion key={group.label} defaultExpanded={group.label === 'Product Details'}>
                            <AccordionSummary>{group.label}</AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    {group.attributes.map(attribute => (
                                            <Attribute
                                                key={attribute.code}
                                                // @ts-ignore
                                                attribute={attribute}
                                                control={control}
                                                setValue={setValue}
                                                // @ts-ignore
                                                product={data.productView}
                                            />
                                        )
                                    )}
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
