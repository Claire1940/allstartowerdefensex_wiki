import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.allstartowerdefensex.wiki'
  const path = '/copyright'
  const title = 'Copyright Notice - All Star Tower Defense X Wiki'
  const description =
    'Copyright and DMCA information for All Star Tower Defense X Wiki, including ownership, fair-use context, and notice process.'

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

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Copyright Notice</h1>
          <p className="text-slate-300 text-lg mb-2">Content ownership, fair-use context, and DMCA process</p>
          <p className="text-slate-400 text-sm">Last Updated: May 2, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Website Content Ownership</h2>
            <p>
              Unless otherwise noted, original editorial content on All Star Tower Defense X Wiki is owned by this site
              and protected by applicable copyright law.
            </p>

            <h2>2. Third-Party IP</h2>
            <p>
              Game names, logos, characters, and in-game assets are property of their respective owners, including Roblox
              and Top Down Games. Their rights remain fully reserved.
            </p>

            <h2>3. Fair-Use Context</h2>
            <p>
              Limited references to gameplay-related materials may be used for commentary, education, and informational
              guidance for players.
            </p>

            <h2>4. DMCA Notice</h2>
            <p>
              If you believe material on this site infringes your copyright, send a notice including:
            </p>
            <ul>
              <li>Your contact details and signature.</li>
              <li>Identification of the copyrighted work.</li>
              <li>Identification of the allegedly infringing material and URL.</li>
              <li>A good-faith statement and accuracy statement under penalty of perjury.</li>
            </ul>

            <h2>5. Counter Notice</h2>
            <p>
              If you believe content was removed in error, you may submit a counter notice with sufficient legal details
              to evaluate restoration.
            </p>

            <h2>6. Contact</h2>
            <p>
              DMCA and copyright contacts:
              <br />
              <strong>General:</strong>{' '}
              <a href="mailto:copyright@allstartowerdefensex.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                copyright@allstartowerdefensex.wiki
              </a>
              <br />
              <strong>DMCA:</strong>{' '}
              <a href="mailto:dmca@allstartowerdefensex.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                dmca@allstartowerdefensex.wiki
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
