import React, { FC, useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'store';
import { signIn } from 'store/user/actions';

const Login: FC = () => {
  const userEmail = useSelector((state: RootState) => state.user.email);
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Login | 6 cities';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(
      signIn({
        email,
        password,
      }),
    );
  };

  return (
    <div className="page page--gray page--login">
      {isAuth ? <Redirect to="/" /> : null}
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">{userEmail || 'Sign in'}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="email" className="visually-hidden">
                  E-mail
                </label>
                <input
                  id="email"
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  value={email}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="pass" className="visually-hidden">
                  Password
                </label>
                <input
                  id="pass"
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default React.memo(Login);
