import {Controller} from "react-hook-form";
import Text from "../../../FieldComponents/Text/Text";
import {FormControlLabel, Switch} from "@mui/material";
import Textarea from "../../../FieldComponents/Textarea/Textarea";
import React from "react";
import {GetPageQuery} from "../../../../types";
import {Control, UseFormRegister} from "react-hook-form/dist/types/form";

type FormProps = {
    data: GetPageQuery | undefined
    register: UseFormRegister<any>
    control: Control
}

const Form = ({data, register, control}: FormProps) => (
    <form>
        {data?.page.page_id && (
            <input {...register('page_id')} value={data.page.page_id} hidden={true}/>
        )}

        <Controller
            control={control}
            defaultValue={data?.page.title}
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

        <FormControlLabel
            control={<Switch {...register('is_active')} defaultChecked={!!data?.page.is_active}/>}
            label="Active"/>
        <br/><br/>

        <Controller
            control={control}
            defaultValue={data?.page.content}
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
