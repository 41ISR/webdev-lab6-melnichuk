import './main.scss'
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <header>
        <h1>LexiGuide</h1>
        <p className="tagline">Your comprehensive English dictionary & thesaurus</p>
      </header>

      <section className="hero">
        <h2>Discover the Power of Words</h2>
        <p>Explore definitions, synonyms, antonyms, and meanings with our intuitive dictionary service.</p>
      </section>

      <div className="features">
        <div className="feature-card">
          <h3>Advanced Search</h3>
          <p>Find words using meaning or mask patterns (e.g., "c?t" for cat, cot, cut).</p>
        </div>
        <div className="feature-card">
          <h3>Synonyms & Antonyms</h3>
          <p>Expand your vocabulary by discovering related words and opposites.</p>
        </div>
        <div className="feature-card">
          <h3>Detailed Definitions</h3>
          <p>Clear and concise meanings for every word to enhance your understanding.</p>
        </div>
      </div>

      <section className="cta">
        <h2>Ready to Explore?</h2>
        <p>Start using our powerful search tools to enhance your English skills.</p>
        <Link href={'/word-by-mask'} className="cta-button">Go to Dictionary</Link>
      </section>
    </>
  );
}
