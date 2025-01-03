import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mini App',
  description: 'A Telegram Mini App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
