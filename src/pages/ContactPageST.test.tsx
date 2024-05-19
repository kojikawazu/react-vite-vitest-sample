import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ContactPage from '@/pages/ContactPage';

// BrowserRouterでラップしてコンポーネントをレンダリングする
const renderWithRouter = (ui: ReactNode, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Contact Page', () => {
  test('renders Contact page correctly', () => {
    renderWithRouter(<ContactPage />);
    
    expect(screen.getByRole('heading', { name: /お問い合わせページ/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/お名前/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Eメールアドレス/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/パスワード/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /送信/i })).toBeInTheDocument();
  });

  test('handles form submission correctly', async () => {
    const user = userEvent.setup();
    renderWithRouter(<ContactPage />);

    await user.type(screen.getByLabelText(/お名前/i), 'テストネーム');
    await user.type(screen.getByLabelText(/Eメールアドレス/i), 'test@example.com');
    await user.type(screen.getByLabelText(/パスワード/i), 'password123');
    await user.click(screen.getByRole('button', { name: /送信/i }));

    // フォームが送信された後の動作を確認する
    expect(screen.getByLabelText(/お名前/i)).toHaveValue('');
    expect(screen.getByLabelText(/Eメールアドレス/i)).toHaveValue('');
    expect(screen.getByLabelText(/パスワード/i)).toHaveValue('');
  });

  test('shows validation errors on empty submit', async () => {
    const user = userEvent.setup();
    renderWithRouter(<ContactPage />);
    
    await user.click(screen.getByRole('button', { name: /送信/i }));
    
    expect(screen.getByText(/名前は必須です/i)).toBeInTheDocument();
    expect(screen.getByText(/Eメールは必須です/i)).toBeInTheDocument();
    expect(screen.getByText(/パスワードは必須です/i)).toBeInTheDocument();
  });
});
