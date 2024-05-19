import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/components/contact/Contact";

/**
 * お問い合わせのテストコード
 */
describe("<Contact /> test", () => {
    describe("<Contact /> test H1", () => {
        test("renders correctly", () => {
            render(<Contact />);

            const h1Element = screen.getByRole("heading", {
                name: "お問い合わせページ",
            });
            expect(h1Element).toBeInTheDocument();
        });
    });

    describe("<Contact /> test name", () => {
        test("renders correctly form name label", () => {
            render(<Contact />);
    
            const nameLabelElement = screen.getByText("お名前");
            expect(nameLabelElement).toBeInTheDocument();
        });
    
        test("renders correctly form name textbox", () => {
            render(<Contact />);
    
            const nameTextElement = screen.getByRole("textbox", {
                name: "お名前",
            });
            expect(nameTextElement).toBeInTheDocument();
        });
    
        test("renders correctly form name textbox placeholder", () => {
            render(<Contact />);
    
            const nameTextPlaceElement = screen.getByPlaceholderText("フルネーム");
            expect(nameTextPlaceElement).toBeInTheDocument();
        });
    
        test("renders correctly form name textbox value", () => {
            render(<Contact />);
    
            const nameTextElement = screen.getByRole("textbox", {
                name: "お名前",
            });
            expect(nameTextElement).toHaveValue("");
        });
    });
    
    describe("<Contact /> test email", () => {
        test("renders correctly form email label", () => {
            render(<Contact />);
    
            const emailLabelElement = screen.getByText("Eメールアドレス");
            expect(emailLabelElement).toBeInTheDocument();
        });
    
        test("renders correctly form email textbox", () => {
            render(<Contact />);
    
            const emailTextElement = screen.getByRole("textbox", {
                name: "Eメールアドレス",
            });
            expect(emailTextElement).toBeInTheDocument();
        });
    
        test("renders correctly form name email placeholder", () => {
            render(<Contact />);
    
            const emailTextPlaceElement = screen.getByPlaceholderText("xxxx@xxxx.com");
            expect(emailTextPlaceElement).toBeInTheDocument();
        });
    
        test("renders correctly form name email value", () => {
            render(<Contact />);
    
            const emailTextElement = screen.getByRole("textbox", {
                name: "Eメールアドレス",
            });
            expect(emailTextElement).toHaveValue("");
        });
    });

    describe("<Contact /> test password", () => {
        test("renders correctly form password label", () => {
            render(<Contact />);
    
            const passwordLabelElement = screen.getByText("パスワード");
            expect(passwordLabelElement).toBeInTheDocument();
        });
    
        test("renders correctly form password textbox", () => {
            render(<Contact />);
    
            const passwordTextElement = screen.getByLabelText("パスワード");
            expect(passwordTextElement).toBeInTheDocument();
        });
    
        test("renders correctly form name password placeholder", () => {
            render(<Contact />);
    
            const passwordTextPlaceElement = screen.getByPlaceholderText("xxxxxxxx");
            expect(passwordTextPlaceElement).toBeInTheDocument();
        });
    
        test("renders correctly form name password value", () => {
            render(<Contact />);
    
            const passwordTextElement = screen.getByLabelText("パスワード");
            expect(passwordTextElement).toHaveValue("");
        });
    });

    describe("<Contact /> send button", () => {
        test("renders correctly form send button", () => {
            render(<Contact />);
    
            const sendButtonElement = screen.getByRole("button", {
                name: "送信",
            });
            expect(sendButtonElement).toBeInTheDocument();
        });

        test("handles submit action correctly", async () => {
            const user = userEvent.setup();
            render(<Contact />);

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
            await user.type(emailTextElement, "テストEメール");
            await user.type(passwordTextElement, "テストパスワード");

            await user.click(sendButtonElement);

            expect(nameTextElement).toHaveValue("");
            expect(emailTextElement).toHaveValue("");
            expect(passwordTextElement).toHaveValue("");

            expect(screen.queryByText("名前は必須です")).not.toBeInTheDocument();
            expect(screen.queryByText("Eメールは必須です")).not.toBeInTheDocument();
            expect(screen.queryByText("パスワードは必須です")).not.toBeInTheDocument();
        });

        test("shows validation errors on empty submit", async () => {
            const user = userEvent.setup();
            render(<Contact />);
            
            const sendButtonElement = screen.getByRole("button", {
                name: "送信",
            });

            await user.click(sendButtonElement);

            expect(screen.getByText("名前は必須です")).toBeInTheDocument();
            expect(screen.getByText("Eメールは必須です")).toBeInTheDocument();
            expect(screen.getByText("パスワードは必須です")).toBeInTheDocument();
        });

        test("shows specific validation errors on partial submit", async () => {
            const user = userEvent.setup();
            render(<Contact />);

            const nameTextElement = screen.getByRole("textbox", {
                name: "お名前",
            });
            const sendButtonElement = screen.getByRole("button", {
                name: "送信",
            });

            await user.type(nameTextElement, "テストネーム");
            await user.click(sendButtonElement);

            expect(screen.queryByText("名前は必須です")).not.toBeInTheDocument();
            expect(screen.getByText("Eメールは必須です")).toBeInTheDocument();
            expect(screen.getByText("パスワードは必須です")).toBeInTheDocument();
        });
    });
});