import { TextField } from "@mui/material";
import TextEditor from "../../components/TextEditor";
import Form from "../../components/Form";
import { db } from "../../db/db";
import CreatableSelect from "react-select/creatable";

export default function InsightForm({ focus, className, onClose, onCleanup }) {
    
    function addInsight(insight) {
        console.log(insight)
        db.insights.add(insight);
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
                    name="tag"
                    render={({ field }) => (
                        <CreatableSelect
                            {...field}
                            isMulti
                            options={[
                                { value: 1, label: "first" },
                                { value: 2, label: "second" },
                                { value: 3, label: "third" },
                            ]}
                        />
                    )}
                />
            </Form>
        </div>
    );
}
