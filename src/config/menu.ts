import SvgIcon from "@mui/material/SvgIcon/SvgIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ArticleIcon from '@mui/icons-material/Article';
import GridViewIcon from '@mui/icons-material/GridView';
import CachedIcon from '@mui/icons-material/Cached';
import StorageIcon from '@mui/icons-material/Storage';
import ConfigIcon from '@mui/icons-material/Build';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import EqualizerIcon from '@mui/icons-material/Equalizer';

type menuItem = {
    to: string
    icon: typeof SvgIcon
}

const menu: Array<menuItem> = [
    {to: "/dashboard", icon: DashboardIcon},
    {to: "/configuration", icon: ConfigIcon},
    {to: "/cache", icon: CachedIcon},
    {to: "/indexers", icon: StorageIcon},
    {to: "/orders", icon: PointOfSaleIcon},
    {to: "/pages", icon: ArticleIcon},
    {to: "/blocks", icon: GridViewIcon},
    {to: "/customers", icon: PeopleAltIcon},
    {to: "/products", icon: InventoryIcon},
    {to: "/attributes", icon: CategoryIcon},
    {to: "/reports", icon: EqualizerIcon},
];

export default menu;
