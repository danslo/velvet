import {Controller} from "react-hook-form";
import Text from "../../../FieldComponents/Text/Text";
import {FormControlLabel, Switch} from "@mui/material";
import Textarea from "../../../FieldComponents/Textarea/Textarea";
import React from "react";
import {GetBlockQuery} from "../../../../types";
import {Control, UseFormRegister} from "react-hook-form/dist/types/form";

type FormProps = {
    data: GetBlockQuery | undefined
    register: UseFormRegister<any>
    control: Control
}

const Form = ({data, register, control}: FormProps) => (
    <form>
        {data?.block.block_id && (
            <input {...register('block_id')} value={data.block.block_id} hidden={true}/>
        )}

        <Controller
            control={control}
            defaultValue={data?.block.title}
            name="title"
            rules={{required: "Title is required."}}
            render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                <Text
                    label="Title"
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    error={error}/>
            )}/>
        <br/><br/>

        <Controller
            control={control}
            defaultValue={data?.block.identifier}
            name="identifier"
            rules={{required: "Identifier is required."}}
            render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                <Text
                    label="Identifier"
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    error={error}/>
            )}/>
        <br/><br/>

        <FormControlLabel
            control={<Switch {...register('is_active')} defaultChecked={!!data?.block.is_active}/>}
            label="Active"/>
        <br/><br/>

        <Controller
            control={control}
            defaultValue={data?.block.content}
            name="content"
            rules={{required: "Content is required."}}
            render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                <Textarea
                    label="Content"
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    error={error}/>
            )}/>
    </form>
)

export default Form;
