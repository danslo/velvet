import {CreditMemo, Maybe} from "../../../../types";

type CreditmemosProps = {
    creditmemos: Array<Maybe<CreditMemo>>;
}

const Creditmemos = ({creditmemos}: CreditmemosProps) => (
    <h1>Credit Memos</h1>
)

export default Creditmemos;
