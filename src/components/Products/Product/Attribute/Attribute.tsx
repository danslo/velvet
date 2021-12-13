import {VelvetAttribute, VelvetProduct} from "../../../../types";
import {FormControl, Grid} from "@mui/material";
import React, {FunctionComponent} from "react";
import {Control, Controller} from "react-hook-form";
import {FieldComponents} from "../../../FieldComponents/FieldComponents";
import Price from "./Price/Price";
import Stock from "./Stock/Stock";
import Categories from "./Categories/Categories";

export type AttributeProps = {
    attribute: VelvetAttribute,
    control: Control,
    product: Partial<VelvetProduct>
}

const AttributeComponents: {[code: string]: FunctionComponent<AttributeProps>} = {
    price: Price,
    quantity_and_stock_status: Stock,
    category_ids: Categories
}

const rulesFromAttribute = (attribute: VelvetAttribute) => {
    if (attribute.required && attribute.type !== 'boolean') {
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
            <Grid item xs={5} sx={{mb: 2, pr: 3, textAlign: "right"}}>{props.attribute.label}</Grid>
            <Grid item xs={5} sx={{mb: 2}}>
                <FormControl fullWidth>
                    {AttributeComponent ? (
                        <AttributeComponent {...props} />
                    ) : (
                        <Controller
                            control={props.control}
                            defaultValue={props.attribute.value}
                            render={({field: {onChange, value}, fieldState: {error}}) => {
                                return FieldComponent ? (
                                    <FieldComponent
                                        disabled={false}
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
