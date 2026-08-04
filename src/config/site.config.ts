/**
 * The one file a practitioner edits.
 *
 * @remarks Everything on the site reads from here: pages, navigation, metadata, structured data, the social card, and the booking links. Replace the values below with your own, swap `public/portrait.jpg` for your photo, and the site is yours. No component edits needed.
 *
 * The only secret this project uses is `ROXYAPI_KEY` in `.env.local`. Nothing secret belongs in this file, which is why the Web3Forms access key (publishable by design) is allowed to live here.
 *
 * Full field reference: `docs/config.md`.
 */

import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Falchi',
  title: 'Tarot Reader and Astrologer',
  tagline:
    'Readings for clarity & direction.',
  siteUrl: 'https://spiritual-practitioner-website-template.vercel.app',

  photo: {
    src: '/portrait.jpg',
    alt: 'Falchi, Tarot Reader and Astrologerr',
  },

  bio: {
    short:
      'Experienced Tarot Reader and Astrologer with specialty in collective and individual readings.',
    long: [
      ' Tarot and astrology, when used in tandem, can give us answers, shed light on current circumstances, and predict our future timelines so that we can move into the future with the insight we need to grow into our highest versions.',
      ' We can use these tools to predict the energy of upcoming seasons of life and gain answers to complex internal questions that the 3D world often does not easily show us. Together we explore the unseen patterns of life that guide us.',
      ' These offered readings can help us make decisions that serve our highest good. ',
    ],
  },

  email: 'ill put an email here later',
  location: 'Miami, FL, USA',

  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'YouTube', href: 'https://youtube.com/' },
    { label: 'Substack', href: 'https://substack.com/' },
  ],

  services: [
    {
      name: 'Astrology Insight Reading: Synastry, Natal, Nodes, Asteriods, and Transits',
      description:
        'Together we will explore future trasits, life directions, and places of power within the natal chart.',
      duration: 'ill decide later the minutes',
      price: 'ill put price later',
    },
    {
      name: 'Tarot Session',
      description:
        'Together we will explore current and future energies to gain insight.',
      duration: 'ill decide later the minutes',
      price: 'ill put price later',
    },
    {
      name: 'Tarot Session and Astrology Insight Combination',
      description:
        'Together we will use date of birth and tarot cards together to gain insight on future life direction and answer any questions you',
      duration: 'ill decide later the minutes',
      price: 'ill put price later',
    },
  ],

  testimonials: [
    {
      quote:
        'Phenomenal... I am now certain that the guidance you need really finds you at the exact time you need it.',
      name: 'Ardeshir.',
      detail: 'Tarot Session',
    },
    {
      quote:
        'Falchi is scary accurate, thank you so much.',
      name: 'Kamila',
      detail: 'Tarot Session and Astrology Insight Reading',
    },
    {
      quote:
        'I never knew astrology could tell us so much- feeling prepared for the future.',
      name: 'Sophie',
      detail: 'Astrology Insight Reading'
      ,
    },
  ],

  stats: [
    { value: '11 years', label: 'Reading professionally' },
    { value: '2,000+', label: 'Sessions given' },
    { value: '16', label: 'Countries' },
  ],

  announcement: 'Booking is open for August.',

  newsletter: {
    label: 'Ill insert a title here later',
    href: 'https://substack.com/',
  },

  faq: [
    {
      question: 'What do I need to bring to a reading?',
      answer:
        'For tarot sessions, just your questions. For Combination and Astrology Insight readings: Your birth date, birth city, and preferably birth time. We can reverse engineer an estimated birth time within two hours of accuracy if birth time is unknown, but it is not ideal.',
    },
    {
      question: 'Which session should I choose?',
      answer:
        'If uncertain, choose the combination reading; It is a safe choice to ensure the fullest picture',
    },
    {
      question: 'What actually happens in the session?',
      answer:
        'We meet on video for the booked time. I have already read your chart before we start, so we spend the session in conversation rather than in silence while I work. You can interrupt, disagree, and ask me to slow down at any point. You get the recording afterwards.',
    },
    {
      question: 'Is this going to predict my future?',
      answer:
        'We will explore the energy and themes predicted for the future, yes. The future is yours to create and free will is yours to explore, nothing is set in stone, but together we can explore future timelines, yes.',
    },
    {
      question: 'Can you tell me about my health, my legal case, or my finances?',
      answer:
        'For heavy themes such as this, the primary advice is to seek a professional from that specific field, but yes we are able to explore the energy of these themes to gain insight so you can continue to make the best possible choices for your life.',
    },
    {
      question: 'What if I need to reschedule?',
      answer:
        'If needed, you can reschedule the booking using the link in your confirmation email, any time up to 24 hours before our session.',
    },
  ],

  /**
   * Your scheduling link. `provider` is `'calcom'` or `'calendly'`; both embed for free.
   *
   * @remarks `url` ships empty on purpose. While it is empty the booking page shows a short setup card instead of a broken embed, so the site is presentable before you have a scheduling account. Paste the public link (for example `https://cal.com/your-name/reading`) and the scheduler appears. Comparison of the two providers: `docs/integrations.md`.
   */
  booking: {
    provider: 'calendy',
    url: 'ill insert a url here later',
  },

  /**
   * Web3Forms access key, which is what makes the contact form work with no backend.
   *
   * @remarks Get one free at web3forms.com; it is emailed to you in a minute. This key is publishable by design (it only routes mail to one inbox), which is why it lives here rather than in an environment variable, and why deploying this site needs exactly one secret. Until you replace the placeholder the form renders but tells the visitor it is not connected.
   */
  contact: {
    web3formsKey: 'ill insert a key here later',
  },

  /**
   * The colour palette. Change this one word and every page, every reading component, and the social card change with it.
   *
   * Four are built in, each with a light and a dark variant, all contrast checked:
   *
   * - `'rosewater'` (default): blush and deep rose with champagne gold. Romantic, tender, warm.
   * - `'eucalyptus'`: soft sage and green with a warm clay accent. Grounded, restorative, calm.
   * - `'kiln'`: terracotta and clay on warm cream. Earthy, handmade, rooted in craft.
   * - `'moonlit'`: deep ink blue and gold. Celestial and candlelit, without a hint of purple.
   *
   * @remarks Editing a colour, or adding a fifth palette, is a bigger job than editing this line: the tokens live in `globals.css` and a test holds them to the contrast rules. Full token tables and that procedure: `docs/design.md`.
   *
   * @example Switch the whole site to the night palette.
   * ```ts
   * palette: 'moonlit',
   * ```
   */
  palette: 'eucalyptus',

  /**
   * Which free readings the site offers. Every one is on by default.
   *
   * @remarks Switch one to `false` and its page returns 404 and its link disappears from the header, the mobile menu, the footer, the home page grid, and the sitemap. There is nothing else to clean up. `cardOfTheDay` is not a page: it is the daily tarot card on the home page. What each reading asks the visitor for: `docs/readings.md`.
   */
  readings: {
    birthChart: true,
    horoscope: false,
    compatibility: true,
    lifePath: false,
    tarot: true,
    humanDesign: false,
    cardOfTheDay: false,
  },
};
