interface Case {
  title: string;
  slug: string;
  date: Date;
  thumbnail: string;
  clientName: string;
  isFeatured?: boolean;
}

export const cases: Case[] = [
  {
    title: 'UnityShop CMS',
    slug: '/cases/unityshop-cms',
    date: new Date('March 1, 2024'),
    thumbnail: '/cases/unityshop-cms/thumbnail.jpg',
    clientName: 'Open Source',
    isFeatured: true,
  }
]