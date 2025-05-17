import './globals.css';
import ClientProvider from '@/components/ClientProvider';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'E-Commerce',
  description: 'Gezilen ürünlü e-ticaret sitesi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <ClientProvider>
          <Navbar />
          {children}
          
          </ClientProvider>
      </body>
    </html>
  );
}
