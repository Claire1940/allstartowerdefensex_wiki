import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.allstartowerdefensex.wiki'
  const path = '/privacy-policy'
  const title = 'Privacy Policy - All Star Tower Defense X Wiki'
  const description =
    'Read the All Star Tower Defense X Wiki Privacy Policy, including data usage, cookies, analytics, and contact details.'

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'All Star Tower Defense X Wiki',
      title,
      description,
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          alt: 'All Star Tower Defense X Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg mb-2">How All Star Tower Defense X Wiki handles your data</p>
          <p className="text-slate-400 text-sm">Last Updated: May 2, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Scope</h2>
            <p>
              This Privacy Policy applies to <strong>All Star Tower Defense X Wiki</strong> ("we", "our", or "us") at
              <strong> allstartowerdefensex.wiki</strong>. We are an unofficial fan-made resource website.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li><strong>Usage Data:</strong> pages viewed, browser type, approximate location, and device type.</li>
              <li><strong>Technical Data:</strong> IP address, request headers, and performance signals for security and reliability.</li>
              <li><strong>Preference Data:</strong> language and theme settings saved in your browser.</li>
            </ul>

            <h2>3. How We Use Data</h2>
            <ul>
              <li>Operate and improve wiki content and site performance.</li>
              <li>Understand aggregate traffic and detect abuse.</li>
              <li>Maintain security, stability, and debugging workflows.</li>
            </ul>

            <h2>4. Cookies and Analytics</h2>
            <p>
              We may use cookies and analytics tooling to measure engagement and improve user experience. You can control
              cookies through your browser settings.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              Our pages may link to Roblox, Discord, Reddit, X/Twitter, YouTube, and other third-party websites. Their
              privacy practices are governed by their own policies.
            </p>

            <h2>6. Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal data from children under 13. If you believe a child submitted personal
              data, contact us and we will remove it when possible.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain analytics and log data only as long as needed for operational, security, and legal purposes.
            </p>

            <h2>8. Contact</h2>
            <p>
              Privacy requests and questions:
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@allstartowerdefensex.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                privacy@allstartowerdefensex.wiki
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
