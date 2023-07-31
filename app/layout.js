import Navbar from './components/Navbar/Navbar';
import './globals.css';
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Rent a Cloth',
  description: 'Nepal best clothes renting service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
