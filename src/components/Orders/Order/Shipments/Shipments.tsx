import {Maybe, OrderShipment} from "../../../../types";

type ShipmentsProps = {
    shipments: Array<Maybe<OrderShipment>>;
}

const Shipments = ({shipments}: ShipmentsProps) => (
    <h1>Shipments</h1>
)

export default Shipments;
