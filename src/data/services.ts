export type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  benefits: string[];
  gallery?: string[];
};

export const services: Service[] = [
  {
    id: 1,
    slug: 'wall-paper-fixing',
    title: 'Wall Paper Fixing',
    description:
      'Wallpaper fixing is the process of applying wallpaper to add color, pattern, and texture to interior spaces.',
    longDescription:
      'Transform your interiors with professional wallpaper installation. Our team handles surface prep, precise measurements, seamless application, and finishing — ensuring clean lines, bubble-free results, and long-lasting beauty. We work with premium adhesives and modern techniques suitable for UAE climate.',
    image: '/Services Stock images/wallpaper fixing.png',
    tags: ['Wallpaper', 'Installation', 'Decor'],
    features: ['Expert surface preparation & smoothing', 'Precise pattern matching & alignment', 'Climate-resistant adhesives for UAE', 'Bubble-free application technique', 'Professional trimming & edge sealing'],
    benefits: ['Transforms rooms instantly', 'Hides wall imperfections perfectly', 'Wide variety of designs & textures', 'Easy to clean & maintain', 'Cost-effective wall makeover', 'Long-lasting in humid conditions'],
  },
  {
    id: 2,
    slug: 'floor-and-wall-tiling',
    title: 'Floor & Wall Tiling',
    description:
      'Professional tile installation for floors and walls — durable, elegant, and precision finished.',
    longDescription:
      'From ceramic and porcelain to marble and granite, we provide end-to-end tiling services including substrate preparation, leveling, cutting, grouting, and sealing. We deliver precision alignment and superior finish, suitable for high-traffic and wet areas.',
    image: '/Services Stock images/floor and wall tiling.png',
    tags: ['Tiling', 'Flooring', 'Installation'],
    features: ['Laser-level floor & wall alignment', 'Waterproofing membrane application', 'Precision tile cutting & fitting', 'Premium grout & anti-fungal sealant', 'Expansion joint installation', 'Multiple material expertise (ceramic, porcelain, marble)'],
    benefits: ['Durable, long-lasting surfaces', 'Waterproof protection for wet areas', 'Elegant, luxurious appearance', 'Easy to clean & maintain', 'Increases property value', 'Suitable for high-traffic areas'],
  },
  {
    id: 3,
    slug: 'plaster-works',
    title: 'Plaster Works',
    description:
      'Decorative and functional plastering — smooth walls, crisp corners, and durable finishes.',
    longDescription:
      'We deliver plastering for renovation and new builds, including skim coats, decorative plaster, and repair of cracks and uneven surfaces. The result is a smooth and durable base ready for paint or wallpaper.',
    image: '/Services Stock images/plaster works.png',
    tags: ['Plastering', 'Walls', 'Finishing'],
    features: ['Complete crack & hole repair', 'Multi-layer skim coating', 'Sharp corner bead installation', 'Moisture & heat-resistant plaster', 'Smooth texture finishing', 'Decorative plaster options'],
    benefits: ['Smooth, flawless wall surfaces', 'Perfect base for painting or wallpaper', 'Strengthens wall structure', 'Covers old damage & imperfections', 'Long-lasting durability', 'Professional finish quality'],
  },
  {
    id: 4,
    slug: 'carpentry-flooring',
    title: 'Carpentry & Flooring Contracting',
    description:
      'Custom carpentry and flooring services — from installation to repairs and finishing.',
    longDescription:
      'Our carpenters and flooring specialists handle hardwood, laminate, vinyl, and engineered floors, along with bespoke carpentry like doors, skirtings, wardrobes, and shelving. Expect precision craftsmanship and durable finishes.',
    image: '/Services Stock images/Carpentry & flooring contracting.png',
    tags: ['Carpentry', 'Flooring', 'Wood Work'],
    features: ['Custom cabinet & wardrobe making', 'Hardwood, laminate & vinyl flooring', 'Door installation & frame fitting', 'Skirting & architrave installation', 'Moisture barrier underlays', 'Acoustic sound insulation', 'Protective wood finishing & sealing'],
    benefits: ['Bespoke carpentry tailored to space', 'Premium wood & flooring materials', 'Adds significant property value', 'Durable, long-lasting construction', 'Professional craftsmanship', 'Beautiful natural aesthetics'],
  },
  {
    id: 5,
    slug: 'engraving-ornamentation',
    title: 'Engraving & Ornamentation Works',
    description:
      'Intricate engraving and ornamental detailing to elevate your interiors and exteriors.',
    longDescription:
      'We create bespoke ornamental designs across wood, metal, and stone. Perfect for feature walls, facades, and interior accents that reflect your brand or personal taste.',
    image: '/Services Stock images/Engraving & Ornamentation Works.png',
    tags: ['Engraving', 'Decoration', 'Ornamental'],
    features: ['Custom ornamental design creation', 'CNC precision engraving', 'Multi-material capability (wood, metal, stone, glass)', 'Intricate pattern detailing', 'Weather-resistant coating', '3D relief & texture work', 'Architectural ornament installation'],
    benefits: ['Unique, signature aesthetic appeal', 'Elevates brand identity & prestige', 'Creates memorable first impressions', 'Adds artistic & cultural value', 'Durable outdoor & indoor use', 'Customized to your vision'],
  },
  {
    id: 6,
    slug: 'painting-contracting',
    title: 'Painting Contracting',
    description:
      'Interior & exterior painting with smooth finishes and durable coatings.',
    longDescription:
      'We handle surface prep, priming, and professional paint application using low-VOC, climate-suitable paints. Achieve smooth coverage, crisp edges, and long-lasting color.',
    image: '/Services Stock images/Painting contracting.png',
    tags: ['Painting', 'Interior', 'Exterior'],
    features: ['Complete surface preparation & repair', 'Multi-coat priming system', 'Premium low-VOC paint brands', 'Weatherproof exterior coatings', 'Anti-mold & anti-fade formulas', 'Precise masking & edge work', 'Spray & roller application'],
    benefits: ['Fresh, modern appearance', 'Protects against weather & wear', 'Healthier indoor air quality', 'Long-lasting color retention', 'Quick drying, minimal disruption', 'Increases property appeal & value'],
  },
  {
    id: 7,
    slug: 'ac-installation',
    title: 'AC Installation',
    description:
      'Professional AC installation services for new and replacement units — expert setup for optimal cooling performance.',
    longDescription:
      'Our certified HVAC technicians provide complete AC installation services including unit selection, proper sizing, electrical connections, refrigerant charging, ductwork installation, and system testing. We ensure your new AC unit is installed correctly for maximum efficiency and longevity. From split systems to central air conditioning, we handle all installation requirements with precision and care.',
    image: '/Services Stock images/Air-coditioning installation.png',
    tags: ['AC Install', 'Installation', 'HVAC'],
    features: [
      'Professional AC unit installation (split, window, central)',
      'Load calculation & proper sizing',
      'Complete electrical wiring & connection',
      'Refrigerant charging & leak testing',
      'Ductwork design & installation',
      'Thermostat setup & calibration',
      'System commissioning & testing',
      'Manufacturer warranty registration',
    ],
    benefits: [
      'Optimal cooling from day one',
      'Energy-efficient operation saves bills',
      'Correctly sized for your space',
      'Prevents future breakdowns',
      'Extended AC lifespan',
      'Full manufacturer warranty coverage',
      'Meets UAE safety & quality standards',
    ],
  },
  {
    id: 8,
    slug: 'ac-maintenance',
    title: 'AC Maintenance',
    description:
      'Regular AC maintenance and servicing to keep your system running efficiently and prevent costly breakdowns.',
    longDescription:
      'Keep your air conditioning system in peak condition with our comprehensive maintenance services. We provide regular servicing including filter replacement, coil cleaning, gas recharging, duct cleaning, system inspection, and preventative maintenance. Our certified technicians ensure your AC runs efficiently, reduces energy costs, and extends the lifespan of your unit. We offer annual maintenance plans for hassle-free, scheduled service.',
    image: '/Services Stock images/Air-coditioning maintenance.png',
    tags: ['AC Maintenance', 'Servicing', 'Repair'],
    features: [
      'Comprehensive filter cleaning & replacement',
      'Evaporator & condenser coil deep cleaning',
      'Refrigerant gas top-up & leak detection',
      'Drain line clearing & sanitization',
      'Electrical component inspection',
      'Fan motor lubrication & check',
      'Thermostat calibration',
      'Annual & seasonal maintenance contracts',
    ],
    benefits: [
      'Restores peak cooling performance',
      'Reduces electricity consumption by 15-30%',
      'Improves indoor air quality',
      'Prevents costly breakdowns',
      'Extends AC unit lifespan by years',
      'Regular maintenance saves money',
      'Priority service for contract customers',
    ],
  },
  {
    id: 9,
    slug: 'ventilation-air-filtration',
    title: 'Ventilations & Air Filtration Systems',
    description:
      'Clean, healthy indoor air with professional ventilation and filtration solutions.',
    longDescription:
      'We design and install ventilation systems, HEPA filtration, and air exchanges for homes and commercial spaces, improving IAQ and comfort.',
    image: '/Services Stock images/Ventilation & air-filtration system installation.png',
    tags: ['Ventilation', 'Air Filters', 'HVAC'],
    features: ['HEPA & MERV filtration systems', 'Energy recovery ventilators (ERV)', 'Balanced fresh air supply & exhaust', 'Quiet operation technology', 'UV air purification options', 'Humidity control integration', 'Smart ventilation controls'],
    benefits: ['Significantly healthier indoor air', 'Removes 99% of allergens & pollutants', 'Eliminates odors & VOCs', 'Reduces energy costs', 'Prevents mold & moisture buildup', 'Better for respiratory health', 'Complies with green building standards'],
  },
  {
    id: 10,
    slug: 'electromechanical-equipment',
    title: 'Electromechanical Equipment Installation',
    description:
      'Installation and maintenance for electromechanical equipment and systems.',
    longDescription:
      'Expert install and service for pumps, motors, panels, and controls. We ensure safe wiring, proper calibration, and preventative maintenance schedules.',
    image: '/Services Stock images/Electromechanical equipment installation & maintenance.png',
    tags: ['Installation', 'Maintenance', 'Equipment'],
    features: ['Complete electromechanical system installation', 'Certified electrical wiring & connections', 'Motor, pump & control panel setup', 'Load testing & commissioning', 'Preventive maintenance scheduling', 'Genuine OEM replacement parts', 'Emergency repair services'],
    benefits: ['Maximum operational reliability', 'Minimized equipment downtime', 'Extended machinery lifespan', 'Reduced repair costs', 'Safety compliance assured', 'Optimal system performance', 'Expert technical support'],
  },
  {
    id: 11,
    slug: 'false-ceiling-partitions',
    title: 'False Ceiling & Light Partition Installation',
    description:
      'Secondary ceilings and partitions for aesthetics, acoustics, and space planning.',
    longDescription:
      'We install gypsum false ceilings and light partitions with integrated lighting, insulation, and access panels — clean, modular, and functional.',
    image: '/Services Stock images/False ceiling & light-partition installation.png',
    tags: ['False Ceiling', 'Partitions', 'Interior'],
    features: ['Gypsum board false ceiling installation', 'Metal grid & suspension systems', 'Acoustic ceiling tiles & panels', 'Integrated lighting solutions', 'Fire-rated & moisture-resistant options', 'Access panels for maintenance', 'Glass & gypsum partition walls', 'Quick modular installation'],
    benefits: ['Modern, professional interior look', 'Conceals wiring, pipes & ductwork', 'Improves room acoustics & sound control', 'Flexible space division', 'Energy efficiency with insulation', 'Easy access to services above', 'Creates defined work & living areas'],
  },
  {
    id: 12,
    slug: 'plumbing-sanitary',
    title: 'Plumbing & Sanitary Contracting',
    description:
      'Installation, maintenance, and repair of plumbing and sanitary systems.',
    longDescription:
      'Certified plumbers for leaks, pipe installs, water heaters, fixtures, and drainage. We use quality materials and reliable methods for UAE standards.',
    image: '/Services Stock images/Plumbing & sanitary contracting.png',
    tags: ['Plumbing', 'Sanitary', 'Installation'],
    features: ['Complete plumbing system installation', 'Advanced leak detection & repair', 'Premium pipe & fixture materials', 'Water heater installation & repair', 'Drainage system & sewage work', 'Bathroom & kitchen fixture fitting', 'Emergency plumbing services', 'Water pressure optimization'],
    benefits: ['Reliable, leak-free plumbing', 'Clean, hygienic sanitary systems', 'Reduces water waste & bills', 'Long-lasting installations', 'Prevents water damage', 'Fast, professional service', 'Complies with UAE plumbing codes'],
  },
  {
    id: 13,
    slug: 'office-fit-out',
    title: 'Office Fit Out Services',
    description:
      'Complete office design and fit-out solutions — from planning to execution for modern workspaces.',
    longDescription:
      'We deliver end-to-end office fit-out services including space planning, partitioning, electrical and data cabling, lighting, flooring, furniture installation, and branding. Transform your workspace into a productive, professional environment that reflects your brand. Our team works with you from concept to completion, ensuring every detail meets your business needs and budget.',
    image: '/Services Stock images/Office Fit Out Services.png',
    tags: ['Office', 'Fit Out', 'Interior Design'],
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
      'Project management & coordination',
    ],
    benefits: [
      'Professional, modern workspace',
      'Boosts employee productivity & morale',
      'Strong brand presence & identity',
      'Fully functional from day one',
      'Single point of contact',
      'Cost-effective turnkey solution',
      'Meets building & safety regulations',
      'Minimizes business disruption',
    ],
  },
  {
    id: 14,
    slug: 'water-tank-cleaning',
    title: 'Water Tank Cleaning & Maintenance',
    description:
      'Professional water tank cleaning and sanitization for safe, clean water supply.',
    longDescription:
      'Regular water tank cleaning is essential for health and hygiene. Our certified team provides thorough cleaning, sanitization, inspection, and maintenance of residential and commercial water tanks. We ensure compliance with UAE health standards and prevent contamination. Our service includes complete draining, scrubbing, disinfection, and refilling with proper water quality testing.',
    image: '/Services Stock images/Water Tank Cleaning & Maintenance.png',
    tags: ['Water Tank', 'Cleaning', 'Maintenance'],
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
      'Annual maintenance contracts',
    ],
    benefits: [
      'Safe, clean drinking water',
      'Protects family health',
      'Prevents waterborne diseases',
      'Removes harmful bacteria & contaminants',
      'Meets UAE health regulations',
      'Extends tank lifespan',
      'Official cleaning certificate issued',
      'Peace of mind for tenants & owners',
    ],
  },
  {
    id: 15,
    slug: 'kitchen-renovation',
    title: 'Kitchen Renovation',
    description:
      'Complete kitchen renovation services — design, installation, and finishing for modern kitchens.',
    longDescription:
      'Transform your kitchen with our comprehensive renovation services. We handle everything from design consultation, cabinet installation, countertop fitting, plumbing and electrical work, tiling, painting, and appliance installation. Create a functional, beautiful kitchen that suits your lifestyle. Our expert team ensures quality craftsmanship, timely completion, and attention to every detail.',
    image: '/Services Stock images/Kitchen Renovation.png',
    tags: ['Kitchen', 'Renovation', 'Design'],
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
      'Complete project coordination',
    ],
    benefits: [
      'Beautiful, modern kitchen',
      'Maximized storage & functionality',
      'Increases property value significantly',
      'Better cooking workflow & efficiency',
      'Energy-efficient appliances & lighting',
      'Quality materials & craftsmanship',
      'Turnkey solution with single contractor',
      'Transforms heart of the home',
    ],
  },
  {
    id: 16,
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    description:
      'Complete home and property renovation services — transform your space with professional remodeling solutions.',
    longDescription:
      'Comprehensive renovation and remodeling services for residential and commercial properties. We handle full-scale renovations including structural changes, room additions, layout redesigns, and complete property transformations. Our expert team manages every aspect from planning and design to execution and finishing, ensuring your vision becomes reality with quality craftsmanship and attention to detail.',
    image: '/Services Stock images/Renovation & Remodeling.png',
    tags: ['Renovation', 'Remodeling', 'Interior Design'],
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
      'Municipal approvals assistance',
    ],
    benefits: [
      'Complete property transformation',
      'Dramatically increases property value',
      'Modern, functional living spaces',
      'Customized to your lifestyle',
      'One contractor for entire project',
      'Quality materials & workmanship',
      'Timely completion with milestones',
      'Cost transparency & control',
    ],
  },
  {
    id: 17,
    slug: 'ac-dust-cleaning',
    title: 'AC Dust Cleaning',
    description:
      'Specialized AC dust cleaning service to remove built-up dust from indoor units, coils, and vents for cleaner, healthier air.',
    longDescription:
      'Over time, dust and fine particles accumulate inside your AC indoor units, coils, grilles, and vents – even when the system is cooling properly. Our AC Dust Cleaning service focuses specifically on deep cleaning these components to improve air quality, reduce allergens, and enhance cooling efficiency. We carefully disassemble accessible parts, use professional tools to remove dust and debris, and reassemble everything with a clean, fresh finish. Ideal between full AC maintenance visits or when you notice dust around vents and grilles.',
    image: '/Services Stock images/AC Dust Cleaning.png',
    tags: ['AC Dust Cleaning', 'Deep Cleaning', 'Air Quality'],
    features: [
      'Indoor unit dust removal',
      'Air vent & grille deep cleaning',
      'Filter dust extraction',
      'Blower fan cleaning',
      'Accessible coil surface cleaning',
      'Safe cleaning without disassembly',
      'Antibacterial spray treatment (optional)',
      'Drain tray inspection',
    ],
    benefits: [
      'Fresher, cleaner air circulation',
      'Removes visible dust & allergens',
      'Improves airflow from vents',
      'Reduces allergy symptoms',
      'Better cooling distribution',
      'Quick service with minimal disruption',
      'Cost-effective air quality improvement',
      'Ideal between full maintenance',
    ],
  },
  {
    id: 18,
    slug: 'ac-coil-cleaning',
    title: 'AC Coil Cleaning',
    description:
      'Professional AC coil cleaning to restore cooling performance, reduce energy consumption, and prevent system strain.',
    longDescription:
      'Dirty evaporator and condenser coils force your AC to work harder, wasting energy and reducing cooling capacity. Our AC Coil Cleaning service focuses on deep cleaning these coils using safe, AC‑approved chemicals and rinsing methods. We carefully access the coils, remove dust, grease, and microbial buildup, and verify proper drainage and operation afterwards. This service is ideal when you notice weak cooling, higher electricity bills, or visible dirt on the coil surfaces.',
    image: '/Services Stock images/AC Coil Cleaning.png',
    tags: ['AC Coil Cleaning', 'Performance', 'Energy Saving'],
    features: [
      'Deep coil cleaning (evaporator & condenser)',
      'Professional AC-safe chemical foam',
      'High-pressure water rinse',
      'Fin straightening & debris removal',
      'Drain line flushing',
      'Corrosion & damage inspection',
      'Airflow testing post-cleaning',
      'Before/after performance check',
    ],
    benefits: [
      'Restores full cooling capacity',
      'Reduces electricity bills by 20-40%',
      'Less strain on compressor',
      'Prevents premature AC failure',
      'Extends unit lifespan significantly',
      'Faster, more efficient cooling',
      'Eliminates musty odors',
      'Best for weak cooling issues',
    ],
  },
  {
    id: 19,
    slug: 'handyman-services',
    title: 'Handyman Services',
    description:
      'Reliable handyman services for everyday fixes, minor installations, and small projects around your home or office.',
    longDescription:
      'Our handyman team takes care of all the “small but important” jobs that keep your property running smoothly. From fixing door hinges, mounting TVs and shelves, hanging curtains and frames, to small carpentry, silicone replacement, grout touch-ups, and minor repairs, we handle it quickly and professionally. Perfect when you need a trusted team for punch-list items or move-in / move-out fixes without calling multiple contractors.',
    image: '/Services Stock images/Handyman Services.png',
    tags: ['Handyman', 'Repairs', 'Small Jobs'],
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
      'Light switch & socket replacement',
    ],
    benefits: [
      'One handyman for multiple tasks',
      'Professional, neat finish',
      'Saves time & effort vs DIY',
      'No need for multiple contractors',
      'Perfect for small repair lists',
      'Ideal for move-in/move-out',
      'Quick response & completion',
      'Affordable flat-rate pricing',
    ],
  },
  {
    id: 20,
    slug: 'apartment-renovation-remodeling',
    title: 'Apartment Renovation & Remodeling',
    description:
      'Complete apartment renovation and remodeling solutions tailored to modern city living in the UAE.',
    longDescription:
      'Our Apartment Renovation & Remodeling service focuses on transforming apartments into modern, functional, and stylish spaces. We handle layout improvements, new kitchens and bathrooms, flooring, painting, lighting upgrades, wardrobes, and storage optimization – all while respecting building rules and neighbors. From partial upgrades to full remodels, we manage design, approvals, materials, and execution so your apartment is upgraded with minimal stress.',
    image: '/Services Stock images/Apartment Renovation & Remodeling.png',
    tags: ['Apartment', 'Renovation', 'Remodeling'],
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
      'Neighbor-friendly work schedule',
    ],
    benefits: [
      'Modern, stylish apartment',
      'Maximizes limited space efficiently',
      'Increases rental & resale value',
      'Customized to urban living needs',
      'Respects building rules & neighbors',
      'Turnkey renovation solution',
      'Minimal stress & hassle',
      'Perfect for investment properties',
    ],
  },
  {
    id: 21,
    slug: 'villa-renovation-remodeling',
    title: 'Villa Renovation & Remodeling',
    description:
      'Premium villa renovation and remodeling services for complete interior and exterior transformations.',
    longDescription:
      'For villas, we provide comprehensive renovation and remodeling – from façade upgrades and landscaping to full interior redesign. Our team can re-plan room layouts, upgrade kitchens and bathrooms, add majlis or family areas, improve lighting and MEP systems, and refresh all finishes. We combine structural, architectural, and interior work under one coordinated team, delivering a villa that feels brand new while respecting your tastes and lifestyle.',
    image: '/Services Stock images/Villa Renovation & Remodeling.png',
    tags: ['Villa', 'Renovation', 'Remodeling'],
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
      'Full architectural & design services',
    ],
    benefits: [
      'Luxury villa transformation',
      'Massive increase in property value',
      'Tailored to your lifestyle & taste',
      'Premium materials & finishes',
      'Modern, smart home technology',
      'Single contractor for entire villa',
      'Comprehensive project management',
      'Creates your dream home',
    ],
  },
];
