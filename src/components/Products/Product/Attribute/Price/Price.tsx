import React, {FunctionComponent} from "react";
import {AttributeProps} from "../Attribute";
import {Controller} from "react-hook-form";
import {TextField} from "@mui/material";
import {VelvetStringAttributeValue} from "../../../../../types";

const Price: FunctionComponent<AttributeProps> = props => {
    const isComposite = ['configurable', 'bundle', 'grouped'].indexOf(props.product.type_id) > -1;
    return (
        <Controller
            name="price"
            defaultValue={isComposite ? '0.00' : (props.attribute.value as VelvetStringAttributeValue).value}
            control={props.control}
            render={({field: {onChange, value}}) => (
                <TextField
                    value={value}
                    onChange={onChange}
                    disabled={isComposite}
                    variant="standard"
                />
            )}/>
    )
}

export default Price;
