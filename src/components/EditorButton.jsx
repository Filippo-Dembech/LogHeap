import TooltipButton from "./TooltipButton";
import { colors } from "../theme/colors";

export default function EditorButton({ command, editor, tooltipText, isActive, icon }) {
    return (
        <TooltipButton
            tooltipText={tooltipText}
            tabIndex="-1"
            sx={{
                backgroundColor: isActive 
                    ? colors.fuchsia[100]
                    : "",
            }}
            onClick={() => editor.chain().focus()[command]().run()}
            disabled={!editor.can().chain()[command]().run()}
            size="small"
        >
            {icon}
        </TooltipButton>
    );
}
