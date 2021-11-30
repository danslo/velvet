import {Invoice, Maybe} from "../../../../types";

type InvoicesProps = {
    invoices: Array<Maybe<Invoice>>;
}

const Invoices = ({invoices}: InvoicesProps) => (
    <h1>Invoices</h1>
)

export default Invoices;
