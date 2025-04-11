import { CircularProgress, TextField } from "@mui/material";
import TextEditor from "../../components/TextEditor";
import Form from "../../components/Form";
import CreatableSelect from "react-select/creatable";
import { createInsight } from "./createInsight";
import { option } from "../../utils/option";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db/db";

export default function InsightForm({ focus, className, onClose, onCleanup }) {
    const existingTags = useLiveQuery(() => db.tags.toArray());

    if (!existingTags) return <CircularProgress />;

    return (
        <div className={className}>
            <Form
                submitText="Save"
                onSubmit={createInsight}
                onClose={onClose}
                onCleanup={onCleanup}
                defaultValues={{ title: "", content: "" }}
            >
                <p>What is the insights about?</p>
                <Form.Field
                    name="title"
                    rules={{ required: "Title is required." }}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            autoFocus={focus}
                            label="Title"
                            error={error}
                            helperText={error?.message}
                        />
                    )}
                />
                <p>What is it?</p>
                <Form.Field
                    name="content"
                    rules={{
                        required: "Content is required",
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <TextEditor
                            {...field}
                            error={error}
                            helperText={error?.message}
                        />
                    )}
                />
                <p>Tags:</p>
                <Form.Field
                    name="tags"
                    render={({ field }) => (
                        <CreatableSelect
                            {...field}
                            isMulti
                            options={[
                                ...existingTags.map((tag) => option(tag.label)),
                            ]}
                        />
                    )}
                />
            </Form>
        </div>
    );
}
