import React, {FunctionComponent, useEffect, useState} from "react";
import {AttributeProps} from "../Attribute";
import {VelvetStockAttributeValue} from "../../../../../types";
import {FormControlLabel, FormGroup, Switch, TextField} from "@mui/material";

const Stock: FunctionComponent<AttributeProps> = props => {
    const stockValue = props.attribute.value as VelvetStockAttributeValue;

    const [isInStock, setIsInStock] = useState<Boolean>(stockValue.is_in_stock);
    const [qty, setQty] = useState<number>(stockValue.qty);

    useEffect(() => {
        props.setValue('quantity_and_stock_status', {
            qty: qty,
            is_in_stock: isInStock
        });
    }, [props, qty, isInStock]);

    return (
        <FormGroup>
            <FormControlLabel
                label="In Stock"
                control={
                    <Switch defaultChecked={stockValue.is_in_stock}
                            value={isInStock}
                            onChange={e => setIsInStock(e.target.checked)}/>
                }/>

            <FormControlLabel
                label="Quantity"
                control={
                    <TextField
                        variant="standard"
                        value={qty}
                        onChange={e => setQty(parseInt(e.target.value))}/>
                }/>
        </FormGroup>
    );
}

export default Stock;
