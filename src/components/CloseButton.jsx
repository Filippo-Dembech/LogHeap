import { IconButton } from "@mui/material";
import { GiCancel } from "react-icons/gi";

export default function CloseButton({ onClick }) {
    return (
        <IconButton
            onClick={onClick}
            size="small"
        >
            <GiCancel />
        </IconButton>
    );
}
