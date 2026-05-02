import { getLatestArticles } from '@/lib/getLatestArticles'
import { buildModuleLinkMap } from '@/lib/buildModuleLinkMap'
import type { Language } from '@/lib/content'
import HomePageClient from './HomePageClient'

interface PageProps {
  params: Promise<{ locale: string }>
}

const homePageConfig = {
  video: {
    id: 'GqIzGKXMo9c',
    title: 'All Star Tower Defense X Character Trailer',
  },
  heroLinks: {
    primary: 'https://www.roblox.com/games/17687504411/All-Star-Tower-Defense-X',
    secondary: 'https://discord.com/invite/allstar',
  },
  ctaLinks: {
    community: 'https://discord.com/invite/allstar',
    game: 'https://www.roblox.com/games/17687504411/All-Star-Tower-Defense-X',
  },
  footerLinks: {
    discord: 'https://discord.com/invite/allstar',
    twitter: 'https://x.com/AllStarTowerDef',
    reddit: 'https://www.reddit.com/r/astdx/',
    youtube: 'https://www.youtube.com/watch?v=GqIzGKXMo9c',
  },
  sameAs: [
    'https://www.roblox.com/games/17687504411/All-Star-Tower-Defense-X',
    'https://www.roblox.com/communities/5292947/Top-Down-Games',
    'https://discord.com/invite/allstar',
    'https://x.com/AllStarTowerDef',
    'https://www.reddit.com/r/astdx/',
    'https://www.youtube.com/watch?v=GqIzGKXMo9c',
  ],
} as const

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  // 服务器端获取最新文章数据
  const latestArticles = await getLatestArticles(locale as Language, 30)
  const moduleLinkMap = await buildModuleLinkMap(locale as Language)

  return (
    <HomePageClient
      latestArticles={latestArticles}
      moduleLinkMap={moduleLinkMap}
      locale={locale}
      homePageConfig={homePageConfig}
    />
  )
}
