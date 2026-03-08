(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/StructuredData.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const StructuredData = ({ type, data })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const baseUrl = 'https://aqsatech.ae';
    const socialProfiles = [
        'https://www.facebook.com/share/1CiAnnR5uL/',
        'https://www.instagram.com/aqsa.techs?igsh=bjJld3Y0anhiam1i',
        'https://twitter.com/aqsatech_ae',
        'https://www.linkedin.com/company/aqsatech-ae/'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StructuredData.useEffect": ()=>{
            let structuredData = {};
            switch(type){
                case 'Organization':
                    structuredData = {
                        '@context': 'https://schema.org',
                        '@type': 'HomeAndConstructionBusiness',
                        name: 'Aqsa Tech UAE',
                        alternateName: [
                            'Aqsa Tech',
                            'Aqsa Technical Services',
                            'aqsatech',
                            'aqsatech.ae',
                            'aqsatech in dubai',
                            'aqsatech dubai',
                            'aqsatech uae'
                        ],
                        legalName: 'Aqsa Tech UAE',
                        url: baseUrl,
                        '@id': `${baseUrl}#organization`,
                        logo: {
                            '@type': 'ImageObject',
                            url: `${baseUrl}/Logo Chatgpt.png`,
                            width: 1200,
                            height: 630
                        },
                        image: `${baseUrl}/Logo Chatgpt.png`,
                        description: "Aqsatech in Dubai - UAE's #1 leading technical services company. Expert AC service, home maintenance, renovation, handyman, plumbing, electrical, and fit out services across Dubai, Abu Dhabi, Sharjah. 10,000+ satisfied customers. Same-day service available. Free quotes. Call +971 52 501 0132",
                        foundingDate: '2020',
                        telephone: '+971525010132',
                        email: 'admin@aqsatech.ae',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'United Arab Emirates',
                            addressLocality: 'Dubai',
                            addressRegion: 'Dubai',
                            addressCountry: 'AE'
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 25.2048,
                            longitude: 55.2708
                        },
                        contactPoint: [
                            {
                                '@type': 'ContactPoint',
                                telephone: '+971-52-501-0132',
                                contactType: 'Customer Service',
                                areaServed: [
                                    'AE',
                                    'UAE',
                                    'Dubai',
                                    'Abu Dhabi',
                                    'Sharjah'
                                ],
                                availableLanguage: [
                                    'en',
                                    'English'
                                ],
                                contactOption: '24/7 Emergency Service'
                            },
                            {
                                '@type': 'ContactPoint',
                                email: 'admin@aqsatech.ae',
                                contactType: 'Sales',
                                areaServed: [
                                    'AE',
                                    'UAE'
                                ],
                                availableLanguage: [
                                    'en'
                                ]
                            }
                        ],
                        areaServed: [
                            {
                                '@type': 'City',
                                name: 'Dubai'
                            },
                            {
                                '@type': 'City',
                                name: 'Abu Dhabi'
                            },
                            {
                                '@type': 'City',
                                name: 'Sharjah'
                            },
                            {
                                '@type': 'City',
                                name: 'Ajman'
                            },
                            {
                                '@type': 'City',
                                name: 'Ras Al Khaimah'
                            },
                            {
                                '@type': 'City',
                                name: 'Fujairah'
                            },
                            {
                                '@type': 'City',
                                name: 'Umm Al Quwain'
                            }
                        ],
                        openingHoursSpecification: [
                            {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: [
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday',
                                    'Sunday'
                                ],
                                opens: '00:00',
                                closes: '23:59'
                            }
                        ],
                        priceRange: '$$',
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.9',
                            reviewCount: '10247',
                            bestRating: '5',
                            worstRating: '1'
                        },
                        serviceType: [
                            'AC Installation Dubai',
                            'AC Maintenance UAE',
                            'AC Repair Services',
                            'Home Maintenance UAE',
                            'Renovation Services Dubai',
                            'Handyman Services UAE',
                            'Plumbing Services Dubai',
                            'Electrical Services UAE',
                            'Painting Contractors Dubai',
                            'Office Fit Out UAE',
                            'Carpentry Services',
                            'Tiling Services',
                            'Kitchen Renovation',
                            'Villa Renovation UAE',
                            'Apartment Renovation'
                        ],
                        knowsAbout: [
                            'Aqsatech in Dubai',
                            'Aqsatech Dubai',
                            'Aqsatech UAE',
                            'Technical Services UAE',
                            'Home Maintenance Dubai',
                            'AC Service Dubai',
                            'AC Service UAE',
                            'Renovation Dubai',
                            'Handyman Dubai',
                            'Handyman UAE',
                            'Fit Out UAE',
                            'Property Maintenance Dubai',
                            'HVAC Installation Dubai',
                            'Emergency Plumbing Dubai',
                            '24/7 Electrical Service Dubai',
                            'AC Repair Dubai',
                            'AC Maintenance Dubai',
                            'Villa Renovation Dubai',
                            'Apartment Renovation Dubai',
                            'Office Fit Out Dubai'
                        ],
                        keywords: 'aqsatech in dubai, aqsatech dubai, aqsatech uae, aqsatech.ae, aqsa tech dubai, aqsatech services dubai, aqsatech ac service dubai, aqsatech home maintenance dubai, aqsatech renovation dubai',
                        sameAs: socialProfiles
                    };
                    break;
                case 'LocalBusiness':
                    structuredData = {
                        '@context': 'https://schema.org',
                        '@type': [
                            'LocalBusiness',
                            'HomeAndConstructionBusiness',
                            'ProfessionalService'
                        ],
                        '@id': `${baseUrl}#business`,
                        name: 'Aqsatech in Dubai - Aqsa Tech UAE',
                        alternateName: [
                            'Aqsa Tech',
                            'Aqsa Technical Services',
                            'aqsatech',
                            'aqsatech.ae',
                            'aqsatech in dubai',
                            'aqsatech dubai',
                            'aqsatech uae',
                            'Aqsa Tech Dubai',
                            'Aqsa Tech in Dubai',
                            'AQSATECH'
                        ],
                        legalName: 'Aqsa Tech UAE',
                        slogan: 'Dubai\'s #1 Most Trusted Technical Services Company',
                        foundingDate: '2020-01-01',
                        image: {
                            '@type': 'ImageObject',
                            url: `${baseUrl}/Logo%20Chatgpt.png`,
                            width: 1200,
                            height: 630,
                            caption: 'Aqsatech in Dubai - Aqsa Tech UAE Logo'
                        },
                        url: baseUrl,
                        telephone: '+971525010132',
                        email: 'admin@aqsatech.ae',
                        priceRange: '$$',
                        currenciesAccepted: 'AED',
                        paymentAccepted: 'Cash, Bank Transfer, Credit Card',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Dubai',
                            addressLocality: 'Dubai',
                            addressRegion: 'Dubai',
                            postalCode: '00000',
                            addressCountry: {
                                '@type': 'Country',
                                name: 'United Arab Emirates'
                            }
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 25.2048,
                            longitude: 55.2708,
                            name: 'Dubai, UAE'
                        },
                        openingHoursSpecification: [
                            {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: [
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday',
                                    'Sunday'
                                ],
                                opens: '00:00',
                                closes: '23:59'
                            }
                        ],
                        areaServed: [
                            {
                                '@type': 'City',
                                name: 'Dubai'
                            },
                            {
                                '@type': 'City',
                                name: 'Abu Dhabi'
                            },
                            {
                                '@type': 'City',
                                name: 'Sharjah'
                            },
                            {
                                '@type': 'City',
                                name: 'Ajman'
                            },
                            {
                                '@type': 'Country',
                                name: 'United Arab Emirates'
                            }
                        ],
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Technical Services UAE',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'AC Installation & Maintenance Dubai',
                                        description: 'Professional AC installation, maintenance, and repair services across UAE'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Home Maintenance Services UAE',
                                        description: 'Complete home maintenance solutions for villas and apartments'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Renovation & Remodeling Dubai',
                                        description: 'Villa and apartment renovation services across Dubai, Abu Dhabi, Sharjah'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Handyman Services UAE',
                                        description: 'Professional handyman services for residential and commercial properties'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Plumbing Services Dubai',
                                        description: '24/7 emergency plumbing services, repairs, and installations'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Electrical Services UAE',
                                        description: 'Licensed electrical services, repairs, and installations'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Painting Contractors Dubai',
                                        description: 'Professional interior and exterior painting services'
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Office Fit Out Services UAE',
                                        description: 'Complete office fit out solutions for commercial spaces'
                                    }
                                }
                            ]
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.9',
                            reviewCount: '10247',
                            bestRating: '5',
                            worstRating: '1',
                            ratingExplanation: 'Based on verified customer reviews and ratings'
                        },
                        review: [
                            {
                                '@type': 'Review',
                                reviewRating: {
                                    '@type': 'Rating',
                                    ratingValue: '5',
                                    bestRating: '5'
                                },
                                author: {
                                    '@type': 'Person',
                                    name: 'Ahmed Al Maktoum'
                                },
                                reviewBody: 'Excellent AC service in Dubai! Aqsatech team was professional and fixed my AC same day. Highly recommend aqsatech in dubai for any home maintenance needs.',
                                datePublished: '2025-12-01'
                            },
                            {
                                '@type': 'Review',
                                reviewRating: {
                                    '@type': 'Rating',
                                    ratingValue: '5',
                                    bestRating: '5'
                                },
                                author: {
                                    '@type': 'Person',
                                    name: 'Sarah Johnson'
                                },
                                reviewBody: 'Best renovation company in Dubai! Aqsatech completed our villa renovation on time and within budget. Professional team, quality work.',
                                datePublished: '2025-11-28'
                            }
                        ],
                        description: "Aqsatech in Dubai - UAE's #1 most trusted technical services company since 2020. Expert AC service, home maintenance, renovation, handyman, plumbing, electrical services across Dubai, Abu Dhabi, Sharjah. 10,000+ satisfied customers. Same-day service available. Free quotes. Licensed and insured. Call +971 52 501 0132",
                        keywords: 'aqsatech in dubai, aqsatech dubai, aqsatech uae, aqsatech.ae, aqsa tech dubai, aqsa tech in dubai, aqsatech services dubai, aqsatech company dubai, best technical services dubai',
                        sameAs: socialProfiles,
                        hasMap: 'https://www.google.com/maps/place/Dubai,+United+Arab+Emirates/@25.2048,55.2708,12z',
                        isAccessibleForFree: false,
                        smokingAllowed: false
                    };
                    break;
                case 'Service':
                    if (data) {
                        structuredData = {
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            serviceType: data.serviceType || 'Property Maintenance',
                            provider: {
                                '@type': 'LocalBusiness',
                                name: 'Aqsa Tech - AQSATECH',
                                url: baseUrl
                            },
                            areaServed: {
                                '@type': 'City',
                                name: 'Dubai'
                            },
                            description: data.description || '',
                            name: data.name || '',
                            ...data
                        };
                    }
                    break;
                case 'Article':
                    if (data) {
                        structuredData = {
                            '@context': 'https://schema.org',
                            '@type': 'Article',
                            headline: data.headline || '',
                            description: data.description || '',
                            image: data.image || `${baseUrl}/Logo Chatgpt.png`,
                            datePublished: data.datePublished || '',
                            dateModified: data.dateModified || data.datePublished || '',
                            author: {
                                '@type': 'Organization',
                                name: 'Aqsa Tech - AQSATECH'
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: 'Aqsa Tech - AQSATECH',
                                logo: {
                                    '@type': 'ImageObject',
                                    url: `${baseUrl}/Logo Chatgpt.png`
                                }
                            },
                            mainEntityOfPage: {
                                '@type': 'WebPage',
                                '@id': data.url || `${baseUrl}${pathname}`
                            },
                            ...data
                        };
                    }
                    break;
                case 'BreadcrumbList':
                    if (data && Array.isArray(data.itemListElement)) {
                        structuredData = {
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: data.itemListElement
                        };
                    }
                    break;
            }
            // Remove existing script with this type
            const existingScript = document.getElementById(`structured-data-${type.toLowerCase()}`);
            if (existingScript) {
                existingScript.remove();
            }
            // Add new structured data script
            const script = document.createElement('script');
            script.id = `structured-data-${type.toLowerCase()}`;
            script.type = 'application/ld+json';
            script.text = JSON.stringify(structuredData);
            document.head.appendChild(script);
            return ({
                "StructuredData.useEffect": ()=>{
                    const scriptToRemove = document.getElementById(`structured-data-${type.toLowerCase()}`);
                    if (scriptToRemove) {
                        scriptToRemove.remove();
                    }
                }
            })["StructuredData.useEffect"];
        }
    }["StructuredData.useEffect"], [
        type,
        data,
        pathname,
        baseUrl
    ]);
    return null;
};
_s(StructuredData, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = StructuredData;
const __TURBOPACK__default__export__ = StructuredData;
var _c;
__turbopack_context__.k.register(_c, "StructuredData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        id: 1,
        slug: 'wall-paper-fixing',
        title: 'Wall Paper Fixing',
        description: 'Wallpaper fixing is the process of applying wallpaper to add color, pattern, and texture to interior spaces.',
        longDescription: 'Transform your interiors with professional wallpaper installation. Our team handles surface prep, precise measurements, seamless application, and finishing — ensuring clean lines, bubble-free results, and long-lasting beauty. We work with premium adhesives and modern techniques suitable for UAE climate.',
        image: '/Services Stock images/wallpaper fixing.png',
        tags: [
            'Wallpaper',
            'Installation',
            'Decor'
        ],
        features: [
            'Expert surface preparation & smoothing',
            'Precise pattern matching & alignment',
            'Climate-resistant adhesives for UAE',
            'Bubble-free application technique',
            'Professional trimming & edge sealing'
        ],
        benefits: [
            'Transforms rooms instantly',
            'Hides wall imperfections perfectly',
            'Wide variety of designs & textures',
            'Easy to clean & maintain',
            'Cost-effective wall makeover',
            'Long-lasting in humid conditions'
        ]
    },
    {
        id: 2,
        slug: 'floor-and-wall-tiling',
        title: 'Floor & Wall Tiling',
        description: 'Professional tile installation for floors and walls — durable, elegant, and precision finished.',
        longDescription: 'From ceramic and porcelain to marble and granite, we provide end-to-end tiling services including substrate preparation, leveling, cutting, grouting, and sealing. We deliver precision alignment and superior finish, suitable for high-traffic and wet areas.',
        image: '/Services Stock images/floor and wall tiling.png',
        tags: [
            'Tiling',
            'Flooring',
            'Installation'
        ],
        features: [
            'Laser-level floor & wall alignment',
            'Waterproofing membrane application',
            'Precision tile cutting & fitting',
            'Premium grout & anti-fungal sealant',
            'Expansion joint installation',
            'Multiple material expertise (ceramic, porcelain, marble)'
        ],
        benefits: [
            'Durable, long-lasting surfaces',
            'Waterproof protection for wet areas',
            'Elegant, luxurious appearance',
            'Easy to clean & maintain',
            'Increases property value',
            'Suitable for high-traffic areas'
        ]
    },
    {
        id: 3,
        slug: 'plaster-works',
        title: 'Plaster Works',
        description: 'Decorative and functional plastering — smooth walls, crisp corners, and durable finishes.',
        longDescription: 'We deliver plastering for renovation and new builds, including skim coats, decorative plaster, and repair of cracks and uneven surfaces. The result is a smooth and durable base ready for paint or wallpaper.',
        image: '/Services Stock images/plaster works.png',
        tags: [
            'Plastering',
            'Walls',
            'Finishing'
        ],
        features: [
            'Complete crack & hole repair',
            'Multi-layer skim coating',
            'Sharp corner bead installation',
            'Moisture & heat-resistant plaster',
            'Smooth texture finishing',
            'Decorative plaster options'
        ],
        benefits: [
            'Smooth, flawless wall surfaces',
            'Perfect base for painting or wallpaper',
            'Strengthens wall structure',
            'Covers old damage & imperfections',
            'Long-lasting durability',
            'Professional finish quality'
        ]
    },
    {
        id: 4,
        slug: 'carpentry-flooring',
        title: 'Carpentry & Flooring Contracting',
        description: 'Custom carpentry and flooring services — from installation to repairs and finishing.',
        longDescription: 'Our carpenters and flooring specialists handle hardwood, laminate, vinyl, and engineered floors, along with bespoke carpentry like doors, skirtings, wardrobes, and shelving. Expect precision craftsmanship and durable finishes.',
        image: '/Services Stock images/Carpentry & flooring contracting.png',
        tags: [
            'Carpentry',
            'Flooring',
            'Wood Work'
        ],
        features: [
            'Custom cabinet & wardrobe making',
            'Hardwood, laminate & vinyl flooring',
            'Door installation & frame fitting',
            'Skirting & architrave installation',
            'Moisture barrier underlays',
            'Acoustic sound insulation',
            'Protective wood finishing & sealing'
        ],
        benefits: [
            'Bespoke carpentry tailored to space',
            'Premium wood & flooring materials',
            'Adds significant property value',
            'Durable, long-lasting construction',
            'Professional craftsmanship',
            'Beautiful natural aesthetics'
        ]
    },
    {
        id: 5,
        slug: 'engraving-ornamentation',
        title: 'Engraving & Ornamentation Works',
        description: 'Intricate engraving and ornamental detailing to elevate your interiors and exteriors.',
        longDescription: 'We create bespoke ornamental designs across wood, metal, and stone. Perfect for feature walls, facades, and interior accents that reflect your brand or personal taste.',
        image: '/Services Stock images/Engraving & Ornamentation Works.png',
        tags: [
            'Engraving',
            'Decoration',
            'Ornamental'
        ],
        features: [
            'Custom ornamental design creation',
            'CNC precision engraving',
            'Multi-material capability (wood, metal, stone, glass)',
            'Intricate pattern detailing',
            'Weather-resistant coating',
            '3D relief & texture work',
            'Architectural ornament installation'
        ],
        benefits: [
            'Unique, signature aesthetic appeal',
            'Elevates brand identity & prestige',
            'Creates memorable first impressions',
            'Adds artistic & cultural value',
            'Durable outdoor & indoor use',
            'Customized to your vision'
        ]
    },
    {
        id: 6,
        slug: 'painting-contracting',
        title: 'Painting Contracting',
        description: 'Interior & exterior painting with smooth finishes and durable coatings.',
        longDescription: 'We handle surface prep, priming, and professional paint application using low-VOC, climate-suitable paints. Achieve smooth coverage, crisp edges, and long-lasting color.',
        image: '/Services Stock images/Painting contracting.png',
        tags: [
            'Painting',
            'Interior',
            'Exterior'
        ],
        features: [
            'Complete surface preparation & repair',
            'Multi-coat priming system',
            'Premium low-VOC paint brands',
            'Weatherproof exterior coatings',
            'Anti-mold & anti-fade formulas',
            'Precise masking & edge work',
            'Spray & roller application'
        ],
        benefits: [
            'Fresh, modern appearance',
            'Protects against weather & wear',
            'Healthier indoor air quality',
            'Long-lasting color retention',
            'Quick drying, minimal disruption',
            'Increases property appeal & value'
        ]
    },
    {
        id: 7,
        slug: 'ac-installation',
        title: 'AC Installation',
        description: 'Professional AC installation services for new and replacement units — expert setup for optimal cooling performance.',
        longDescription: 'Our certified HVAC technicians provide complete AC installation services including unit selection, proper sizing, electrical connections, refrigerant charging, ductwork installation, and system testing. We ensure your new AC unit is installed correctly for maximum efficiency and longevity. From split systems to central air conditioning, we handle all installation requirements with precision and care.',
        image: '/Services Stock images/Air-coditioning installation.png',
        tags: [
            'AC Install',
            'Installation',
            'HVAC'
        ],
        features: [
            'Professional AC unit installation (split, window, central)',
            'Load calculation & proper sizing',
            'Complete electrical wiring & connection',
            'Refrigerant charging & leak testing',
            'Ductwork design & installation',
            'Thermostat setup & calibration',
            'System commissioning & testing',
            'Manufacturer warranty registration'
        ],
        benefits: [
            'Optimal cooling from day one',
            'Energy-efficient operation saves bills',
            'Correctly sized for your space',
            'Prevents future breakdowns',
            'Extended AC lifespan',
            'Full manufacturer warranty coverage',
            'Meets UAE safety & quality standards'
        ]
    },
    {
        id: 8,
        slug: 'ac-maintenance',
        title: 'AC Maintenance',
        description: 'Regular AC maintenance and servicing to keep your system running efficiently and prevent costly breakdowns.',
        longDescription: 'Keep your air conditioning system in peak condition with our comprehensive maintenance services. We provide regular servicing including filter replacement, coil cleaning, gas recharging, duct cleaning, system inspection, and preventative maintenance. Our certified technicians ensure your AC runs efficiently, reduces energy costs, and extends the lifespan of your unit. We offer annual maintenance plans for hassle-free, scheduled service.',
        image: '/Services Stock images/Air-coditioning maintenance.png',
        tags: [
            'AC Maintenance',
            'Servicing',
            'Repair'
        ],
        features: [
            'Comprehensive filter cleaning & replacement',
            'Evaporator & condenser coil deep cleaning',
            'Refrigerant gas top-up & leak detection',
            'Drain line clearing & sanitization',
            'Electrical component inspection',
            'Fan motor lubrication & check',
            'Thermostat calibration',
            'Annual & seasonal maintenance contracts'
        ],
        benefits: [
            'Restores peak cooling performance',
            'Reduces electricity consumption by 15-30%',
            'Improves indoor air quality',
            'Prevents costly breakdowns',
            'Extends AC unit lifespan by years',
            'Regular maintenance saves money',
            'Priority service for contract customers'
        ]
    },
    {
        id: 9,
        slug: 'ventilation-air-filtration',
        title: 'Ventilations & Air Filtration Systems',
        description: 'Clean, healthy indoor air with professional ventilation and filtration solutions.',
        longDescription: 'We design and install ventilation systems, HEPA filtration, and air exchanges for homes and commercial spaces, improving IAQ and comfort.',
        image: '/Services Stock images/Ventilation & air-filtration system installation.png',
        tags: [
            'Ventilation',
            'Air Filters',
            'HVAC'
        ],
        features: [
            'HEPA & MERV filtration systems',
            'Energy recovery ventilators (ERV)',
            'Balanced fresh air supply & exhaust',
            'Quiet operation technology',
            'UV air purification options',
            'Humidity control integration',
            'Smart ventilation controls'
        ],
        benefits: [
            'Significantly healthier indoor air',
            'Removes 99% of allergens & pollutants',
            'Eliminates odors & VOCs',
            'Reduces energy costs',
            'Prevents mold & moisture buildup',
            'Better for respiratory health',
            'Complies with green building standards'
        ]
    },
    {
        id: 10,
        slug: 'electromechanical-equipment',
        title: 'Electromechanical Equipment Installation',
        description: 'Installation and maintenance for electromechanical equipment and systems.',
        longDescription: 'Expert install and service for pumps, motors, panels, and controls. We ensure safe wiring, proper calibration, and preventative maintenance schedules.',
        image: '/Services Stock images/Electromechanical equipment installation & maintenance.png',
        tags: [
            'Installation',
            'Maintenance',
            'Equipment'
        ],
        features: [
            'Complete electromechanical system installation',
            'Certified electrical wiring & connections',
            'Motor, pump & control panel setup',
            'Load testing & commissioning',
            'Preventive maintenance scheduling',
            'Genuine OEM replacement parts',
            'Emergency repair services'
        ],
        benefits: [
            'Maximum operational reliability',
            'Minimized equipment downtime',
            'Extended machinery lifespan',
            'Reduced repair costs',
            'Safety compliance assured',
            'Optimal system performance',
            'Expert technical support'
        ]
    },
    {
        id: 11,
        slug: 'false-ceiling-partitions',
        title: 'False Ceiling & Light Partition Installation',
        description: 'Secondary ceilings and partitions for aesthetics, acoustics, and space planning.',
        longDescription: 'We install gypsum false ceilings and light partitions with integrated lighting, insulation, and access panels — clean, modular, and functional.',
        image: '/Services Stock images/False ceiling & light-partition installation.png',
        tags: [
            'False Ceiling',
            'Partitions',
            'Interior'
        ],
        features: [
            'Gypsum board false ceiling installation',
            'Metal grid & suspension systems',
            'Acoustic ceiling tiles & panels',
            'Integrated lighting solutions',
            'Fire-rated & moisture-resistant options',
            'Access panels for maintenance',
            'Glass & gypsum partition walls',
            'Quick modular installation'
        ],
        benefits: [
            'Modern, professional interior look',
            'Conceals wiring, pipes & ductwork',
            'Improves room acoustics & sound control',
            'Flexible space division',
            'Energy efficiency with insulation',
            'Easy access to services above',
            'Creates defined work & living areas'
        ]
    },
    {
        id: 12,
        slug: 'plumbing-sanitary',
        title: 'Plumbing & Sanitary Contracting',
        description: 'Installation, maintenance, and repair of plumbing and sanitary systems.',
        longDescription: 'Certified plumbers for leaks, pipe installs, water heaters, fixtures, and drainage. We use quality materials and reliable methods for UAE standards.',
        image: '/Services Stock images/Plumbing & sanitary contracting.png',
        tags: [
            'Plumbing',
            'Sanitary',
            'Installation'
        ],
        features: [
            'Complete plumbing system installation',
            'Advanced leak detection & repair',
            'Premium pipe & fixture materials',
            'Water heater installation & repair',
            'Drainage system & sewage work',
            'Bathroom & kitchen fixture fitting',
            'Emergency plumbing services',
            'Water pressure optimization'
        ],
        benefits: [
            'Reliable, leak-free plumbing',
            'Clean, hygienic sanitary systems',
            'Reduces water waste & bills',
            'Long-lasting installations',
            'Prevents water damage',
            'Fast, professional service',
            'Complies with UAE plumbing codes'
        ]
    },
    {
        id: 13,
        slug: 'office-fit-out',
        title: 'Office Fit Out Services',
        description: 'Complete office design and fit-out solutions — from planning to execution for modern workspaces.',
        longDescription: 'We deliver end-to-end office fit-out services including space planning, partitioning, electrical and data cabling, lighting, flooring, furniture installation, and branding. Transform your workspace into a productive, professional environment that reflects your brand. Our team works with you from concept to completion, ensuring every detail meets your business needs and budget.',
        image: '/Services Stock images/Office Fit Out Services.png',
        tags: [
            'Office',
            'Fit Out',
            'Interior Design'
        ],
        features: [
            'Complete space planning & design',
            'CAD drawings & 3D visualization',
            'Partition walls & meeting room construction',
            'Electrical, data & network cabling',
            'LED lighting & smart controls',
            'Flooring (carpet, vinyl, tiles)',
            'False ceiling & HVAC integration',
            'Furniture supply & installation',
            'Branded signage & graphics',
            'Project management & coordination'
        ],
        benefits: [
            'Professional, modern workspace',
            'Boosts employee productivity & morale',
            'Strong brand presence & identity',
            'Fully functional from day one',
            'Single point of contact',
            'Cost-effective turnkey solution',
            'Meets building & safety regulations',
            'Minimizes business disruption'
        ]
    },
    {
        id: 14,
        slug: 'water-tank-cleaning',
        title: 'Water Tank Cleaning & Maintenance',
        description: 'Professional water tank cleaning and sanitization for safe, clean water supply.',
        longDescription: 'Regular water tank cleaning is essential for health and hygiene. Our certified team provides thorough cleaning, sanitization, inspection, and maintenance of residential and commercial water tanks. We ensure compliance with UAE health standards and prevent contamination. Our service includes complete draining, scrubbing, disinfection, and refilling with proper water quality testing.',
        image: '/Services Stock images/Water Tank Cleaning & Maintenance.png',
        tags: [
            'Water Tank',
            'Cleaning',
            'Maintenance'
        ],
        features: [
            'Complete water tank draining',
            'Manual scrubbing & deep cleaning',
            'High-pressure jet washing',
            'Disinfection with approved chemicals',
            'Sediment & sludge removal',
            'Tank structure inspection',
            'Leak detection & repair',
            'Water quality testing (TDS, pH, bacteria)',
            'Municipality compliance certification',
            'Annual maintenance contracts'
        ],
        benefits: [
            'Safe, clean drinking water',
            'Protects family health',
            'Prevents waterborne diseases',
            'Removes harmful bacteria & contaminants',
            'Meets UAE health regulations',
            'Extends tank lifespan',
            'Official cleaning certificate issued',
            'Peace of mind for tenants & owners'
        ]
    },
    {
        id: 15,
        slug: 'kitchen-renovation',
        title: 'Kitchen Renovation',
        description: 'Complete kitchen renovation services — design, installation, and finishing for modern kitchens.',
        longDescription: 'Transform your kitchen with our comprehensive renovation services. We handle everything from design consultation, cabinet installation, countertop fitting, plumbing and electrical work, tiling, painting, and appliance installation. Create a functional, beautiful kitchen that suits your lifestyle. Our expert team ensures quality craftsmanship, timely completion, and attention to every detail.',
        image: '/Services Stock images/Kitchen Renovation.png',
        tags: [
            'Kitchen',
            'Renovation',
            'Design'
        ],
        features: [
            'Kitchen design consultation & 3D rendering',
            'Custom cabinet & storage solutions',
            'Countertop installation (granite, quartz, marble)',
            'Plumbing relocation & upgrades',
            'Electrical wiring & socket installation',
            'Floor & wall tiling work',
            'Lighting design & installation',
            'Appliance fitting & integration',
            'Painting & finishing touches',
            'Complete project coordination'
        ],
        benefits: [
            'Beautiful, modern kitchen',
            'Maximized storage & functionality',
            'Increases property value significantly',
            'Better cooking workflow & efficiency',
            'Energy-efficient appliances & lighting',
            'Quality materials & craftsmanship',
            'Turnkey solution with single contractor',
            'Transforms heart of the home'
        ]
    },
    {
        id: 16,
        slug: 'renovation-remodeling',
        title: 'Renovation & Remodeling',
        description: 'Complete home and property renovation services — transform your space with professional remodeling solutions.',
        longDescription: 'Comprehensive renovation and remodeling services for residential and commercial properties. We handle full-scale renovations including structural changes, room additions, layout redesigns, and complete property transformations. Our expert team manages every aspect from planning and design to execution and finishing, ensuring your vision becomes reality with quality craftsmanship and attention to detail.',
        image: '/Services Stock images/Renovation & Remodeling.png',
        tags: [
            'Renovation',
            'Remodeling',
            'Interior Design'
        ],
        features: [
            'Full-scale property renovation',
            'Structural alterations & extensions',
            'Space planning & layout redesign',
            'Interior remodeling (all rooms)',
            'Exterior façade upgrades',
            'Complete MEP system upgrades',
            'Flooring, tiling & finishing',
            'Painting & decoration',
            'Material sourcing & procurement',
            'End-to-end project management',
            'Municipal approvals assistance'
        ],
        benefits: [
            'Complete property transformation',
            'Dramatically increases property value',
            'Modern, functional living spaces',
            'Customized to your lifestyle',
            'One contractor for entire project',
            'Quality materials & workmanship',
            'Timely completion with milestones',
            'Cost transparency & control'
        ]
    },
    {
        id: 17,
        slug: 'ac-dust-cleaning',
        title: 'AC Dust Cleaning',
        description: 'Specialized AC dust cleaning service to remove built-up dust from indoor units, coils, and vents for cleaner, healthier air.',
        longDescription: 'Over time, dust and fine particles accumulate inside your AC indoor units, coils, grilles, and vents – even when the system is cooling properly. Our AC Dust Cleaning service focuses specifically on deep cleaning these components to improve air quality, reduce allergens, and enhance cooling efficiency. We carefully disassemble accessible parts, use professional tools to remove dust and debris, and reassemble everything with a clean, fresh finish. Ideal between full AC maintenance visits or when you notice dust around vents and grilles.',
        image: '/Services Stock images/AC Dust Cleaning.png',
        tags: [
            'AC Dust Cleaning',
            'Deep Cleaning',
            'Air Quality'
        ],
        features: [
            'Indoor unit dust removal',
            'Air vent & grille deep cleaning',
            'Filter dust extraction',
            'Blower fan cleaning',
            'Accessible coil surface cleaning',
            'Safe cleaning without disassembly',
            'Antibacterial spray treatment (optional)',
            'Drain tray inspection'
        ],
        benefits: [
            'Fresher, cleaner air circulation',
            'Removes visible dust & allergens',
            'Improves airflow from vents',
            'Reduces allergy symptoms',
            'Better cooling distribution',
            'Quick service with minimal disruption',
            'Cost-effective air quality improvement',
            'Ideal between full maintenance'
        ]
    },
    {
        id: 18,
        slug: 'ac-coil-cleaning',
        title: 'AC Coil Cleaning',
        description: 'Professional AC coil cleaning to restore cooling performance, reduce energy consumption, and prevent system strain.',
        longDescription: 'Dirty evaporator and condenser coils force your AC to work harder, wasting energy and reducing cooling capacity. Our AC Coil Cleaning service focuses on deep cleaning these coils using safe, AC‑approved chemicals and rinsing methods. We carefully access the coils, remove dust, grease, and microbial buildup, and verify proper drainage and operation afterwards. This service is ideal when you notice weak cooling, higher electricity bills, or visible dirt on the coil surfaces.',
        image: '/Services Stock images/AC Coil Cleaning.png',
        tags: [
            'AC Coil Cleaning',
            'Performance',
            'Energy Saving'
        ],
        features: [
            'Deep coil cleaning (evaporator & condenser)',
            'Professional AC-safe chemical foam',
            'High-pressure water rinse',
            'Fin straightening & debris removal',
            'Drain line flushing',
            'Corrosion & damage inspection',
            'Airflow testing post-cleaning',
            'Before/after performance check'
        ],
        benefits: [
            'Restores full cooling capacity',
            'Reduces electricity bills by 20-40%',
            'Less strain on compressor',
            'Prevents premature AC failure',
            'Extends unit lifespan significantly',
            'Faster, more efficient cooling',
            'Eliminates musty odors',
            'Best for weak cooling issues'
        ]
    },
    {
        id: 19,
        slug: 'handyman-services',
        title: 'Handyman Services',
        description: 'Reliable handyman services for everyday fixes, minor installations, and small projects around your home or office.',
        longDescription: 'Our handyman team takes care of all the “small but important” jobs that keep your property running smoothly. From fixing door hinges, mounting TVs and shelves, hanging curtains and frames, to small carpentry, silicone replacement, grout touch-ups, and minor repairs, we handle it quickly and professionally. Perfect when you need a trusted team for punch-list items or move-in / move-out fixes without calling multiple contractors.',
        image: '/Services Stock images/Handyman Services.png',
        tags: [
            'Handyman',
            'Repairs',
            'Small Jobs'
        ],
        features: [
            'TV & shelf mounting',
            'Curtain rod & blind installation',
            'Picture & mirror hanging',
            'Door & lock repairs',
            'Handle & hinge adjustments',
            'Silicone & caulking work',
            'Grout touch-ups & repairs',
            'Minor carpentry fixes',
            'Furniture assembly',
            'Light switch & socket replacement'
        ],
        benefits: [
            'One handyman for multiple tasks',
            'Professional, neat finish',
            'Saves time & effort vs DIY',
            'No need for multiple contractors',
            'Perfect for small repair lists',
            'Ideal for move-in/move-out',
            'Quick response & completion',
            'Affordable flat-rate pricing'
        ]
    },
    {
        id: 20,
        slug: 'apartment-renovation-remodeling',
        title: 'Apartment Renovation & Remodeling',
        description: 'Complete apartment renovation and remodeling solutions tailored to modern city living in the UAE.',
        longDescription: 'Our Apartment Renovation & Remodeling service focuses on transforming apartments into modern, functional, and stylish spaces. We handle layout improvements, new kitchens and bathrooms, flooring, painting, lighting upgrades, wardrobes, and storage optimization – all while respecting building rules and neighbors. From partial upgrades to full remodels, we manage design, approvals, materials, and execution so your apartment is upgraded with minimal stress.',
        image: '/Services Stock images/Apartment Renovation & Remodeling.png',
        tags: [
            'Apartment',
            'Renovation',
            'Remodeling'
        ],
        features: [
            'Apartment-specific space planning',
            'Kitchen renovation & upgrade',
            'Bathroom remodeling',
            'Living & bedroom transformation',
            'Flooring replacement (tiles, vinyl, laminate)',
            'Interior painting & decoration',
            'Lighting & electrical upgrades',
            'Built-in wardrobes & storage',
            'Balcony improvement',
            'Building management coordination',
            'Neighbor-friendly work schedule'
        ],
        benefits: [
            'Modern, stylish apartment',
            'Maximizes limited space efficiently',
            'Increases rental & resale value',
            'Customized to urban living needs',
            'Respects building rules & neighbors',
            'Turnkey renovation solution',
            'Minimal stress & hassle',
            'Perfect for investment properties'
        ]
    },
    {
        id: 21,
        slug: 'villa-renovation-remodeling',
        title: 'Villa Renovation & Remodeling',
        description: 'Premium villa renovation and remodeling services for complete interior and exterior transformations.',
        longDescription: 'For villas, we provide comprehensive renovation and remodeling – from façade upgrades and landscaping to full interior redesign. Our team can re-plan room layouts, upgrade kitchens and bathrooms, add majlis or family areas, improve lighting and MEP systems, and refresh all finishes. We combine structural, architectural, and interior work under one coordinated team, delivering a villa that feels brand new while respecting your tastes and lifestyle.',
        image: '/Services Stock images/Villa Renovation & Remodeling.png',
        tags: [
            'Villa',
            'Renovation',
            'Remodeling'
        ],
        features: [
            'Complete villa interior renovation',
            'Exterior façade & landscaping upgrade',
            'Kitchen & bathroom luxury remodeling',
            'Majlis & reception area design',
            'Master bedroom & family room renovation',
            'Structural modifications & extensions',
            'Complete MEP system upgrade',
            'Smart home integration',
            'Swimming pool & outdoor areas',
            'High-end material selection',
            'Full architectural & design services'
        ],
        benefits: [
            'Luxury villa transformation',
            'Massive increase in property value',
            'Tailored to your lifestyle & taste',
            'Premium materials & finishes',
            'Modern, smart home technology',
            'Single contractor for entire villa',
            'Comprehensive project management',
            'Creates your dream home'
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTranslatedServices.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslatedServices",
    ()=>useTranslatedServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useTranslatedServices = ()=>{
    _s();
    const translatedServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTranslatedServices.useMemo[translatedServices]": ()=>{
            // Always return English services since we only have EN now
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"];
        }
    }["useTranslatedServices.useMemo[translatedServices]"], []);
    return {
        services: translatedServices
    };
};
_s(useTranslatedServices, "3nyLkXKsl+QpRkeAJ9aztcKaLkU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ProButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const sizeClasses = {
    sm: 'text-xs px-4 py-2 rounded-full',
    md: 'text-sm px-6 py-2.5 rounded-full',
    lg: 'text-base px-8 py-3.5 rounded-full'
};
const variantClasses = {
    primary: 'text-[#174A67] bg-white border-2 border-transparent bg-clip-padding shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
    secondary: 'text-[#174A67] bg-white border-2 border-transparent bg-clip-padding shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
    outline: 'text-[#174A67] bg-white border-2 border-transparent bg-clip-padding shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
    dark: 'text-gray-900 bg-white border-2 border-transparent bg-clip-padding shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
};
function ProButton(props) {
    const { children, variant = 'dark', size = 'md', fullWidth, leftIcon, rightIcon, className = '', as = 'button', ...rest } = props;
    // Determine text color based on variant
    const textColorClass = variant === 'dark' ? 'text-gray-900' : 'text-[#174A67]';
    const base = `relative inline-flex items-center justify-center select-none no-underline font-semibold tracking-tight ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} transition-all duration-300 ease-out group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden`;
    const inner = `relative flex items-center gap-2`;
    // Unique "cut" shape using clip-path
    // clip-path handled purely via CSS class now
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#7DD3FC] via-[#45C0B0] to-[#3B82F6] opacity-100 -z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ProButton.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "absolute inset-[2px] rounded-full bg-white -z-[1]"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ProButton.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${inner} relative z-10`,
                children: [
                    leftIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex items-center -ml-0.5 pro-btn-icon-left ${textColorClass}`,
                        children: leftIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProButton.tsx",
                        lineNumber: 87,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `pro-btn-text ${textColorClass} font-semibold`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProButton.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    rightIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex items-center -mr-0.5 pro-btn-icon-right ${textColorClass}`,
                        children: rightIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProButton.tsx",
                        lineNumber: 89,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ProButton.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    const motionProps = {
        whileHover: {
            scale: 1.02,
            y: -2,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.5
            }
        },
        whileTap: {
            scale: 0.98,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 600,
                damping: 35,
                mass: 0.4
            }
        },
        initial: {
            opacity: 0,
            y: 8
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.2,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    };
    if (as === 'a') {
        const { href, onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...anchorRest } = rest;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            ...motionProps,
            ...anchorRest,
            href: href,
            className: `${base} ${className}`,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ProButton.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this);
    }
    const { onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...buttonRest } = rest;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        ...motionProps,
        ...buttonRest,
        className: `${base} ${className}`,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ProButton.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c = ProButton;
var _c;
__turbopack_context__.k.register(_c, "ProButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SEOHead.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SEOHead = ({ title, description, keywords, image = 'https://aqsatech.ae/Logo Chatgpt.png', type = 'website', noindex = false })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const baseUrl = 'https://aqsatech.ae';
    const currentUrl = `${baseUrl}${pathname}`;
    // Default SEO values - Use translated values
    const defaultTitle = t('seo.title');
    const defaultDescription = t('seo.description');
    const defaultKeywords = 'aqsatech in dubai, aqsatech dubai, aqsatech uae, aqsatech.ae, aqsa tech dubai, aqsa tech uae, aqsatech services dubai, aqsatech contact dubai, aqsatech phone dubai, aqsatech ac service dubai, aqsatech home maintenance dubai, aqsatech renovation dubai, aqsatech handyman dubai, aqsatech plumbing dubai, aqsatech electrical dubai, aqsatech painting dubai, aqsatech tiling dubai, aqsatech office fit out dubai, aqsatech villa renovation dubai, aqsatech apartment renovation dubai, aqsatech kitchen renovation dubai, aqsatech ac installation dubai, aqsatech ac repair dubai, aqsatech ac maintenance dubai, aqsatech emergency services dubai, aqsatech 24/7 dubai, aqsatech same day service dubai, aqsatech free quote dubai, aqsatech property maintenance dubai, aqsatech building maintenance dubai, aqsatech MEP services dubai, aqsatech HVAC dubai, aqsatech carpentry dubai, aqsatech waterproofing dubai, aqsatech licensed contractor dubai, Aqsa Tech, AQSATECH, technical services UAE, home maintenance Dubai, AC service UAE, renovation Dubai, handyman UAE, fit out UAE, villa renovation UAE, apartment renovation UAE, AC repair Dubai, plumbing services Dubai, electrical services UAE, painting contractors Dubai, tiling services Dubai, carpentry Dubai, HVAC Dubai, building maintenance UAE, property maintenance Dubai, office fit out Dubai, kitchen renovation UAE, AC installation Dubai, AC maintenance UAE, emergency plumber Dubai, 24/7 handyman services, same day AC repair, licensed electrician Dubai, waterproofing UAE';
    const finalTitle = title || defaultTitle;
    const finalDescription = description || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SEOHead.useEffect": ()=>{
            // Update document title
            document.title = finalTitle;
            // Update or create meta tags
            const updateMetaTag = {
                "SEOHead.useEffect.updateMetaTag": (name, content, attribute = 'name')=>{
                    let element = document.querySelector(`meta[${attribute}="${name}"]`);
                    if (!element) {
                        element = document.createElement('meta');
                        element.setAttribute(attribute, name);
                        document.head.appendChild(element);
                    }
                    element.content = content;
                }
            }["SEOHead.useEffect.updateMetaTag"];
            // Update meta tags
            updateMetaTag('title', finalTitle);
            updateMetaTag('description', finalDescription);
            updateMetaTag('keywords', finalKeywords);
            updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
            updateMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
            updateMetaTag('author', 'Aqsa Tech - AQSATECH');
            updateMetaTag('copyright', 'Aqsa Tech - AQSATECH');
            updateMetaTag('rating', '5');
            updateMetaTag('distribution', 'global');
            updateMetaTag('revisit-after', '7 days');
            // Update Open Graph tags
            updateMetaTag('og:title', finalTitle, 'property');
            updateMetaTag('og:description', finalDescription, 'property');
            updateMetaTag('og:url', currentUrl, 'property');
            updateMetaTag('og:type', type, 'property');
            updateMetaTag('og:image', image, 'property');
            updateMetaTag('og:image:width', '1200', 'property');
            updateMetaTag('og:image:height', '630', 'property');
            updateMetaTag('og:image:alt', 'Aqsa Tech - AQSATECH Property Maintenance Services', 'property');
            updateMetaTag('og:site_name', 'Aqsa Tech - AQSATECH', 'property');
            updateMetaTag('og:locale', 'en_US', 'property');
            // Update Twitter Card tags
            updateMetaTag('twitter:card', 'summary_large_image', 'name');
            updateMetaTag('twitter:title', finalTitle, 'name');
            updateMetaTag('twitter:description', finalDescription, 'name');
            updateMetaTag('twitter:image', image, 'name');
            updateMetaTag('twitter:image:alt', 'Aqsa Tech - AQSATECH Property Maintenance Services', 'name');
            updateMetaTag('twitter:url', currentUrl, 'name');
            updateMetaTag('twitter:site', '@aqsatech', 'name');
            updateMetaTag('twitter:creator', '@aqsatech', 'name');
            // Update canonical URL
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.rel = 'canonical';
                document.head.appendChild(canonical);
            }
            canonical.href = currentUrl;
            // Update html lang attribute
            document.documentElement.lang = 'en';
            // Update hreflang
            const updateHreflang = {
                "SEOHead.useEffect.updateHreflang": (lang, href)=>{
                    let hreflang = document.querySelector(`link[hreflang="${lang}"]`);
                    if (!hreflang) {
                        hreflang = document.createElement('link');
                        hreflang.rel = 'alternate';
                        hreflang.setAttribute('hreflang', lang);
                        document.head.appendChild(hreflang);
                    }
                    hreflang.href = href;
                }
            }["SEOHead.useEffect.updateHreflang"];
            updateHreflang('en', currentUrl);
            updateHreflang('x-default', currentUrl);
            // Update HTML lang attribute
            document.documentElement.lang = 'en';
        }
    }["SEOHead.useEffect"], [
        finalTitle,
        finalDescription,
        finalKeywords,
        currentUrl,
        image,
        type,
        noindex,
        pathname
    ]);
    return null;
};
_s(SEOHead, "vo3ZCh5w5dCp6mYdc5lL6M/fQXE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SEOHead;
const __TURBOPACK__default__export__ = SEOHead;
var _c;
__turbopack_context__.k.register(_c, "SEOHead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/whatsapp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generate WhatsApp URL with pre-filled message
 * Compatible with WhatsApp Desktop and Mobile
 * @param phoneNumber - Phone number in international format (without +)
 * @param message - Message to pre-fill
 * @returns WhatsApp URL
 */ __turbopack_context__.s([
    "WHATSAPP_PHONE",
    ()=>WHATSAPP_PHONE,
    "generateWhatsAppUrl",
    ()=>generateWhatsAppUrl
]);
function generateWhatsAppUrl(phoneNumber, message) {
    // Remove any non-digit characters from phone number
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    // Encode the message properly for URL
    // Replace newlines with %0A and encode special characters
    const encodedMessage = encodeURIComponent(message).replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29');
    // Use wa.me format which works for both Desktop and Mobile
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
const WHATSAPP_PHONE = '971525010132';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/AllServices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslatedServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslatedServices.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StructuredData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/whatsapp.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const AllServices = ()=>{
    _s();
    const { t, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const ___router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const navigate = (path)=>{
        if (typeof path === "number" && path === -1) {
            ___router.back();
        } else if (typeof path === "string") {
            ___router.push(path);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllServices.useEffect": ()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }["AllServices.useEffect"], []);
    const { services } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslatedServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslatedServices"])();
    const seoTitle = `All Services | Aqsa Tech | AQSATECH | aqsatech - Property Maintenance Services Dubai UAE`;
    const seoDescription = `Browse all property maintenance services by Aqsa Tech (AQSATECH, aqsatech) in Dubai UAE. Expert AC repair, plumbing, electrical, painting, tiling, carpentry, and more. 10+ professional services. Free quotes. Call +971 52 501 0132`;
    const seoKeywords = `aqsatech services, Aqsa Tech services, AQSATECH services, all services aqsatech, property maintenance services Dubai, renovation services Dubai, AC repair Dubai, plumbing Dubai, electrical services Dubai, painting Dubai, tiling Dubai, carpentry Dubai`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: seoTitle,
                description: seoDescription,
                keywords: seoKeywords
            }, void 0, false, {
                fileName: "[project]/src/views/AllServices.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "Service",
                data: {
                    serviceType: 'Property Maintenance Services',
                    name: 'All Property Maintenance Services',
                    description: seoDescription,
                    provider: {
                        '@type': 'LocalBusiness',
                        name: 'Aqsa Tech - AQSATECH',
                        url: 'https://aqsatech.ae'
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/views/AllServices.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-soft-gray-light pt-20 sm:pt-24 overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white border-b border-gray-200 overflow-x-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 overflow-x-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>navigate(-1),
                                    className: `flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 transition-colors text-sm sm:text-base ${isRTL ? 'flex-row-reverse ml-auto' : ''}`,
                                    whileHover: {
                                        x: isRTL ? 4 : -4
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: `w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'rotate-180' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/AllServices.tsx",
                                            lineNumber: 58,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: t('common.back')
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/AllServices.tsx",
                                            lineNumber: 59,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/AllServices.tsx",
                                    lineNumber: 52,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.2,
                                        ease: [
                                            0.25,
                                            0.1,
                                            0.25,
                                            1
                                        ]
                                    },
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: `text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4`,
                                            children: t('allServices.title')
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/AllServices.tsx",
                                            lineNumber: 68,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-900 max-w-3xl mx-auto font-medium`,
                                            children: t('allServices.subtitle')
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/AllServices.tsx",
                                            lineNumber: 71,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/AllServices.tsx",
                                    lineNumber: 62,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/AllServices.tsx",
                            lineNumber: 51,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/AllServices.tsx",
                        lineNumber: 50,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16 overflow-x-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 w-full items-stretch",
                            children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gray-50 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: service.image,
                                                    alt: service.title,
                                                    loading: "lazy",
                                                    decoding: "async",
                                                    className: "w-full h-full object-cover object-center",
                                                    width: 400,
                                                    height: 300,
                                                    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                                    style: {
                                                        contentVisibility: 'auto'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/AllServices.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-2 left-3 right-3 flex flex-wrap gap-1 sm:gap-1.5 justify-center",
                                                    children: service.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-white/95 backdrop-blur-sm text-gray-800 px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] sm:text-[11px] font-medium shadow-md",
                                                            children: tag
                                                        }, tagIndex, false, {
                                                            fileName: "[project]/src/views/AllServices.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/AllServices.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/AllServices.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-4 sm:p-5 lg:p-6 flex flex-col flex-grow ${isRTL ? 'text-right' : 'text-left'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 ${isRTL ? 'text-right' : 'text-left'}`,
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/AllServices.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-gray-900 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-5 line-clamp-3 flex-grow ${isRTL ? 'text-right' : 'text-left'}`,
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/AllServices.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    onClick: ()=>navigate(`/services/${service.slug}`),
                                                    size: "md",
                                                    variant: "dark",
                                                    fullWidth: true,
                                                    children: t('common.viewDetails')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/AllServices.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/AllServices.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, service.id, true, {
                                    fileName: "[project]/src/views/AllServices.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/views/AllServices.tsx",
                            lineNumber: 80,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/AllServices.tsx",
                        lineNumber: 79,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white py-10 sm:py-14 lg:py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.2,
                                    ease: [
                                        0.25,
                                        0.1,
                                        0.25,
                                        1
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 px-2 sm:px-0 text-gray-900",
                                        children: t('allServices.needCustomService')
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/AllServices.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm lg:text-base xl:text-lg text-gray-900 font-medium mb-6 sm:mb-8 px-2 sm:px-0",
                                        children: t('allServices.customServiceDescription')
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/AllServices.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                as: "a",
                                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWhatsAppUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_PHONE"], t('whatsapp.allServicesQuote')),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Get Free Quote on WhatsApp",
                                                size: "lg",
                                                variant: "dark",
                                                className: "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base",
                                                children: t('services.viewAll')
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/AllServices.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                as: "a",
                                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWhatsAppUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_PHONE"], t('whatsapp.allServicesQuote')),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Contact Us on WhatsApp",
                                                size: "lg",
                                                variant: "outline",
                                                className: "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer transition-all duration-300 text-sm sm:text-base",
                                                leftIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/AllServices.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 27
                                                }, void 0),
                                                children: t('allServices.contactUs')
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/AllServices.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/AllServices.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/AllServices.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/views/AllServices.tsx",
                            lineNumber: 140,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/AllServices.tsx",
                        lineNumber: 139,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/AllServices.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(AllServices, "UugFeEgPWT0KsYfPeAk0GeU1LGk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslatedServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslatedServices"]
    ];
});
_c = AllServices;
const __TURBOPACK__default__export__ = AllServices;
var _c;
__turbopack_context__.k.register(_c, "AllServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/ClientPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesClientPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StructuredData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$AllServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/AllServices.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const SmoothLoader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-16 h-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 border-4 border-brand-blue/20 rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/app/services/ClientPage.tsx",
                    lineNumber: 9,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/services/ClientPage.tsx",
                    lineNumber: 10,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/ClientPage.tsx",
            lineNumber: 8,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/services/ClientPage.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = SmoothLoader;
function ServicesClientPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "Service",
                data: {
                    serviceType: 'Technical Services UAE',
                    name: 'Complete Technical & Home Maintenance Services',
                    description: 'Comprehensive technical services across UAE'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/services/ClientPage.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                    fileName: "[project]/src/app/services/ClientPage.tsx",
                    lineNumber: 23,
                    columnNumber: 33
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$AllServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/services/ClientPage.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/ClientPage.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c1 = ServicesClientPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SmoothLoader");
__turbopack_context__.k.register(_c1, "ServicesClientPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_235a7946._.js.map