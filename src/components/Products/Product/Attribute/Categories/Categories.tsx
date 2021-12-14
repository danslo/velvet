import React, {FunctionComponent} from "react";
import {AttributeProps} from "../Attribute";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Category from "./Category/Category";
import {Controller} from "react-hook-form";
import {TextField} from "@mui/material";

const Categories: FunctionComponent<AttributeProps> = props => {
    const defaultCategories = props.product.category_ids!.map(id => id!.toString());

    const [expanded, setExpanded] = React.useState<string[]>(
        [props.product.categories![0].id!.toString()]
    );
    const [selected, setSelected] = React.useState<string[]>(defaultCategories);

    const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
        event.persist()
        let iconClicked = (event.target as Element).closest(".MuiTreeItem-iconContainer")
        if (iconClicked) {
            setExpanded(nodeIds);
        }
    };

    const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
        event.persist()
        let iconClicked = (event.target as Element).closest(".MuiTreeItem-iconContainer")
        if (!iconClicked) {
            setSelected(nodeIds);
        }
    };

    return (
        <>
            <Controller
                name="category_ids"
                control={props.control}
                render={({field: {onChange}}) => (
                    <TextField value={selected} onChange={e => console.log(e)}/>
                )}/>
            <TreeView
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                expanded={expanded}
                selected={selected}
                multiSelect
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}
                sx={{flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}>
                {props.product.categories?.map(category => (
                    <Category category={category}/>
                ))}
            </TreeView>
        </>
    );
}

export default Categories;
