interface Case {
  title: string;
  slug: string;
  date: Date;
  thubmnail: string;
  clientName: string;
  isFeatured?: boolean;
}

export const cases: Case[] = [
  {
    title: 'UnityShop CMS',
    slug: '/cases/unityshop-cms',
    date: new Date('March 1, 2024'),
    thubmnail: '/cases/unityshop-cms/thumbnail.jpg',
    clientName: 'Open Source',
    isFeatured: true,
  }
]