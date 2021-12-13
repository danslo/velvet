import {VelvetAttribute} from "../../../../types";
import {FormControl, Grid} from "@mui/material";
import {FieldComponents} from "../../../FieldComponents/FieldComponents";
import React, {useState} from "react";

type AttributeProps = {
    attribute: VelvetAttribute
}

const Attribute = ({attribute}: AttributeProps) => {
    const [value, setValue] = useState(attribute.value);
    return (
        <>
            <Grid item xs={5} sx={{mb: 2, pr: 3, textAlign: "right"}}>{attribute.label}</Grid>
            <Grid item xs={5} sx={{mb: 2}}>
                <FormControl fullWidth sx={{pr: 4}}>
                    {(FieldComponents[attribute.type]?.({
                        disabled: false,
                        value: value,
                        setValue: setValue,
                        options: attribute.options ?? [],
                        required: attribute.required
                    }))
                    || <>{attribute.type} not implemented</>}
                </FormControl>
            </Grid>
        </>
    );
}

export default Attribute;
