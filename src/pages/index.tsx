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
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.getStartedBtn)}
            to="/docs/intro">
            Get Started
          </Link>
          <button
            className={clsx('button button--outline button--secondary button--lg', styles.searchBtn)}
            onClick={() => {
              const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
              window.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'k',
                ctrlKey: !isMac,
                metaKey: isMac
              }));
            }}>
            Search <span className={styles.searchShortcut}>{typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl+K'}</span>
          </button>
        </div>
        <div className={styles.popularSection}>
          <p>Popular:</p>
          <div className={styles.popularList}>
            <Link to="/docs/intro" className={styles.chip}>Tutorial</Link>
            <Link to="/technical-docs/api-reference" className={styles.chip}>API Reference</Link>
            <Link to="/guides/intro" className={styles.chip}>User Guides</Link>
          </div>
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
