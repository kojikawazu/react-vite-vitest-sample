import { renderHook } from '@testing-library/react';
import { useFormLabel } from '@/hooks/useFormLabel';
import { UseFormLabelProps } from '@/hooks/useFormLabel.types';

type TestCase = {
    prop: keyof UseFormLabelProps;
    resultKey: keyof ReturnType<typeof useFormLabel>;
    defaultValue: string;
    testValue: string;
};

/**
 * useFormLabel のテストコード
 */
describe("useFormLabel test", () => {
    const testCases: TestCase[] = [
        { prop: 'initialFormTitle', resultKey: 'formTitle', defaultValue: "", testValue: "テストタイトル" },
        { prop: 'initialFormName', resultKey: 'formName', defaultValue: "", testValue: "テストネーム" },
        { prop: 'initialFormEmail', resultKey: 'formEmail', defaultValue: "", testValue: "テストEメール" },
        { prop: 'initialFormPassword', resultKey: 'formPassword', defaultValue: "", testValue: "テストパスワード" },
        { prop: 'initialFormButton', resultKey: 'formButton', defaultValue: "", testValue: "テスト" },
        { prop: 'initialPlaceholderName', resultKey: 'formPlaceholderName', defaultValue: "", testValue: "デフォルト" },
        { prop: 'initialPlaceholderEmail', resultKey: 'formPlaceholderEmail', defaultValue: "", testValue: "テストEメール" },
        { prop: 'initialPlaceholderPassword', resultKey: 'formPlaceholderPassword', defaultValue: "", testValue: "テストパスワード" },
    ];

    testCases.forEach(({ prop, resultKey, defaultValue, testValue }) => {
        describe(`${resultKey} tests`, () => {
            test(`should render the default ${resultKey}`, () => {
                const { result } = renderHook(useFormLabel);
                expect(result.current[resultKey]).toBe(defaultValue);
            });

            test(`should render the initial ${resultKey}`, () => {
                const { result } = renderHook(useFormLabel, {
                    initialProps: { [prop]: testValue },
                });
                expect(result.current[resultKey]).toBe(testValue);
            });
        });
    });
});
