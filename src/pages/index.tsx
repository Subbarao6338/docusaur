import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ borderRadius: '12px', padding: '12px 32px', fontWeight: 'bold' }}>
            Get Started
          </Link>
          <button
            className="button button--outline button--secondary button--lg margin-left--md"
            onClick={() => {
              const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
              window.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'k',
                ctrlKey: !isMac,
                metaKey: isMac
              }));
            }}
            style={{ borderRadius: '12px', padding: '12px 24px' }}>
            Search <span style={{ opacity: 0.6, marginLeft: '8px', fontSize: '0.8em' }}>{typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl+K'}</span>
          </button>
        </div>
        <div className="margin-top--lg" style={{ opacity: 0.8 }}>
          <p>Popular: <Link to="/docs/intro" style={{ color: 'inherit', textDecoration: 'underline' }}>Tutorial</Link>, <Link to="/technical-docs/api-reference" style={{ color: 'inherit', textDecoration: 'underline' }}>API Reference</Link>, <Link to="/guides/intro" style={{ color: 'inherit', textDecoration: 'underline' }}>User Guides</Link></p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
