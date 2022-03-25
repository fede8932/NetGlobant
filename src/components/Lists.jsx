import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Lists = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/security");
  };

  return (
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText onClick={handleClick} primary="Agregar Vigilador" />
      </ListItem>
    </List>
  );
};

export default Lists;
