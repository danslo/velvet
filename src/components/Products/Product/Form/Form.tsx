import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@mui/material";
import Attribute from "../Attribute/Attribute";
import React from "react";
import {GetProductQuery} from "../../../../types";
import {Control, UseFormRegister, UseFormSetValue} from "react-hook-form/dist/types/form";

type FormProps = {
    data: GetProductQuery | undefined
    register: UseFormRegister<any>
    control: Control
    setValue: UseFormSetValue<any>
}

const Form = ({setValue, data, register, control}: FormProps) => (
    <form>
        {data?.productView.entity_id && (
            <input {...register('entity_id')} value={data?.productView.entity_id} hidden={true}/>
        )}

        {data?.productView.attribute_groups.map(group => (
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
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        ))}
    </form>
)

export default Form;
