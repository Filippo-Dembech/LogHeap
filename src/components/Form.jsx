import { createContext, useContext } from "react";
import CloseButton from "./CloseButton";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@mui/material";

const FormContext = createContext();

function Form({
    className,
    onSubmit,
    onClose,
    onCleanup,
    submitText = "Submit",
    defaultValues = {},
    ...props
}) {
    const { control, handleSubmit, reset: resetForm } = useForm(defaultValues);

    function submit(data) {
        onSubmit?.(data);
        resetForm?.();
        onCleanup?.();
    }

    function close() {
        onClose?.();
        resetForm?.();
        onCleanup?.();
    }

    return (
        <FormContext.Provider value={{ control }}>
            <form
                className={`relative shadow-cool p-8 rounded-lg mb-3 flex flex-col gap-3 ${className}`}
                onSubmit={handleSubmit(submit)}
            >
                <span className="absolute top-1 right-1">
                    <CloseButton onClick={close} />
                </span>
                {props.children}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    {submitText}
                </Button>
            </form>
        </FormContext.Provider>
    );
}

function Field({defaultValue = "", ...props}) {
    const { control } = useContext(FormContext);

    return (
        <Controller
            control={control}
            defaultValue={defaultValue}
            {...props}
        />
    );
}

Form.Field = Field;

export default Form;
