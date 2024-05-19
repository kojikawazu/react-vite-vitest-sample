import { renderHook } from '@testing-library/react';
import { useFormLabel } from '@/hooks/useFormLabel';

/**
 * useFormLabel のテストコード
 */
describe("useFormLabel test", () => {
    describe("useFormLabel test title", () => {
        test("should render the default title", () => {
            const { result } = renderHook(useFormLabel);
            expect(result.current.formTitle).toBe("");
        });

        test("should render the initial title", () => {
            const { result } = renderHook(useFormLabel, {
                initialProps: { initialFormTitle: "テストタイトル" },
            });
            expect(result.current.formTitle).toBe("テストタイトル");
        });
    });

    describe("useFormLabel test label name", () => {
        test("should render the default label name", () => {
            const { result } = renderHook(useFormLabel);
            expect(result.current.formName).toBe("");
        });

        test("should render the initial label name", () => {
            const { result } = renderHook(useFormLabel, {
                initialProps: { initialFormName: "テストネーム" },
            });
            expect(result.current.formName).toBe("テストネーム");
        });
    });
        
    describe("useFormLabel test placeholder name", () => {
        test("should render the default placeholder name", () => {
            const { result } = renderHook(useFormLabel);
            expect(result.current.formPlaceholderName).toBe("");
        });

        test("should render the initial placeholder name", () => {
            const { result } = renderHook(useFormLabel, {
                initialProps: { initialPlaceholderName: "デフォルト" },
            });
            expect(result.current.formPlaceholderName).toBe("デフォルト");
        });
    });

    describe("useFormLabel test label email", () => {
        test("should render the default label email", () => {
            const { result } = renderHook(useFormLabel);
            expect(result.current.formEmail).toBe("");
        });

        test("should render the initial label name", () => {
            const { result } = renderHook(useFormLabel, {
                initialProps: { initialFormEmail: "テストEメール" },
            });
            expect(result.current.formEmail).toBe("テストEメール");
        });        
    });

    describe("useFormLabel test placeholder email", () => {
        test("should render the default placeholder email", () => {
            const { result } = renderHook(useFormLabel);
            expect(result.current.formPlaceholderEmail).toBe("");
        });

        test("should render the initial placeholder name", () => {
            const { result } = renderHook(useFormLabel, {
                initialProps: { initialPlaceholderEmail: "テストEメール" },
            });
            expect(result.current.formPlaceholderEmail).toBe("テストEメール");
        });
    });

    describe("useFormLabel test label password", () => {
        test("should render the default label password", () => {
            const { result } = renderHook(useFormLabel);
            expect(result.current.formPassword).toBe("");
        });

        test("should render the initial label password", () => {
            const { result } = renderHook(useFormLabel, {
                initialProps: { initialFormPassword: "テストパスワード" },
            });
            expect(result.current.formPassword).toBe("テストパスワード");
        });
    });

    describe("useFormLabel test placeholder password", () => {
        test("should render the default placeholder password", () => {
            const { result } = renderHook(useFormLabel);
            expect(result.current.formPlaceholderPassword).toBe("");
        });

        test("should render the initial placeholder password", () => {
            const { result } = renderHook(useFormLabel, {
                initialProps: { initialPlaceholderPassword: "テストパスワード" },
            });
            expect(result.current.formPlaceholderPassword).toBe("テストパスワード");
        });
    });

    describe("useFormLabel test button", () => {
        test("should render the default button", () => {
            const { result } = renderHook(useFormLabel);
            expect(result.current.formButton).toBe("");
        });

        test("should render the initial button", () => {
            const { result } = renderHook(useFormLabel, {
                initialProps: { initialFormButton: "テスト" },
            });
            expect(result.current.formButton).toBe("テスト");
        });
    });
});