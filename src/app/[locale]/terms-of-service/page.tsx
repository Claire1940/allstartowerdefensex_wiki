import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.allstartowerdefensex.wiki'
  const path = '/terms-of-service'
  const title = 'Terms of Service - All Star Tower Defense X Wiki'
  const description =
    'Read the Terms of Service for All Star Tower Defense X Wiki, including acceptable use, content ownership, and disclaimers.'

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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-300 text-lg mb-2">Rules for using All Star Tower Defense X Wiki</p>
          <p className="text-slate-400 text-sm">Last Updated: May 2, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Acceptance</h2>
            <p>
              By using <strong>allstartowerdefensex.wiki</strong>, you agree to these Terms. If you do not agree, please do
              not use the site.
            </p>

            <h2>2. Service Description</h2>
            <p>
              All Star Tower Defense X Wiki is an unofficial fan-made reference hub for game guides, code tracking,
              unit information, and community resources.
            </p>

            <h2>3. Acceptable Use</h2>
            <ul>
              <li>Do not attempt to disrupt, overload, or abuse the service.</li>
              <li>Do not scrape content at a rate that harms availability.</li>
              <li>Do not impersonate staff or misrepresent affiliation.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Website text, layout, and original editorial content belong to All Star Tower Defense X Wiki unless otherwise
              stated. Game assets and trademarks belong to their respective owners.
            </p>

            <h2>5. No Official Affiliation</h2>
            <p>
              This website is not affiliated with, endorsed by, or sponsored by Roblox, Top Down Games, or any official
              publisher/developer entity.
            </p>

            <h2>6. External Links</h2>
            <p>
              We link to external platforms (Roblox, Discord, Reddit, X/Twitter, YouTube). We are not responsible for
              third-party content, policies, or availability.
            </p>

            <h2>7. Disclaimer</h2>
            <p>
              Information is provided "as is" without warranties of accuracy, completeness, or fitness for a particular
              purpose. Game data can change without notice.
            </p>

            <h2>8. Contact</h2>
            <p>
              Legal inquiries:
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:legal@allstartowerdefensex.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                legal@allstartowerdefensex.wiki
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
