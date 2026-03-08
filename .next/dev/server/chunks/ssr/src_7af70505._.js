module.exports = [
"[project]/src/utils/performance144.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    // Check for 120Hz+ displays
    const mediaQuery = undefined;
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
}),
"[project]/src/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$performance144$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/performance144.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const About = ()=>{
    const { t, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "w-full bg-white py-10 sm:py-14 lg:py-20 overflow-x-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-gray-200 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 lg:min-h-[420px] w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative h-56 sm:h-64 md:h-72 lg:h-auto ${isRTL ? 'lg:order-2' : ''} w-full`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    ref: (img)=>{
                                        if (img) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$performance144$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optimizeImage"])(img);
                                    },
                                    src: "/images/photos/about-main.jpg",
                                    alt: "Aqsatech in Dubai - Modern UAE residential building exterior - Aqsa Tech property maintenance and renovation services Dubai",
                                    loading: "lazy",
                                    decoding: "async",
                                    width: 1200,
                                    height: 900,
                                    sizes: "(max-width: 1024px) 100vw, 50vw",
                                    className: "absolute inset-0 w-full h-full object-cover object-center",
                                    style: {
                                        contentVisibility: 'auto',
                                        transform: 'translateZ(0)',
                                        willChange: 'transform',
                                        backfaceVisibility: 'hidden'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/photos/about-detail.jpg",
                                    alt: "Aqsatech in Dubai - UAE modern architecture detail - Aqsa Tech renovation services Dubai",
                                    loading: "lazy",
                                    decoding: "async",
                                    width: 96,
                                    height: 64,
                                    sizes: "96px",
                                    className: `absolute ${isRTL ? 'right-4' : 'left-4'} bottom-4 w-24 h-16 object-cover rounded-md shadow-md hidden sm:block`,
                                    style: {
                                        contentVisibility: 'auto'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-5 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center ${isRTL ? 'lg:order-1' : ''} text-center sm:text-left w-full`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h4, {
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
                                    },
                                    className: `inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold tracking-[0.16em] uppercase mb-2 sm:mb-3 bg-soft-gray-light text-brand-blue shadow-sm ${isRTL ? 'self-end sm:text-right' : 'self-start sm:text-left'}`,
                                    children: t('about.whyChoose')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
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
                                    className: `text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 ${isRTL ? 'sm:text-right' : ''}`,
                                    children: t('about.heading')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.2,
                                        delay: 0.05,
                                        ease: [
                                            0.25,
                                            0.1,
                                            0.25,
                                            1
                                        ]
                                    },
                                    className: `text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto sm:mx-0 ${isRTL ? 'sm:text-right' : ''}`,
                                    children: t('about.descriptionText')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3 lg:gap-4 justify-center ${isRTL ? 'sm:justify-end' : 'sm:justify-start'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            as: "a",
                                            href: "#contact",
                                            variant: "dark",
                                            size: "md",
                                            className: "w-full sm:w-auto text-sm sm:text-base",
                                            children: t('about.moreAboutUs')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            as: "a",
                                            href: "tel:+971525010132",
                                            variant: "secondary",
                                            size: "md",
                                            className: "w-full sm:w-auto text-sm sm:text-base",
                                            children: [
                                                t('about.call'),
                                                " (+971) 52 501 0132"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(About);
}),
];

//# sourceMappingURL=src_7af70505._.js.map