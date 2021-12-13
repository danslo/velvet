import {FunctionComponent} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import MultiSelect from "./MultiSelect/MultiSelect";
import Textarea from "./Textarea/Textarea";
import Boolean from "./Boolean/Boolean";
import Date from "./Date/Date";
import {FieldError} from "react-hook-form";

export type FieldComponentProps = {
    disabled: boolean;
    value: string | null;
    onChange: (value: string) => void;
    options: Array<{ label: string, value: string | null }>;
    error: FieldError | undefined;
}

export const FieldComponents: { [type: string]: FunctionComponent<FieldComponentProps> } = {
    text: Text,
    select: Select,
    multiselect: MultiSelect,
    textarea: Textarea,
    boolean: Boolean,
    date: Date,

    weight: Text, // todo
    price: Text,  // todo
}
