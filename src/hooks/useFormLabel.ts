import { UseFormLabelProps } from "@/hooks/useFormLabel.types";

/**
 * カスタムhooks フォームラベル
 * @param param0 初期値を含むオブジェクト
 * @returns フォームラベルとプレースホルダーの初期値を含むオブジェクト
 * 
 */
export const useFormLabel = ({
    initialFormTitle           = "",
    initialFormName            = "",
    initialFormEmail           = "",
    initialFormPassword        = "",
    initialFormButton          = "",
    initialPlaceholderName     = "",
    initialPlaceholderEmail    = "",
    initialPlaceholderPassword = "",
}: UseFormLabelProps = {}) => {
    return {
        formTitle: initialFormTitle,
        formName: initialFormName,
        formEmail: initialFormEmail,
        formPassword: initialFormPassword,
        formButton: initialFormButton,
        formPlaceholderName: initialPlaceholderName,
        formPlaceholderEmail: initialPlaceholderEmail,
        formPlaceholderPassword: initialPlaceholderPassword,
    };
}