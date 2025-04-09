import { ButtonGroup } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaBold, FaCode, FaItalic, FaUnderline } from "react-icons/fa";
import { colors } from "../theme/colors";
import Underline from "@tiptap/extension-underline";
import TooltipButton from "./TooltipButton";
import Placeholder from "@tiptap/extension-placeholder";
import DOMPurify from 'dompurify'

export default function TextEditor({ onChange, error, helperText, ...props }) {
    const editor = useEditor({
        content: props.value,
        extensions: [
            StarterKit,
            Underline,
            Placeholder.configure({
                placeholder: "Text here...",
            }),
        ],
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
            const sanitizedHTML = DOMPurify.sanitize(html);
            onChange(sanitizedHTML);
        },
    });
    

    if (!editor) return null;

    return (
        <div className="codeblock flex flex-col gap-3">
            <EditorContent
                {...props}
                editor={editor}
                className={`order-2 rounded-md border-1 border-stone-300 p-3 focus:outline-none ${error ? "ring-[0.5px] ring-orange-500" : "" }`}
            />
            {error && <p className="text-xs order-3 text-orange-700 -m-1 pl-5">{helperText}</p>}
            <div className="flex gap-3 order-1">
                <ButtonGroup variant="outlined">
                    <TooltipButton
                        tooltipText="Ctrl + b"
                        sx={{
                            backgroundColor: editor.isActive("bold")
                                ? colors.fuchsia[100]
                                : "",
                        }}
                        onClick={() =>
                            editor.chain().toggleBold().focus().run()
                        }
                        disabled={!editor.can().chain().toggleBold().run()}
                        size="small"
                    >
                        <FaBold />
                    </TooltipButton>
                    <TooltipButton
                        tooltipText="Ctrl + i"
                        sx={{
                            backgroundColor: editor.isActive("italic")
                                ? colors.fuchsia[100]
                                : "",
                        }}
                        onClick={() =>
                            editor.chain().toggleItalic().focus().run()
                        }
                        disabled={!editor.can().chain().toggleItalic().run()}
                        size="small"
                    >
                        <FaItalic />
                    </TooltipButton>
                    <TooltipButton
                        tooltipText="Ctrl + u"
                        sx={{
                            backgroundColor: editor.isActive("underline")
                                ? colors.fuchsia[100]
                                : "",
                        }}
                        onClick={() =>
                            editor.chain().toggleUnderline().focus().run()
                        }
                        disabled={!editor.can().chain().toggleUnderline().run()}
                        size="small"
                    >
                        <FaUnderline />
                    </TooltipButton>
                </ButtonGroup>
                <ButtonGroup>
                    <TooltipButton
                        tooltipText="Ctrl + e"
                        sx={{
                            backgroundColor: editor.isActive("code")
                                ? colors.fuchsia[100]
                                : "",
                        }}
                        onClick={() =>
                            editor.chain().toggleCode().focus().run()
                        }
                        disabled={!editor.can().chain().toggleCode().run()}
                        size="small"
                    >
                        <FaCode />
                    </TooltipButton>
                </ButtonGroup>
            </div>
        </div>
    );
}
