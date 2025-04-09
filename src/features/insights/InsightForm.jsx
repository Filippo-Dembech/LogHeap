import { Button, IconButton, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { GiCancel } from "react-icons/gi";
import TextEditor from "../../components/TextEditor";
import { useState } from "react";

export default function InsightForm({ className, onClose, onCleanup, onSave }) {
    const [editorKey, setEditorKey] = useState(0);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset: resetForm,
    } = useForm({
        defaultValues: {
            title: "",
            content: "",
        },
    });

    function cleanUp() {
        resetForm?.();
        onCleanup?.();
        setEditorKey((curr) => curr + 1);
    }

    function onSubmit(data) {
        onSave?.(data);
        cleanUp();
    }

    function closeForm() {
        onClose?.();
        cleanUp?.();
    }

    return (
        <form
            className={`relative shadow-cool p-8 rounded-lg mb-3 ${className}`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <span className="absolute top-1 right-1">
                <IconButton
                    onClick={closeForm}
                    size="small"
                >
                    <GiCancel />
                </IconButton>
            </span>
            <p>What is the insights about?</p>
            <Controller
                name="title"
                control={control}
                rules={{
                    required: "Title is required",
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Title"
                        error={errors?.title}
                        helperText={errors?.title?.message}
                    />
                )}
            />
            <p>What is it?</p>
            <Controller
                name="content"
                control={control}
                rules={{
                    required: "Content is required",
                }}
                render={({ field }) => (
                    <TextEditor
                        {...field}
                        key={editorKey}
                        isInvalid={errors?.content}
                        invalidText={errors?.content?.message}
                    />
                )}
            />
            <Button
                variant="contained"
                type="submit"
            >
                Save
            </Button>
        </form>
    );
}
