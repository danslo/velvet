import {Controller} from "react-hook-form";
import Text from "../../../FieldComponents/Text/Text";
import {Accordion, AccordionDetails, AccordionSummary, FormControlLabel, Switch, Typography} from "@mui/material";
import Textarea from "../../../FieldComponents/Textarea/Textarea";
import React from "react";
import {GetPageQuery} from "../../../../types";
import {Control, UseFormRegister} from "react-hook-form/dist/types/form";
import Select from "../../../FieldComponents/Select/Select";
import Date from "../../../FieldComponents/Date/Date";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

        <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>General</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControlLabel
                    control={<Switch {...register('is_active')} defaultChecked={!!data?.page.is_active}/>}
                    label="Active"/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.title}
                    name="title"
                    rules={{required: "Title is required."}}
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Text label="Title" inputRef={ref} value={value} onChange={onChange} error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.content_heading}
                    name="content_heading"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Text label="Content Heading" inputRef={ref} value={value} onChange={onChange} error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.content}
                    name="content"
                    rules={{required: "Content is required."}}
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Textarea label="Content" inputRef={ref} value={value} onChange={onChange} error={error}/>
                    )}/>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Search Engine Optimization</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Controller
                    control={control}
                    defaultValue={data?.page.identifier}
                    name="identifier"
                    rules={{required: "URL Key is required."}}
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Text label="URL Key" inputRef={ref} value={value} onChange={onChange} error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.meta_description}
                    name="meta_description"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Text label="Meta Description" inputRef={ref} value={value} onChange={onChange} error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.meta_title}
                    name="meta_title"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Text label="Meta Title" inputRef={ref} value={value} onChange={onChange} error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.meta_keywords}
                    name="meta_keywords"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Text label="Meta Keywords" inputRef={ref} value={value} onChange={onChange} error={error}/>
                    )}/>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Design</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Controller
                    control={control}
                    defaultValue={data?.page.page_layout}
                    name="page_layout"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Select label="Layout" options={data?.page.layouts} inputRef={ref} value={value}
                                onChange={onChange}
                                error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.layout_update_selected}
                    name="layout_update_selected"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Select label="Custom Layout Update" options={data?.page.custom_layouts} inputRef={ref}
                                value={value}
                                onChange={onChange}
                                error={error}/>
                    )}/>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Custom Design Update</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Controller
                    control={control}
                    defaultValue={data?.page.custom_theme_from}
                    name="custom_theme_from"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Date label="From" options={data?.page.custom_layouts} inputRef={ref} value={value}
                              onChange={onChange}
                              error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.custom_theme_to}
                    name="custom_theme_to"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Date label="To" options={data?.page.custom_layouts} inputRef={ref} value={value}
                              onChange={onChange}
                              error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.custom_theme}
                    name="custom_theme"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Select label="New Theme" options={data?.page.themes} inputRef={ref} value={value}
                                onChange={onChange}
                                error={error}/>
                    )}/>
                <br/><br/>

                <Controller
                    control={control}
                    defaultValue={data?.page.custom_root_template}
                    name="custom_root_template"
                    render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                        <Select label="New Layout" options={data?.page.layouts} inputRef={ref} value={value}
                                onChange={onChange}
                                error={error}/>
                    )}/>
            </AccordionDetails>
        </Accordion>
    </form>
)

export default Form;
