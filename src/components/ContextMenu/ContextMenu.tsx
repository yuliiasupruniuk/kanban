import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VerticalEllipsisIcon from "../../assets/icons/icon-vertical-ellipsis.svg";

const ITEM_HEIGHT = 48;

function ContextMenu({
  id,
  options,
}: {
  id: string;
  options: { label: string; action: () => void }[];
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton id={id} onClick={handleClick}>
        <img src={VerticalEllipsisIcon} className="h-4" alt='' />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "10rem",
            background: "var(--primary)",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => {
              option.action();
              handleClose();
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default ContextMenu;
