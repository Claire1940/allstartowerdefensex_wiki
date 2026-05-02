import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.allstartowerdefensex.wiki'
  const path = '/about'
  const title = 'About - All Star Tower Defense X Wiki'
  const description =
    'Learn about All Star Tower Defense X Wiki, an unofficial fan-made resource for codes, units, traits, banners, and guides.'

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About All Star Tower Defense X Wiki</h1>
          <p className="text-slate-300 text-lg mb-2">Unofficial fan-made community resource</p>
          <p className="text-slate-400 text-sm">Last Updated: May 2, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>Our Mission</h2>
            <p>
              All Star Tower Defense X Wiki helps players quickly find accurate information about codes, units, traits,
              banners, and game modes. We focus on practical, searchable, and frequently updated reference content.
            </p>

            <h2>What We Cover</h2>
            <ul>
              <li>Code tracking and redemption guidance.</li>
              <li>Unit references and role-focused comparisons.</li>
              <li>Tier list context for different play goals.</li>
              <li>Trait, banner, and progression strategy notes.</li>
            </ul>

            <h2>Community and Sources</h2>
            <p>
              We monitor official and community channels such as Roblox, Discord, X/Twitter, Reddit, and YouTube to
              keep the wiki useful and current.
            </p>

            <h2>Important Disclaimer</h2>
            <p className="text-yellow-400/90">
              <strong>This site is unofficial.</strong> We are not affiliated with, endorsed by, or sponsored by Roblox,
              Top Down Games, or any official publisher/developer organization.
            </p>

            <h2>Contact</h2>
            <p>
              General inquiries:
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@allstartowerdefensex.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                contact@allstartowerdefensex.wiki
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
