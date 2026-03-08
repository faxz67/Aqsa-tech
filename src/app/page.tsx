import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
    title: "Aqsatech in Dubai | #1 Aqsa Tech UAE - Best AC Service, Home Maintenance",
    description: "⭐ Aqsatech in Dubai - UAE's #1 Most Trusted Technical Services Company",
    openGraph: {
        title: "Aqsatech in Dubai | #1 Aqsa Tech UAE - Best AC Service, Home Maintenance",
        description: "⭐ Aqsatech in Dubai - UAE's #1 Most Trusted Technical Services Company",
        url: "https://aqsatech.ae/"
    },
    alternates: {
        canonical: "/"
    }
};

export default function HomePage() {
    return <HomeClient />;
}
