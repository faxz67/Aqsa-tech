import type { Metadata } from 'next';
import '../index.css';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';

export const metadata: Metadata = {
    metadataBase: new URL('https://aqsatech.ae'),
    title: {
        default: 'Aqsa Tech UAE | #1 Technical Services Company in Dubai',
        template: '%s | Aqsa Tech UAE'
    },
    description: 'Aqsa Tech in Dubai - UAE\'s #1 Most Trusted Technical Services Company. Expert AC, Plumbing, Painting, & Maintenance Services Since 2020.',
    keywords: ['Aqsa Tech', 'Aqsatech', 'Technical Services Dubai', 'Maintenance Company UAE', 'AC Repair Dubai', 'Plumbing services UAE', 'Renovation Dubai'],
    authors: [{ name: 'Aqsa Tech' }],
    creator: 'Aqsa Tech',
    publisher: 'Aqsa Tech',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Aqsa Tech UAE | #1 Technical Services Company in Dubai',
        description: 'Aqsa Tech in Dubai - UAE\'s #1 Most Trusted Technical Services Company. Expert AC, Plumbing, Painting, & Maintenance Services Since 2020.',
        url: 'https://aqsatech.ae',
        siteName: 'Aqsa Tech',
        images: [
            {
                url: '/Logo Chatgpt.png',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_AE',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: '/',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" type="image/png" href="/Logo%20Chatgpt.png" />
            </head>
            <body suppressHydrationWarning>
                <LanguageProvider>
                    <div className="min-h-screen bg-white smooth-scroll">
                        <Navbar />
                        {children}
                        <Footer />
                        <FloatingContactButtons />
                    </div>
                </LanguageProvider>
            </body>
        </html>
    );
}
