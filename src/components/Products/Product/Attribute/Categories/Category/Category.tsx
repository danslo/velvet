import {CategoryTree, Maybe} from "../../../../../../types";
import TreeItem from '@mui/lab/TreeItem';

type CategoryProps = {
    category: Maybe<CategoryTree>
}

const Category = (props: CategoryProps) => (
    <TreeItem nodeId={props.category!.id!.toString()} label={props.category!.name}>
        {props.category!.children!.map(child => (
            <Category key={child!.id} category={child}/>
        ))}
    </TreeItem>
)

export default Category;
