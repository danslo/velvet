import {Controller, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import React from "react";
import {withLayout} from "../../hocs/layout";

const Test = () => {
    const {control, handleSubmit} = useForm();
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <Controller
                name="test"
                control={control}
                render={({field: {onChange, value, ref}, fieldState: {error}}) => {
                    return (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            onChange={onChange}
                            value={value}
                            inputRef={ref}
                            variant="standard"/>
                    )
                }}
                rules={{required: "Is required"}}/>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    )
}

export default withLayout(Test);
