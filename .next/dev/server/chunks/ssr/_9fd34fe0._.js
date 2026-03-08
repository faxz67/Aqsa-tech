module.exports = [
"[project]/src/components/ui/ProButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
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
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#7DD3FC] via-[#45C0B0] to-[#3B82F6] opacity-100 -z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ProButton.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "absolute inset-[2px] rounded-full bg-white -z-[1]"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ProButton.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${inner} relative z-10`,
                children: [
                    leftIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex items-center -ml-0.5 pro-btn-icon-left ${textColorClass}`,
                        children: leftIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProButton.tsx",
                        lineNumber: 87,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `pro-btn-text ${textColorClass} font-semibold`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProButton.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    rightIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
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
}),
"[project]/src/data/blogPosts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "categories",
    ()=>categories
]);
const blogPosts = [
    {
        id: 1,
        slug: 'elevating-spaces-with-excellence-aqsatech',
        title: 'Elevating Spaces with Excellence – AQSATECH Contracting & Maintenance Services',
        excerpt: 'At AQSATECH, we believe that every space has the potential to inspire comfort, functionality, and elegance. Discover our comprehensive range of services.',
        content: `At AQSATECH, we believe that every space has the potential to inspire comfort, functionality, and elegance. With years of experience in the contracting and maintenance industry, we have built a reputation for delivering high-quality solutions tailored to our clients' needs. From stylish interiors to reliable technical installations, our expertise covers a wide spectrum of services that make us a one-stop solution for both residential and commercial projects.

Our Comprehensive Services

1. Wall Paper Fixing
Transform your walls with premium wallpaper designs that add personality and charm to your interiors. Our skilled team ensures a flawless finish for a lasting impression.

2. Floor & Wall Tiling Works
Precision and durability define our tiling services. Whether it's a modern design or a classic look, we provide expert tiling that enhances both beauty and functionality.

3. Plaster Works
Our professional plastering ensures smooth, even surfaces that are perfect for painting, decoration, or structural integrity.

4. Carpentry & Flooring Contracting
From custom woodwork to durable flooring installations, our carpentry services combine craftsmanship with innovation to elevate your interiors.

5. Engraving & Ornamentation Works
Add a touch of uniqueness with our engraving and ornamentation solutions, designed to bring creativity and sophistication to your projects.

6. Painting Contracting
We provide professional painting services using high-quality materials that guarantee vibrant, long-lasting finishes for your walls and exteriors.

7. Air-Conditioning Installation & Maintenance
Our HVAC experts specialize in installation, servicing, and maintenance of air-conditioning systems, ensuring comfort all year round.

8. Ventilation & Air Filtration Systems
Clean air is essential for healthy living. We design, install, and maintain advanced ventilation and air filtration systems for residential, commercial, and industrial spaces.

9. Electromechanical Equipment Installation & Maintenance
We offer reliable solutions for complex electromechanical systems, ensuring smooth operations and energy efficiency.

10. False Ceiling & Light Partition Installation
Enhance interiors with innovative false ceilings and light partitions that combine style with practicality.

11. Plumbing & Sanitary Contracting
From installations to repairs, our plumbing and sanitary contracting services provide efficient water management and modern sanitation solutions.

Why Choose AQSATECH?

✔ Expertise Across Multiple Services – A full range of contracting and maintenance solutions under one roof.
✔ Quality & Reliability – We use premium materials and industry best practices.
✔ Tailored Solutions – Customized services to match your vision and requirements.
✔ Customer-Centric Approach – We believe in long-term relationships built on trust, transparency, and satisfaction.

Let's Build Better, Together

At AQSATECH, we don't just provide services – we deliver value, quality, and peace of mind. Whether you are renovating your home, building a commercial space, or maintaining critical systems, our team is ready to exceed your expectations.

Visit us at aqsatech.ae or contact us today to discuss your project. Together, let's bring your vision to life with precision and excellence.`,
        image: '/Services Stock images/Property Management.png',
        category: 'Company',
        author: 'Aqsa Tech Team',
        date: '2025-11-10',
        readTime: '8 min read'
    },
    {
        id: 2,
        slug: 'top-10-home-maintenance-tips-uae',
        title: 'Top 10 Home Maintenance Tips for UAE Residents',
        excerpt: 'Keep your UAE home in perfect condition year-round with these essential maintenance tips from our expert team.',
        content: `Living in United Arab Emirates presents unique challenges for homeowners. The extreme heat, high humidity, and occasional sandstorms require proactive maintenance to keep your property in top condition. Here are the top 10 maintenance tips every UAE resident should follow.

1. Regular AC Servicing is Non-Negotiable

Your air conditioning system works overtime in UAE's scorching climate. Schedule professional servicing every 3-4 months to ensure optimal performance. Clean or replace filters monthly, check refrigerant levels, and inspect ducts for leaks. A well-maintained AC unit can reduce energy bills by up to 30% and prevent costly breakdowns during peak summer months.

2. Inspect and Clean Drainage Systems

UAE's occasional heavy rainfall can overwhelm unprepared drainage systems. Check roof drains, gutters, and floor drains regularly. Remove debris, sand, and blockages to prevent water pooling and potential structural damage. Pay special attention to balcony drains and ensure water flows away from your building's foundation.

3. Combat Sand and Dust Buildup

Desert dust is a constant challenge. Install quality door sweeps and window seals to minimize infiltration. Clean window tracks, AC vents, and exhaust fans monthly. Consider professional deep cleaning of curtains, carpets, and upholstery every 6 months. Regular vacuuming with HEPA filters helps maintain indoor air quality.

4. Protect Wooden Fixtures from Heat Damage

Extreme temperature fluctuations can warp and crack wooden doors, cabinets, and furniture. Apply protective sealants annually, keep wood away from direct sunlight, and maintain consistent indoor humidity levels (40-60%). Use weather stripping on exterior doors to reduce heat transfer and prevent expansion damage.

5. Check Waterproofing and Sealants

Inspect bathroom and kitchen sealants twice yearly. Cracked or missing grout and caulking can lead to water damage, mold growth, and structural issues. Re-seal shower enclosures, sink edges, and wet areas as needed. Don't forget to check balcony waterproofing and external window seals.

6. Maintain Your Swimming Pool

If you have a pool, test water chemistry weekly and maintain proper chlorine levels. Clean filters regularly, brush walls and floors, and check pumps and equipment monthly. UAE's heat accelerates algae growth, so stay vigilant. Professional servicing every 6 months ensures equipment longevity.

7. Electrical System Safety Checks

High temperatures stress electrical systems. Inspect outlets, switches, and circuit breakers for signs of overheating or damage. Test GFCI outlets in wet areas monthly. Never overload circuits, and have a licensed electrician perform annual safety inspections. Replace old or flickering light fixtures promptly.

8. Pest Prevention Strategies

UAE's climate attracts various pests. Seal cracks and entry points around pipes, cables, and foundations. Keep kitchen areas spotless, store food in airtight containers, and fix leaky faucets. Schedule professional pest control treatments quarterly, especially before summer when insect activity peaks.

9. HVAC Duct Cleaning

Over time, AC ducts accumulate dust, allergens, and even mold. Professional duct cleaning every 2-3 years improves air quality, reduces respiratory issues, and enhances system efficiency. This is especially important for families with allergies or young children.

10. Exterior Paint and Facade Maintenance

UV radiation and heat fade and damage exterior paint. Inspect walls annually for cracks, peeling, or discoloration. Touch up minor issues immediately to prevent moisture intrusion. Plan for complete repainting every 5-7 years using high-quality, UV-resistant paints designed for extreme climates.

Preventive Maintenance Saves Money

Regular maintenance might seem like an expense, but it prevents expensive emergency repairs and extends the life of your home's systems and finishes. Create a maintenance calendar, keep records of all services, and don't delay addressing minor issues before they escalate.

Need Professional Help?

At Aqsa Tech, we offer comprehensive home maintenance services tailored to UAE's unique requirements. From AC servicing to complete property inspections, our experienced team ensures your home remains comfortable, safe, and valuable year-round.

Contact us today for a free consultation and customized maintenance plan for your property.`,
        image: '/Services Stock images/Renovation & Remodeling.png',
        category: 'Home Maintenance',
        author: 'Aqsa Tech Team',
        date: '2025-11-08',
        readTime: '8 min read'
    },
    {
        id: 3,
        slug: 'ac-maintenance-summer-guide',
        title: 'AC Maintenance: Your Complete Summer Guide',
        excerpt: 'Beat the UAE heat with our comprehensive AC maintenance checklist and professional tips.',
        content: `In United Arab Emirates, where summer temperatures regularly exceed 45°C, your air conditioning system isn't just a luxury—it's a necessity. Proper AC maintenance ensures comfort, efficiency, and longevity while preventing costly breakdowns during the hottest months. Here's your complete guide to summer AC maintenance.

Why AC Maintenance Matters in UAE

UAE's extreme climate puts tremendous stress on cooling systems. Units run almost continuously from May through September, accumulating thousands of operating hours. Without proper maintenance, efficiency drops, energy bills skyrocket, and system failures become inevitable. Regular servicing can extend your AC's lifespan by 5-10 years and reduce energy consumption by 15-30%.

Pre-Summer Preparation Checklist

Before peak summer arrives, schedule a comprehensive professional service. Technicians should:
• Inspect and clean evaporator and condenser coils
• Check refrigerant levels and test for leaks
• Examine electrical connections and tighten loose terminals
• Lubricate moving parts and inspect fan motors
• Clean or replace air filters
• Test thermostat accuracy and calibration
• Clear condensate drain lines
• Inspect ductwork for leaks or damage

Monthly Maintenance Tasks

Filter Cleaning: UAE's dusty environment clogs filters rapidly. Check filters every 2-3 weeks during summer. Washable filters should be cleaned with mild soap and water, dried completely, and reinstalled. Disposable filters need monthly replacement. Dirty filters restrict airflow, forcing your system to work harder and consume more energy.

Outdoor Unit Care: The outdoor condenser unit faces harsh conditions—blazing sun, sand, and debris. Keep the area around it clear of obstructions. Gently spray the coils with water to remove dust buildup (turn off power first). Ensure adequate airflow with at least 60cm clearance on all sides.

Drain Line Maintenance: Mix one cup of bleach with water and pour down the condensate drain monthly. This prevents algae growth and clogs that can cause water damage. Check the drain pan for standing water, rust, or overflow.

Signs Your AC Needs Professional Attention

Don't wait for complete failure. Call a technician if you notice:
• Weak airflow or warm air from vents
• Unusual noises (grinding, squealing, or rattling)
• Frequent cycling on and off
• Ice formation on refrigerant lines
• Moisture or leaks around the unit
• Unexplained increase in electricity bills
• Unpleasant odors when running

Energy-Saving Strategies

Smart Thermostat Use: Set your thermostat to 24-25°C for optimal comfort and efficiency. Every degree lower increases energy consumption by approximately 8%. Use programmable or smart thermostats to adjust temperatures when you're away.

Proper Insulation: Ensure windows and doors seal properly. Use thermal curtains or blinds to block harsh afternoon sun. Insulate ductwork in unconditioned spaces to prevent cooling loss.

Ceiling Fans: Use ceiling fans to circulate cool air, allowing you to raise the thermostat by 2-3 degrees without sacrificing comfort. Ensure fans rotate counterclockwise in summer.

Regular Professional Servicing

Schedule professional maintenance at least three times annually in UAE:
• Pre-summer (April/May): Comprehensive service and tune-up
• Mid-summer (July): Inspection and minor adjustments
• Post-summer (October): Deep cleaning and winter prep

Annual deep cleaning should include chemical coil cleaning, duct sanitization, and complete system performance testing.

Extending Your AC's Lifespan

Quality Installation: Proper sizing and installation are crucial. An oversized unit cycles too frequently; undersized units run constantly. Both scenarios reduce efficiency and lifespan.

Immediate Repairs: Address issues promptly. Small problems escalate quickly in UAE's demanding climate. A minor refrigerant leak can damage the compressor, turning a 500 AED repair into a 5,000 AED replacement.

Quality Replacement Parts: Use manufacturer-approved parts for repairs. Cheap alternatives may save money initially but often fail prematurely and can void warranties.

When to Consider Replacement

If your AC is over 10-12 years old, requires frequent repairs, or struggles to maintain temperature, replacement might be more economical. Modern units offer:
• 30-50% better energy efficiency
• Inverter technology for smoother operation
• Smart features and remote control
• Improved air filtration
• Quieter operation

Common AC Mistakes to Avoid

Neglecting Filters: This single oversight causes most efficiency and performance issues.

Setting Extremely Low Temperatures: Your AC works at maximum capacity regardless of setpoint. Setting it to 16°C doesn't cool faster—it just wastes energy.

Closing Vents in Unused Rooms: This creates pressure imbalances and reduces overall efficiency. Modern systems are designed to cool the entire space.

DIY Refrigerant Recharge: Handling refrigerants requires certification and proper equipment. Incorrect charging damages the system and violates environmental regulations.

Professional Help When You Need It

At Aqsa Tech, our certified HVAC technicians specialize in UAE's unique climate challenges. We provide:
• 24/7 emergency AC repair
• Preventive maintenance contracts
• New installation and replacement
• Duct cleaning and sanitization
• Energy efficiency consultations

Don't wait for your AC to fail during peak summer. Contact us today to schedule your pre-summer maintenance and ensure cool comfort all season long.`,
        image: '/Services Stock images/HVAC & AC Service.png',
        category: 'HVAC',
        author: 'Ahmed Al-Mansouri',
        date: '2025-11-05',
        readTime: '10 min read'
    },
    {
        id: 4,
        slug: 'kitchen-renovation-trends-2025',
        title: 'Kitchen Renovation Trends 2025: What\'s Hot in UAE',
        excerpt: 'Discover the latest kitchen design trends transforming UAE homes this year.',
        content: `The kitchen has evolved from a purely functional space to the heart of the modern UAE home. As we move through 2025, innovative designs, smart technology, and sustainable materials are reshaping how we think about kitchen renovations. Here are the hottest trends transforming kitchens across the UAE.

1. Smart Kitchen Integration

Technology is revolutionizing kitchen functionality. Smart appliances now work seamlessly together:
• Voice-activated faucets and lighting
• App-controlled ovens with recipe guidance
• Refrigerators with interior cameras and inventory tracking
• Automated coffee stations with personalized settings
• Touchless trash bins and soap dispensers

These innovations aren't just convenient—they promote hygiene, reduce water waste, and make cooking more intuitive, especially valuable in UAE's fast-paced lifestyle.

2. Minimalist Handleless Cabinets

Clean lines define 2025's aesthetic. Handleless cabinets with push-to-open mechanisms create sleek, uninterrupted surfaces. Integrated appliances disappear behind matching panels, while concealed storage keeps countertops clutter-free. This minimalist approach maximizes visual space—crucial in UAE's luxury apartments where every square meter matters.

3. Statement Kitchen Islands

The kitchen island has become the focal point, serving multiple functions:
• Extended dining and entertaining area
• Additional storage with hidden compartments
• Integrated cooktops or sinks
• Charging stations and device docks
• Contrasting colors or materials for visual impact

Waterfall edges, where countertop material cascades down the sides, add dramatic elegance and are particularly popular in UAE's high-end properties.

4. Bold, Durable Materials

Quartz and Porcelain Dominance: Natural stone remains beautiful but high-maintenance. Engineered quartz offers stunning aesthetics with superior durability, stain resistance, and consistency. Large-format porcelain slabs mimic marble, concrete, or wood without the upkeep challenges in UAE's climate.

Metal Accents: Brushed brass, matte black, and champagne gold fixtures add luxury. Mixed metals create depth when coordinated thoughtfully.

Sustainable Choices: Recycled glass countertops, bamboo cabinetry, and reclaimed wood elements appeal to environmentally conscious homeowners.

5. Two-Tone Color Schemes

Monochromatic kitchens are giving way to sophisticated two-tone designs:
• Dark lower cabinets with light uppers
• Contrasting island colors
• Mixed wood tones with painted finishes
• Textured backsplashes against smooth cabinetry

Popular UAE combinations include navy blue with warm wood, charcoal gray with white marble, and sage green with brass accents.

6. Dramatic Backsplashes

Gone are days of simple subway tiles. 2025 backsplashes make bold statements:
• Floor-to-ceiling coverage
• Geometric patterns and 3D textures
• Metallic finishes and mirror elements
• Moroccan-inspired zellige tiles
• Book-matched marble or quartz slabs

These eye-catching designs add personality while protecting walls from splashes and heat—essential in busy UAE kitchens.

7. Hidden Appliance Garages

Countertop clutter is banished with dedicated appliance garages—cabinets with roll-up doors or pocket doors that conceal small appliances. Coffee makers, toasters, and blenders stay plugged in but out of sight, maintaining the minimalist aesthetic while ensuring easy access.

8. Enhanced Ventilation Systems

UAE's climate demands powerful ventilation. Modern kitchens feature:
• Ceiling-integrated extraction systems
• Downdraft vents that emerge when needed
• Silent, high-capacity range hoods
• Air purification integration
• Odor-eliminating technology

Proper ventilation prevents odors, reduces humidity, and maintains air quality—critical in open-plan UAE apartments.

9. Dedicated Zones and Workstations

Functional zoning creates efficiency:
• Beverage stations with wine coolers and coffee bars
• Baking zones with marble counters and ingredient storage
• Prep areas with oversized sinks and cutting surfaces
• Meal-prep stations with built-in scales and recipe tablets
• Cleanup zones with dual dishwashers

This organization accommodates multiple people working simultaneously—perfect for entertaining or families.

10. Lighting Layering

Proper illumination transforms kitchen functionality and ambiance:
• Pendant lights over islands as decorative focal points
• Under-cabinet LED strips for task lighting
• Recessed ceiling lights for general illumination
• Inside cabinet lighting showcasing glassware
• Dimmable controls for mood adjustment

Smart lighting systems adjust color temperature throughout the day, supporting circadian rhythms while providing ideal visibility for food preparation.

Sustainable and Wellness-Focused Features

UAE homeowners increasingly prioritize health and sustainability:
• Water filtration systems built into sinks
• Composting solutions integrated into waste systems
• Energy-efficient appliances with high star ratings
• Low-VOC paints and finishes
• Air purification systems removing cooking odors and pollutants

These features align with UAE's sustainability initiatives and create healthier living environments.

Budget-Friendly Renovation Tips

Not every trend requires a complete overhaul:
• Update cabinet hardware for instant modernization
• Replace just the island or lower cabinets for two-tone effect
• Install a statement backsplash without changing everything
• Upgrade lighting fixtures for dramatic impact
• Refinish existing cabinets with trendy colors

Strategic updates deliver maximum visual impact while controlling costs.

Working with UAE Regulations

Kitchen renovations in UAE must comply with specific regulations:
• Obtain necessary permits from your community management
• Use certified contractors for electrical and plumbing work
• Ensure gas installations meet safety standards
• Maintain adequate fire safety measures
• Consider noise restrictions during construction

Professional contractors navigate these requirements seamlessly, avoiding delays and penalties.

Planning Your Kitchen Renovation

Successful renovations require careful planning:

Set Clear Priorities: Identify must-haves versus nice-to-haves based on your lifestyle, cooking habits, and budget.

Measure Accurately: UAE properties vary significantly. Professional measurements ensure proper fit and avoid costly mistakes.

Consider Resale Value: While personalizing your space, remember that kitchens significantly influence property values. Balance trends with timeless elements.

Plan for UAE's Climate: Choose materials resistant to heat, humidity, and temperature fluctuations. Ensure adequate cooling and ventilation.

Timeline Realities: Quality kitchen renovations typically take 6-8 weeks. Plan accordingly, especially during Ramadan or summer when scheduling may be affected.

Why Choose Professional Help

Kitchen renovation involves complex coordination:
• Plumbing and electrical modifications
• Structural considerations for island installations
• Appliance integration and warranties
• Material sourcing and quality assurance
• Project management and timeline coordination

At Aqsa Tech, we specialize in complete kitchen transformations tailored to UAE lifestyles. Our experienced team manages every aspect—from design consultation through final installation—ensuring your kitchen reflects current trends while meeting your specific needs.

Ready to Transform Your Kitchen?

Whether you're planning a complete renovation or strategic updates, we're here to help. Contact Aqsa Tech today for a free consultation and let's create the kitchen of your dreams—functional, beautiful, and perfectly suited to modern UAE living.`,
        image: '/Services Stock images/Kitchen Renovation.png',
        category: 'Renovation',
        author: 'Sara Khan',
        date: '2025-11-01',
        readTime: '12 min read'
    },
    {
        id: 5,
        slug: 'plumbing-emergencies-what-to-do',
        title: 'Plumbing Emergencies: What to Do Before Help Arrives',
        excerpt: 'Quick action can prevent water damage. Learn the essential first steps for common plumbing emergencies.',
        content: `Plumbing emergencies strike without warning and can cause thousands of dirhams in water damage within minutes. While professional help is essential, knowing what to do immediately can minimize damage, protect your property, and potentially save your belongings. Here's your comprehensive emergency response guide.

The Golden Rule: Locate Your Main Water Shut-Off

Before any emergency occurs, every household member should know where the main water shut-off valve is located. In UAE apartments, it's typically:
• In the bathroom behind the toilet
• Under the kitchen sink
• In the utility closet
• Near the water heater

Mark it clearly and test it periodically to ensure it functions properly. In villas, the main valve is usually outside near the water meter. Shutting off water is your first line of defense against flooding.

Common Plumbing Emergencies and Immediate Actions

1. Burst Pipes

What Happens: Pipes burst due to pressure buildup, corrosion, or extreme temperature changes (rare in UAE but possible with AC condensation lines).

Immediate Actions:
• Shut off main water supply immediately
• Turn off electricity to affected areas if water contacts outlets or appliances
• Open faucets to drain remaining water and relieve pressure
• Move furniture, electronics, and valuables away from water
• Use towels, buckets, or wet vacuums to contain spreading water
• Take photos for insurance documentation
• Call emergency plumbing services

Prevention: Regular pipe inspections, especially in older buildings. Replace corroded pipes proactively.

2. Overflowing Toilets

What Happens: Blockages prevent proper drainage, causing water to overflow and potentially flood bathrooms.

Immediate Actions:
• Reach behind toilet and turn the water supply valve clockwise to close
• Do NOT flush again—this adds more water
• If valve is stuck, remove toilet tank lid and close the flapper valve (rubber piece at tank bottom)
• Use a plunger with petroleum jelly around the rim for better seal
• Plunge with firm, steady pressure (not violent thrusting)
• If unsuccessful after 10-15 attempts, don't continue—call professionals
• Mop up water immediately to prevent floor damage

What NOT to Do: Never use chemical drain cleaners in toilets—they damage porcelain and pipes, and complicate professional repairs.

3. Major Leaks from Sinks or Appliances

What Happens: Loose connections, failed hoses, or damaged fixtures release water continuously.

Immediate Actions:
• Locate the individual shut-off valve (usually under sink or behind appliance)
• Turn valve clockwise until completely closed
• Place buckets under leaking areas
• Dry surrounding areas thoroughly
• Check for water spreading to adjacent rooms
• Inspect for electrical hazards
• For washing machine leaks, turn off both hot and cold supply valves

Long-term Fix: Replace braided stainless steel hoses every 5 years as preventive maintenance. They're more durable than rubber hoses.

4. Water Heater Leaks

What Happens: Tank corrosion, pressure relief valve failure, or loose connections cause leaks.

Immediate Actions:
• Turn off power supply (circuit breaker for electric, gas valve for gas heaters)
• Shut off cold water supply to heater
• Attach hose to drain valve and direct to floor drain or outside
• Open pressure relief valve to reduce tank pressure
• Do NOT touch water or heater if electrically powered—risk of electrocution
• Call professionals immediately—water heater issues are complex

Warning Signs: Rust-colored water, popping sounds, or water pooling around base indicate impending failure.

5. Sewage Backup

What Happens: Main sewer line blockage causes waste water to back up through drains.

Immediate Actions:
• Stop using all water immediately—toilets, sinks, showers
• Do NOT attempt to clear yourself—sewage contains harmful bacteria
• Evacuate affected areas
• Turn off HVAC to prevent contaminated air circulation
• Contact emergency plumbing services immediately
• Alert building management in apartments
• Document situation for insurance

Health Hazard: Sewage contains dangerous pathogens. Avoid contact and ensure professional cleanup and disinfection.

6. Frozen or Burst AC Condensate Lines

What Happens: In UAE's extreme AC usage, condensate lines can clog or freeze, causing water overflow.

Immediate Actions:
• Turn off AC unit immediately
• Locate condensate drain pan (usually in ceiling or attached to air handler)
• Empty standing water
• Place towels or containers to catch dripping
• Check for ice on refrigerant lines—indicates bigger issue
• Clear visible blockages in drain line
• Call HVAC specialist for frozen lines

Prevention: Monthly drain line flushing with bleach-water solution prevents algae buildup.

Essential Emergency Toolkit

Keep these items accessible:
• Adjustable wrench for quick valve closure
• Pipe tape for temporary leak sealing
• Bucket and old towels for water containment
• Wet/dry vacuum for water removal
• Plunger with proper seal
• Flashlight for dark areas (under sinks, in cabinets)
• Waterproof gloves
• Emergency contact numbers prominently displayed

Temporary Leak Repairs (Until Professionals Arrive)

For Very Small Leaks:
• Pipe repair tape: Wrap tightly around leak area, extending 5cm beyond leak on each side
• Epoxy putty: Knead until uniform color, press firmly around leak, allow to cure
• Hose clamp with rubber patch: Position rubber over leak, tighten clamp

Important: These are TEMPORARY solutions only. Professional repair is essential.

When to Call Emergency Services Immediately

Some situations require instant professional response:
• Any sewage backup
• Burst pipes with active flooding
• Gas smell combined with water issues
• Water near electrical panels or outlets
• Ceiling leaks (indicate problems above)
• Complete loss of water pressure
• Water heater emergencies
• Flooding affecting multiple rooms

Water Damage Prevention

Even small leaks cause damage:

First Hour:
• Water spreads rapidly through flooring
• Furniture begins absorbing moisture
• Electronics at risk if contacted

First Day:
• Drywall begins deteriorating
• Mold spores begin forming
• Wood starts swelling and warping
• Metal fixtures begin rusting

First Week:
• Mold growth becomes visible
• Structural damage to wood and drywall
• Contamination risks increase
• Permanent staining occurs

Speed is critical—professional water extraction and drying should begin within 24-48 hours.

Insurance Considerations

Protect yourself financially:
• Photograph all damage before cleanup
• Document affected items and estimated values
• Keep receipts for emergency services
• Understand coverage limits and deductibles
• Report claims promptly
• Don't discard damaged items until insurer inspects

Most UAE home insurance covers sudden, accidental water damage but not gradual leaks or poor maintenance.

After the Emergency

Once professionals arrive:
• Describe exactly what happened and what you did
• Point out shut-off valves used
• Mention any unusual sounds, smells, or previous issues
• Ask about root cause and prevention
• Get written estimates for repairs
• Request preventive maintenance recommendations

Long-term Prevention Strategies

Avoid future emergencies:
• Annual professional plumbing inspections
• Replace hoses and supply lines every 5 years
• Install water leak detectors in risk areas
• Monitor water pressure (should be 40-60 PSI)
• Address small issues before they escalate
• Know your building's plumbing system age and condition
• Consider whole-house shut-off valve upgrade

24/7 Emergency Plumbing Services

At Aqsa Tech, we understand that plumbing emergencies don't wait for business hours. Our emergency response team is available 24/7 with:
• Rapid response times across UAE
• Fully stocked service vehicles
• Licensed, experienced technicians
• Transparent pricing with no hidden fees
• Complete damage assessment and repair
• Insurance documentation support
• Follow-up preventive maintenance

Don't let a plumbing emergency become a catastrophe. Save our emergency number now: +971 52 501 0132

Remember: Your quick, informed response can mean the difference between minor inconvenience and major property damage. Stay calm, act decisively, and call professionals immediately.`,
        image: '/Services Stock images/Plumbing & sanitary contracting.png',
        category: 'Plumbing',
        author: 'Omar Hassan',
        date: '2025-10-28',
        readTime: '11 min read'
    },
    {
        id: 6,
        slug: 'choosing-right-paint-uae-climate',
        title: 'Choosing the Right Paint for UAE\'s Climate',
        excerpt: 'Not all paints are created equal. Find out which finishes and formulas work best in the UAE.',
        content: `UAE's unique climate—extreme heat, intense UV radiation, high humidity, and occasional sandstorms—demands careful paint selection. The wrong choice leads to premature fading, chalking, peeling, and frequent repainting. Understanding paint technology and climate-specific requirements ensures lasting beauty and protection. Here's your comprehensive guide to choosing the right paint for UAE conditions.

Understanding UAE's Climate Challenges

Extreme UV Exposure: UAE receives some of the world's highest UV radiation levels. This breaks down paint binders, causing:
• Rapid color fading
• Chalking (powdery surface residue)
• Loss of gloss and sheen
• Reduced protective qualities

Temperature Extremes: Exterior surfaces can reach 70°C in summer, while interiors face constant AC cooling. These fluctuations cause:
• Paint expansion and contraction
• Cracking and peeling
• Reduced adhesion
• Premature deterioration

High Humidity: Coastal areas experience 80-90% humidity, promoting:
• Mold and mildew growth
• Paint blistering
• Poor drying and curing
• Substrate damage

Alkalinity: Many UAE buildings use materials with high alkalinity that attack standard paints, causing:
• Efflorescence (white crystalline deposits)
• Paint failure and peeling
• Discoloration

Salt Air Corrosion: Coastal properties face additional challenges:
• Metal corrosion under paint
• Paint degradation
• Increased maintenance frequency

Exterior Paint Selection

Premium 100% Acrylic Latex
Best Choice for UAE Exteriors

Why: Pure acrylic formulas offer superior:
• UV resistance and color retention
• Flexibility through temperature changes
• Moisture resistance
• Breathability preventing trapped moisture
• Excellent adhesion
• Extended lifespan (8-10 years vs. 3-5 for economy paints)

Recommended Brands: Jotun Facades, Dulux Weathershield, Nippon Matex, PPG Manor Hall

Elastomeric Coatings
For Problem Areas and Waterproofing

These thick, rubber-like paints provide:
• Superior crack bridging over hairline cracks
• Excellent waterproofing
• High UV resistance
• Thermal insulation properties
• Ideal for concrete block walls common in UAE

Applications: External walls with minor cracks, waterproofing needs, maximum durability requirements.

Important: Higher initial cost but significantly longer lifespan and fewer maintenance cycles.

Finish Selection for Exteriors

Flat/Matte: Hides surface imperfections but harder to clean. Best for low-traffic exterior walls with minimal exposure.

Satin/Eggshell: Slight sheen, easier cleaning, good durability. Ideal for most exterior applications in UAE.

Semi-Gloss/Gloss: Maximum durability and washability. Recommended for:
• Trim and doors
• Areas prone to moisture
• High-traffic zones
• Metal surfaces

Color Considerations
Light colors reflect heat and show less fading than dark colors. However, very light colors show dirt quickly in dusty environments. Medium-light colors often provide the best balance.

Interior Paint Selection

Low-VOC/Zero-VOC Formulas
Essential for UAE's Sealed Environments

UAE homes remain tightly sealed with continuous AC operation, concentrating harmful volatile organic compounds (VOCs). Choose paints with:
• Zero or low VOC emissions
• Greenguard certification
• Low odor formulations
• Quick drying times

Benefits:
• Healthier indoor air quality
• Suitable for occupied spaces
• Less ventilation required
• Safe for children and pets

Anti-Mold/Mildew Paints
Critical for Bathrooms and High-Humidity Areas

These specialized formulas contain antimicrobial additives preventing:
• Mold growth in bathrooms
• Mildew in AC vents and cool areas
• Fungal growth in poorly ventilated spaces

Essential for:
• Bathrooms and wet areas
• Kitchens
• Laundry rooms
• Any space with moisture exposure

Recommended Products: Dulux Diamond Bathroom, Jotun Lady Pure Color (antimicrobial), Nippon Odour-less Premium.

Washable/Scrubbable Finishes
For High-Traffic Areas

UAE's dusty environment requires frequent cleaning. Select paints rated for:
• Multiple cleaning cycles
• Stain resistance
• Durability against scrubbing
• Minimal sheen loss over time

Premium Interior Finishes

Flat/Matte:
• Best for ceilings
• Hides imperfections
• Low reflectivity
• Difficult to clean
• Not recommended for walls in dusty UAE conditions

Eggshell/Satin:
• Ideal for most interior walls
• Subtle sheen
• Good cleanability
• Balanced durability
• Most versatile finish

Semi-Gloss:
• Bathrooms and kitchens
• Trim, doors, and cabinets
• Children's rooms
• High-traffic areas
• Excellent durability and washability

Specialized Paint Types

Heat-Reflective Paints
Reduce Cooling Costs

These advanced coatings reflect infrared radiation, reducing surface temperatures by 10-15°C:
• Lower AC loads and energy bills
• Extended roof lifespan
• Improved comfort
• Environmental benefits

Applications: Roofs, sunward-facing walls, metal structures.

Popular Options: Jotun Jotashield Extreme, Nippon Weatherbond SolarReflect, Berger CoolShade.

Anti-Carbonation Coatings
Protect Concrete Structures

UAE's concrete buildings face carbonation—atmospheric CO2 reacting with concrete, corroding reinforcement:
• Specialized barrier coatings prevent CO2 penetration
• Essential for older buildings
• Extends structural life
• Reduces maintenance costs

Texture Paints
Add Dimension and Durability

Textured finishes offer:
• Hides wall imperfections
• Adds visual interest
• Enhanced durability
• Better dirt hiding
• Traditional or contemporary looks

Options: Sand texture, stucco effects, Venetian plaster, metallic finishes.

Application Best Practices for UAE

Surface Preparation is Critical

UAE's dusty environment makes thorough preparation essential:

1. Cleaning: Remove all dust, sand, and contamination with pressure washing or thorough scrubbing
2. Repair: Fill cracks, holes, and imperfections
3. Priming: Always use quality primer—never skip this step
4. Alkalinity Treatment: Apply alkali-resistant primer on fresh concrete or highly alkaline surfaces

Optimal Painting Conditions

Avoid painting during:
• Extreme heat (above 40°C)
• High humidity (above 85%)
• Windy, dusty days
• Direct sunlight on surfaces

Best months: October through April when temperatures and humidity are moderate.

Proper Application

• Follow manufacturer's recommended coverage rates
• Apply sufficient coats (typically 2-3 for exteriors)
• Allow proper drying time between coats
• Ensure adequate film thickness for protection
• Use quality brushes and rollers designed for climate

Common Painting Mistakes to Avoid

Choosing Economy Paints: Initial savings disappear with frequent repainting. Premium paints cost 40-60% more but last 2-3 times longer.

Inadequate Surface Prep: 80% of paint failures result from poor preparation, not paint quality.

Skipping Primer: Primers improve adhesion, seal surfaces, and enhance topcoat performance. Essential in UAE's demanding climate.

Wrong Finish Selection: Flat paint in kitchens or bathrooms invites problems. Match finish to room function.

Painting in Unsuitable Conditions: High temperatures and humidity compromise curing and performance.

Insufficient Coats: Single-coat coverage rarely provides adequate protection or color density.

Paint Maintenance Tips

Extend paint life with regular maintenance:

Exteriors:
• Rinse walls annually to remove dust and salt
• Inspect for cracks or peeling and touch up promptly
• Trim vegetation away from painted surfaces
• Monitor for mold or mildew growth
• Plan for repainting every 7-10 years (premium paint) or 3-5 years (economy paint)

Interiors:
• Dust walls regularly to prevent buildup
• Clean marks and stains promptly
• Avoid harsh chemicals that damage paint
• Touch up scratches and scuffs immediately
• Repaint high-traffic areas every 5-7 years

Cost Considerations

UAE Painting Cost Ranges (per square meter):
• Economy interior paint: 8-12 AED
• Premium interior paint: 15-25 AED
• Economy exterior paint: 12-18 AED
• Premium exterior paint: 25-40 AED
• Specialty coatings: 40-80 AED

Labor typically adds 10-20 AED/sqm depending on complexity.

Investment Perspective: Premium paint costs 50-100% more initially but lasts 2-3 times longer, resulting in 30-40% lower lifetime costs.

Environmental and Health Considerations

Green Building Standards: UAE actively promotes sustainable construction. Look for:
• LEED-certified paints
• Green Label certifications
• Recyclable packaging
• Low environmental impact manufacturing

Health Priorities:
• Zero VOC for bedrooms and children's areas
• Anti-microbial for health-sensitive occupants
• Low-odor for minimal disruption
• Formaldehyde-free formulations

Professional Application Matters

Quality paint requires quality application. Professional painters provide:
• Proper surface assessment and preparation
• Appropriate product selection for specific conditions
• Correct application techniques
• Warranty on workmanship
• Compliance with building codes
• Faster, cleaner completion

At Aqsa Tech, our painting specialists understand UAE's unique requirements. We offer:
• Climate-appropriate paint selection consultation
• Premium-quality materials from trusted brands
• Expert surface preparation and application
• Detailed color consultation
• Complete project management
• Competitive pricing with transparent quotes

Transform Your Space with Confidence

Whether refreshing interiors or protecting exteriors from harsh elements, choosing the right paint makes all the difference. Don't compromise on quality—the climate won't.

Contact Aqsa Tech today for a free consultation and quote. Let our experienced team help you select the perfect paint solution for your UAE property—beautiful results that last.`,
        image: '/Services Stock images/Painting contracting.png',
        category: 'Painting',
        author: 'Fatima Ali',
        date: '2025-10-25',
        readTime: '13 min read'
    },
    {
        id: 7,
        slug: 'energy-efficient-home-upgrades',
        title: 'Energy-Efficient Home Upgrades That Pay Off',
        excerpt: 'Reduce your electricity bills and carbon footprint with these smart home improvements.',
        content: `UAE residents face some of the highest electricity consumption rates globally, with air conditioning alone accounting for 60-70% of residential energy use. However, strategic home upgrades can dramatically reduce consumption, lower bills, and increase property value while supporting UAE's sustainability goals. Here's your guide to energy-efficient improvements that deliver real returns.

The Business Case for Energy Efficiency

Initial investment in energy-efficient upgrades typically pays for itself through:
• Reduced monthly electricity bills (savings of 30-50%)
• Increased property value (10-15% premium for green homes)
• Lower maintenance costs
• Extended equipment lifespan
• Improved comfort and air quality
• Alignment with UAE's green building initiatives

Understanding Your Energy Consumption

Before upgrading, identify where energy goes:
• Air conditioning: 60-70%
• Water heating: 15-20%
• Lighting: 10-15%
• Appliances: 5-10%
• Other: 5%

The biggest savings come from addressing the largest consumers first.

High-Impact HVAC Upgrades

1. Inverter Air Conditioning Systems

Traditional AC units run at full capacity, cycling on and off. Inverter technology:
• Adjusts compressor speed to maintain temperature
• Eliminates energy-wasting cycles
• Reduces consumption by 30-50%
• Provides more consistent cooling
• Operates more quietly
• Extends equipment life

ROI: Premium of 40-60% pays back within 2-3 years through energy savings.

Best Brands for UAE: Mitsubishi Electric, Daikin, LG, Samsung Digital Inverter.

2. Smart Thermostats and Zoning

Smart thermostats learn your schedule and preferences:
• Automatic temperature adjustments when away
• Remote control via smartphone
• Energy usage tracking and insights
• Integration with home automation
• Typical savings: 15-25% on cooling costs

Zoning systems direct cooling where needed:
• Independent temperature control per room/floor
• Reduces wasted cooling in unused spaces
• Particularly valuable in villas
• Savings: 20-30% compared to single-zone systems

Popular Options: Nest Learning Thermostat, Ecobee SmartThermostat, Honeywell Home T9.

3. Duct Sealing and Insulation

Up to 30% of cooled air escapes through duct leaks in UAE homes:
• Professional duct sealing prevents loss
• Insulation maintains air temperature
• Improves air quality by reducing dust infiltration
• Enhances system performance

Cost: 2,000-5,000 AED for typical apartment
Savings: 20-30% on cooling costs
Payback: 1-2 years

Window and Insulation Improvements

4. Double-Glazed Windows

Single-pane windows allow massive heat transfer:
• Double glazing reduces heat gain by 50-70%
• Low-E (low-emissivity) coatings reflect IR radiation
• Argon-filled gaps provide additional insulation
• Reduces AC load significantly
• Bonus: Noise reduction and UV protection

Investment: 800-1,500 AED per square meter
Energy Savings: 25-35% on cooling
Payback: 3-5 years, faster in sunward-facing rooms

Alternative: Window films provide 40-60% heat rejection at fraction of cost (200-400 AED/sqm installed).

5. Thermal Curtains and Smart Blinds

Simple yet effective:
• Thermal-backed curtains block heat gain
• Cellular/honeycomb shades trap air for insulation
• Automated blinds close during peak sun hours
• Light-colored exteriors reflect heat

Savings: 15-25% on cooling costs
Cost: 200-800 AED per window depending on size/quality
Payback: Under 1 year

6. Roof and Wall Insulation

Critical for villas and top-floor apartments:
• Reflective roof coatings reduce surface temperature by 10-15°C
• Spray foam insulation creates complete barrier
• Reduces attic/roof heat transfer by 60-80%

Typical Investment: 50-100 AED/sqm
Cooling Savings: 30-40% in top floors
Payback: 2-4 years

Lighting Upgrades

7. LED Lighting Throughout

LED technology has revolutionized lighting:
• 75-80% less energy than incandescent
• 40-50% less than CFL
• 25,000-50,000 hour lifespan (vs. 1,000 for incandescent)
• Minimal heat output
• Instant full brightness
• Available in all color temperatures

Investment: 15-40 AED per bulb
Savings: 100-150 AED per year per replaced bulb
Payback: Under 6 months

Whole-home conversion: 1,500-3,000 AED
Annual savings: 1,000-2,000 AED

8. Smart Lighting Controls

Motion sensors and timers eliminate wasted lighting:
• Automatic shutoff in unoccupied rooms
• Dimming during adequate daylight
• Scheduled operation
• Remote control and monitoring

Additional Savings: 20-30% beyond LED conversion
Cost: 100-300 AED per room for basic automation

Water Heating Efficiency

9. Solar Water Heaters

UAE's abundant sunshine makes solar water heating highly effective:
• 70-80% reduction in water heating costs
• Simple payback: 2-4 years
• Environmentally friendly
• Low maintenance
• May qualify for DEWA green initiatives

System Cost: 3,000-6,000 AED for typical home
Annual Savings: 1,200-2,000 AED

10. Heat Pump Water Heaters

Where solar isn't practical:
• Extract heat from ambient air
• 50-60% more efficient than electric resistance
• Consistent performance
• Longer lifespan

Premium: 1,500-2,500 AED over standard
Savings: 40-50% on water heating
Payback: 3-5 years

11. Low-Flow Fixtures

Reduce hot water usage:
• Low-flow showerheads maintain pressure while using 30-50% less water
• Aerating faucets reduce flow without compromising function
• Savings on both water and heating costs

Investment: 50-200 AED per fixture
Combined Savings: 300-500 AED annually
Payback: Under 1 year

High-Efficiency Appliances

12. Energy Star/EU Energy Label Appliances

When replacing appliances, prioritize efficiency:

Refrigerators:
• EU A+++ models use 50% less energy than older units
• Inverter compressors provide additional savings
• Right-sizing prevents waste (bigger ≠ better)

Washing Machines:
• Front-loading models use 40-50% less water and energy
• Cold water washing saves heating costs
• Efficient spin cycles reduce dryer usage

Dishwashers:
• Modern units use less water than hand washing
• Energy Star models reduce consumption by 35%
• Eco-modes maximize efficiency

ROI Consideration: Efficient models cost 20-40% more but save 100-300 AED annually over 10-15 year lifespan.

Building Envelope Improvements

13. Air Sealing

Infiltration of hot outside air forces AC to work harder:
• Seal gaps around doors, windows, pipes, and cables
• Weatherstripping on moving components
• Caulking for fixed gaps
• Particularly important in older buildings

DIY Cost: 200-500 AED in materials
Professional Service: 1,000-2,000 AED
Savings: 10-15% on cooling
Payback: Under 1 year

14. Shade Structures and Landscaping

External shading prevents heat before it reaches building:
• Pergolas and awnings over windows
• Strategically placed trees (although limited in UAE)
• Shade sails on balconies and patios
• Reduces direct solar gain by 70-90%

Investment varies widely: 2,000-20,000+ AED
Cooling Savings: 15-25% for affected areas
Additional Benefits: Outdoor living space, aesthetics, property value

Smart Home Integration

15. Complete Home Automation

Integrated systems optimize all energy-consuming devices:
• Centralized control of HVAC, lighting, blinds
• Scheduling based on occupancy and sun position
• Remote monitoring and adjustment
• Energy usage tracking and reporting
• Scene creation for different activities

Systems: Control4, Crestron, Savant, or budget options like Google Home/Alexa integration

Investment: 5,000-50,000+ AED depending on sophistication
Savings: 25-40% total energy reduction possible
Payback: 3-7 years, plus significant lifestyle benefits

Renewable Energy

16. Rooftop Solar Panels

For villas and some apartments with roof access:
• Offset 50-100% of electricity consumption
• Net metering credits excess production
• 25-year system lifespan
• DEWA Shams UAE program support
• Increases property value significantly

System Cost: 15,000-40,000 AED for typical villa
Annual Savings: 4,000-10,000 AED
Payback: 4-8 years

Note: Requires DEWA approval and coordination with building management in community developments.

Behavioral Changes (Zero Investment)

17. No-Cost Energy Savings

Technology helps, but habits matter:
• Set AC to 24-25°C instead of 20-21°C (save 8% per degree)
• Turn off lights when leaving rooms
• Use ceiling fans to circulate air
• Close curtains during peak sun (10 AM - 4 PM)
• Unplug devices not in use (eliminate phantom loads)
• Run dishwashers and washing machines with full loads
• Use cold water for laundry when possible
• Maintain AC filters monthly
• Schedule high-energy tasks during cooler hours

Potential Savings: 15-20% without spending a dirham

Government Incentives and Programs

UAE supports energy efficiency through:

DEWA Programs:
• Shams UAE: Net metering for solar installations
• Green Building: Incentives for certified green homes
• Tariff Structures: Slab rates reward conservation

Building Efficiency Standards:
• UAE Green Building Regulations mandate efficiency in new construction
• Retrofit programs for existing buildings
• Al Safat rating system recognizes efficient buildings

Financial Support:
• Some banks offer green home improvement loans
• Certain upgrades qualify for reduced municipality fees
• Increased property values offset upgrade costs

Prioritizing Your Upgrades

Limited budget? Focus on highest ROI first:

Quick Wins (under 1 year payback):
• LED lighting
• Air sealing
• Smart thermostat
• Window films
• Behavioral changes

Medium Term (1-3 years):
• Duct sealing
• Inverter AC replacement
• Low-flow fixtures
• Thermal curtains

Long Term (3-7 years):
• Double glazing
• Solar water heating
• Roof insulation
• Solar panels

Measuring Success

Track your progress:
• Monthly DEWA bills before and after
• Annual consumption comparisons
• Cost per kWh trends
• Actual payback vs. projections

Smart meters and monitoring systems provide real-time feedback, encouraging continued efficiency.

Professional Assessment

Before major investments, consider:
• Professional energy audit (500-1,500 AED)
• Identifies specific problems
• Prioritizes improvements
• Provides cost-benefit analysis
• May reveal hidden issues

Aqsa Tech offers comprehensive energy efficiency assessments and implementation services. Our experts:
• Evaluate your home's energy performance
• Recommend prioritized upgrades
• Provide accurate cost and savings projections
• Handle installation of all improvements
• Ensure quality and code compliance

Start Saving Today

Energy efficiency isn't just environmental responsibility—it's smart economics. With UAE's high energy costs, strategic upgrades deliver returns that few investments can match while improving comfort and increasing property value.

Contact Aqsa Tech for a free energy efficiency consultation. Let's create your customized upgrade plan and start reducing your bills while building a more sustainable future.`,
        image: '/Services Stock images/Air-coditioning installation.png',
        category: 'Energy Efficiency',
        author: 'Aqsa Tech Team',
        date: '2025-10-20',
        readTime: '15 min read'
    }
];
const categories = [
    'All',
    'Company',
    'Home Maintenance',
    'HVAC',
    'Renovation',
    'Plumbing',
    'Painting',
    'Energy Efficiency'
];
}),
"[project]/src/data/blogPostsTranslations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Blog Posts Translations
__turbopack_context__.s([
    "blogPostsTranslations",
    ()=>blogPostsTranslations
]);
const blogPostsTranslations = {
    EN: {
        categories: [
            'All',
            'Company',
            'Home Maintenance',
            'HVAC',
            'Renovation',
            'Plumbing',
            'Painting',
            'Energy Efficiency'
        ],
        posts: [
            {
                id: 1,
                slug: 'elevating-spaces-with-excellence-aqsatech',
                title: 'Elevating Spaces with Excellence – AQSATECH Contracting & Maintenance Services',
                excerpt: 'At AQSATECH, we believe that every space has the potential to inspire comfort, functionality, and elegance. Discover our comprehensive range of services.',
                category: 'Company'
            },
            {
                id: 2,
                slug: 'top-10-home-maintenance-tips-dubai',
                title: 'Top 10 Home Maintenance Tips for Dubai Residents',
                excerpt: 'Keep your Dubai home in perfect condition year-round with these essential maintenance tips from our expert team.',
                category: 'Home Maintenance'
            },
            {
                id: 3,
                slug: 'ac-maintenance-summer-guide',
                title: 'AC Maintenance: Your Complete Summer Guide',
                excerpt: 'Beat the Dubai heat with our comprehensive AC maintenance checklist and professional tips.',
                category: 'HVAC'
            },
            {
                id: 4,
                slug: 'kitchen-renovation-trends-2025',
                title: 'Kitchen Renovation Trends 2025: What\'s Hot in Dubai',
                excerpt: 'Discover the latest kitchen design trends transforming Dubai homes this year.',
                category: 'Renovation'
            },
            {
                id: 5,
                slug: 'plumbing-emergencies-what-to-do',
                title: 'Plumbing Emergencies: What to Do Before Help Arrives',
                excerpt: 'Quick action can prevent water damage. Learn the essential first steps for common plumbing emergencies.',
                category: 'Plumbing'
            },
            {
                id: 6,
                slug: 'choosing-right-paint-dubai-climate',
                title: 'Choosing the Right Paint for Dubai\'s Climate',
                excerpt: 'Not all paints are created equal. Find out which finishes and formulas work best in the UAE.',
                category: 'Painting'
            },
            {
                id: 7,
                slug: 'energy-efficient-home-upgrades',
                title: 'Energy-Efficient Home Upgrades That Pay Off',
                excerpt: 'Reduce your electricity bills and carbon footprint with these smart home improvements.',
                category: 'Energy Efficiency'
            }
        ]
    }
};
}),
"[project]/src/hooks/useTranslatedBlogPosts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslatedBlogPosts",
    ()=>useTranslatedBlogPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogPosts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/blogPosts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogPostsTranslations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/blogPostsTranslations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
;
;
;
;
const useTranslatedBlogPosts = ()=>{
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const translatedPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Always return English posts since we only have EN now
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogPosts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blogPosts"];
    }, []);
    const translatedCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const translations = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogPostsTranslations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blogPostsTranslations"][language];
        return translations.categories;
    }, [
        language
    ]);
    return {
        translatedPosts,
        translatedCategories
    };
};
}),
"[project]/src/utils/whatsapp.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/views/Blog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Blog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslatedBlogPosts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslatedBlogPosts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/whatsapp.ts [app-ssr] (ecmascript)");
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
// Memoize animation variants outside component
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
function Blog() {
    const { t, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const ___router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const navigate = (path)=>{
        if (typeof path === "number" && path === -1) {
            ___router.back();
        } else if (typeof path === "string") {
            ___router.push(path);
        }
    };
    const { translatedPosts, translatedCategories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslatedBlogPosts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslatedBlogPosts"])();
    const allCategoriesKey = translatedCategories[0];
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(allCategoriesKey);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        requestAnimationFrame(()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setActiveCategory(translatedCategories[0]);
    }, [
        translatedCategories
    ]);
    const filteredPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return activeCategory === allCategoriesKey ? translatedPosts : translatedPosts.filter((post)=>post.category === activeCategory);
    }, [
        activeCategory,
        allCategoriesKey,
        translatedPosts
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-soft-gray-light pt-20 sm:pt-24 overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-b border-gray-200 overflow-x-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 w-full overflow-x-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: ()=>navigate(-1),
                            className: `flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 transition-colors text-sm sm:text-base ${isRTL ? 'flex-row-reverse ml-auto' : ''}`,
                            whileHover: {
                                x: isRTL ? 4 : -4
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: `w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'rotate-180' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Blog.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: t('common.back')
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Blog.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/Blog.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "text-center sm:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 ${isRTL ? 'sm:text-right' : ''}`,
                                    children: t('blog.title')
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Blog.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm sm:text-base lg:text-lg xl:text-xl text-gray-900 max-w-3xl mx-auto sm:mx-0 mb-4 sm:mb-6 font-medium ${isRTL ? 'sm:text-right' : ''}`,
                                    children: t('blog.subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Blog.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-2 scrollbar-hide mt-4 sm:mt-6 lg:mt-8 w-full ${isRTL ? 'flex-row-reverse justify-start sm:justify-start' : 'justify-start sm:justify-start'}`,
                                    children: translatedCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCategory(cat),
                                            className: `px-4 sm:px-5 lg:px-7 py-2 sm:py-2.5 lg:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base font-bold whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex-shrink-0 ${activeCategory === cat ? 'bg-gray-900 text-white shadow-xl scale-105 ring-2 ring-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-500'}`,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/src/views/Blog.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/Blog.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/Blog.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/Blog.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/Blog.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16 w-full overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 w-full items-stretch",
                        children: filteredPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].article, {
                                variants: cardVariants,
                                whileHover: {
                                    y: -8,
                                    transition: {
                                        duration: 0.3
                                    }
                                },
                                className: "bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-48 sm:h-56 lg:h-64 overflow-hidden flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: post.image,
                                                alt: post.title,
                                                loading: "lazy",
                                                decoding: "async",
                                                width: 800,
                                                height: 450,
                                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                                style: {
                                                    contentVisibility: 'auto'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Blog.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Blog.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium`,
                                                children: post.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Blog.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Blog.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 sm:p-5 lg:p-6 flex flex-col flex-grow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-brand-teal transition-colors line-clamp-2 ${isRTL ? 'text-right' : 'text-left'}`,
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Blog.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-gray-900 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-grow ${isRTL ? 'text-right' : 'text-left'}`,
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Blog.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Blog.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 21
                                                            }, this),
                                                            new Date(post.date).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Blog.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Blog.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, this),
                                                            post.readTime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Blog.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/Blog.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 21
                                                            }, this),
                                                            post.author
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/Blog.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/Blog.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                onClick: ()=>navigate(`/blog/${post.slug}`),
                                                variant: "dark",
                                                size: "md",
                                                fullWidth: true,
                                                children: t('blog.readMore')
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Blog.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Blog.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, post.id, true, {
                                fileName: "[project]/src/views/Blog.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/Blog.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    filteredPosts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center py-16 ${isRTL ? 'text-right' : 'text-left'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-900 text-lg font-medium",
                            children: t('blog.noArticles')
                        }, void 0, false, {
                            fileName: "[project]/src/views/Blog.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/Blog.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Blog.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-brand-gradient text-white py-10 sm:py-14 lg:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2 sm:px-0 text-white",
                                children: t('blog.needProfessionalHelp')
                            }, void 0, false, {
                                fileName: "[project]/src/views/Blog.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg text-white mb-6 sm:mb-8 px-2 sm:px-0 font-medium",
                                children: t('blog.professionalHelpDescription')
                            }, void 0, false, {
                                fileName: "[project]/src/views/Blog.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        as: "a",
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWhatsAppUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WHATSAPP_PHONE"], t('whatsapp.blogQuote')),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Get Free Quote on WhatsApp",
                                        variant: "dark",
                                        size: "lg",
                                        className: "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base",
                                        children: t('hero.getFreeQuote')
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Blog.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        as: "a",
                                        href: "tel:+971525010132",
                                        variant: "outline",
                                        size: "lg",
                                        className: "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-gray-900 text-sm sm:text-base",
                                        children: t('hero.callNow')
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/Blog.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Blog.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Blog.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/Blog.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/Blog.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Blog.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/blog/ClientPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogClientPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Blog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/Blog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function BlogClientPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen"
        }, void 0, false, {
            fileName: "[project]/src/app/blog/ClientPage.tsx",
            lineNumber: 7,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$Blog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/blog/ClientPage.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/blog/ClientPage.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>User
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_9fd34fe0._.js.map