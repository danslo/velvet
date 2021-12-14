import React, {FunctionComponent} from "react";
import {AttributeProps} from "../Attribute";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Category from "./Category/Category";

const Categories: FunctionComponent<AttributeProps> = props => {
    const [expanded, setExpanded] = React.useState<string[]>(
        [props.product.categories![0].id!.toString()]
    );
    const [selected, setSelected] = React.useState<string[]>(
        props.product.category_ids!.map(id => id!.toString())
    );

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
        <TreeView
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
            expanded={expanded}
            selected={selected}
            multiSelect
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}
            sx={{height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}>
            {props.product.categories?.map(category => (
                <Category category={category}/>
            ))}
        </TreeView>
    );
}

export default Categories;
