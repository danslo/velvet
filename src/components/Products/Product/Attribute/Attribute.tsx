import {VelvetAttribute} from "../../../../types";
import {FormControl, Grid} from "@mui/material";
import React from "react";
import {Control, Controller} from "react-hook-form";
import {FieldComponents} from "../../../FieldComponents/FieldComponents";

type AttributeProps = {
    attribute: VelvetAttribute,
    control: Control
}

const rulesFromAttribute = (attribute: VelvetAttribute) => {
    if (attribute.required) {
        return {
            required: attribute.label + " is required."
        }
    }
    return {}; // todo
}

const Attribute = (props: AttributeProps) => {
    const Component = FieldComponents[props.attribute.type];
    return (
        <>
            <Grid item xs={5} sx={{mb: 2, pr: 3, textAlign: "right"}}>{props.attribute.label}</Grid>
            <Grid item xs={5} sx={{mb: 2}}>
                <FormControl fullWidth>
                    <Controller
                        control={props.control}
                        defaultValue={props.attribute.value}
                        render={({field: {onChange, value}, fieldState: {error}}) => {
                            return Component ? (
                                <Component
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
                </FormControl>
            </Grid>
        </>
    );
}

export default Attribute;
