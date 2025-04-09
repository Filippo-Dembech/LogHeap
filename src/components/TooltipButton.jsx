import { Button, Tooltip } from "@mui/material";

export default function TooltipButton({ tooltipText, ...props }) {
    return (
        <Tooltip
            title={tooltipText}
            arrow
            placement="top"
            slotProps={{ transition: { timeout: 200 } }}
        >
            <Button {...props}>{props.children}</Button>
        </Tooltip>
    );
}
