import {ConfigurationField} from "../../../types";

type FieldProps = {
    field: ConfigurationField
}

const Field = ({field}: FieldProps) => (
    <>
        <p dangerouslySetInnerHTML={{__html: field!.label}}></p>
        <p dangerouslySetInnerHTML={{__html: field!.type}}></p>
        {field!.comment && (<p dangerouslySetInnerHTML={{__html: field!.comment}}></p>)}
        <hr/>
    </>
)

export default Field;
