import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './settings.module.css';

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.settingsCard}>
      <div className="card__header">
        <h3 className={styles.cardHeader}>{title}</h3>
      </div>
      <div className="card__body">
        {children}
      </div>
    </div>
  );
}

export default function Settings() {
  return (
    <Layout title="Settings" description="User and System Settings">
      <div className="container margin-vert--xl">
        <div className={styles.settingsContainer}>
          <div className={styles.sidebar}>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <Link className="menu__link menu__link--active" to="/settings">General</Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__link" to="/settings">Profile</Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__link" to="/settings">Security</Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__link" to="/settings">Notifications</Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__link" to="/settings">API Keys</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.content}>
            <h1>Settings</h1>

            <SettingsSection title="General Preferences">
              <div className="margin-vert--md">
                <label className="text--bold">Theme Mode</label>
                <div className="margin-top--sm">
                  <select className={clsx('button button--secondary', styles.selectField)}>
                    <option>System Default</option>
                    <option>Light</option>
                    <option>Dark</option>
                  </select>
                </div>
              </div>
              <div className="margin-vert--md">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} /> Enable Compact Sidebar
                </label>
              </div>
            </SettingsSection>

            <SettingsSection title="Profile Information">
              <div className="row">
                <div className="col col--6">
                  <label className="text--bold">Display Name</label>
                  <input type="text" className={styles.inputField} placeholder="John Doe" />
                </div>
                <div className="col col--6">
                  <label className="text--bold">Email Address</label>
                  <input type="email" className={styles.inputField} placeholder="john@example.com" />
                </div>
              </div>
            </SettingsSection>

            <div className="text--right margin-top--lg">
              <button className={clsx('button button--primary button--lg', styles.saveButton)}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
