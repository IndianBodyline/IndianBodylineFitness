import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollObserver from '../components/ScrollObserver';
import { CartProvider } from '../context/CartContext';
import './globals.css';

export const metadata = {
  title: 'Indian Bodylines Fitness Equipment',
  description: 'High-quality gym equipment for commercial gyms, home gyms, outdoor parks and fitness centers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ScrollObserver />
          <Header />
          <main className="main-container">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
