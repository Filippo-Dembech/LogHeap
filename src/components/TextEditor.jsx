import { ButtonGroup } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaBold, FaCode, FaItalic, FaUnderline } from "react-icons/fa";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import DOMPurify from "dompurify";
import ErrorFeedback from "./ErrorFeedback";
import EditorButton from "./EditorButton";
import { useEffect } from "react";

export default function TextEditor({ onChange, error, helperText, ...props }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Placeholder.configure({
                placeholder: "Text here...",
            }),
        ],
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            const sanitizedHTML = DOMPurify.sanitize(html);
            onChange(sanitizedHTML);
        },
    });

    useEffect(() => {
        if (editor && props.value !== editor.getHTML()) {
            editor.commands.setContent(props.value || "");
        }
    }, [props.value, editor]);

    if (!editor) return null;

    return (
        <div className="codeblock flex flex-col gap-3">
            <div className="flex gap-3">
                <ButtonGroup variant="outlined">
                    <EditorButton
                        editor={editor}
                        tooltipText="Ctrl + b"
                        isActive={editor.isActive("bold")}
                        command="toggleBold"
                        icon={<FaBold />}
                    />
                    <EditorButton
                        editor={editor}
                        tooltipText="Ctrl + i"
                        isActive={editor.isActive("italic")}
                        command="toggleItalic"
                        icon={<FaItalic />}
                    />
                    <EditorButton
                        editor={editor}
                        tooltipText="Ctrl + u"
                        isActive={editor.isActive("underline")}
                        command="toggleUnderline"
                        icon={<FaUnderline />}
                    />
                </ButtonGroup>
                <ButtonGroup>
                    <EditorButton
                        editor={editor}
                        tooltipText="Ctrl + e"
                        isActive={editor.isActive("code")}
                        command="toggleCode"
                        icon={<FaCode />}
                    />
                </ButtonGroup>
            </div>
            <ErrorFeedback
                show={error}
                message={helperText}
            >
                <EditorContent
                    {...props}
                    editor={editor}
                    className={`rounded-md border-1 border-stone-300 p-3 focus:outline-none ${
                        error ? "ring-[0.5px] ring-orange-500" : ""
                    }`}
                />
            </ErrorFeedback>
        </div>
    );
}
