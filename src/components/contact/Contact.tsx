import { useEffect } from 'react';
import { useForm } from '@/hooks/useForm';
import { useFormLabel } from '@/hooks/useFormLabel';

/**
 * お問い合わせフォームコンポーネント
 * @returns JSX
 */
const Contact = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    setErrors,
    handleSubmit,
  } = useForm();

  const {
    formTitle,
    formName,
    formEmail,
    formPassword,
    formButton,
    formPlaceholderName,
    formPlaceholderEmail,
    formPlaceholderPassword,
  } = useFormLabel({
    initialFormTitle:    "お問い合わせページ",
    initialFormName:     "お名前",
    initialFormEmail:    "Eメールアドレス",
    initialFormPassword: "パスワード",
    initialFormButton:   "送信",
    initialPlaceholderName:     "フルネーム",
    initialPlaceholderEmail:    "xxxx@xxxx.com",
    initialPlaceholderPassword: "xxxxxxxx"
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  useEffect(() => {
    if (name || email || password) {
      setErrors({});
    }
  }, [name, email, password, setErrors]);

  return (
    <>
      <div>
        <div>
          <h1>{formTitle}</h1>
        </div>
        
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">{formName}</label>
            <input 
              type="text" 
              id="name"
              placeholder={formPlaceholderName}
              value={name}
              onChange={(e) => setName(e.target.value)} />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">{formEmail}</label>
            <input 
              type="email"
              id="email"
              placeholder={formPlaceholderEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password">{formPassword}</label>
            <input 
              type="password"
              id="password"
              placeholder={formPlaceholderPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div>
            <button type="submit">{formButton}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;