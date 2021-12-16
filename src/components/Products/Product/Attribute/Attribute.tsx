import {VelvetAttribute, VelvetProduct, VelvetStringAttributeValue} from "../../../../types";
import {FormControl, Grid} from "@mui/material";
import React, {FunctionComponent} from "react";
import {Control, Controller} from "react-hook-form";
import {FieldComponents} from "../../../FieldComponents/FieldComponents";
import Price from "./Price/Price";
import Stock from "./Stock/Stock";
import Categories from "./Categories/Categories";
import {UseFormSetValue} from "react-hook-form/dist/types/form";

export type AttributeProps = {
    attribute: VelvetAttribute,
    control: Control,
    product: VelvetProduct,
    setValue: UseFormSetValue<any>
}

const AttributeComponents: { [code: string]: FunctionComponent<AttributeProps> } = {
    price: Price,
    quantity_and_stock_status: Stock,
    category_ids: Categories
}

const attributeIsRequired = (attribute: VelvetAttribute) => {
    return attribute.required && attribute.type !== 'boolean';
}

const rulesFromAttribute = (attribute: VelvetAttribute) => {
    if (attributeIsRequired(attribute)) {
        return {
            required: attribute.label + " is required."
        }
    }
    return {}; // todo
}

const Attribute = (props: AttributeProps) => {
    const AttributeComponent = AttributeComponents[props.attribute.code];
    const FieldComponent = FieldComponents[props.attribute.type];
    return (
        <>
            <Grid item xs={5} sx={{mb: 2, pr: 3, textAlign: "right"}}>
                {props.attribute.label + (attributeIsRequired(props.attribute) ? "*" : "")}
            </Grid>
            <Grid item xs={5} sx={{mb: 2}}>
                <FormControl fullWidth>
                    {AttributeComponent ? (
                        <AttributeComponent {...props} />
                    ) : (
                        <Controller
                            control={props.control}
                            defaultValue={(props.attribute.value as VelvetStringAttributeValue).value}
                            render={({field: {onChange, value, ref}, fieldState: {error}}) => {
                                return FieldComponent ? (
                                    <FieldComponent
                                        inputRef={ref}
                                        value={value}
                                        onChange={onChange}
                                        options={props.attribute.options ?? []}
                                        error={error}/>
                                ) : (
                                    <>{props.attribute.type} not implemented</>
                                )
                            }}
                            name={props.attribute.code}
                            rules={rulesFromAttribute(props.attribute)}/>
                    )}
                </FormControl>
            </Grid>
        </>
    );
}

export default Attribute;
