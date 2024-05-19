import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "@/pages/ContactPage";

/**
 * ContactPage の結合テストコード
 */
describe("<ContactPage /> integration test", () => {
    test("handles form submission correctly", async () => {
        const user = userEvent.setup();
        render(<ContactPage />);

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

        await user.type(nameTextElement, "テストネーム");
        await user.type(emailTextElement, "a@example.com");
        await user.type(passwordTextElement, "abcde");
        await user.click(sendButtonElement);

        expect(nameTextElement).toHaveValue("");
        expect(emailTextElement).toHaveValue("");
        expect(passwordTextElement).toHaveValue("");
    });


    test("shows validation errors on empty submit", async () => {
        const user = userEvent.setup();
        render(<ContactPage />);
        
        const sendButtonElement = screen.getByRole("button", {
            name: "送信",
        });

        await user.click(sendButtonElement);

        expect(screen.getByText("名前は必須です")).toBeInTheDocument();
        expect(screen.getByText("Eメールは必須です")).toBeInTheDocument();
        expect(screen.getByText("パスワードは必須です")).toBeInTheDocument();
    });
});