import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, Mock } from "vitest";
import Contact from "@/components/contact/Contact";
import { useForm } from '@/hooks/useForm';

// useFormをモック化する
vi.mock('@/hooks/useForm');

/**
 * お問い合わせのテストコード(Mockあり)
 */
describe("<Contact /> mock test", () => { 
    describe("<Contact /> Mock send action", () => {
        let resetFormMock: Mock;
        let validateFormMock: Mock;
        let setErrorsMock: Mock;

        // 各テストの前にモックの設定を行う
        beforeEach(() => {
            // 新しいモック関数を作成する
            resetFormMock = vi.fn();
            validateFormMock = vi.fn().mockReturnValue(true);
            setErrorsMock = vi.fn();

             // useForm フックの戻り値をモック化
            (useForm as Mock).mockReturnValue({
                name: "",
                setName: vi.fn(),
                email: "",
                setEmail: vi.fn(),
                password: "",
                setPassword: vi.fn(),
                handleSubmit: resetFormMock, // handleSubmit をモック関数に置き換え
                validateForm: validateFormMock,
                errors: {},
                setErrors: setErrorsMock,
            });
        });

        // 各テストの後にモックをリセット
        afterEach(() => {
            vi.resetAllMocks();
        });

        test("send button click test", async () => {
            // userEvent のセットアップ
            const user = userEvent.setup();
            // Contact コンポーネントをレンダリング
            render(<Contact />);
            
             // 各入力フィールドとボタンを取得
            const nameTextElement = screen.getByRole("textbox", {
                name: "お名前",
            });
            const emailTextElement = screen.getByRole("textbox", {
                name: "Eメールアドレス",
            });
            const passwordTextElement = screen.getByLabelText("パスワード");
            const sendButtonElement = screen.getByRole("button", {
                name: "送信",
            });

            // 各入力フィールドに値を入力
            await user.type(nameTextElement,     "テストネーム");
            await user.type(emailTextElement,    "テストEメール");
            await user.type(passwordTextElement, "テストパスワード");
            // 送信ボタンをクリック
            await user.click(sendButtonElement);
    
            // resetFormMock が 1 回呼び出されたことを確認
            expect(resetFormMock).toHaveBeenCalledTimes(1);
            expect(validateFormMock).toHaveBeenCalledTimes(1);
        });

        test("should show validation errors on empty submit", async () => {
            const user = userEvent.setup();
            // フォームバリデーションを失敗させるために false を返す
            validateFormMock.mockReturnValueOnce(false);
            (useForm as Mock).mockReturnValue({
                name: "",
                setName: vi.fn(),
                email: "",
                setEmail: vi.fn(),
                password: "",
                setPassword: vi.fn(),
                handleSubmit: resetFormMock,
                validateForm: validateFormMock,
                errors: {
                    name: "名前は必須です",
                    email: "Eメールは必須です",
                    password: "パスワードは必須です"
                },
                setErrors: setErrorsMock,
            });
            render(<Contact />);
    
            const sendButtonElement = screen.getByRole("button", {
                name: "送信",
            });
    
            await user.click(sendButtonElement);
    
            expect(screen.getByText("名前は必須です")).toBeInTheDocument();
            expect(screen.getByText("Eメールは必須です")).toBeInTheDocument();
            expect(screen.getByText("パスワードは必須です")).toBeInTheDocument();
            expect(resetFormMock).not.toHaveBeenCalled();
        });
    });
});