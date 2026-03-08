(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/performance144.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 144Hz Performance Optimization Utilities
 * Ultra-smooth performance optimizations for high refresh rate displays
 */ /**
 * Throttle function optimized for 144Hz (6.94ms frame time)
 */ __turbopack_context__.s([
    "DOMBatcher",
    ()=>DOMBatcher,
    "addPassiveEventListener",
    ()=>addPassiveEventListener,
    "createOptimizedObserver",
    ()=>createOptimizedObserver,
    "domBatcher",
    ()=>domBatcher,
    "gpuAccelerate",
    ()=>gpuAccelerate,
    "motionConfig144Hz",
    ()=>motionConfig144Hz,
    "optimizeImage",
    ()=>optimizeImage,
    "raf144Hz",
    ()=>raf144Hz,
    "supportsHighRefreshRate",
    ()=>supportsHighRefreshRate,
    "throttle144Hz",
    ()=>throttle144Hz
]);
function throttle144Hz(func, delay = 7 // ~144fps = 6.94ms per frame
) {
    let lastCall = 0;
    let timeoutId = null;
    return function(...args) {
        const now = performance.now();
        const timeSinceLastCall = now - lastCall;
        if (timeSinceLastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        } else {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(()=>{
                lastCall = performance.now();
                func.apply(this, args);
            }, delay - timeSinceLastCall);
        }
    };
}
function raf144Hz(callback) {
    return requestAnimationFrame(()=>{
        requestAnimationFrame(callback); // Double RAF for smoother updates
    });
}
function addPassiveEventListener(element, event, handler, options = {}) {
    const opts = {
        passive: true,
        ...options
    };
    element.addEventListener(event, handler, opts);
    return ()=>element.removeEventListener(event, handler, opts);
}
function gpuAccelerate(element) {
    if (!element) return;
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
    element.style.webkitBackfaceVisibility = 'hidden';
    element.style.willChange = 'transform, opacity';
    element.style.isolation = 'isolate';
}
function optimizeImage(img) {
    img.loading = 'lazy';
    img.decoding = 'async';
    img.style.contentVisibility = 'auto';
    img.style.transform = 'translateZ(0)';
    img.style.willChange = 'transform';
}
function createOptimizedObserver(callback, options = {}) {
    return new IntersectionObserver(callback, {
        rootMargin: '50px',
        threshold: [
            0,
            0.1,
            0.5,
            1
        ],
        ...options
    });
}
class DOMBatcher {
    reads = [];
    writes = [];
    scheduled = false;
    read(fn) {
        this.reads.push(fn);
        this.schedule();
    }
    write(fn) {
        this.writes.push(fn);
        this.schedule();
    }
    schedule() {
        if (this.scheduled) return;
        this.scheduled = true;
        raf144Hz(()=>{
            // Batch all reads
            this.reads.forEach((fn)=>fn());
            this.reads = [];
            // Then batch all writes
            raf144Hz(()=>{
                this.writes.forEach((fn)=>fn());
                this.writes = [];
                this.scheduled = false;
            });
        });
    }
}
const domBatcher = new DOMBatcher();
function supportsHighRefreshRate() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Check for 120Hz+ displays
    const mediaQuery = window.matchMedia('(min-resolution: 120dpi)');
    return mediaQuery.matches || window.devicePixelRatio >= 2;
}
const motionConfig144Hz = {
    transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 0.5
    },
    layout: {
        type: 'spring',
        stiffness: 500,
        damping: 30
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExploreOurServices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$performance144$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/performance144.ts [app-client] (ecmascript)");
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
const ExploreOurServices = ()=>{
    _s();
    const { t, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('building');
    const [isCatOpen, setIsCatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExploreOurServices.useEffect": ()=>{
            const handleClickOutside = {
                "ExploreOurServices.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                        setIsCatOpen(false);
                    }
                }
            }["ExploreOurServices.useEffect.handleClickOutside"];
            if (isCatOpen) {
                document.addEventListener('mousedown', handleClickOutside);
                document.addEventListener('touchstart', handleClickOutside);
            }
            return ({
                "ExploreOurServices.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                    document.removeEventListener('touchstart', handleClickOutside);
                }
            })["ExploreOurServices.useEffect"];
        }
    }["ExploreOurServices.useEffect"], [
        isCatOpen
    ]);
    const categories = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ExploreOurServices.useMemo[categories]": ()=>[
                {
                    id: 'building',
                    name: t('exploreServices.buildingMaintenance'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                        lineNumber: 57,
                        columnNumber: 77
                    }, ("TURBOPACK compile-time value", void 0))
                },
                {
                    id: 'property',
                    name: t('exploreServices.propertyMaintenance'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                        lineNumber: 58,
                        columnNumber: 77
                    }, ("TURBOPACK compile-time value", void 0))
                },
                {
                    id: 'renovation',
                    name: t('exploreServices.renovation'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                        lineNumber: 59,
                        columnNumber: 70
                    }, ("TURBOPACK compile-time value", void 0))
                },
                {
                    id: 'mep',
                    name: t('exploreServices.mep'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                        lineNumber: 60,
                        columnNumber: 56
                    }, ("TURBOPACK compile-time value", void 0))
                },
                {
                    id: 'hvac',
                    name: t('exploreServices.hvac'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                        lineNumber: 61,
                        columnNumber: 58
                    }, ("TURBOPACK compile-time value", void 0))
                },
                {
                    id: 'painting',
                    name: t('exploreServices.painting'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                        lineNumber: 62,
                        columnNumber: 66
                    }, ("TURBOPACK compile-time value", void 0))
                }
            ]
    }["ExploreOurServices.useMemo[categories]"], [
        t
    ]);
    const categoryContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ExploreOurServices.useMemo[categoryContent]": ()=>({
                building: {
                    title: t('exploreServices.buildingTitle'),
                    description: t('exploreServices.buildingDescription'),
                    image: '/images/photos/explore-building.jpg',
                    tags: [
                        {
                            name: t('exploreServices.buildingTag1')
                        },
                        {
                            name: t('exploreServices.buildingTag2')
                        },
                        {
                            name: t('exploreServices.buildingTag3')
                        },
                        {
                            name: t('exploreServices.buildingTag4')
                        },
                        {
                            name: t('exploreServices.buildingTag5')
                        }
                    ]
                },
                property: {
                    title: t('exploreServices.propertyTitle'),
                    description: t('exploreServices.propertyDescription'),
                    image: '/Services Stock images/Property Management.png',
                    tags: [
                        {
                            name: t('exploreServices.propertyTag1')
                        },
                        {
                            name: t('exploreServices.propertyTag2')
                        },
                        {
                            name: t('exploreServices.propertyTag3')
                        },
                        {
                            name: t('exploreServices.propertyTag4')
                        },
                        {
                            name: t('exploreServices.propertyTag5')
                        }
                    ]
                },
                renovation: {
                    title: t('exploreServices.renovationTitle'),
                    description: t('exploreServices.renovationDescription'),
                    image: '/images/photos/explore-renovation.jpg',
                    tags: [
                        {
                            name: t('exploreServices.renovationTag1')
                        },
                        {
                            name: t('exploreServices.renovationTag2')
                        },
                        {
                            name: t('exploreServices.renovationTag3')
                        },
                        {
                            name: t('exploreServices.renovationTag4')
                        },
                        {
                            name: t('exploreServices.renovationTag5')
                        }
                    ]
                },
                mep: {
                    title: t('exploreServices.mepTitle'),
                    description: t('exploreServices.mepDescription'),
                    image: '/Services Stock images/Plumbing and electrical.png',
                    tags: [
                        {
                            name: t('exploreServices.mepTag1')
                        },
                        {
                            name: t('exploreServices.mepTag2')
                        },
                        {
                            name: t('exploreServices.mepTag3')
                        },
                        {
                            name: t('exploreServices.mepTag4')
                        },
                        {
                            name: t('exploreServices.mepTag5')
                        }
                    ]
                },
                hvac: {
                    title: t('exploreServices.hvacTitle'),
                    description: t('exploreServices.hvacDescription'),
                    image: '/Services Stock images/HVAC & AC Service.png',
                    tags: [
                        {
                            name: t('exploreServices.hvacTag1')
                        },
                        {
                            name: t('exploreServices.hvacTag2')
                        },
                        {
                            name: t('exploreServices.hvacTag3')
                        },
                        {
                            name: t('exploreServices.hvacTag4')
                        },
                        {
                            name: t('exploreServices.hvacTag5')
                        }
                    ]
                },
                painting: {
                    title: t('exploreServices.paintingTitle'),
                    description: t('exploreServices.paintingDescription'),
                    image: '/Services Stock images/Painting and Decor 2.png',
                    tags: [
                        {
                            name: t('exploreServices.paintingTag1')
                        },
                        {
                            name: t('exploreServices.paintingTag2')
                        },
                        {
                            name: t('exploreServices.paintingTag3')
                        },
                        {
                            name: t('exploreServices.paintingTag4')
                        },
                        {
                            name: t('exploreServices.paintingTag5')
                        }
                    ]
                }
            })
    }["ExploreOurServices.useMemo[categoryContent]"], [
        t
    ]);
    // Tasker list and animations removed per request
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-white py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''} justify-between items-start sm:items-center mb-6 sm:mb-8 lg:mb-12 gap-4 sm:gap-0`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full sm:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-2 sm:mb-3 text-center sm:text-left ${isRTL ? 'sm:text-right' : ''}`,
                                    children: t('exploreServices.title')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-gray-900 text-sm sm:text-base lg:text-lg text-center sm:text-left font-medium ${isRTL ? 'sm:text-right' : ''}`,
                                    children: t('exploreServices.subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>navigate('/services'),
                            variant: "dark",
                            size: "md",
                            className: "w-full sm:w-auto",
                            children: t('exploreServices.viewAllServices')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:hidden mb-6 relative z-30",
                    ref: dropdownRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isCatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "fixed inset-0 bg-black/30 z-40",
                                onClick: ()=>setIsCatOpen(false),
                                onTouchStart: (e)=>{
                                    e.preventDefault();
                                    setIsCatOpen(false);
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            ref: buttonRef,
                            type: "button",
                            "aria-expanded": isCatOpen,
                            "aria-haspopup": "listbox",
                            onClick: (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                setIsCatOpen((v)=>!v);
                            },
                            onTouchStart: (e)=>{
                                e.stopPropagation();
                            },
                            className: `w-full justify-between flex items-center bg-white border-2 ${isCatOpen ? 'border-brand-teal shadow-lg' : 'border-gray-200'} text-gray-900 px-4 py-4 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md touch-manipulation ${isRTL ? 'flex-row-reverse' : ''}`,
                            whileTap: {
                                scale: 0.98
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-3 flex-1 min-w-0 ${isRTL ? 'flex-row-reverse justify-end' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `flex items-center flex-shrink-0 ${isRTL ? 'order-2 ml-2' : 'mr-0'}`,
                                            children: categories.find((c)=>c.id === activeCategory)?.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm font-semibold truncate text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`,
                                            children: categories.find((c)=>c.id === activeCategory)?.name || t('exploreServices.selectCategory')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: `w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${isCatOpen ? 'rotate-180 text-brand-teal' : ''} ${isRTL ? 'mr-0' : 'ml-2'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isCatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: -10,
                                    scale: 0.95
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10,
                                    scale: 0.95
                                },
                                transition: {
                                    duration: 0.2,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                className: "absolute z-50 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-h-[60vh] overflow-y-auto overscroll-contain",
                                role: "listbox",
                                onClick: (e)=>e.stopPropagation(),
                                onTouchStart: (e)=>e.stopPropagation(),
                                children: categories.map((category)=>{
                                    const active = activeCategory === category.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "option",
                                        "aria-selected": active,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setActiveCategory(category.id);
                                            setIsCatOpen(false);
                                        },
                                        onTouchStart: (e)=>{
                                            e.stopPropagation();
                                        },
                                        className: `w-full ${isRTL ? 'text-right flex-row-reverse' : 'text-left'} px-4 py-4 flex items-center gap-3 transition-all duration-200 touch-manipulation ${active ? 'bg-brand-teal/10 text-brand-teal font-bold border-l-4 border-brand-teal' : 'text-gray-900 hover:bg-gray-50 active:bg-gray-100'} ${isRTL ? 'border-r-4 border-l-0' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex items-center flex-shrink-0 w-6 h-6 ${active ? 'text-brand-teal' : 'text-gray-700'}`,
                                                children: category.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                                lineNumber: 250,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-semibold flex-1 text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`,
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                                lineNumber: 253,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    scale: 0
                                                },
                                                animate: {
                                                    scale: 1
                                                },
                                                className: "w-2.5 h-2.5 rounded-full bg-brand-teal flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                                lineNumber: 257,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, category.id, true, {
                                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                                        lineNumber: 230,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `hidden sm:flex gap-6 lg:gap-8 mb-8 overflow-x-auto pb-4 scrollbar-hide border-b border-gray-200 ${isRTL ? 'flex-row-reverse' : ''}`,
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                y: -2
                            },
                            onClick: ()=>setActiveCategory(category.id),
                            className: `flex flex-col items-center gap-2 min-w-fit transition-all duration-300 ${activeCategory === category.id ? 'text-brand-teal' : 'text-gray-900 hover:text-brand-blue'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transition-colors duration-300 ${activeCategory === category.id ? 'text-brand-teal' : 'text-gray-700'}`,
                                    children: category.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs sm:text-sm font-medium whitespace-nowrap text-gray-900",
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeCategory === category.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layoutId: "activeTab",
                                    className: "h-0.5 w-full bg-brand-blue",
                                    transition: {
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 30
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, category.id, true, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
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
                        style: {
                            transform: 'translateZ(0)',
                            willChange: 'transform, opacity',
                            backfaceVisibility: 'hidden'
                        },
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg group ${isRTL ? 'lg:order-2' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        ref: (img)=>{
                                            if (img) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$performance144$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizeImage"])(img);
                                        },
                                        src: categoryContent[activeCategory]?.image || '/images/photos/explore-property.jpg',
                                        alt: categoryContent[activeCategory]?.title || 'Property Maintenance',
                                        loading: "lazy",
                                        decoding: "async",
                                        width: 800,
                                        height: 800,
                                        sizes: "(max-width: 1024px) 100vw, 50vw",
                                        className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                                        style: {
                                            contentVisibility: 'auto',
                                            transform: 'translateZ(0)',
                                            willChange: 'transform',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden'
                                        },
                                        onError: (e)=>{
                                            const target = e.target;
                                            target.src = '/images/photos/explore-property.jpg';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col justify-center text-center sm:text-left ${isRTL ? 'lg:order-1 sm:text-right' : ''} px-2 sm:px-0 w-full`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal text-gray-900 mb-3 sm:mb-4 ${isRTL ? 'text-right' : 'text-left'}`,
                                            children: categoryContent[activeCategory]?.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5 lg:mb-6 xl:mb-8 ${isRTL ? 'text-right' : 'text-left'}`,
                                            children: categoryContent[activeCategory]?.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 justify-center ${isRTL ? 'sm:justify-end' : 'sm:justify-start'} overflow-visible`,
                                            children: categoryContent[activeCategory]?.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-white hover:bg-brand-blue text-gray-900 px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border-2 border-gray-300 hover:border-brand-blue/60 shadow-sm hover:shadow-md relative z-10 overflow-visible whitespace-nowrap",
                                                    style: {
                                                        color: '#1F2937'
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.color = '#FFFFFF';
                                                        e.currentTarget.style.backgroundColor = '#174A67';
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.color = '#1F2937';
                                                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                                                    },
                                                    children: tag.name
                                                }, index, false, {
                                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, activeCategory, true, {
                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExploreOurServices.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ExploreOurServices.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ExploreOurServices, "wADxv+GTyLgJEy4QyPdsPzjDTHA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ExploreOurServices;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ExploreOurServices);
var _c, _c1;
__turbopack_context__.k.register(_c, "ExploreOurServices");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Wrench
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
            key: "1ngwbx"
        }
    ]
];
const Wrench = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("wrench", __iconNode);
;
 //# sourceMappingURL=wrench.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wrench",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Package
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }
    ],
    [
        "path",
        {
            d: "M12 22V12",
            key: "d0xqtd"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "path",
        {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }
    ]
];
const Package = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("package", __iconNode);
;
 //# sourceMappingURL=package.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Package",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>UserCheck
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 11 2 2 4-4",
            key: "9rsbq5"
        }
    ],
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const UserCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("user-check", __iconNode);
;
 //# sourceMappingURL=user-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Paintbrush
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m14.622 17.897-10.68-2.913",
            key: "vj2p1u"
        }
    ],
    [
        "path",
        {
            d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
            key: "18tc5c"
        }
    ],
    [
        "path",
        {
            d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
            key: "ytzfxy"
        }
    ]
];
const Paintbrush = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("paintbrush", __iconNode);
;
 //# sourceMappingURL=paintbrush.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Paintbrush",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1e6e039f._.js.map