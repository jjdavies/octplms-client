'use client';
import Image from 'next/image';
import styles from './style/styles.module.css';
import React, { useContext } from 'react';

import DataContext, { DataProvider } from './component/DataContext';

import Logo from './img/branding/logo.svg';
import Tagline from './img/branding/tagline.svg';
import Activities from './img/branding/interactive-activities.png';
import Multimedia from './img/branding/multimedia.png';
import SampleQRCode from './img/branding/exampleQR.png';
import SampleAssignment from './img/branding/assignmentSample.png';
import TickBullet from './img/branding/tickBullet.png';
import Link from 'next/link';

export const MainPage = () => {
  // const { user } = useContext(DataContext);

  return (
    <div className={styles.page}>
      <link
        rel="stylesheet"
        href="https://use.typekit.net/ecn7quv.css"
      ></link>
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
      <main className={styles.main}>
        <div className={styles.centerContainer}>
          <div className={styles.logoTagline}>
            <div className={styles.logoImage}>
              <Image
                src={Logo}
                alt="lector company logo"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className={styles.tagline}>
              <Image
                src={Tagline}
                alt="Learning Management and Study Resources"
                width={0}
                height={0}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
          {/* main content */}
          <div className={styles.showcase}>
            <div className={styles.showcaseFeature}>
              <Image
                src={Activities}
                alt="multimedia demo image"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className={styles.showcaseFeatureBanner}>
                Interactive Activities
              </div>
            </div>
            <div
              className={styles.showcaseFeature}
              style={{
                position: 'relative',
                alignSelf: 'end',
                top: '-9vh',
              }}
            >
              <Image
                src={Multimedia}
                alt="multimedia demo image"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div
                className={styles.showcaseFeatureBanner}
                style={{
                  alignSelf: 'end',
                  position: 'absolute',
                  bottom: '20px',
                }}
              >
                Multimedia
              </div>
            </div>
          </div>
          {/* student assignment example */}
          <div
            className={styles.showcaseTitle}
            style={{ marginTop: '-6vh', flexDirection: 'row' }}
          >
            Student Resource Assignment
          </div>
          <div
            className={styles.showcase}
            style={{ margin: 0, flexDirection: 'row' }}
          >
            <div
              className={styles.showcaseFeature}
              style={{ width: 'auto' }}
            >
              <Image
                src={SampleQRCode}
                alt="a sample qr code for student material assignment"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <Image
                    className={styles.listBullet}
                    width={0}
                    height={0}
                    src={TickBullet}
                    alt="bullet point"
                    style={{ height: '100%', width: 'auto' }}
                  />
                  Share Resources
                </div>
                <div className={styles.listItem}>
                  <Image
                    className={styles.listBullet}
                    width={0}
                    height={0}
                    src={TickBullet}
                    alt="bullet point"
                    style={{ height: '100%', width: 'auto' }}
                  />
                  Assign Tasks
                </div>
                <div className={styles.listItem}>
                  <Image
                    className={styles.listBullet}
                    width={0}
                    height={0}
                    src={TickBullet}
                    alt="bullet point"
                    style={{ height: '100%', width: 'auto' }}
                  />
                  Assess and Give Feedback
                </div>
              </div>
            </div>
            <div
              className={styles.showcaseFeature}
              style={{
                position: 'relative',
                alignSelf: 'end',
                top: '-10%',
              }}
            >
              <Image
                src={SampleAssignment}
                alt="a sample student assignment"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default function Home() {
  const user = { username: 'james', name: 'Jon-James Davies' };
  return (
    <div className={styles.page}>
      <link
        rel="stylesheet"
        href="https://use.typekit.net/ecn7quv.css"
      ></link>
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
      <main className={styles.main}>
        <div className={styles.centerContainer}>
          <div className={styles.logoTagline}>
            <div className={styles.logoImage}>
              <Image
                src={Logo}
                alt="lector company logo"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className={styles.tagline}>
              <Image
                src={Tagline}
                alt="Learning Management and Study Resources"
                width={0}
                height={0}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
          {/* main content */}
          <div className={styles.showcase}>
            <div className={styles.showcaseFeature}>
              <Image
                src={Activities}
                alt="multimedia demo image"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className={styles.showcaseFeatureBanner}>
                Interactive Activities
              </div>
            </div>
            <div
              className={styles.showcaseFeature}
              style={{
                position: 'relative',
                alignSelf: 'end',
                top: '-9vh',
              }}
            >
              <Image
                src={Multimedia}
                alt="multimedia demo image"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div
                className={styles.showcaseFeatureBanner}
                style={{
                  alignSelf: 'end',
                  position: 'absolute',
                  bottom: '20px',
                }}
              >
                Multimedia
              </div>
            </div>
          </div>
          {/* student assignment example */}
          <div
            className={styles.showcaseTitle}
            style={{ marginTop: '-6vh', flexDirection: 'row' }}
          >
            Student Resource Assignment
          </div>
          <div
            className={styles.showcase}
            style={{ margin: 0, flexDirection: 'row' }}
          >
            <div
              className={styles.showcaseFeature}
              style={{ width: 'auto' }}
            >
              <Image
                src={SampleQRCode}
                alt="a sample qr code for student material assignment"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <Image
                    className={styles.listBullet}
                    width={0}
                    height={0}
                    src={TickBullet}
                    alt="bullet point"
                    style={{ height: '100%', width: 'auto' }}
                  />
                  Share Resources
                </div>
                <div className={styles.listItem}>
                  <Image
                    className={styles.listBullet}
                    width={0}
                    height={0}
                    src={TickBullet}
                    alt="bullet point"
                    style={{ height: '100%', width: 'auto' }}
                  />
                  Assign Tasks
                </div>
                <div className={styles.listItem}>
                  <Image
                    className={styles.listBullet}
                    width={0}
                    height={0}
                    src={TickBullet}
                    alt="bullet point"
                    style={{ height: '100%', width: 'auto' }}
                  />
                  Assess and Give Feedback
                </div>
              </div>
            </div>
            <div
              className={styles.showcaseFeature}
              style={{
                position: 'relative',
                alignSelf: 'end',
                top: '-10%',
              }}
            >
              <Image
                src={SampleAssignment}
                alt="a sample student assignment"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
