import Navbar from './components/Navbar';
import Provider from './components/Provider';

import './globals.css';

export const metadata = {
  title: 'Rêveur',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}