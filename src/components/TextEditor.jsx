import { ButtonGroup } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaBold, FaCode, FaItalic, FaUnderline } from "react-icons/fa";
import { colors } from "../theme/colors";
import Underline from "@tiptap/extension-underline";
import TooltipButton from "./TooltipButton";
import Placeholder from "@tiptap/extension-placeholder";

export default function TextEditor({ onChange, isInvalid, invalidText }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Placeholder.configure({
                placeholder: "Text here...",
            }),
        ],
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) return null;

    return (
        <div className="codeblock shadow-md rounded-2xl p-3 flex flex-col gap-3">
            <div className="flex gap-3">
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
            <EditorContent
                editor={editor}
                className={`rounded-2xl border-1 border-purple-200 p-3 focus:outline-none ${isInvalid ? "ring-[0.5px] ring-orange-500" : "" }`}
            />
            {isInvalid && <p className="text-xs text-orange-700 -m-1 pl-5">{invalidText}</p>}
        </div>
    );
}
