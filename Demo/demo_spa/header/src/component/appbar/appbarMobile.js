import { AppbarContainer ,AppbarHeader,MyList } from "../../public/styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../public/context/ui";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox} = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => UIProvider(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
