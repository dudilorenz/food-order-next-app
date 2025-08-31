import './globals.css'

import MainHeaderBackground from '@/components/main-header/main-header-background';


export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground/>
        {children}
      </body>
    </html>
  );
}
