import { useState } from "react";

/**
 * カスタムhooks フォーム
 * @returns カスタムhooks
 */
export const useForm = () => {
    const [name, setName]         = useState<string>("");
    const [email, setEmail]       = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});


    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setErrors({});
    }

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; password?: string } = {};
        if (!name) newErrors.name = "名前は必須です";
        if (!email) newErrors.email = "Eメールは必須です";
        if (!password) newErrors.password = "パスワードは必須です";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Form submitted successfully.");
            resetForm();
        } else {
            console.log("Form validation failed");
        }
    }

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        errors,
        setErrors,
        resetForm,
        handleSubmit,
    };
}

