import {FunctionComponent} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import MultiSelect from "./MultiSelect/MultiSelect";
import Textarea from "./Textarea/Textarea";
import Boolean from "./Boolean/Boolean";
import Date from "./Date/Date";

export type FieldComponentProps = {
    disabled: boolean;
    value: string | null;
    setValue: (value: string) => void;
    options: Array<{ label: string, value: string | null }>;
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
