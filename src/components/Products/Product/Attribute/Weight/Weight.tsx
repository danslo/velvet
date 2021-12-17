import React, {FunctionComponent} from "react";
import {AttributeProps} from "../Attribute";
import {Controller} from "react-hook-form";
import {VelvetStringAttributeValue} from "../../../../../types";
import {TextField} from "@mui/material";

const Weight: FunctionComponent<AttributeProps> = props => {
    return (
        <Controller
            name="weight"
            defaultValue={(props.attribute.value as VelvetStringAttributeValue).value}
            control={props.control}
            render={({field: {onChange, value}}) => (
                <TextField value={value} onChange={onChange} variant="standard"/>
            )}/>
    )
}

export default Weight;
