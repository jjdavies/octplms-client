'use client';
import React, { ChangeEvent, useContext, useState } from 'react';
import styles from '../style/styles.module.css';
import login from '../style/login.module.css';
import Link from 'next/link';
import { create } from 'zustand';

const LoginPage = () => {
  const user = { username: 'james', name: 'Jon-James Davies' };
  const [username, setUsername] = useState('');
  const changeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const [password, setPassword] = useState('');
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const submitLogIn = async () => {
    const loginBody = {
      username,
      password,
    };
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    };
    const result = await fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify(loginBody),
      headers: headersList,
    });
    const userData = await result.json();

    //save to data store!!!
  };
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/account">
          <div className={styles.headerBox}>
            {user && user.name ? user.name : 'Guest'}
          </div>
        </Link>
        <div className={styles.headerBoxDivider}></div>
        {user && (
          <Link href="/logout">
            <div className={styles.headerBox}>Log out</div>
          </Link>
        )}
        {!user && (
          <Link href="/login">
            <div className={styles.headerBox}>Log in</div>
          </Link>
        )}
      </header>
      <main className={styles.centerContainer}>
        <div className={login.loginBox}>
          <div className={login.field}>
            <label htmlFor="usernameInput">username:</label>
            <input
              id="usernameInput"
              className={login.textInput}
              value={username}
              onChange={(e) => changeUsername(e)}
            ></input>
          </div>
          <div className={login.field}>
            <label htmlFor="passwordInput">password:</label>
            <input
              type="password"
              id="passwordInput"
              className={login.textInput}
              value={password}
              onChange={(e) => changePassword(e)}
            ></input>
          </div>
          <div className={login.field}>
            <input
              type="button"
              id="submitButton"
              className={login.button}
              value="Log In"
              onClick={() => submitLogIn()}
            ></input>
          </div>
        </div>
      </main>
    </div>
  );
};

export default function Page() {
  return <LoginPage />;
}
