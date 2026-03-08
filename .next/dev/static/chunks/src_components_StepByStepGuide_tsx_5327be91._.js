(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/StepByStepGuide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const StepByStepGuide = ()=>{
    _s();
    const { t, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeStep, setActiveStep] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(1);
    const steps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "StepByStepGuide.useMemo[steps]": ()=>[
                {
                    number: 1,
                    title: t('steps.step1Title'),
                    description: t('steps.step1Description'),
                    active: true
                },
                {
                    number: 2,
                    title: t('steps.step2Title'),
                    description: t('steps.step2Description'),
                    active: false
                },
                {
                    number: 3,
                    title: t('steps.step3Title'),
                    description: t('steps.step3Description'),
                    active: false
                }
            ]
    }["StepByStepGuide.useMemo[steps]"], [
        t
    ]);
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.03
            }
        }
    };
    const stepVariants = {
        hidden: {
            opacity: 0,
            x: isRTL ? -50 : 50
        },
        visible: {
            opacity: 1,
            x: 0,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-gradient-to-b from-soft-gray-light via-white to-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full overflow-x-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start lg:items-center w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            duration: 0.25,
                            ease: [
                                0.25,
                                0.1,
                                0.25,
                                1
                            ]
                        },
                        className: `lg:sticky lg:top-8 w-full ${isRTL ? 'text-right' : 'text-left'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-900 leading-tight mb-3 sm:mb-4 lg:mb-5 ${isRTL ? 'text-right' : 'text-left'}`,
                                children: t('steps.title')
                            }, void 0, false, {
                                fileName: "[project]/src/components/StepByStepGuide.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-gray-900 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed font-medium ${isRTL ? 'text-right' : 'text-left'}`,
                                children: t('steps.subtitle')
                            }, void 0, false, {
                                fileName: "[project]/src/components/StepByStepGuide.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StepByStepGuide.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        className: "space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 w-full",
                        children: steps.map((step, index)=>{
                            const isActive = step.number === activeStep;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                type: "button",
                                onClick: ()=>setActiveStep(step.number),
                                variants: stepVariants,
                                whileHover: {
                                    scale: 1.02,
                                    transition: {
                                        duration: 0.25
                                    }
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                className: `w-full rounded-2xl sm:rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isRTL ? 'text-right' : 'text-left'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 shadow-sm hover:shadow-xl transition-all duration-300 w-full border border-gray-100 ${isActive ? 'ring-2 ring-brand-teal ring-offset-2' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mb-3 sm:mb-4 lg:mb-5 flex ${isRTL ? 'justify-end' : 'justify-start'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    scale: 0
                                                },
                                                whileInView: {
                                                    scale: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    delay: index * 0.05,
                                                    type: 'spring',
                                                    stiffness: 500,
                                                    damping: 30,
                                                    mass: 0.5
                                                },
                                                className: `w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold transition-all duration-300 flex-shrink-0 ${isActive ? 'bg-[#111827] text-white shadow-lg ring-2 ring-brand-blue ring-offset-2' : 'bg-gray-300 text-gray-700 border-2 border-gray-400'}`,
                                                children: step.number
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StepByStepGuide.tsx",
                                                lineNumber: 118,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StepByStepGuide.tsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-2 sm:mb-3 lg:mb-4 leading-tight ${isActive ? 'text-gray-900' : 'text-gray-700'} ${isRTL ? 'text-right' : 'text-left'}`,
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StepByStepGuide.tsx",
                                            lineNumber: 138,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-normal ${isActive ? 'text-gray-900' : 'text-gray-700'} ${isRTL ? 'text-right' : 'text-left'}`,
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StepByStepGuide.tsx",
                                            lineNumber: 147,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StepByStepGuide.tsx",
                                    lineNumber: 111,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, step.number, false, {
                                fileName: "[project]/src/components/StepByStepGuide.tsx",
                                lineNumber: 97,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/StepByStepGuide.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StepByStepGuide.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/StepByStepGuide.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/StepByStepGuide.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StepByStepGuide, "ehOzzG++9HIslrTyYHk/sCQV/Rg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = StepByStepGuide;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(StepByStepGuide);
var _c, _c1;
__turbopack_context__.k.register(_c, "StepByStepGuide");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_StepByStepGuide_tsx_5327be91._.js.map