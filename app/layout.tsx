import './globals.css';

export const metadata = {
  title: 'Portfolio Starter — Creative Developer & Designer',
  description: 'Clean, modern portfolio homepage starter with responsive image grid.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className="bg-neutral-950 text-neutral-100 antialiased selection:bg-neutral-800 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
