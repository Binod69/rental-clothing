import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Rent Clothes',
  description: 'Nepal best clothes renting service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
