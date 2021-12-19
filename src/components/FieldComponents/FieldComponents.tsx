import {ChangeEvent, FunctionComponent} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import MultiSelect from "./MultiSelect/MultiSelect";
import Textarea from "./Textarea/Textarea";
import Boolean from "./Boolean/Boolean";
import Date from "./Date/Date";
import {FieldError} from "react-hook-form";
import {RefCallBack} from "react-hook-form/dist/types";

export type FieldComponentProps = {
    value: string | null;
    onChange: (value: string) => void;
    label?: string
    options?: Array<{ label: string, value: string | null }>;
    error?: FieldError;
    inputRef?: RefCallBack;
    disabled?: boolean;
}

export const textFieldProps = (props: FieldComponentProps) => ({
    inputRef: props.inputRef,
    value: props.value ?? '',
    disabled: props.disabled,
    label: props.label,
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => props.onChange(e.target.value),
    error: !!props.error,
    helperText: props.error ? props.error.message : null
});

export const FieldComponents: { [type: string]: FunctionComponent<FieldComponentProps> } = {
    text: Text,
    select: Select,
    multiselect: MultiSelect,
    textarea: Textarea,
    boolean: Boolean,
    date: Date
}
