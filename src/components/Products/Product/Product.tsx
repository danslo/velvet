import {useParams} from "react-router-dom";
import {
    DeleteProductDocument,
    DeleteProductMutation,
    DeleteProductMutationVariables,
    GetProductDocument,
    GetProductQuery,
    GetProductQueryVariables,
    SaveProductDocument,
    SaveProductMutation,
    SaveProductMutationVariables
} from "../../../types";
import React from "react";
import {useForm} from "react-hook-form";
import {withLayout} from "../../../hocs/layout";
import useCrud from "../../../hooks/crud";
import FormLayout from "../../FormLayout/FormLayout";
import Form from "./Form/Form"

const Product = () => {
    const {productId} = useParams();
    const {control, handleSubmit, register, setValue} = useForm();
    const productVariables = {product_id: parseInt(productId!)};
    const isNewProduct = typeof productId === 'undefined';

    const {
        data,
        loading,
        error,
        onSave,
        onDelete
    } = useCrud<GetProductQuery, GetProductQueryVariables, SaveProductMutation, SaveProductMutationVariables, DeleteProductMutation, DeleteProductMutationVariables>(
        GetProductDocument,
        SaveProductDocument,
        DeleteProductDocument,
        productVariables,
        result => '/products/' + result.data!.saveProduct,
        () => '/products',
        isNewProduct
    );

    return (
        <FormLayout
            error={error}
            loading={loading}
            showDelete={!isNewProduct}
            onDelete={() => onDelete(productVariables)}
            onSave={handleSubmit((input: any) => onSave({input: input}))}
            header={data ? "Product: " + data.productView.sku : "Add Product"}>
            <Form data={data} register={register} control={control} setValue={setValue}/>
        </FormLayout>
    )
}

export default withLayout(Product);
