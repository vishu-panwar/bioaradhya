import { FormEvent, ReactNode, useMemo, useState } from "react";

type IconName =
  | "search"
  | "bag"
  | "user"
  | "heart"
  | "arrow"
  | "star"
  | "leaf"
  | "shield"
  | "truck"
  | "phone"
  | "check"
  | "instagram"
  | "menu"
  | "close";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bag: <><path d="M6 8h12l1 12H5L6 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    star: <path d="m12 2.8 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2.8Z" />,
    leaf: <><path d="M20 4C11 4 5 9 5 16c0 2 1 4 3 4 7 0 12-7 12-16Z" /><path d="M4 21c3-6 7-9 12-12" /></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.7 3.1 7.8 7.5 9.5 4.4-1.7 7.5-4.8 7.5-9.5V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
    truck: <><path d="M3 6h11v10H3Z" /><path d="M14 10h4l3 3v3h-7Z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const photos = {
  doctor: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=1100&q=90",
  doctorTwo: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?auto=format&fit=crop&w=900&q=85",
  pharmacy: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1000&q=85",
  consult: "https://images.unsplash.com/photo-1576091358783-a212ec293ff3?auto=format&fit=crop&w=1000&q=85",
  bottles: [
    "https://images.unsplash.com/photo-1671493234071-93f7b9a1f937?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1611072965169-e1534f6f300c?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1596086016949-e51ca674912e?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1671492241117-116140bdc1dd?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1550159793-baf23ed9b337?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1560521166-99f8bed834f5?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1550159793-14403c6e5d35?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1781595452212-a1db01b664ce?auto=format&fit=crop&w=600&q=85",
  ],
};

const products = [
  { name: "Arnica Montana 30C", use: "Muscle comfort & recovery", price: "₹165", old: "₹190", image: photos.bottles[0], tag: "Save 13%" },
  { name: "Bio Combination No. 28", use: "Everyday vitality tablets", price: "₹210", old: "₹245", image: photos.bottles[1], tag: "Bestseller" },
  { name: "Nux Vomica 30C", use: "Digestive wellness drops", price: "₹175", old: "₹205", image: photos.bottles[2], tag: "Save 15%" },
  { name: "Hair & Scalp Wellness", use: "Nourishing homeopathic blend", price: "₹349", old: "₹399", image: photos.bottles[3], tag: "Popular" },
  { name: "Calendula Mother Tincture", use: "Skin soothing care", price: "₹225", old: "₹260", image: photos.bottles[4], tag: "Save 14%" },
  { name: "SBL Liv-T Support", use: "Daily liver wellness", price: "₹289", old: "₹340", image: photos.bottles[5], tag: "Save 15%" },
  { name: "Stress & Sleep Drops", use: "Calm nights, brighter days", price: "₹320", old: "₹375", image: photos.bottles[6], tag: "Top rated" },
  { name: "Immune Care Combo", use: "Seasonal wellness support", price: "₹499", old: "₹590", image: photos.bottles[7], tag: "Save 16%" },
];

const productCategories: Record<string, string> = {
  "Arnica Montana 30C": "Pain & Mobility",
  "Bio Combination No. 28": "Everyday Wellness",
  "Nux Vomica 30C": "Digestive Care",
  "Hair & Scalp Wellness": "Skin & Hair",
  "Calendula Mother Tincture": "Skin & Hair",
  "SBL Liv-T Support": "Digestive Care",
  "Stress & Sleep Drops": "Mind & Sleep",
  "Immune Care Combo": "Immunity",
};

const categories = [
  ["Immunity", "leaf"],
  ["Women’s Health", "heart"],
  ["Skin & Hair", "star"],
  ["Digestion", "shield"],
  ["Stress & Sleep", "leaf"],
  ["Children’s Care", "heart"],
] as const;

const faqs = [
  ["How do I choose the right homeopathic medicine?", "Our qualified doctors can help match a remedy to your symptoms, history, and wellness goals. Book a consultation before beginning any new care plan."],
  ["Are your products authentic and quality checked?", "Yes. Every product is sourced from verified manufacturers and checked for batch details, seals, and quality before dispatch."],
  ["Can I upload an existing prescription?", "Yes. Use the prescription option during consultation and our care team will guide you through the next steps."],
  ["How soon will my order be delivered?", "Most orders are dispatched within 24 hours and delivered in 2–5 business days, depending on your location."],
  ["Is homeopathy safe for children?", "Treatment for children should be selected with professional guidance. Our doctors offer dedicated paediatric consultations."],
];

function Button({ children, tone = "primary", onClick, type = "button" }: { children: ReactNode; tone?: "primary" | "lime" | "light" | "outline"; onClick?: () => void; type?: "button" | "submit" }) {
  return <button type={type} onClick={onClick} className={`btn btn-${tone}`}>{children}</button>;
}

function SectionTitle({ title, eyebrow, action }: { title: string; eyebrow?: string; action?: string }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {action && <button className="text-link">{action} <Icon name="arrow" size={15} /></button>}
    </div>
  );
}

function productUrl(name: string) {
  return `#/product?item=${encodeURIComponent(name)}`;
}

function ProductCard({ product }: { product: typeof products[number] }) {
  const [liked, setLiked] = useState(false);
  return (
    <article className="product-card">
      <span className="product-tag">{product.tag}</span>
      <button className={`heart-btn ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)} aria-label={`Save ${product.name}`}>
        <Icon name="heart" size={17} />
      </button>
      <div className="product-image-wrap"><img src={product.image} alt={product.name} /></div>
      <div className="rating"><Icon name="star" size={12} /> 4.8 <span>(120)</span></div>
      <h3>{product.name}</h3>
      <p>{product.use}</p>
      <div className="price-row"><strong>{product.price}</strong><del>{product.old}</del></div>
      <Button onClick={() => { window.location.href = productUrl(product.name); }}>View details <Icon name="arrow" size={15} /></Button>
    </article>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => products.filter((p) => `${p.name} ${p.use}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="site-shell">
      <header className="header">
        <div className="nav container">
          <a className="brand" href="#top" aria-label="Bioaradhya home">
            <span className="brand-mark"><Icon name="leaf" size={22} /></span>
            <span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span>
          </a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#/shop" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#/concerns" onClick={() => setMenuOpen(false)}>Health concerns</a>
            <a href="#/about" onClick={() => setMenuOpen(false)}>About us</a>
            <a href="#/contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="nav-actions">
            <div className="search-box">
              <Icon name="search" size={17} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search remedies..." aria-label="Search remedies" />
            </div>
            <button className="icon-btn" aria-label="Account"><Icon name="user" /></button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Icon name={menuOpen ? "close" : "menu"} /></button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="hero-inner container">
            <div className="hero-copy">
              <span className="hero-kicker"><Icon name="leaf" size={15} /> Gentle healing, thoughtfully delivered</span>
              <h1>Your trusted home for <em>holistic healing.</em></h1>
              <p>Authentic homeopathic remedies and expert doctor consultations, made simple for you and your family.</p>
              <div className="hero-buttons">
                <Button tone="lime" onClick={() => document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" })}>Shop remedies <Icon name="arrow" /></Button>
                <Button tone="outline" onClick={() => document.querySelector("#consult")?.scrollIntoView({ behavior: "smooth" })}>Consult a doctor</Button>
              </div>
              <div className="hero-proof">
                <div className="avatars"><img src={photos.doctorTwo} alt="" /><img src={photos.consult} alt="" /><img src={photos.pharmacy} alt="" /></div>
                <div><div className="stars">★★★★★</div><strong>4.9/5 from 2,000+ happy families</strong></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-arch"><img src={photos.doctor} alt="Friendly Bioaradhya homeopathy doctor" /></div>
              <div className="floating-card card-quality"><span><Icon name="shield" /></span><div><strong>100% authentic</strong><small>Quality assured remedies</small></div></div>
              <div className="floating-card card-consult"><div className="online-dot" /><div><strong>Doctors online</strong><small>Consult in 15 minutes</small></div></div>
            </div>
          </div>
          <div className="trust-strip container">
            <div><Icon name="shield" /><span><strong>Genuine products</strong><small>Verified sourcing</small></span></div>
            <div><Icon name="truck" /><span><strong>Fast delivery</strong><small>Across India</small></span></div>
            <div><Icon name="user" /><span><strong>Expert care</strong><small>Qualified doctors</small></span></div>
            <div><Icon name="leaf" /><span><strong>Gentle wellness</strong><small>Made for every age</small></span></div>
          </div>
        </section>

        <section className="section container" id="concerns">
          <SectionTitle eyebrow="Find your care" title="Shop by health concern" action="View all concerns" />
          <div className="category-grid">
            {categories.map(([name, icon], index) => (
              <button className="category-card" key={name}>
                <span className={`category-icon category-${index}`}><Icon name={icon} size={25} /></span>
                <strong>{name}</strong><small>Explore care</small>
              </button>
            ))}
          </div>
        </section>

        <section className="section soft-section" id="shop">
          <div className="container">
            <SectionTitle eyebrow="Loved by our community" title={query ? `Results for “${query}”` : "Top Selling Products"} action="View all products" />
            {filteredProducts.length ? (
              <div className="product-grid">{filteredProducts.slice(0, 4).map((product) => <ProductCard key={product.name} product={product} />)}</div>
            ) : <div className="empty-state">No remedies found. Try another search.</div>}
          </div>
        </section>

        <section className="promo-section container">
          <article className="promo-card promo-women">
            <div><span className="eyebrow">Women’s wellness</span><h2>Care that grows with you.</h2><p>Personalised support for every stage of womanhood.</p><Button tone="primary">Explore women’s care <Icon name="arrow" /></Button></div>
            <img src="https://images.unsplash.com/photo-1725271765587-43913951f4b7?auto=format&fit=crop&w=700&q=85" alt="Woman enjoying a calm wellness moment" />
          </article>
          <article className="promo-card promo-stress">
            <div><span className="eyebrow">Stress & sleep</span><h2>Restore your natural rhythm.</h2><p>Gentle support to help you feel calm, rested, and renewed.</p><Button tone="light">Find your remedy <Icon name="arrow" /></Button></div>
            <img src="https://images.unsplash.com/photo-1560521166-99f8bed834f5?auto=format&fit=crop&w=700&q=85" alt="Natural homeopathic wellness bottles" />
          </article>
        </section>

        <section className="section container">
          <SectionTitle eyebrow="Freshly added to our shelves" title="New Arrivals" action="Explore new products" />
          <div className="product-grid">{products.slice(4).map((product) => <ProductCard key={product.name} product={product} />)}</div>
        </section>

        <section className="featured-products-section">
          <div className="container">
            <div className="collection-intro">
              <div><span className="eyebrow">Expertly selected</span><h2>Featured Products</h2></div>
              <p>A considered edit of everyday remedies chosen for their quality, versatility, and place in a thoughtful wellness routine.</p>
              <button className="text-link">Discover the edit <Icon name="arrow" size={15} /></button>
            </div>
            <div className="product-grid">
              {[products[0], products[2], products[5], products[7]].map((product) => <ProductCard key={`featured-${product.name}`} product={product} />)}
            </div>
          </div>
        </section>

        <section className="special-products-section">
          <div className="special-orb" />
          <div className="container">
            <div className="special-heading">
              <div><span className="eyebrow">Limited-time wellness offers</span><h2>Special Products</h2><p>Exclusive combinations and customer favourites at thoughtful prices—available while stocks last.</p></div>
              <div className="special-badge"><small>UP TO</small><strong>20%</strong><span>OFF</span></div>
            </div>
            <div className="product-grid special-product-grid">
              {[products[1], products[3], products[4], products[6]].map((product) => <ProductCard key={`special-${product.name}`} product={product} />)}
            </div>
            <div className="special-footnote"><Icon name="shield" size={15} /><span>Authentic products</span><i /><Icon name="truck" size={15} /><span>Fast delivery</span><i /><Icon name="leaf" size={15} /><span>Carefully packed</span></div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="container">
            <SectionTitle eyebrow="Real stories, real care" title="What our customers say" action="Read all stories" />
            <div className="testimonial-grid">
              <article className="quote-card quote-featured">
                <div className="quote-stars">★★★★★</div>
                <blockquote>“I finally found care that listens. My doctor explained everything patiently, and my sleep has improved so much in just a few weeks.”</blockquote>
                <div className="reviewer"><span>NS</span><div><strong>Neha Sharma</strong><small>Verified customer • Mumbai</small></div></div>
              </article>
              <article className="story-image"><img src={photos.consult} alt="Pharmacist helping a customer" /><span>Care you can trust, every step of the way.</span></article>
              <article className="metric-card"><strong>96%</strong><span>would recommend Bioaradhya to family and friends</span><div className="mini-rating">4.9 <span>★★★★★</span></div></article>
            </div>
          </div>
        </section>

        <section className="care-section container" id="consult">
          <article className="doctor-card">
            <div className="doctor-card-copy"><span className="eyebrow">Expert guidance</span><h2>Connect with a homeopathy doctor.</h2><p>Get a private, personalised consultation from the comfort of your home.</p>
              <ul><li><Icon name="check" size={15} /> Qualified practitioners</li><li><Icon name="check" size={15} /> Secure video consultation</li><li><Icon name="check" size={15} /> Thoughtful follow-up care</li></ul>
              <Button tone="lime">Book consultation <Icon name="arrow" /></Button>
            </div>
            <img src={photos.doctorTwo} alt="Bioaradhya homeopathy specialist" />
          </article>
          <article className="app-card">
            <div><span className="eyebrow">Care on the go</span><h2>Wellness, always within reach.</h2><p>Order remedies, talk to your doctor, and track your health journey in one simple app.</p>
              <div className="store-buttons"><button><small>GET IT ON</small><strong>Google Play</strong></button><button><small>Download on the</small><strong>App Store</strong></button></div>
            </div>
            <div className="phone-mock"><div className="phone-top" /><strong>Good morning, Anaya</strong><small>How are you feeling today?</small><div className="health-ring"><span>82</span></div><div className="phone-bar" /><div className="phone-bar short" /></div>
          </article>
        </section>

        <section className="social-section">
          <div className="container">
            <div className="social-head"><SectionTitle eyebrow="Join our community" title="Follow us on Instagram" /><span><Icon name="instagram" /> @bioaradhyahomeopathy</span></div>
            <div className="social-grid">
              {[photos.pharmacy, photos.doctorTwo, photos.bottles[0], photos.consult, photos.bottles[4]].map((image, index) => <div key={image}><img src={image} alt={`Bioaradhya wellness story ${index + 1}`} /><span><Icon name="instagram" /></span></div>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="newsletter">
            <div><span>WE’RE HERE TO HELP</span><h2>Get in touch.</h2><p>Have a question about a remedy, consultation, or order? Our care team is ready to help.</p></div>
            <div className="newsletter-actions"><a className="btn btn-lime" href="#/contact">Contact our team <Icon name="arrow" /></a><a className="footer-phone-link" href="tel:+919876543210"><Icon name="phone" /><span><small>CALL US</small><strong>+91 98765 43210</strong></span></a></div>
          </div>
          <div className="footer-grid">
            <div className="footer-about"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Icon name="leaf" /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a><p>Modern homeopathy rooted in thoughtful care. Helping families feel better, gently and naturally.</p><div className="social-icons"><button><Icon name="instagram" /></button><button>f</button><button>in</button></div></div>
            <div><h3>Shop</h3><a href="#/shop">Best sellers</a><a href="#/concerns">Health concerns</a><a href="#/shop">Mother tinctures</a><a href="#/shop">Wellness combos</a></div>
            <div><h3>Care</h3><a href="#consult">Book consultation</a><a href="#about">Our doctors</a><a href="#about">Upload prescription</a><a href="#about">Care support</a></div>
            <div><h3>Company</h3><a href="#/about">About us</a><a href="/about#philosophy">Our philosophy</a><a href="#about">Journal</a><a href="#/contact">Contact</a></div>
            <div><h3>Contact</h3><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:care@bioaradhya.in">care@bioaradhya.in</a><p>Mon–Sat, 9am–7pm</p></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Bioaradhya Homeopathy. All rights reserved.</span><span>Privacy policy &nbsp; Terms of use &nbsp; Shipping policy</span></div>
        </div>
      </footer>
    </div>
  );
}

function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("General enquiry");
  const [openFaq, setOpenFaq] = useState(0);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell contact-page">
      <header className="header">
        <div className="nav container">
          <a className="brand" href="#/" aria-label="Bioaradhya home">
            <span className="brand-mark"><Icon name="leaf" size={22} /></span>
            <span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span>
          </a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#/shop">Shop</a>
            <a href="#/concerns">Health concerns</a>
            <a href="/#consult">Consult a doctor</a>
            <a href="#/about">About us</a>
            <a className="active-link" href="#/contact">Contact</a>
          </nav>
          <div className="nav-actions contact-nav-actions">
            <a className="header-help" href="tel:+919876543210"><Icon name="phone" size={17} /><span><small>Need help?</small><strong>+91 98765 43210</strong></span></a>
            <button className="icon-btn" aria-label="Account"><Icon name="user" /></button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Icon name={menuOpen ? "close" : "menu"} /></button>
          </div>
        </div>
      </header>

      <main>
        <section className="contact-hero">
          <div className="contact-orb contact-orb-one" />
          <div className="contact-orb contact-orb-two" />
          <div className="container contact-hero-inner">
            <div>
              <span className="hero-kicker"><Icon name="leaf" size={15} /> Thoughtful care begins with a conversation</span>
              <h1>We’re here to help you feel <em>heard.</em></h1>
              <p>Have a question about a remedy, an order, or your care journey? Our friendly wellness team is ready to guide you.</p>
            </div>
            <div className="contact-hero-note">
              <div className="contact-note-icon"><Icon name="phone" size={25} /></div>
              <div><span>Care team availability</span><strong>Monday–Saturday</strong><small>9:00 AM – 7:00 PM IST</small></div>
              <span className="status-pill"><i /> Online now</span>
            </div>
          </div>
        </section>

        {submitted && (
          <section className="success-banner container">
            <span><Icon name="check" size={25} /></span>
            <div><strong>Thank you for reaching out.</strong><p>We’ve received your message. A Bioaradhya care specialist will respond within four working hours.</p></div>
            <button onClick={() => setSubmitted(false)} aria-label="Close message"><Icon name="close" /></button>
          </section>
        )}

        <section className="contact-main container">
          <div className="contact-details">
            <span className="eyebrow">Choose what works for you</span>
            <h2>Connect with our care team.</h2>
            <p className="contact-lead">Real people, thoughtful answers, and no rushed conversations. Reach us through your preferred channel.</p>
            <div className="contact-methods">
              <a className="contact-method" href="tel:+919876543210">
                <span className="method-icon"><Icon name="phone" /></span>
                <span><small>CALL OUR CARE TEAM</small><strong>+91 98765 43210</strong><em>Mon–Sat, 9am–7pm</em></span>
                <Icon name="arrow" />
              </a>
              <a className="contact-method" href="mailto:care@bioaradhya.in">
                <span className="method-icon method-email">@</span>
                <span><small>EMAIL US</small><strong>care@bioaradhya.in</strong><em>Replies within 4 working hours</em></span>
                <Icon name="arrow" />
              </a>
              <a className="contact-method" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                <span className="method-icon method-chat">••</span>
                <span><small>CHAT ON WHATSAPP</small><strong>Start a conversation</strong><em>Quick help for orders and products</em></span>
                <Icon name="arrow" />
              </a>
            </div>
            <div className="contact-assurance">
              <Icon name="shield" size={27} />
              <div><strong>Your privacy matters.</strong><p>Every conversation is confidential and handled by trained care specialists.</p></div>
            </div>
          </div>

          <div className="contact-form-card" id="contact-form">
            <div className="form-heading">
              <span className="eyebrow">Send us a message</span>
              <h2>How can we support you?</h2>
              <p>Share a few details and the right person from our team will get back to you.</p>
            </div>
            <form onSubmit={submitForm} className="contact-form">
              <div className="field-row">
                <label><span>Full name</span><input name="name" placeholder="Your full name" required /></label>
                <label><span>Phone number</span><input name="phone" type="tel" placeholder="+91 00000 00000" required /></label>
              </div>
              <label><span>Email address</span><input name="email" type="email" placeholder="you@example.com" required /></label>
              <fieldset>
                <legend>What can we help you with?</legend>
                <div className="topic-options">
                  {["General enquiry", "My order", "Product guidance", "Doctor consultation"].map((item) => (
                    <button type="button" className={topic === item ? "selected" : ""} onClick={() => setTopic(item)} key={item}>
                      {topic === item && <Icon name="check" size={13} />}{item}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="topic" value={topic} />
              </fieldset>
              <label><span>Your message</span><textarea name="message" placeholder="Tell us how we can help..." rows={5} required /></label>
              <label className="consent-field"><input type="checkbox" required /><span>I agree to be contacted by the Bioaradhya care team regarding this enquiry.</span></label>
              <Button tone="primary" type="submit">Send message <Icon name="arrow" /></Button>
              <small className="form-footnote"><Icon name="shield" size={13} /> Your information is secure and never shared without permission.</small>
            </form>
          </div>
        </section>

        <section className="contact-visit">
          <div className="container visit-grid">
            <div className="visit-copy">
              <span className="eyebrow">Visit Bioaradhya</span>
              <h2>A calm space for better care.</h2>
              <p>Meet our care team, explore authentic remedies, or collect your online order from our flagship wellness centre.</p>
              <div className="address-block">
                <span className="map-pin" />
                <div><strong>Bioaradhya Wellness Centre</strong><p>24, Green Park Main Road<br />New Delhi, Delhi 110016</p><a href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <Icon name="arrow" size={15} /></a></div>
              </div>
              <div className="visit-hours"><span><small>WEEKDAYS</small><strong>9:00am – 7:00pm</strong></span><span><small>SATURDAY</small><strong>10:00am – 5:00pm</strong></span><span><small>SUNDAY</small><strong>Closed</strong></span></div>
            </div>
            <div className="visit-image">
              <img src={photos.pharmacy} alt="Bioaradhya wellness centre and pharmacy" />
              <div><Icon name="leaf" /><span><strong>Come say hello</strong><small>Walk-ins are always welcome</small></span></div>
            </div>
          </div>
        </section>

        <section className="faq-section container contact-page-faq" id="faq">
          <div className="faq-intro"><span className="eyebrow">Need help?</span><h2>Frequently asked questions.</h2><p>Everything you need to know about our remedies, consultations, and delivery.</p><a className="btn btn-outline" href="#contact-form">Talk to our care team</a></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article className={`faq-item ${openFaq === index ? "active" : ""}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>{openFaq === index ? "−" : "+"}</b></button>
                {openFaq === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer className="footer contact-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about"><a className="brand footer-brand" href="#/"><span className="brand-mark"><Icon name="leaf" /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a><p>Modern homeopathy rooted in thoughtful care. Helping families feel better, gently and naturally.</p><div className="social-icons"><button><Icon name="instagram" /></button><button>f</button><button>in</button></div></div>
            <div><h3>Shop</h3><a href="#/shop">Best sellers</a><a href="#/concerns">Health concerns</a><a href="#/shop">Mother tinctures</a><a href="#/shop">Wellness combos</a></div>
            <div><h3>Care</h3><a href="/#consult">Book consultation</a><a href="/#about">Our doctors</a><a href="/#about">Upload prescription</a><a href="#/contact">Care support</a></div>
            <div><h3>Company</h3><a href="#/about">About us</a><a href="/about#philosophy">Our philosophy</a><a href="/#about">Journal</a><a href="#/contact">Contact</a></div>
            <div><h3>Contact</h3><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:care@bioaradhya.in">care@bioaradhya.in</a><p>Mon–Sat, 9am–7pm</p></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Bioaradhya Homeopathy. All rights reserved.</span><span>Privacy policy &nbsp; Terms of use &nbsp; Shipping policy</span></div>
        </div>
      </footer>
    </div>
  );
}

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell about-page">
      <header className="header">
        <div className="nav container">
          <a className="brand" href="#/" aria-label="Bioaradhya home">
            <span className="brand-mark"><Icon name="leaf" size={22} /></span>
            <span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span>
          </a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#/shop">Shop</a>
            <a href="#/concerns">Health concerns</a>
            <a href="/#consult">Consult a doctor</a>
            <a className="active-link" href="#/about">About us</a>
            <a href="#/contact">Contact</a>
          </nav>
          <div className="nav-actions contact-nav-actions">
            <a className="header-help" href="tel:+919876543210"><Icon name="phone" size={17} /><span><small>Need help?</small><strong>+91 98765 43210</strong></span></a>
            <button className="icon-btn" aria-label="Account"><Icon name="user" /></button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Icon name={menuOpen ? "close" : "menu"} /></button>
          </div>
        </div>
      </header>

      <main>
        <section className="about-hero">
          <div className="about-hero-ring ring-one" />
          <div className="about-hero-ring ring-two" />
          <div className="container about-hero-grid">
            <div className="about-hero-copy">
              <span className="hero-kicker"><Icon name="leaf" size={15} /> Our story</span>
              <h1>Care that sees the <em>whole you.</em></h1>
              <p>Bioaradhya was created with a simple belief: healthcare should feel personal, gentle, and deeply human.</p>
              <a className="btn btn-lime" href="#story">Discover our journey <Icon name="arrow" /></a>
            </div>
            <div className="about-hero-collage">
              <div className="collage-main"><img src={photos.consult} alt="Personal guidance at Bioaradhya Homeopathy" /></div>
              <div className="collage-small"><img src={photos.bottles[0]} alt="Authentic homeopathic remedies" /></div>
              <div className="about-year"><span>EST.</span><strong>2021</strong><small>New Delhi, India</small></div>
            </div>
          </div>
          <div className="about-manifesto container"><span>Gentle by nature</span><i /><span>Honest in every detail</span><i /><span>Personal at every step</span></div>
        </section>

        <section className="about-story container" id="story">
          <div className="story-visual">
            <img src={photos.pharmacy} alt="Bioaradhya pharmacy and care team" />
            <div className="story-seal"><Icon name="leaf" size={25} /><strong>Carefully<br />curated</strong></div>
            <div className="story-caption"><span>01</span><p>Authentic remedies. Qualified guidance. Thoughtful follow-up.</p></div>
          </div>
          <div className="story-copy">
            <span className="eyebrow">How it began</span>
            <h2>Born from a desire to make healing feel more human.</h2>
            <p className="story-lead">Too often, people are treated as symptoms rather than individuals. Bioaradhya began as a response to that experience.</p>
            <p>We set out to create a homeopathy platform where every person feels listened to, every recommendation is thoughtful, and every remedy comes with the confidence of genuine sourcing. From a family’s first question to long-term wellness support, we aim to make each interaction warm, clear, and reassuring.</p>
            <p>Today, Bioaradhya brings authentic homeopathic products and qualified practitioners together in one trusted destination—making holistic care easier to understand and access.</p>
            <div className="signature-line"><span>Built with purpose by</span><strong>Team Bioaradhya</strong></div>
          </div>
        </section>

        <section className="purpose-section" id="philosophy">
          <div className="container">
            <div className="purpose-heading">
              <div><span className="eyebrow">Why we exist</span><h2>Modern care. Timeless principles.</h2></div>
              <p>We pair the individualised philosophy of homeopathy with the clarity, convenience, and quality standards today’s families deserve.</p>
            </div>
            <div className="purpose-grid">
              <article className="purpose-card purpose-featured">
                <span className="purpose-number">01</span><div className="purpose-icon"><Icon name="heart" /></div>
                <h3>Listen first</h3><p>Good care starts with understanding the person, not simply naming the symptom.</p>
                <div className="purpose-line" />
              </article>
              <article className="purpose-card">
                <span className="purpose-number">02</span><div className="purpose-icon"><Icon name="shield" /></div>
                <h3>Never compromise</h3><p>From sourcing to service, we hold ourselves to exacting standards of honesty and quality.</p>
                <div className="purpose-line" />
              </article>
              <article className="purpose-card">
                <span className="purpose-number">03</span><div className="purpose-icon"><Icon name="leaf" /></div>
                <h3>Heal gently</h3><p>We believe wellness can be effective without feeling overwhelming, impersonal, or rushed.</p>
                <div className="purpose-line" />
              </article>
              <article className="purpose-card">
                <span className="purpose-number">04</span><div className="purpose-icon"><Icon name="user" /></div>
                <h3>Stay beside you</h3><p>Our relationship does not end at checkout. We support your journey as it evolves.</p>
                <div className="purpose-line" />
              </article>
            </div>
          </div>
        </section>

        <section className="leadership-section container">
          <div className="leadership-intro">
            <span className="eyebrow">Our leadership</span>
            <h2>Vision, grounded in care.</h2>
            <p>Bioaradhya is led by people who believe that building trust is just as important as building a business.</p>
          </div>
          <div className="leader-grid">
            <article className="leader-card leader-primary">
              <div className="leader-portrait">
                <div className="leader-monogram">US</div>
                <span className="leader-leaf"><Icon name="leaf" size={30} /></span>
                <div className="portrait-lines" />
              </div>
              <div className="leader-info">
                <span>FOUNDER & DIRECTOR</span>
                <h3>Mr. Utsav Saini</h3>
                <p>Utsav founded Bioaradhya with a clear vision: to make trusted homeopathic care accessible, transparent, and genuinely centred around people. He leads the company’s strategy, brand, and commitment to an exceptional care experience.</p>
                <blockquote>“Wellness begins when people feel heard, informed, and cared for.”</blockquote>
              </div>
            </article>
            <article className="leader-card">
              <div className="leader-portrait leader-portrait-alt">
                <div className="leader-monogram">MS</div>
                <span className="leader-leaf"><Icon name="shield" size={30} /></span>
                <div className="portrait-lines" />
              </div>
              <div className="leader-info">
                <span>DIRECTOR</span>
                <h3>Mr. Magan Pal Saini</h3>
                <p>Magan Pal brings considered leadership and operational discipline to Bioaradhya. He guides the company’s standards, partnerships, and long-term growth while ensuring every decision remains aligned with its founding values.</p>
                <blockquote>“Trust is earned through consistency, integrity, and care in every detail.”</blockquote>
              </div>
            </article>
          </div>
          <p className="portrait-note">Leadership portraits can be added whenever official photographs are available.</p>
        </section>

        <section className="impact-section">
          <div className="container impact-grid">
            <div className="impact-copy"><span className="eyebrow">Growing with gratitude</span><h2>Small steps. Meaningful impact.</h2><p>Every consultation, order, and conversation helps us build a more thoughtful future for holistic healthcare.</p><a className="btn btn-light" href="#/contact">Connect with us <Icon name="arrow" /></a></div>
            <div className="impact-stats">
              <div><strong>10k<span>+</span></strong><small>families supported</small></div>
              <div><strong>4.9<span>/5</span></strong><small>customer rating</small></div>
              <div><strong>100<span>%</span></strong><small>authentic sourcing</small></div>
              <div><strong>24<span>h</span></strong><small>dispatch commitment</small></div>
            </div>
          </div>
        </section>

        <section className="journey-section container">
          <div className="journey-heading"><span className="eyebrow">The journey so far</span><h2>Building better care, one chapter at a time.</h2></div>
          <div className="timeline">
            <article><span>2021</span><div><strong>The idea takes root</strong><p>Bioaradhya begins with a purpose: make holistic care more personal and trustworthy.</p></div></article>
            <article><span>2022</span><div><strong>Our first families</strong><p>We launch our curated remedy collection and support our first community of customers.</p></div></article>
            <article><span>2024</span><div><strong>Care goes digital</strong><p>Online consultations bring qualified homeopathy guidance into homes across India.</p></div></article>
            <article><span>Today</span><div><strong>A growing wellness community</strong><p>We continue to expand thoughtfully, guided by feedback and grounded in our values.</p></div></article>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-cta-ring" />
          <div className="container"><span className="eyebrow">Your journey, your pace</span><h2>Ready to feel better,<br />gently?</h2><p>Explore trusted remedies or speak with a qualified homeopathy doctor today.</p><div><a className="btn btn-lime" href="#/shop">Explore remedies <Icon name="arrow" /></a><a className="btn btn-outline" href="/#consult">Consult a doctor</a></div></div>
        </section>
      </main>

      <footer className="footer contact-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about"><a className="brand footer-brand" href="#/"><span className="brand-mark"><Icon name="leaf" /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a><p>Modern homeopathy rooted in thoughtful care. Helping families feel better, gently and naturally.</p><div className="social-icons"><button><Icon name="instagram" /></button><button>f</button><button>in</button></div></div>
            <div><h3>Shop</h3><a href="#/shop">Best sellers</a><a href="#/concerns">Health concerns</a><a href="#/shop">Mother tinctures</a><a href="#/shop">Wellness combos</a></div>
            <div><h3>Care</h3><a href="/#consult">Book consultation</a><a href="#/about">Our doctors</a><a href="/#about">Upload prescription</a><a href="#/contact">Care support</a></div>
            <div><h3>Company</h3><a href="#/about">About us</a><a href="/about#philosophy">Our philosophy</a><a href="/#about">Journal</a><a href="#/contact">Contact</a></div>
            <div><h3>Contact</h3><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:care@bioaradhya.in">care@bioaradhya.in</a><p>Mon–Sat, 9am–7pm</p></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Bioaradhya Homeopathy. All rights reserved.</span><span>Privacy policy &nbsp; Terms of use &nbsp; Shipping policy</span></div>
        </div>
      </footer>
    </div>
  );
}

const healthConcerns = [
  { name: "Seasonal immunity", category: "Immunity", copy: "Support for changing weather, recurrent seasonal discomfort, low energy, and everyday resilience.", tags: ["Seasonal care", "Low energy", "Recovery"], icon: "shield" as IconName, tone: "sage" },
  { name: "Allergies & sinus", category: "Immunity", copy: "Personalised care for sneezing, blocked nose, dust sensitivity, and recurring sinus discomfort.", tags: ["Sneezing", "Congestion", "Sensitivity"], icon: "leaf" as IconName, tone: "blue" },
  { name: "Stress & anxiety", category: "Mind & Sleep", copy: "Gentle, individualised support for overwhelm, restlessness, worry, and emotional balance.", tags: ["Overthinking", "Tension", "Calm"], icon: "heart" as IconName, tone: "peach" },
  { name: "Sleep concerns", category: "Mind & Sleep", copy: "Explore care for difficulty falling asleep, interrupted rest, and waking without feeling refreshed.", tags: ["Restless nights", "Light sleep", "Fatigue"], icon: "star" as IconName, tone: "lavender" },
  { name: "Acidity & digestion", category: "Digestion", copy: "Holistic guidance for acidity, heaviness, bloating, irregular digestion, and food-related discomfort.", tags: ["Acidity", "Bloating", "Indigestion"], icon: "leaf" as IconName, tone: "lime" },
  { name: "Hair fall & scalp", category: "Skin & Hair", copy: "Root-cause focused care for hair fall, weak hair, dandruff, and changing scalp health.", tags: ["Hair fall", "Dandruff", "Scalp care"], icon: "leaf" as IconName, tone: "green" },
  { name: "Acne & skin health", category: "Skin & Hair", copy: "Individualised support for breakouts, sensitivity, recurring blemishes, and clearer skin health.", tags: ["Breakouts", "Sensitivity", "Skin balance"], icon: "star" as IconName, tone: "rose" },
  { name: "Menstrual wellness", category: "Women’s Health", copy: "Compassionate care for cycle discomfort, irregularity, mood changes, and hormonal wellbeing.", tags: ["Cycle care", "Cramps", "Hormonal health"], icon: "heart" as IconName, tone: "rose" },
  { name: "PCOS support", category: "Women’s Health", copy: "A whole-person approach to concerns associated with PCOS, guided by qualified practitioners.", tags: ["Cycle health", "Skin", "Lifestyle"], icon: "heart" as IconName, tone: "peach" },
  { name: "Children’s immunity", category: "Children’s Care", copy: "Gentle doctor-guided care designed around your child’s age, constitution, and recurring concerns.", tags: ["Seasonal care", "Appetite", "Growth"], icon: "shield" as IconName, tone: "blue" },
  { name: "Joint & muscle care", category: "Pain & Mobility", copy: "Support for stiffness, everyday aches, muscle recovery, and comfortable movement.", tags: ["Stiffness", "Recovery", "Mobility"], icon: "user" as IconName, tone: "sage" },
  { name: "Everyday vitality", category: "General Wellness", copy: "Build a sustainable wellness routine for energy, resilience, recovery, and overall balance.", tags: ["Energy", "Balance", "Routine"], icon: "leaf" as IconName, tone: "lime" },
];

function ConcernsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All concerns");
  const [concernQuery, setConcernQuery] = useState("");
  const concernCategories = ["All concerns", "Immunity", "Mind & Sleep", "Digestion", "Skin & Hair", "Women’s Health", "Children’s Care", "Pain & Mobility"];
  const visibleConcerns = healthConcerns.filter((concern) =>
    (activeCategory === "All concerns" || concern.category === activeCategory) &&
    `${concern.name} ${concern.category} ${concern.tags.join(" ")}`.toLowerCase().includes(concernQuery.toLowerCase())
  );

  return (
    <div className="site-shell concerns-page">
      <header className="header"><div className="nav container">
        <a className="brand" href="#/"><span className="brand-mark"><Icon name="leaf" size={22} /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}><a href="#/shop">Shop</a><a className="active-link" href="#/concerns">Health concerns</a><a href="/#consult">Consult a doctor</a><a href="#/about">About us</a><a href="#/contact">Contact</a></nav>
        <div className="nav-actions contact-nav-actions"><a className="header-help" href="tel:+919876543210"><Icon name="phone" size={17} /><span><small>Need help?</small><strong>+91 98765 43210</strong></span></a><button className="icon-btn"><Icon name="user" /></button><button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button></div>
      </div></header>

      <main>
        <section className="concerns-hero">
          <div className="concern-orb concern-orb-a" /><div className="concern-orb concern-orb-b" />
          <div className="container concerns-hero-grid">
            <div className="concerns-hero-copy">
              <span className="hero-kicker"><Icon name="heart" size={15} /> Care that begins with understanding</span>
              <h1>Find support for what you’re <em>feeling.</em></h1>
              <p>Explore common health concerns and discover gentle, personalised homeopathic care designed around you—not just your symptoms.</p>
              <div className="concerns-search"><Icon name="search" size={20} /><input value={concernQuery} onChange={(event) => setConcernQuery(event.target.value)} placeholder="Search a symptom or concern..." />{concernQuery && <button onClick={() => setConcernQuery("")}><Icon name="close" size={15} /></button>}</div>
              <div className="popular-searches"><span>Popular:</span>{["Hair fall", "Sleep", "Acidity", "Immunity"].map((item) => <button key={item} onClick={() => setConcernQuery(item)}>{item}</button>)}</div>
            </div>
            <div className="concerns-hero-visual"><div className="concerns-doctor"><img src={photos.doctor} alt="Bioaradhya doctor ready to help" /></div><div className="concern-float float-one"><Icon name="shield" /><span><strong>Whole-person care</strong><small>Thoughtfully personalised</small></span></div><div className="concern-float float-two"><i /><span><strong>Doctors available</strong><small>Online consultations</small></span></div></div>
          </div>
          <div className="concern-trust container"><div><strong>12+</strong><span>health categories</span></div><div><strong>50+</strong><span>common concerns</span></div><div><strong>4.9/5</strong><span>care experience</span></div><div><strong>100%</strong><span>private & secure</span></div></div>
        </section>

        <section className="concern-directory container">
          <div className="directory-heading"><div><span className="eyebrow">Explore care</span><h2>What can we help you with?</h2></div><p>Every person experiences health differently. Choose a concern to understand how personalised homeopathic care may support your wellbeing.</p></div>
          <div className="category-tabs">{concernCategories.map((category) => <button className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)} key={category}>{category}</button>)}</div>
          <div className="directory-meta"><span>{visibleConcerns.length} concerns shown</span>{(activeCategory !== "All concerns" || concernQuery) && <button onClick={() => { setActiveCategory("All concerns"); setConcernQuery(""); }}>Clear filters <Icon name="close" size={12} /></button>}</div>
          {visibleConcerns.length ? <div className="concerns-grid">{visibleConcerns.map((concern, index) => <article className={`concern-card tone-${concern.tone}`} key={concern.name}>
            <div className="concern-card-top"><span><Icon name={concern.icon} size={23} /></span><small>{String(index + 1).padStart(2, "0")}</small></div><em>{concern.category}</em><h3>{concern.name}</h3><p>{concern.copy}</p><div className="concern-tags">{concern.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#/shop">Explore care options <Icon name="arrow" size={16} /></a>
          </article>)}</div> : <div className="concerns-empty"><Icon name="search" size={28} /><h3>We couldn’t find that concern.</h3><p>Try another term or speak with our care team for personal guidance.</p><Button onClick={() => { setConcernQuery(""); setActiveCategory("All concerns"); }}>View all concerns</Button></div>}
        </section>

        <section className="care-pathway"><div className="container">
          <div className="pathway-heading"><span className="eyebrow">Your care, made simple</span><h2>From concern to clarity.</h2><p>No confusion and no rushed decisions—just a thoughtful path designed around you.</p></div>
          <div className="pathway-grid">
            {[
              ["search", "Tell us what’s going on", "Choose your concern or share your symptoms with our care team."],
              ["user", "Speak with a doctor", "Your practitioner listens to your history, patterns, and wellness goals."],
              ["leaf", "Receive your care plan", "Get individualised guidance and carefully selected remedies."],
              ["heart", "Feel supported", "Track progress with thoughtful follow-ups and continued guidance."],
            ].map(([icon, title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><Icon name={icon as IconName} /></div><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div></section>

        <section className="concern-feature container">
          <div className="feature-image"><img src={photos.consult} alt="A thoughtful homeopathy consultation" /><div><span>★★★★★</span><strong>Trusted by 10,000+ families</strong></div></div>
          <div className="feature-copy"><span className="eyebrow">Why personalised care matters</span><h2>The same concern can feel different for everyone.</h2><p className="feature-lead">Two people may describe the same symptom, but experience it for entirely different reasons. That’s why context matters.</p><p>Homeopathic consultations consider your health history, routines, triggers, sleep, stress, and individual patterns—allowing care to reflect your whole experience.</p><ul><li><Icon name="check" /> Time to explain your complete experience</li><li><Icon name="check" /> Guidance from qualified practitioners</li><li><Icon name="check" /> Care plans that evolve with your progress</li></ul><a className="btn btn-primary" href="/#consult">Book a consultation <Icon name="arrow" /></a></div>
        </section>

        <section className="safe-care"><div className="container safe-care-grid"><div><span className="safe-shield"><Icon name="shield" size={36} /></span><span className="eyebrow">Responsible wellness</span><h2>Your safety always comes first.</h2></div><div><p>Homeopathy can complement a thoughtful wellness routine, but it is not a replacement for urgent or essential medical care. We encourage informed choices and professional guidance.</p><div className="safety-points"><span><Icon name="check" /> Never discontinue prescribed medication without medical advice.</span><span><Icon name="check" /> Seek emergency care for severe or rapidly worsening symptoms.</span><span><Icon name="check" /> Children, pregnancy, and chronic conditions require doctor guidance.</span></div></div></div></section>
        <section className="concern-cta"><div className="container"><div><span className="eyebrow">Not sure where to begin?</span><h2>Let’s understand it together.</h2><p>Our care team can help you find the right next step—without pressure or guesswork.</p></div><div><a className="btn btn-lime" href="/#consult">Talk to a doctor <Icon name="arrow" /></a><a className="btn btn-outline" href="#/contact">Message our care team</a></div></div></section>
      </main>

      <footer className="footer contact-footer"><div className="container"><div className="footer-grid"><div className="footer-about"><a className="brand footer-brand" href="#/"><span className="brand-mark"><Icon name="leaf" /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a><p>Modern homeopathy rooted in thoughtful care. Helping families feel better, gently and naturally.</p></div><div><h3>Shop</h3><a href="#/shop">Best sellers</a><a href="#/concerns">Health concerns</a><a href="#/shop">Wellness combos</a></div><div><h3>Care</h3><a href="/#consult">Book consultation</a><a href="#/contact">Care support</a></div><div><h3>Company</h3><a href="#/about">About us</a><a href="#/contact">Contact</a></div><div><h3>Contact</h3><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:care@bioaradhya.in">care@bioaradhya.in</a></div></div><div className="footer-bottom"><span>© 2026 Bioaradhya Homeopathy.</span><span>Privacy policy &nbsp; Terms of use</span></div></div></footer>
    </div>
  );
}

function ProductDetailsPage() {
  const requestedName = new URLSearchParams(window.location.search).get("item");
  const product = products.find((item) => item.name === requestedName) ?? products[0];
  const productIndex = products.indexOf(product);
  const gallery = [product.image, photos.bottles[(productIndex + 2) % photos.bottles.length], photos.bottles[(productIndex + 4) % photos.bottles.length], photos.bottles[(productIndex + 6) % photos.bottles.length]];
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [activeTab, setActiveTab] = useState("Overview");
  const [openProductFaq, setOpenProductFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const relatedProducts = products.filter((item) => item.name !== product.name).slice(0, 4);
  const productFaqs = [
    ["How should I use this product?", "For best results, use only as advised by a qualified homeopathy practitioner. Dosage and frequency may vary according to age, sensitivity, health history, and individual symptoms."],
    ["Can I take it with my current medicines?", "Do not stop or change prescribed medicines without speaking to your treating doctor. Share your current medication list during consultation for personalised guidance."],
    ["How should it be stored?", "Keep the product tightly closed in a cool, dry place away from direct sunlight, strong fragrances, and the reach of children."],
    ["When should I expect results?", "Every person and concern is different. Response time depends on the nature, duration, and intensity of symptoms as well as individual health patterns."],
  ];

  return (
    <div className="site-shell product-page">
      <header className="header"><div className="nav container">
        <a className="brand" href="#/"><span className="brand-mark"><Icon name="leaf" size={22} /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}><a href="#/shop">Shop</a><a href="#/concerns">Health concerns</a><a href="/#consult">Consult a doctor</a><a href="#/about">About us</a><a href="#/contact">Contact</a></nav>
        <div className="nav-actions contact-nav-actions"><a className="header-help" href="tel:+919876543210"><Icon name="phone" size={17} /><span><small>Product guidance</small><strong>+91 98765 43210</strong></span></a><button className="icon-btn"><Icon name="user" /></button><button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button></div>
      </div></header>

      <main>
        <div className="product-breadcrumb container"><a href="#/">Home</a><span>/</span><a href="#/shop">Products</a><span>/</span><strong>{product.name}</strong></div>
        <section className="product-detail container">
          <div className="product-gallery">
            <div className="thumbnail-list">{gallery.map((image, index) => <button className={activeImage === image ? "active" : ""} onClick={() => setActiveImage(image)} key={image}><img src={image} alt={`${product.name} view ${index + 1}`} /></button>)}</div>
            <div className="product-main-image"><span className="product-detail-tag">{product.tag}</span><img src={activeImage} alt={product.name} /><button className="gallery-zoom" aria-label="View larger image"><Icon name="search" size={17} /></button></div>
          </div>
          <div className="product-summary">
            <span className="product-brand-label">BIOARADHYA CURATED WELLNESS</span>
            <div className="detail-rating"><span>★★★★★</span><strong>4.8</strong><a href="#reviews">128 verified reviews</a></div>
            <h1>{product.name}</h1>
            <p className="product-subtitle">{product.use}</p>
            <div className="detail-price"><strong>{product.price}</strong><del>{product.old}</del><span>Inclusive of all taxes</span></div>
            <div className="detail-divider" />
            <div className="product-highlights">
              <div><span><Icon name="leaf" /></span><strong>Gentle formulation</strong><small>Thoughtfully selected for everyday wellness</small></div>
              <div><span><Icon name="shield" /></span><strong>Quality assured</strong><small>Verified source and batch checked</small></div>
              <div><span><Icon name="user" /></span><strong>Expert guidance</strong><small>Doctor support whenever you need it</small></div>
            </div>
            <div className="product-options">
              <span>Available size</span><div><button className="active">30 ml</button><button>100 ml</button></div>
            </div>
            <div className="product-guidance-box">
              <div><Icon name="user" size={22} /><span><strong>Not sure if this is right for you?</strong><small>Speak with a qualified practitioner for personal guidance.</small></span></div>
              <a className="btn btn-primary" href="/#consult">Consult a doctor <Icon name="arrow" size={16} /></a>
            </div>
            <div className="detail-service-row"><span><Icon name="truck" /><strong>Fast delivery</strong><small>2–5 working days</small></span><span><Icon name="shield" /><strong>Authentic product</strong><small>Quality guaranteed</small></span><span><Icon name="phone" /><strong>Care support</strong><small>Mon–Sat</small></span></div>
          </div>
        </section>

        <section className="product-information">
          <div className="container">
            <div className="info-tabs">{["Overview", "Benefits", "How to use", "Ingredients & safety"].map((tab) => <button className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)} key={tab}>{tab}</button>)}</div>
            <div className="info-panel">
              {activeTab === "Overview" && <><div><span className="eyebrow">Product overview</span><h2>Everyday wellness, thoughtfully supported.</h2><p>{product.name} is a carefully sourced homeopathic preparation selected to support {product.use.toLowerCase()}. Its gentle format makes it a considered addition to a practitioner-guided wellness routine.</p><p>Homeopathy is highly individualised. For meaningful guidance, a practitioner considers not only the primary concern but also personal patterns, triggers, routines, and overall wellbeing.</p></div><div className="info-stat-grid"><span><strong>30 ml</strong><small>Net quantity</small></span><span><strong>GMP</strong><small>Quality standard</small></span><span><strong>36 mo</strong><small>Shelf life</small></span><span><strong>India</strong><small>Country of origin</small></span></div></>}
              {activeTab === "Benefits" && <><div><span className="eyebrow">Potential benefits</span><h2>Designed to complement whole-person care.</h2><p>When selected appropriately by a qualified professional, this remedy may support the following areas as part of an individualised care plan.</p></div><div className="benefit-list"><span><Icon name="check" /> Supports everyday balance and comfort</span><span><Icon name="check" /> Complements a personalised wellness routine</span><span><Icon name="check" /> Gentle format for practitioner-guided use</span><span><Icon name="check" /> Easy to include in daily care</span></div></>}
              {activeTab === "How to use" && <><div><span className="eyebrow">Usage guidance</span><h2>Use with clarity and professional advice.</h2><p>Dosage should be determined by a qualified homeopathy practitioner. Avoid self-prescribing for persistent, severe, or recurring symptoms.</p></div><div className="usage-steps"><span><b>01</b><strong>Consult</strong><small>Share your complete health history.</small></span><span><b>02</b><strong>Follow</strong><small>Use only the advised dose and frequency.</small></span><span><b>03</b><strong>Observe</strong><small>Keep track of changes and responses.</small></span><span><b>04</b><strong>Review</strong><small>Follow up before changing your plan.</small></span></div></>}
              {activeTab === "Ingredients & safety" && <><div><span className="eyebrow">What’s inside</span><h2>Clear information. Responsible use.</h2><p>Contains a homeopathic preparation in a standard dispensing base. Exact composition and potency are printed on the product label and may vary by selected format.</p></div><div className="safety-detail"><strong>Important safety information</strong><ul><li>Read the label carefully before use.</li><li>Keep away from direct sunlight and strong odours.</li><li>Keep out of reach of children.</li><li>Consult a doctor during pregnancy, breastfeeding, or for chronic conditions.</li></ul></div></>}
            </div>
          </div>
        </section>

        <section className="product-story container">
          <div className="product-story-image"><img src={photos.bottles[(productIndex + 1) % photos.bottles.length]} alt="Carefully sourced homeopathic preparation" /><span><Icon name="leaf" /> Carefully sourced</span></div>
          <div><span className="eyebrow">The Bioaradhya standard</span><h2>What reaches your home should earn your trust.</h2><p>We work with verified manufacturers and carefully assess product seals, labels, batch details, and storage standards before a product becomes part of our collection.</p><div className="standard-points"><span><b>01</b><strong>Verified sourcing</strong><small>From recognised manufacturers and distributors.</small></span><span><b>02</b><strong>Batch checked</strong><small>Packaging, seals, and details reviewed before dispatch.</small></span><span><b>03</b><strong>Careful handling</strong><small>Stored and packed with product integrity in mind.</small></span></div></div>
        </section>

        <section className="product-reviews" id="reviews"><div className="container">
          <div className="reviews-heading"><div><span className="eyebrow">Verified experiences</span><h2>What customers are saying.</h2></div><div className="review-score"><strong>4.8</strong><span>★★★★★<small>Based on 128 reviews</small></span></div></div>
          <div className="review-grid"><article><span>★★★★★</span><p>“The packaging was excellent and the care team patiently explained how to speak with a doctor before starting.”</p><div><b>AS</b><strong>Ananya S.<small>Verified customer</small></strong></div></article><article><span>★★★★★</span><p>“Authentic product, quick delivery, and a much more thoughtful experience than a typical online pharmacy.”</p><div><b>RK</b><strong>Rahul K.<small>Verified customer</small></strong></div></article><article><span>★★★★★</span><p>“I appreciated the clear information and follow-up support. Everything felt calm, professional, and reliable.”</p><div><b>NM</b><strong>Neha M.<small>Verified customer</small></strong></div></article></div>
        </div></section>

        <section className="product-faq container"><div><span className="eyebrow">Product questions</span><h2>Good to know.</h2><p>Clear answers for safer, more confident wellness choices.</p><a href="#/contact">Still need help? Contact us <Icon name="arrow" size={15} /></a></div><div className="faq-list">{productFaqs.map(([question, answer], index) => <article className="faq-item" key={question}><button onClick={() => setOpenProductFaq(openProductFaq === index ? -1 : index)}><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>{openProductFaq === index ? "−" : "+"}</b></button>{openProductFaq === index && <p>{answer}</p>}</article>)}</div></section>

        <section className="related-products"><div className="container"><SectionTitle eyebrow="Continue exploring" title="You may also like" action="View all products" /><div className="product-grid">{relatedProducts.map((item) => <ProductCard key={item.name} product={item} />)}</div></div></section>
      </main>

      <footer className="footer contact-footer"><div className="container"><div className="footer-grid"><div className="footer-about"><a className="brand footer-brand" href="#/"><span className="brand-mark"><Icon name="leaf" /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a><p>Modern homeopathy rooted in thoughtful care. Helping families feel better, gently and naturally.</p></div><div><h3>Shop</h3><a href="#/shop">Best sellers</a><a href="#/concerns">Health concerns</a></div><div><h3>Care</h3><a href="/#consult">Consult a doctor</a><a href="#/contact">Care support</a></div><div><h3>Company</h3><a href="#/about">About us</a><a href="#/contact">Contact</a></div><div><h3>Contact</h3><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:care@bioaradhya.in">care@bioaradhya.in</a></div></div><div className="footer-bottom"><span>© 2026 Bioaradhya Homeopathy.</span><span>Privacy policy &nbsp; Terms of use</span></div></div></footer>
    </div>
  );
}

function ShopPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopQuery, setShopQuery] = useState("");
  const [activeShopCategory, setActiveShopCategory] = useState("All products");
  const [sortBy, setSortBy] = useState("Featured");
  const shopCategories = ["All products", "Everyday Wellness", "Immunity", "Digestive Care", "Skin & Hair", "Mind & Sleep", "Pain & Mobility"];
  const displayedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const category = productCategories[product.name];
      return (activeShopCategory === "All products" || category === activeShopCategory) &&
        `${product.name} ${product.use} ${category}`.toLowerCase().includes(shopQuery.toLowerCase());
    });
    return [...filtered].sort((a, b) => {
      if (sortBy === "Price: Low to high") return Number(a.price.replace(/\D/g, "")) - Number(b.price.replace(/\D/g, ""));
      if (sortBy === "Price: High to low") return Number(b.price.replace(/\D/g, "")) - Number(a.price.replace(/\D/g, ""));
      if (sortBy === "Name: A–Z") return a.name.localeCompare(b.name);
      return products.indexOf(a) - products.indexOf(b);
    });
  }, [activeShopCategory, shopQuery, sortBy]);

  return (
    <div className="site-shell shop-page">
      <header className="header"><div className="nav container">
        <a className="brand" href="#/"><span className="brand-mark"><Icon name="leaf" size={22} /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}><a className="active-link" href="#/shop">Shop</a><a href="#/concerns">Health concerns</a><a href="/#consult">Consult a doctor</a><a href="#/about">About us</a><a href="#/contact">Contact</a></nav>
        <div className="nav-actions"><div className="search-box"><Icon name="search" size={17} /><input value={shopQuery} onChange={(event) => setShopQuery(event.target.value)} placeholder="Search remedies..." /></div><button className="icon-btn"><Icon name="user" /></button><button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button></div>
      </div></header>

      <main>
        <section className="shop-hero">
          <div className="shop-orb" />
          <div className="container shop-hero-grid">
            <div><span className="hero-kicker"><Icon name="leaf" size={15} /> The Bioaradhya collection</span><h1>Wellness, chosen with <em>care.</em></h1><p>Explore authentic homeopathic remedies and thoughtfully curated wellness support for you and your family.</p><div className="shop-hero-points"><span><Icon name="shield" /> Verified sourcing</span><span><Icon name="user" /> Expert guidance</span><span><Icon name="truck" /> Pan-India delivery</span></div></div>
            <div className="shop-hero-art"><div className="shop-bottle bottle-one"><img src={products[0].image} alt="" /></div><div className="shop-bottle bottle-two"><img src={products[4].image} alt="" /></div><div className="shop-bottle bottle-three"><img src={products[7].image} alt="" /></div><span>CURATED<br />WELLNESS</span></div>
          </div>
        </section>

        <section className="shop-benefits"><div className="container"><div><Icon name="shield" /><span><strong>Authenticity assured</strong><small>Verified products only</small></span></div><div><Icon name="leaf" /><span><strong>Thoughtfully curated</strong><small>Quality-led selection</small></span></div><div><Icon name="user" /><span><strong>Doctor guidance</strong><small>Help choosing care</small></span></div><div><Icon name="truck" /><span><strong>Careful delivery</strong><small>Securely packed</small></span></div></div></section>

        <section className="shop-catalogue container">
          <div className="shop-heading"><div><span className="eyebrow">Explore our collection</span><h2>All Products</h2></div><p>Every product in our collection is selected for quality, authenticity, and its place in a considered wellness journey.</p></div>
          <div className="shop-mobile-search"><Icon name="search" /><input value={shopQuery} onChange={(event) => setShopQuery(event.target.value)} placeholder="Search all products..." /></div>
          <div className="shop-category-tabs">{shopCategories.map((category) => <button className={activeShopCategory === category ? "active" : ""} onClick={() => setActiveShopCategory(category)} key={category}>{category}</button>)}</div>
          <div className="catalogue-toolbar"><span><strong>{displayedProducts.length}</strong> products found</span><div><label htmlFor="sort-products">Sort by</label><select id="sort-products" value={sortBy} onChange={(event) => setSortBy(event.target.value)}><option>Featured</option><option>Price: Low to high</option><option>Price: High to low</option><option>Name: A–Z</option></select></div></div>
          {displayedProducts.length ? <div className="shop-product-grid">{displayedProducts.map((product) => <div className="shop-product-item" key={product.name}><span className="shop-category-label">{productCategories[product.name]}</span><ProductCard product={product} /></div>)}</div> : <div className="shop-empty"><span><Icon name="search" size={28} /></span><h3>No products found</h3><p>Try another search or explore all categories.</p><Button onClick={() => { setShopQuery(""); setActiveShopCategory("All products"); }}>View all products</Button></div>}
        </section>

        <section className="shop-guidance">
          <div className="container shop-guidance-grid"><div className="shop-guidance-image"><img src={photos.doctorTwo} alt="Bioaradhya wellness specialist" /><span><i /> Doctors available today</span></div><div><span className="eyebrow">Need help choosing?</span><h2>You don’t have to figure it out alone.</h2><p>Homeopathy is personal. Speak with a qualified practitioner who can understand your symptoms, history, and wellness goals before suggesting the right next step.</p><ul><li><Icon name="check" /> Private one-to-one consultation</li><li><Icon name="check" /> Personalised care guidance</li><li><Icon name="check" /> Thoughtful follow-up support</li></ul><a className="btn btn-lime" href="/#consult">Consult a doctor <Icon name="arrow" /></a></div></div>
        </section>

        <section className="shop-categories container"><SectionTitle eyebrow="Shop your way" title="Explore by wellness need" action="View health concerns" /><div className="shop-category-cards">{[
          ["Immunity", "Everyday support for resilience", "shield"],
          ["Digestive Care", "Comfort and digestive balance", "leaf"],
          ["Skin & Hair", "Care from root to radiance", "star"],
          ["Mind & Sleep", "Calm days and restful nights", "heart"],
        ].map(([name, copy, icon]) => <button key={name} onClick={() => { setActiveShopCategory(name); document.querySelector(".shop-catalogue")?.scrollIntoView({ behavior: "smooth" }); }}><span><Icon name={icon as IconName} /></span><strong>{name}</strong><small>{copy}</small><Icon name="arrow" /></button>)}</div></section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="newsletter"><div><span>WE’RE HERE TO HELP</span><h2>Get in touch.</h2><p>Need help finding the right product or understanding your care options? Our team is ready to listen.</p></div><div className="newsletter-actions"><a className="btn btn-lime" href="#/contact">Contact our team <Icon name="arrow" /></a><a className="footer-phone-link" href="tel:+919876543210"><Icon name="phone" /><span><small>CALL US</small><strong>+91 98765 43210</strong></span></a></div></div>
          <div className="footer-grid"><div className="footer-about"><a className="brand footer-brand" href="#/"><span className="brand-mark"><Icon name="leaf" /></span><span><strong>bioaradhya</strong><small>HOMEOPATHY</small></span></a><p>Modern homeopathy rooted in thoughtful care. Helping families feel better, gently and naturally.</p><div className="social-icons"><button><Icon name="instagram" /></button><button>f</button><button>in</button></div></div><div><h3>Shop</h3><a href="#/shop">All products</a><a href="#/shop">Best sellers</a><a href="#/concerns">Health concerns</a><a href="#/shop">Wellness combos</a></div><div><h3>Care</h3><a href="/#consult">Book consultation</a><a href="#/about">Our doctors</a><a href="#/contact">Care support</a></div><div><h3>Company</h3><a href="#/about">About us</a><a href="/about#philosophy">Our philosophy</a><a href="#/contact">Contact</a></div><div><h3>Contact</h3><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:care@bioaradhya.in">care@bioaradhya.in</a><p>Mon–Sat, 9am–7pm</p></div></div>
          <div className="footer-bottom"><span>© 2026 Bioaradhya Homeopathy. All rights reserved.</span><span>Privacy policy &nbsp; Terms of use &nbsp; Shipping policy</span></div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.slice(1) || "/";
    return hash;
  });

  useState(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash.slice(1) || "/");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  });

  if (currentPage === "/contact") return <ContactPage />;
  if (currentPage === "/about") return <AboutPage />;
  if (currentPage === "/concerns") return <ConcernsPage />;
  if (currentPage.startsWith("/product")) return <ProductDetailsPage />;
  if (currentPage === "/shop") return <ShopPage />;
  return <HomePage />;
}

export default App;
