import { TextField } from "@mui/material";
import TextEditor from "../../components/TextEditor";
import Form from "../../components/Form";
import { db } from "../../db/db";

export default function InsightForm({ className, onClose, onCleanup }) {
    
    function addInsight(insight) {
        db.insights.add(insight)
    }

    return (
        <div className={className}>
            <Form
                submitText="Save"
                onSubmit={addInsight}
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
            </Form>
        </div>
    );
}
