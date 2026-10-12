import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High Arch 5 - SEO Smoke Test',
  description: 'High Arch 5 SEO smoke test application',
  openGraph: {
    title: 'High Arch 5 - SEO Smoke Test',
    description: 'High Arch 5 SEO smoke test application',
    url: 'https://higharch5-seo-smoketest.vercel.app',
    siteName: 'High Arch 5',
    type: 'website',
  },
  alternates: {
    canonical: 'https://higharch5-seo-smoketest.vercel.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
