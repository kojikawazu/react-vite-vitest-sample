import { renderHook, act } from '@testing-library/react';
import { useForm } from '@/hooks/useForm';

/**
 * useForm のテストコード
 */
describe("useForm test", () => {

    describe("useForm test name", () => {
        test("should render the default name", () => {
            const { result } = renderHook(useForm);
            expect(result.current.name).toBe("");
        });

        test("should render the input name", () => {
            const { result } = renderHook(useForm);
            act(() => result.current.setName("テストネーム"));
            expect(result.current.name).toBe("テストネーム");
        });
    });

    describe("useForm test email", () => {
        test("should render the default email", () => {
            const { result } = renderHook(useForm);
            expect(result.current.email).toBe("");
        });

        test("should render the input email", () => {
            const { result } = renderHook(useForm);
            act(() => result.current.setEmail("テストEメール"));
            expect(result.current.email).toBe("テストEメール");
        });
    });

    describe("useForm test password", () => {
        test("should render the default password", () => {
            const { result } = renderHook(useForm);
            expect(result.current.password).toBe("");
        });

        test("should render the input password", () => {
            const { result } = renderHook(useForm);
            act(() => result.current.setPassword("テストパスワード"));
            expect(result.current.password).toBe("テストパスワード");
        });
    });

    describe("useForm execute resetForm test", () => {
        test("execute resetForm", () => {
            const { result } = renderHook(useForm);

            act(() => {
                result.current.setName("テストネーム");
                result.current.setEmail("テストEメール");
                result.current.setPassword("テストパスワード");
                result.current.resetForm();
            });

            expect(result.current.name).toBe("");
            expect(result.current.email).toBe("");
            expect(result.current.password).toBe("");
            expect(result.current.errors).toEqual({});
        });
    });

    describe("useForm handleSubmit test", () => {
        test("should reset form on successful submit", () => {
            const { result } = renderHook(useForm);

            act(() => {
                result.current.setName("テストネーム");
                result.current.setEmail("テストEメール");
                result.current.setPassword("テストパスワード");
            });

            expect(result.current.name).toBe("テストネーム");
            expect(result.current.email).toBe("テストEメール");
            expect(result.current.password).toBe("テストパスワード");

            act(() => result.current.handleSubmit());

            expect(result.current.name).toBe("");
            expect(result.current.email).toBe("");
            expect(result.current.password).toBe("");
            expect(result.current.errors).toEqual({});
        });
    });

    test("should set errors on failed submit", () => {
        const { result } = renderHook(useForm);

        act(() => {
            result.current.setName("");
            result.current.setEmail("");
            result.current.setPassword("");
        });

        act(() => result.current.handleSubmit());

        expect(result.current.errors).toEqual({
            name: "名前は必須です",
            email: "Eメールは必須です",
            password: "パスワードは必須です"
        });
    });

    test("should set specific errors on failed submit", () => {
        const { result } = renderHook(useForm);

        act(() => {
            result.current.setName("テストネーム");
            result.current.setEmail("");
            result.current.setPassword("");
        });

        act(() => result.current.handleSubmit());

        expect(result.current.errors).toEqual({
            email: "Eメールは必須です",
            password: "パスワードは必須です"
        });
    });
});