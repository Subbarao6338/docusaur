import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card shadow--md margin-vert--md" style={{ borderRadius: '12px', border: 'none' }}>
      <div className="card__header">
        <h3 style={{ borderBottom: '1px solid var(--m3-outline)', paddingBottom: '8px' }}>{title}</h3>
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
        <div className="row">
          <div className="col col--3">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item"><a className="menu__link menu__link--active">General</a></li>
                <li className="menu__list-item"><a className="menu__link">Profile</a></li>
                <li className="menu__list-item"><a className="menu__link">Security</a></li>
                <li className="menu__list-item"><a className="menu__link">Notifications</a></li>
                <li className="menu__list-item"><a className="menu__link">API Keys</a></li>
              </ul>
            </nav>
          </div>
          <div className="col col--9">
            <h1>Settings</h1>

            <SettingsSection title="General Preferences">
              <div className="margin-vert--md">
                <label className="text--bold">Theme Mode</label>
                <div className="margin-top--sm">
                  <select className="button button--secondary" style={{ width: '200px' }}>
                    <option>System Default</option>
                    <option>Light</option>
                    <option>Dark</option>
                  </select>
                </div>
              </div>
              <div className="margin-vert--md">
                <label>
                  <input type="checkbox" defaultChecked /> Enable Compact Sidebar
                </label>
              </div>
            </SettingsSection>

            <SettingsSection title="Profile Information">
              <div className="row">
                <div className="col col--6">
                  <label className="text--bold">Display Name</label>
                  <input type="text" className="button button--secondary" style={{ width: '100%', textAlign: 'left', cursor: 'text' }} placeholder="John Doe" />
                </div>
                <div className="col col--6">
                  <label className="text--bold">Email Address</label>
                  <input type="email" className="button button--secondary" style={{ width: '100%', textAlign: 'left', cursor: 'text' }} placeholder="john@example.com" />
                </div>
              </div>
            </SettingsSection>

            <div className="text--right margin-top--lg">
              <button className="button button--primary button--lg" style={{ borderRadius: '8px' }}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
