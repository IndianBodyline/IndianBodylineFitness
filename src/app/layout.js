import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollObserver from '../components/ScrollObserver';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Preloader from '../components/Preloader';
import { CartProvider } from '../context/CartContext';
import './globals.css';

export const metadata = {
  title: 'Indian Bodylines Fitness Equipment',
  description: 'High-quality gym equipment for commercial gyms, home gyms, outdoor parks and fitness centers.',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Preloader />
          <ScrollObserver />
          <Header />
          <main className="main-container">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  )
}
