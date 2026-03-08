(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/TextType.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TextType = ({ text, as: Component = 'div', typingSpeed = 50, initialDelay = 0, pauseDuration = 2000, deletingSpeed = 30, loop = true, className = '', showCursor = true, hideCursorWhileTyping = false, cursorCharacter = '|', cursorClassName = '', cursorBlinkDuration = 0.5, textColors = [], variableSpeed, onSentenceComplete, startOnVisible = false, reverseMode = false, ...props })=>{
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentCharIndex, setCurrentCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTextIndex, setCurrentTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!startOnVisible);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextType.useMemo[textArray]": ()=>Array.isArray(text) ? text : [
                text
            ]
    }["TextType.useMemo[textArray]"], [
        text
    ]);
    const getRandomSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextType.useCallback[getRandomSpeed]": ()=>{
            if (!variableSpeed) return typingSpeed;
            const { min, max } = variableSpeed;
            return Math.random() * (max - min) + min;
        }
    }["TextType.useCallback[getRandomSpeed]"], [
        variableSpeed,
        typingSpeed
    ]);
    const getCurrentTextColor = ()=>{
        if (textColors.length === 0) return;
        return textColors[currentTextIndex % textColors.length];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!startOnVisible || !containerRef.current) return;
            const observer = new IntersectionObserver({
                "TextType.useEffect": (entries)=>{
                    entries.forEach({
                        "TextType.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                            }
                        }
                    }["TextType.useEffect"]);
                }
            }["TextType.useEffect"], {
                threshold: 0.1
            });
            observer.observe(containerRef.current);
            return ({
                "TextType.useEffect": ()=>observer.disconnect()
            })["TextType.useEffect"];
        }
    }["TextType.useEffect"], [
        startOnVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (showCursor && cursorRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursorRef.current, {
                    opacity: 1
                });
                const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                    opacity: 0,
                    duration: cursorBlinkDuration,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power2.inOut',
                    force3D: true,
                    willChange: 'opacity'
                });
                return ({
                    "TextType.useEffect": ()=>{
                        animation.kill();
                    }
                })["TextType.useEffect"];
            }
        }
    }["TextType.useEffect"], [
        showCursor,
        cursorBlinkDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!isVisible) return;
            let timeout;
            let rafId;
            const currentText = textArray[currentTextIndex];
            const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;
            const executeTypingAnimation = {
                "TextType.useEffect.executeTypingAnimation": ()=>{
                    if (isDeleting) {
                        if (displayedText === '') {
                            setIsDeleting(false);
                            if (currentTextIndex === textArray.length - 1 && !loop) {
                                return;
                            }
                            if (onSentenceComplete) {
                                onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                            }
                            setCurrentTextIndex({
                                "TextType.useEffect.executeTypingAnimation": (prev)=>(prev + 1) % textArray.length
                            }["TextType.useEffect.executeTypingAnimation"]);
                            setCurrentCharIndex(0);
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{}
                            }["TextType.useEffect.executeTypingAnimation"], pauseDuration);
                        } else {
                            rafId = requestAnimationFrame({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    timeout = setTimeout({
                                        "TextType.useEffect.executeTypingAnimation": ()=>{
                                            setDisplayedText({
                                                "TextType.useEffect.executeTypingAnimation": (prev)=>prev.slice(0, -1)
                                            }["TextType.useEffect.executeTypingAnimation"]);
                                        }
                                    }["TextType.useEffect.executeTypingAnimation"], deletingSpeed);
                                }
                            }["TextType.useEffect.executeTypingAnimation"]);
                        }
                    } else {
                        if (currentCharIndex < processedText.length) {
                            rafId = requestAnimationFrame({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    timeout = setTimeout({
                                        "TextType.useEffect.executeTypingAnimation": ()=>{
                                            setDisplayedText({
                                                "TextType.useEffect.executeTypingAnimation": (prev)=>prev + processedText[currentCharIndex]
                                            }["TextType.useEffect.executeTypingAnimation"]);
                                            setCurrentCharIndex({
                                                "TextType.useEffect.executeTypingAnimation": (prev)=>prev + 1
                                            }["TextType.useEffect.executeTypingAnimation"]);
                                        }
                                    }["TextType.useEffect.executeTypingAnimation"], variableSpeed ? getRandomSpeed() : typingSpeed);
                                }
                            }["TextType.useEffect.executeTypingAnimation"]);
                        } else if (textArray.length > 1) {
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setIsDeleting(true);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], pauseDuration);
                        }
                    }
                }
            }["TextType.useEffect.executeTypingAnimation"];
            if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
                timeout = setTimeout(executeTypingAnimation, initialDelay);
            } else {
                executeTypingAnimation();
            }
            return ({
                "TextType.useEffect": ()=>{
                    clearTimeout(timeout);
                    if (rafId) cancelAnimationFrame(rafId);
                }
            })["TextType.useEffect"];
        }
    }["TextType.useEffect"], [
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        textArray,
        currentTextIndex,
        loop,
        initialDelay,
        isVisible,
        reverseMode,
        variableSpeed,
        onSentenceComplete,
        getRandomSpeed
    ]);
    const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Component, {
        ref: containerRef,
        className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
        ...props
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline",
        style: {
            color: getCurrentTextColor() || 'inherit'
        },
        children: displayedText
    }, void 0, false, {
        fileName: "[project]/src/components/TextType.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: cursorRef,
        className: `ml-1 inline-block opacity-100 ${shouldHideCursor ? 'hidden' : ''} ${cursorClassName}`,
        children: cursorCharacter
    }, void 0, false, {
        fileName: "[project]/src/components/TextType.tsx",
        lineNumber: 197,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(TextType, "k/kjnOJHf95wviZL9f1jrutKGec=");
_c = TextType;
const __TURBOPACK__default__export__ = TextType;
var _c;
__turbopack_context__.k.register(_c, "TextType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextType.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const HeroSection = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shouldLoadVideo, setShouldLoadVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVideoLoaded, setIsVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
    // Scroll-based zoom animation
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: heroRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    // Transform scroll progress to scale value for professional zoom effect
    // Zoom in slightly as we scroll down (1.1 -> 1.3) for cinematic effect
    const videoScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        1.1,
        1.3
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            // Use Intersection Observer for better performance
            const observer = new IntersectionObserver({
                "HeroSection.useEffect": (entries)=>{
                    entries.forEach({
                        "HeroSection.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                requestAnimationFrame({
                                    "HeroSection.useEffect": ()=>{
                                        setShouldLoadVideo(true);
                                    }
                                }["HeroSection.useEffect"]);
                                observer.disconnect();
                            }
                        }
                    }["HeroSection.useEffect"]);
                }
            }["HeroSection.useEffect"], {
                threshold: 0.1,
                rootMargin: '50px'
            });
            if (heroRef.current) {
                observer.observe(heroRef.current);
            }
            return ({
                "HeroSection.useEffect": ()=>observer.disconnect()
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: heroRef,
                className: "relative min-h-screen flex flex-col overflow-hidden pt-24 sm:pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 w-full h-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                scale: prefersReducedMotion ? 1 : videoScale,
                                transform: 'translateZ(0)',
                                willChange: 'transform',
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden'
                            },
                            className: "w-full h-full",
                            children: shouldLoadVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                src: "/Hero Clip.mp4",
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                preload: "metadata",
                                poster: "/Logo Chatgpt.png",
                                className: "w-full h-full object-cover",
                                style: {
                                    transform: 'translateZ(0)',
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                    willChange: prefersReducedMotion ? 'auto' : 'transform',
                                    isolation: 'isolate',
                                    contain: 'layout style paint',
                                    opacity: isVideoLoaded ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out'
                                },
                                "aria-label": "Aqsatech in Dubai - Aqsa Tech UAE Property Maintenance Services Hero Video",
                                onLoadedData: ()=>{
                                    setIsVideoLoaded(true);
                                    if (videoRef.current) {
                                        videoRef.current.play().catch(()=>{});
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/Logo Chatgpt.png",
                                alt: "Aqsa Tech Dubai",
                                className: "w-full h-full object-cover",
                                style: {
                                    transform: 'translateZ(0)',
                                    backfaceVisibility: 'hidden'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 bg-black/40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-48 sm:h-56 md:h-64 lg:h-72 z-0 bg-gradient-to-t from-black via-black/98 to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto w-full text-center overflow-hidden px-2 sm:px-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: prefersReducedMotion ? {
                                        opacity: 1
                                    } : {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: prefersReducedMotion ? 0 : 0.2,
                                        delay: 0.05,
                                        ease: [
                                            0.25,
                                            0.1,
                                            0.25,
                                            1
                                        ]
                                    },
                                    className: "flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-4 sm:mb-8 mt-0 px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "text-white text-xs sm:text-sm font-semibold",
                                            initial: prefersReducedMotion ? {
                                                opacity: 1
                                            } : {
                                                opacity: 0,
                                                x: -10
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                duration: prefersReducedMotion ? 0 : 0.2,
                                                delay: 0.05,
                                                ease: [
                                                    0.25,
                                                    0.1,
                                                    0.25,
                                                    1
                                                ]
                                            },
                                            children: t('hero.excellent')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            "aria-label": "5 star rating",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                    className: "w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 drop-shadow-sm",
                                                    viewBox: "0 0 24 24",
                                                    role: "img",
                                                    "aria-hidden": "true",
                                                    initial: prefersReducedMotion ? {
                                                        opacity: 1,
                                                        scale: 1
                                                    } : {
                                                        opacity: 0,
                                                        scale: 0.8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        duration: prefersReducedMotion ? 0 : 0.15,
                                                        delay: prefersReducedMotion ? 0 : 0.1 + star * 0.03,
                                                        ease: [
                                                            0.25,
                                                            0.1,
                                                            0.25,
                                                            1
                                                        ]
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, star, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "text-white text-xs sm:text-sm",
                                            initial: prefersReducedMotion ? {
                                                opacity: 1
                                            } : {
                                                opacity: 0,
                                                x: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                duration: prefersReducedMotion ? 0 : 0.2,
                                                delay: 0.15,
                                                ease: [
                                                    0.25,
                                                    0.1,
                                                    0.25,
                                                    1
                                                ]
                                            },
                                            children: t('hero.trustpilot')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroTypingHeading, {
                                    prefersReducedMotion: prefersReducedMotion
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: prefersReducedMotion ? {
                                        opacity: 1
                                    } : {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: prefersReducedMotion ? 0 : 0.2,
                                        delay: 0.15,
                                        ease: [
                                            0.25,
                                            0.1,
                                            0.25,
                                            1
                                        ]
                                    },
                                    className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto w-full px-2 sm:px-0 mt-4 sm:mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            as: "a",
                                            href: "#get-in-touch",
                                            "aria-label": "Get FREE Quote",
                                            variant: "dark",
                                            size: "lg",
                                            className: "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-center justify-center",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                const element = document.getElementById('get-in-touch');
                                                if (element) {
                                                    element.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start'
                                                    });
                                                }
                                            },
                                            children: t('hero.getFreeQuote')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            as: "a",
                                            href: "tel:+971525010132",
                                            variant: "outline",
                                            size: "lg",
                                            className: "w-full sm:w-auto px-6 py-3 sm:py-4 border-white text-white hover:bg-white/10 hover:text-white backdrop-blur-sm text-sm sm:text-base text-center justify-center",
                                            children: t('hero.callNow')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.3,
                    ease: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ]
                },
                viewport: {
                    once: true
                },
                className: "bg-soft-gray-light px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-6xl mx-auto text-center px-3 sm:px-0",
                    children: t('hero.description').split(/(\{seamless\}|\{userFriendly\}|\{simpleBooking\})/).map((part, i)=>{
                        if (part === '{seamless}') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-brand-teal",
                            children: t('hero.seamless')
                        }, i, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 217,
                            columnNumber: 47
                        }, ("TURBOPACK compile-time value", void 0));
                        if (part === '{userFriendly}') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-brand-blue",
                            children: t('hero.userFriendly')
                        }, i, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 218,
                            columnNumber: 51
                        }, ("TURBOPACK compile-time value", void 0));
                        if (part === '{simpleBooking}') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-brand-teal",
                            children: t('hero.simpleBooking')
                        }, i, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 219,
                            columnNumber: 52
                        }, ("TURBOPACK compile-time value", void 0));
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: part
                        }, i, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 220,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroSection, "0ji/T0HLFBVnHexpfljR+XVgt/g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = HeroSection;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(HeroSection);
// Local component to render the hero headline and subheadline.
const HeroTypingHeading = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s1(({ prefersReducedMotion = false })=>{
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const line1 = t('hero.heading1');
    const line2 = t('hero.heading2');
    const sub = t('hero.subheading');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center w-full mt-0 sm:mt-2 md:mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-center leading-[1.1] sm:leading-[1.05] md:leading-[0.95] mb-3 sm:mb-4 md:mb-5 px-2 sm:px-4 w-full",
                children: [
                    prefersReducedMotion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-center w-full mb-1 sm:mb-0 break-words",
                        children: line1
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-center w-full mb-1 sm:mb-0 break-words",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: line1,
                            typingSpeed: 40,
                            initialDelay: 200,
                            showCursor: false,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    prefersReducedMotion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-center w-full break-words",
                        children: line2
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-center w-full break-words",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: line2,
                            typingSpeed: 40,
                            initialDelay: line1.length * 40 + 600,
                            showCursor: false,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8 xl:mb-10 px-3 sm:px-4 md:px-6 font-medium leading-relaxed",
                initial: prefersReducedMotion ? {
                    opacity: 1,
                    y: 0
                } : {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: prefersReducedMotion ? 0 : 0.2,
                    delay: prefersReducedMotion ? 0 : 0.15,
                    ease: "easeOut"
                },
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
}));
_c2 = HeroTypingHeading;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HeroSection");
__turbopack_context__.k.register(_c1, "%default%");
__turbopack_context__.k.register(_c2, "HeroTypingHeading");
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
"[project]/src/components/FAQSchema.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const FAQSchema = ({ faqs })=>{
    _s();
    const defaultFAQs = [
        {
            question: 'What is Aqsatech in Dubai?',
            answer: 'Aqsatech in Dubai is Aqsa Tech UAE, the #1 technical services company providing AC service, home maintenance, renovation, handyman, plumbing, electrical, and fit out services across Dubai, Abu Dhabi, and Sharjah. With 10,000+ satisfied customers, we offer same-day service and free quotes.'
        },
        {
            question: 'What services does Aqsatech offer in Dubai?',
            answer: 'Aqsatech in Dubai offers comprehensive technical services including AC installation and maintenance, home maintenance, villa and apartment renovation, handyman services, plumbing, electrical work, painting, tiling, carpentry, office fit out, and MEP services. We serve all areas of Dubai, Abu Dhabi, and Sharjah.'
        },
        {
            question: 'How can I contact Aqsatech in Dubai?',
            answer: 'You can contact Aqsatech in Dubai by calling +971 52 501 0132, emailing admin@aqsatech.ae, or visiting our website aqsatech.ae. We offer 24/7 emergency services and provide free quotes for all services.'
        },
        {
            question: 'Does Aqsatech provide same-day service in Dubai?',
            answer: 'Yes, Aqsatech in Dubai provides same-day service for urgent repairs and installations. We have a team of skilled professionals ready to assist you across Dubai, Abu Dhabi, and Sharjah.'
        },
        {
            question: 'Is Aqsatech licensed in Dubai?',
            answer: 'Yes, Aqsatech is a licensed contractor in Dubai and across the UAE. We are fully insured and comply with all local regulations and standards for technical services.'
        },
        {
            question: 'What areas does Aqsatech serve in Dubai?',
            answer: 'Aqsatech serves all areas of Dubai including Downtown Dubai, Dubai Marina, JBR, Business Bay, JLT, DIFC, Palm Jumeirah, Arabian Ranches, and all other residential and commercial areas. We also serve Abu Dhabi, Sharjah, and other Emirates.'
        },
        {
            question: 'How much does Aqsatech charge for services in Dubai?',
            answer: 'Aqsatech offers competitive pricing for all services in Dubai. We provide free quotes for all projects. Contact us at +971 52 501 0132 or visit aqsatech.ae for a personalized quote based on your specific requirements.'
        },
        {
            question: 'Does Aqsatech offer emergency services in Dubai?',
            answer: 'Yes, Aqsatech offers 24/7 emergency services in Dubai for AC repair, plumbing, electrical issues, and other urgent technical problems. Call +971 52 501 0132 anytime for immediate assistance.'
        }
    ];
    const faqList = faqs || defaultFAQs;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FAQSchema.useEffect": ()=>{
            const structuredData = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqList.map({
                    "FAQSchema.useEffect": (faq)=>({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer
                            }
                        })
                }["FAQSchema.useEffect"])
            };
            // Remove existing FAQ schema
            const existingScript = document.getElementById('faq-schema');
            if (existingScript) {
                existingScript.remove();
            }
            // Add new FAQ schema
            const script = document.createElement('script');
            script.id = 'faq-schema';
            script.type = 'application/ld+json';
            script.text = JSON.stringify(structuredData);
            document.head.appendChild(script);
            return ({
                "FAQSchema.useEffect": ()=>{
                    const scriptToRemove = document.getElementById('faq-schema');
                    if (scriptToRemove) {
                        scriptToRemove.remove();
                    }
                }
            })["FAQSchema.useEffect"];
        }
    }["FAQSchema.useEffect"], [
        faqList
    ]);
    return null;
};
_s(FAQSchema, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = FAQSchema;
const __TURBOPACK__default__export__ = FAQSchema;
var _c;
__turbopack_context__.k.register(_c, "FAQSchema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LocalSEOSchema.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
/**
 * Local SEO Schema Component
 * Optimized for "aqsatech in dubai" local search rankings
 */ const LocalSEOSchema = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalSEOSchema.useEffect": ()=>{
            const baseUrl = 'https://aqsatech.ae';
            // Enhanced Local Business Schema with Multiple Types
            const localBusinessSchema = {
                '@context': 'https://schema.org',
                '@type': [
                    'LocalBusiness',
                    'HomeAndConstructionBusiness',
                    'ProfessionalService',
                    'Contractor'
                ],
                '@id': `${baseUrl}#localbusiness`,
                name: 'Aqsatech in Dubai - Aqsa Tech UAE',
                alternateName: [
                    'Aqsatech',
                    'Aqsa Tech',
                    'Aqsa Tech Dubai',
                    'Aqsatech in Dubai',
                    'Aqsatech Dubai',
                    'Aqsatech UAE',
                    'AQSATECH',
                    'aqsatech.ae',
                    'Aqsa Tech in Dubai',
                    'Aqsa Technical Services'
                ],
                legalName: 'Aqsa Tech UAE',
                slogan: 'Dubai\'s #1 Most Trusted Technical Services Company',
                description: 'Aqsatech in Dubai - UAE\'s #1 most trusted technical services company since 2020. Expert AC service, home maintenance, renovation, handyman, plumbing, electrical services across Dubai, Abu Dhabi, Sharjah. 10,000+ satisfied customers. Same-day service available. Free quotes. Licensed and insured. Call +971 52 501 0132',
                url: baseUrl,
                logo: {
                    '@type': 'ImageObject',
                    url: `${baseUrl}/Logo%20Chatgpt.png`,
                    width: 1200,
                    height: 630,
                    caption: 'Aqsatech in Dubai Logo'
                },
                image: [
                    `${baseUrl}/Logo%20Chatgpt.png`,
                    `${baseUrl}/Hero%20Clip.mp4`
                ],
                telephone: '+971525010132',
                email: 'admin@aqsatech.ae',
                priceRange: '$$',
                currenciesAccepted: 'AED',
                paymentAccepted: [
                    'Cash',
                    'Bank Transfer',
                    'Credit Card',
                    'Debit Card'
                ],
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Dubai',
                    addressRegion: 'Dubai',
                    addressCountry: {
                        '@type': 'Country',
                        name: 'United Arab Emirates'
                    },
                    postalCode: '00000'
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 25.2048,
                    longitude: 55.2708,
                    name: 'Dubai, UAE'
                },
                areaServed: [
                    {
                        '@type': 'City',
                        name: 'Dubai',
                        '@id': 'https://www.wikidata.org/wiki/Q612'
                    },
                    {
                        '@type': 'City',
                        name: 'Abu Dhabi',
                        '@id': 'https://www.wikidata.org/wiki/Q1519'
                    },
                    {
                        '@type': 'City',
                        name: 'Sharjah',
                        '@id': 'https://www.wikidata.org/wiki/Q188723'
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
                    },
                    {
                        '@type': 'State',
                        name: 'Dubai',
                        containedInPlace: {
                            '@type': 'Country',
                            name: 'United Arab Emirates'
                        }
                    }
                ],
                openingHoursSpecification: {
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
                    closes: '23:59',
                    description: '24/7 Emergency Service Available'
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '10247',
                    bestRating: '5',
                    worstRating: '1',
                    ratingExplanation: 'Based on verified customer reviews across multiple platforms'
                },
                sameAs: [
                    'https://www.facebook.com/share/1CiAnnR5uL/',
                    'https://www.instagram.com/aqsa.techs?igsh=bjJld3Y0anhiam1i',
                    'https://twitter.com/aqsatech_ae',
                    'https://www.linkedin.com/company/aqsatech-ae/'
                ],
                foundingDate: '2020-01-01',
                numberOfEmployees: {
                    '@type': 'QuantitativeValue',
                    value: 75,
                    minValue: 50,
                    maxValue: 100
                },
                knowsAbout: [
                    'AC Installation',
                    'AC Repair',
                    'AC Maintenance',
                    'Home Maintenance',
                    'Villa Renovation',
                    'Apartment Renovation',
                    'Handyman Services',
                    'Plumbing Services',
                    'Electrical Services',
                    'Painting Services',
                    'Tiling Services',
                    'Carpentry Services',
                    'Office Fit Out',
                    'HVAC Services',
                    'Property Maintenance',
                    'Building Maintenance'
                ],
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Aqsatech Services',
                    itemListElement: [
                        {
                            '@type': 'OfferCatalog',
                            name: 'AC Services Dubai',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'AC Installation Dubai',
                                        description: 'Professional AC installation services for residential and commercial properties in Dubai',
                                        provider: {
                                            '@type': 'LocalBusiness',
                                            name: 'Aqsatech in Dubai'
                                        },
                                        areaServed: {
                                            '@type': 'City',
                                            name: 'Dubai'
                                        }
                                    }
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'AC Repair Dubai',
                                        description: 'Same-day AC repair services across Dubai, Abu Dhabi, Sharjah',
                                        provider: {
                                            '@type': 'LocalBusiness',
                                            name: 'Aqsatech in Dubai'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                makesOffer: [
                    {
                        '@type': 'Offer',
                        name: 'Free Consultation',
                        description: 'Free quotes and consultation for all services',
                        price: '0',
                        priceCurrency: 'AED'
                    },
                    {
                        '@type': 'Offer',
                        name: 'Same-Day Service',
                        description: 'Emergency same-day service available',
                        availability: 'https://schema.org/InStock'
                    }
                ],
                hasMap: 'https://www.google.com/maps/place/Dubai,+United+Arab+Emirates/@25.2048,55.2708,12z',
                isAccessibleForFree: false,
                smokingAllowed: false,
                keywords: 'aqsatech in dubai, aqsatech dubai, aqsatech uae, aqsa tech dubai, aqsa tech in dubai, best ac service dubai, best home maintenance dubai, best renovation company dubai, top handyman dubai, professional plumber dubai, licensed electrician dubai'
            };
            // Service Schema for Main Services
            const serviceSchema = {
                '@context': 'https://schema.org',
                '@type': 'Service',
                '@id': `${baseUrl}#service`,
                serviceType: 'Technical Services',
                name: 'Aqsatech Technical Services Dubai',
                description: 'Comprehensive technical services including AC service, home maintenance, renovation, plumbing, electrical, and more across Dubai and UAE',
                provider: {
                    '@type': 'LocalBusiness',
                    name: 'Aqsatech in Dubai - Aqsa Tech UAE',
                    '@id': `${baseUrl}#localbusiness`
                },
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
                    }
                ],
                availableChannel: {
                    '@type': 'ServiceChannel',
                    serviceUrl: baseUrl,
                    servicePhone: {
                        '@type': 'ContactPoint',
                        telephone: '+971-52-501-0132',
                        contactType: 'Customer Service',
                        availableLanguage: [
                            'en',
                            'ar'
                        ],
                        areaServed: 'AE'
                    }
                },
                offers: {
                    '@type': 'AggregateOffer',
                    priceCurrency: 'AED',
                    lowPrice: '50',
                    highPrice: '10000',
                    offerCount: '15'
                }
            };
            // Remove existing schemas
            const existingLocal = document.getElementById('local-seo-schema');
            const existingService = document.getElementById('service-seo-schema');
            if (existingLocal) existingLocal.remove();
            if (existingService) existingService.remove();
            // Add Local Business Schema
            const localScript = document.createElement('script');
            localScript.id = 'local-seo-schema';
            localScript.type = 'application/ld+json';
            localScript.text = JSON.stringify(localBusinessSchema);
            document.head.appendChild(localScript);
            // Add Service Schema
            const serviceScript = document.createElement('script');
            serviceScript.id = 'service-seo-schema';
            serviceScript.type = 'application/ld+json';
            serviceScript.text = JSON.stringify(serviceSchema);
            document.head.appendChild(serviceScript);
            return ({
                "LocalSEOSchema.useEffect": ()=>{
                    const localToRemove = document.getElementById('local-seo-schema');
                    const serviceToRemove = document.getElementById('service-seo-schema');
                    if (localToRemove) localToRemove.remove();
                    if (serviceToRemove) serviceToRemove.remove();
                }
            })["LocalSEOSchema.useEffect"];
        }
    }["LocalSEOSchema.useEffect"], []);
    return null;
};
_s(LocalSEOSchema, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LocalSEOSchema;
const __TURBOPACK__default__export__ = LocalSEOSchema;
var _c;
__turbopack_context__.k.register(_c, "LocalSEOSchema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SpotlightCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' })=>{
    _s();
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleMouseMove = (e)=>{
        if (!divRef.current || isFocused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    const handleTouchMove = (e)=>{
        if (!divRef.current || isFocused) return;
        const touch = e.touches[0];
        if (touch) {
            const rect = divRef.current.getBoundingClientRect();
            setPosition({
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            });
        }
    };
    const handleFocus = ()=>{
        setIsFocused(true);
        setOpacity(0.6);
    };
    const handleBlur = ()=>{
        setIsFocused(false);
        setOpacity(0);
    };
    const handleMouseEnter = ()=>{
        setOpacity(0.6);
    };
    const handleMouseLeave = ()=>{
        setOpacity(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: divRef,
        onMouseMove: handleMouseMove,
        onTouchMove: handleTouchMove,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onTouchStart: handleMouseEnter,
        onTouchEnd: handleMouseLeave,
        className: `relative rounded-xl sm:rounded-2xl overflow-hidden ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out",
                style: {
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SpotlightCard.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SpotlightCard.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SpotlightCard, "htlRxTo8XBsvihmxjkvej7hEpAY=");
_c = SpotlightCard;
const __TURBOPACK__default__export__ = SpotlightCard;
var _c;
__turbopack_context__.k.register(_c, "SpotlightCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SubheroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$translations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/translations/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SpotlightCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SubheroSection = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const cards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "SubheroSection.useMemo[cards]": ()=>{
            const langTranslations = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$translations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"].EN;
            const servicesDesc = langTranslations.subhero.servicesDescription;
            const providersDesc = langTranslations.subhero.providersDescription;
            const customersDesc = langTranslations.subhero.customersDescription;
            try {
                return [
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
                        title: t('subhero.servicesCount'),
                        description: typeof servicesDesc === 'function' ? servicesDesc() : String(servicesDesc || '')
                    },
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        title: t('subhero.providersCount'),
                        description: typeof providersDesc === 'function' ? providersDesc() : String(providersDesc || '')
                    },
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
                        title: t('subhero.customersCount'),
                        description: typeof customersDesc === 'function' ? customersDesc() : String(customersDesc || '')
                    }
                ];
            } catch (error) {
                console.error('Error in SubheroSection cards:', error);
                return [
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
                        title: t('subhero.servicesCount'),
                        description: String(servicesDesc || '')
                    },
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        title: t('subhero.providersCount'),
                        description: String(providersDesc || '')
                    },
                    {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
                        title: t('subhero.customersCount'),
                        description: String(customersDesc || '')
                    }
                ];
            }
        }
    }["SubheroSection.useMemo[cards]"], [
        t
    ]);
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
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
        className: "w-full bg-gray-100 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch",
            variants: containerVariants,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true,
                amount: 0.2
            },
            children: cards.map((card, index)=>{
                const IconComponent = card.icon;
                // Different spotlight colors for each card
                const spotlightColors = [
                    'rgba(59, 130, 246, 0.25)',
                    'rgba(16, 185, 129, 0.25)',
                    'rgba(139, 92, 246, 0.25)'
                ];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: cardVariants,
                    whileHover: {
                        y: -8,
                        transition: {
                            duration: 0.3
                        }
                    },
                    className: "w-full h-full flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        spotlightColor: spotlightColors[index] || 'rgba(99, 102, 241, 0.25)',
                        className: "bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 p-5 sm:p-6 lg:p-8 w-full h-full flex flex-col min-h-[280px] sm:min-h-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-4 sm:mb-5 lg:mb-6 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white border border-brand-blue/40 flex items-center justify-center shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-blue",
                                            strokeWidth: 2.2
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SubheroSection.tsx",
                                            lineNumber: 129,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SubheroSection.tsx",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubheroSection.tsx",
                                    lineNumber: 127,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal text-gray-900 text-center mb-3 sm:mb-4 lg:mb-5 flex-shrink-0",
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubheroSection.tsx",
                                    lineNumber: 134,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-900 text-center leading-relaxed text-xs sm:text-sm lg:text-base flex-grow font-medium",
                                    children: card.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SubheroSection.tsx",
                                    lineNumber: 139,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SubheroSection.tsx",
                            lineNumber: 125,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SubheroSection.tsx",
                        lineNumber: 121,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/src/components/SubheroSection.tsx",
                    lineNumber: 112,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/components/SubheroSection.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SubheroSection.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "WnBhcNVYAQ8CxM0JqXfioZGrHDs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "WnBhcNVYAQ8CxM0JqXfioZGrHDs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = SubheroSection;
SubheroSection.displayName = 'SubheroSection';
const __TURBOPACK__default__export__ = SubheroSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "SubheroSection$React.memo");
__turbopack_context__.k.register(_c1, "SubheroSection");
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
"[project]/src/components/DiscoverPopularServices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslatedServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTranslatedServices.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-client] (ecmascript)");
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
;
const DiscoverPopularServices = ()=>{
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
    const { services: allServices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslatedServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslatedServices"])();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cardWidth, setCardWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(280);
    const [gap, setGap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const AUTO_INTERVAL = 2000; // smoother auto advance (ms)
    // Memoize services array to prevent recreation on every render
    const services = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DiscoverPopularServices.useMemo[services]": ()=>[
                {
                    id: 1,
                    title: 'Wall Paper Fixing',
                    price: '$45',
                    image: '/Services Stock images/wallpaper fixing.png',
                    tags: [
                        'Wallpaper',
                        'Installation',
                        'Decor'
                    ]
                },
                {
                    id: 2,
                    title: 'Floor & Wall Tiling',
                    price: '$50',
                    image: '/Services Stock images/floor and wall tiling.png',
                    tags: [
                        'Tiling',
                        'Flooring',
                        'Installation'
                    ]
                },
                {
                    id: 3,
                    title: 'Plaster Works',
                    price: '$42',
                    image: '/Services Stock images/plaster works.png',
                    tags: [
                        'Plastering',
                        'Walls',
                        'Finishing'
                    ]
                },
                {
                    id: 4,
                    title: 'Carpentry & Flooring',
                    price: '$48',
                    image: '/Services Stock images/Carpentry & flooring contracting.png',
                    tags: [
                        'Carpentry',
                        'Flooring',
                        'Wood Work'
                    ]
                },
                {
                    id: 5,
                    title: 'Engraving & Ornamentation',
                    price: '$55',
                    image: '/Services Stock images/Engraving & Ornamentation Works.png',
                    tags: [
                        'Engraving',
                        'Decoration',
                        'Ornamental'
                    ]
                },
                {
                    id: 6,
                    title: 'Painting Contracting',
                    price: '$40',
                    image: '/Services Stock images/Painting contracting.png',
                    tags: [
                        'Painting',
                        'Interior',
                        'Exterior'
                    ]
                },
                {
                    id: 7,
                    title: 'AC Installation',
                    price: '$55',
                    image: '/Services Stock images/Air-coditioning installation.png',
                    tags: [
                        'AC Install',
                        'Installation',
                        'HVAC'
                    ]
                },
                {
                    id: 8,
                    title: 'AC Maintenance',
                    price: '$45',
                    image: '/Services Stock images/Air-coditioning maintenance.png',
                    tags: [
                        'AC Maintenance',
                        'Servicing',
                        'Repair'
                    ]
                },
                {
                    id: 9,
                    title: 'Ventilation & Air Filtration',
                    price: '$52',
                    image: '/Services Stock images/Ventilation & air-filtration system installation.png',
                    tags: [
                        'Ventilation',
                        'Air Filters',
                        'HVAC'
                    ]
                },
                {
                    id: 10,
                    title: 'Electromechanical Equipment',
                    price: '$55',
                    image: '/Services Stock images/Electromechanical equipment installation & maintenance.png',
                    tags: [
                        'Installation',
                        'Maintenance',
                        'Equipment'
                    ]
                },
                {
                    id: 11,
                    title: 'False Ceiling & Partitions',
                    price: '$46',
                    image: '/Services Stock images/False ceiling & light-partition installation.png',
                    tags: [
                        'False Ceiling',
                        'Partitions',
                        'Interior'
                    ]
                },
                {
                    id: 12,
                    title: 'Plumbing & Sanitary',
                    price: '$45',
                    image: '/Services Stock images/Plumbing & sanitary contracting.png',
                    tags: [
                        'Plumbing',
                        'Sanitary',
                        'Installation'
                    ]
                },
                {
                    id: 13,
                    title: 'Office Fit Out',
                    price: '$60',
                    image: '/Services Stock images/Office Fit Out Services.png',
                    tags: [
                        'Office',
                        'Fit Out',
                        'Interior Design'
                    ]
                },
                {
                    id: 14,
                    title: 'Water Tank Cleaning',
                    price: '$50',
                    image: '/Services Stock images/Water Tank Cleaning & Maintenance.png',
                    tags: [
                        'Water Tank',
                        'Cleaning',
                        'Maintenance'
                    ]
                },
                {
                    id: 15,
                    title: 'Kitchen Renovation',
                    price: '$65',
                    image: '/Services Stock images/Kitchen Renovation.png',
                    tags: [
                        'Kitchen',
                        'Renovation',
                        'Design'
                    ]
                },
                {
                    id: 16,
                    title: 'Renovation & Remodeling',
                    price: '$70',
                    image: '/Services Stock images/Renovation & Remodeling.png',
                    tags: [
                        'Renovation',
                        'Remodeling',
                        'Interior Design'
                    ]
                },
                {
                    id: 17,
                    title: 'AC Dust Cleaning',
                    price: '$46',
                    image: '/Services Stock images/AC Dust Cleaning.png',
                    tags: [
                        'AC Dust Cleaning',
                        'Deep Cleaning',
                        'Air Quality'
                    ]
                },
                {
                    id: 18,
                    title: 'AC Coil Cleaning',
                    price: '$48',
                    image: '/Services Stock images/AC Coil Cleaning.png',
                    tags: [
                        'AC Coil Cleaning',
                        'Performance',
                        'Energy Saving'
                    ]
                }
            ]
    }["DiscoverPopularServices.useMemo[services]"], []);
    // Memoize service lookup functions to prevent recreation
    const getServiceDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DiscoverPopularServices.useCallback[getServiceDescription]": (serviceId)=>{
            const fullService = allServices.find({
                "DiscoverPopularServices.useCallback[getServiceDescription].fullService": (s)=>s.id === serviceId
            }["DiscoverPopularServices.useCallback[getServiceDescription].fullService"]);
            return fullService?.description || '';
        }
    }["DiscoverPopularServices.useCallback[getServiceDescription]"], [
        allServices
    ]);
    const getServiceTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DiscoverPopularServices.useCallback[getServiceTitle]": (serviceId)=>{
            const fullService = allServices.find({
                "DiscoverPopularServices.useCallback[getServiceTitle].fullService": (s)=>s.id === serviceId
            }["DiscoverPopularServices.useCallback[getServiceTitle].fullService"]);
            return fullService?.title || '';
        }
    }["DiscoverPopularServices.useCallback[getServiceTitle]"], [
        allServices
    ]);
    const getServiceSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DiscoverPopularServices.useCallback[getServiceSlug]": (serviceId)=>{
            const fullService = allServices.find({
                "DiscoverPopularServices.useCallback[getServiceSlug].fullService": (s)=>s.id === serviceId
            }["DiscoverPopularServices.useCallback[getServiceSlug].fullService"]);
            return fullService?.slug || '';
        }
    }["DiscoverPopularServices.useCallback[getServiceSlug]"], [
        allServices
    ]);
    // For continuous running ribbon feel, duplicate the array multiple times
    const ribbonServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DiscoverPopularServices.useMemo[ribbonServices]": ()=>[
                ...services,
                ...services,
                ...services,
                ...services
            ]
    }["DiscoverPopularServices.useMemo[ribbonServices]"], [
        services,
        allServices
    ]);
    // Measure actual card width and gap from DOM - Optimized for 144Hz
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiscoverPopularServices.useEffect": ()=>{
            const updateDimensions = {
                "DiscoverPopularServices.useEffect.updateDimensions": ()=>{
                    if (cardRef.current && containerRef.current) {
                        const cardElement = cardRef.current;
                        const containerElement = containerRef.current;
                        const cardWidthValue = cardElement.offsetWidth;
                        const containerStyle = window.getComputedStyle(containerElement);
                        const gapValue = parseFloat(containerStyle.gap) || 12;
                        setCardWidth(cardWidthValue);
                        setGap(gapValue);
                    }
                }
            }["DiscoverPopularServices.useEffect.updateDimensions"];
            // Initial measurement after render - use RAF for smoother updates
            requestAnimationFrame({
                "DiscoverPopularServices.useEffect": ()=>{
                    setTimeout(updateDimensions, 100);
                }
            }["DiscoverPopularServices.useEffect"]);
            // Throttle resize for 144Hz
            let resizeTimeout;
            const handleResize = {
                "DiscoverPopularServices.useEffect.handleResize": ()=>{
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(updateDimensions, 16); // ~60fps for resize
                }
            }["DiscoverPopularServices.useEffect.handleResize"];
            window.addEventListener('resize', handleResize, {
                passive: true
            });
            const resizeObserver = new ResizeObserver({
                "DiscoverPopularServices.useEffect": ()=>{
                    requestAnimationFrame(updateDimensions);
                }
            }["DiscoverPopularServices.useEffect"]);
            if (cardRef.current) {
                resizeObserver.observe(cardRef.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$performance144$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gpuAccelerate"])(cardRef.current);
            }
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$performance144$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gpuAccelerate"])(containerRef.current);
            }
            return ({
                "DiscoverPopularServices.useEffect": ()=>{
                    clearTimeout(resizeTimeout);
                    window.removeEventListener('resize', handleResize);
                    resizeObserver.disconnect();
                }
            })["DiscoverPopularServices.useEffect"];
        }
    }["DiscoverPopularServices.useEffect"], []);
    const handlePrev = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + services.length) % services.length);
    };
    const handleNext = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % services.length);
    };
    // Auto-scroll - Direction depends on RTL
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "DiscoverPopularServices.useEffect": ()=>{
            if (isPaused) return;
            const id = setInterval({
                "DiscoverPopularServices.useEffect.id": ()=>{
                    // In RTL, move left to right (decrease index), in LTR move right to left (increase index)
                    setCurrentIndex({
                        "DiscoverPopularServices.useEffect.id": (prev)=>isRTL ? (prev - 1 + services.length) % services.length : (prev + 1) % services.length
                    }["DiscoverPopularServices.useEffect.id"]);
                }
            }["DiscoverPopularServices.useEffect.id"], AUTO_INTERVAL);
            return ({
                "DiscoverPopularServices.useEffect": ()=>clearInterval(id)
            })["DiscoverPopularServices.useEffect"];
        }
    }["DiscoverPopularServices.useEffect"], [
        isPaused,
        services.length,
        isRTL
    ]);
    // Only pause on desktop hover, not on mobile touch
    const handleMouseEnter = ()=>{
        if (window.innerWidth >= 1024) {
            setIsPaused(true);
        }
    };
    const handleMouseLeave = ()=>{
        setIsPaused(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-white py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full overflow-x-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-center ${isRTL ? 'sm:text-right' : 'sm:text-left'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20,
                                scale: 0.98
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            viewport: {
                                once: true,
                                amount: 0.4
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
                            className: "inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-brand-blue"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-[0.18em] uppercase text-gray-700",
                                    children: t('discoverServices.title')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.4
                            },
                            transition: {
                                duration: 0.2,
                                delay: 0.03,
                                ease: [
                                    0.25,
                                    0.1,
                                    0.25,
                                    1
                                ]
                            },
                            className: `text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 ${isRTL ? 'sm:text-right' : 'sm:text-left'}`,
                            children: t('discoverServices.subtitle')
                        }, void 0, false, {
                            fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.4
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
                            className: `text-gray-600 text-xs sm:text-sm lg:text-base xl:text-lg max-w-3xl ${isRTL ? 'sm:mr-auto sm:ml-0' : 'mx-auto'} ${isRTL ? 'sm:text-right' : 'text-center sm:text-left'}`,
                            children: t('discoverServices.subtitle')
                        }, void 0, false, {
                            fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-8 sm:mb-10 lg:mb-12 w-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ref: containerRef,
                            className: `flex gap-3 sm:gap-4 lg:gap-5 items-stretch ${isRTL ? 'flex-row-reverse' : ''}`,
                            style: {
                                x: isRTL ? `${currentIndex % services.length * (cardWidth + gap)}px` : `-${currentIndex % services.length * (cardWidth + gap)}px`,
                                willChange: 'transform',
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden'
                            },
                            animate: {
                                x: isRTL ? `${currentIndex % services.length * (cardWidth + gap)}px` : `-${currentIndex % services.length * (cardWidth + gap)}px`
                            },
                            transition: {
                                ease: 'linear',
                                duration: AUTO_INTERVAL / 1000,
                                type: 'tween'
                            },
                            children: ribbonServices.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: idx === 0 ? cardRef : null,
                                    className: "flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-200 w-full h-full flex flex-col",
                                        style: {
                                            transform: 'translateZ(0)',
                                            willChange: 'transform',
                                            backfaceVisibility: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-56 sm:h-60 md:h-64 lg:h-72 overflow-hidden bg-gray-100 flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        ref: (img)=>{
                                                            if (img) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$performance144$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizeImage"])(img);
                                                        },
                                                        src: service.image,
                                                        alt: service.title,
                                                        loading: "lazy",
                                                        decoding: "async",
                                                        width: 400,
                                                        height: 300,
                                                        sizes: "(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 360px",
                                                        className: "w-full h-full object-cover object-center",
                                                        style: {
                                                            contentVisibility: 'auto',
                                                            transform: 'translateZ(0)',
                                                            backfaceVisibility: 'hidden',
                                                            willChange: 'transform'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-2 left-2 right-2 flex flex-wrap gap-1 sm:gap-1.5 justify-center",
                                                        children: service.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-white/95 backdrop-blur-sm text-gray-800 px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium shadow-md",
                                                                children: tag
                                                            }, tagIndex, false, {
                                                                fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                lineNumber: 342,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-4 sm:p-5 lg:p-6 flex flex-col flex-1 min-h-0 ${isRTL ? 'text-right' : 'text-left'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 ${isRTL ? 'text-right' : 'text-left'}`,
                                                        children: getServiceTitle(service.id) || service.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-gray-900 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 flex-1 line-clamp-3 ${isRTL ? 'text-right' : 'text-left'}`,
                                                        children: getServiceDescription(service.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            onClick: ()=>{
                                                                const slug = getServiceSlug(service.id);
                                                                if (slug) navigate(`/services/${slug}`);
                                                            },
                                                            size: "md",
                                                            variant: "dark",
                                                            fullWidth: true,
                                                            className: "text-xs sm:text-sm",
                                                            children: t('common.viewDetails')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                                lineNumber: 377,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                        lineNumber: 333,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, service.id + '-' + idx, false, {
                                    fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex justify-center items-center gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            suppressHydrationWarning: true,
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: isRTL ? handleNext : handlePrev,
                            className: `w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-100`,
                            "aria-label": isRTL ? "Next" : "Previous",
                            children: isRTL ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: `w-5 h-5 sm:w-6 sm:h-6 text-gray-800`
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                lineNumber: 418,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: `w-5 h-5 sm:w-6 sm:h-6 text-gray-800`
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                lineNumber: 420,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            suppressHydrationWarning: true,
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: isRTL ? handlePrev : handleNext,
                            className: `w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-100`,
                            "aria-label": isRTL ? "Previous" : "Next",
                            children: isRTL ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: `w-5 h-5 sm:w-6 sm:h-6 text-gray-800`
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                lineNumber: 433,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: `w-5 h-5 sm:w-6 sm:h-6 text-gray-800`
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                                lineNumber: 435,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DiscoverPopularServices.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DiscoverPopularServices.tsx",
            lineNumber: 267,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/DiscoverPopularServices.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DiscoverPopularServices, "pVbdbLlHWq21X2D4unSCg5T/yS0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTranslatedServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslatedServices"]
    ];
});
_c = DiscoverPopularServices;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(DiscoverPopularServices);
var _c, _c1;
__turbopack_context__.k.register(_c, "DiscoverPopularServices");
__turbopack_context__.k.register(_c1, "%default%");
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
    const ___router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const navigate = (path)=>{
        if (typeof path === "number" && path === -1) {
            ___router.back();
        } else if (typeof path === "string") {
            ___router.push(path);
        }
    };
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
                        lineNumber: 58,
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
                        lineNumber: 59,
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
                        lineNumber: 60,
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
                        lineNumber: 61,
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
                        lineNumber: 62,
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
                        lineNumber: 63,
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
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-gray-900 text-sm sm:text-base lg:text-lg text-center sm:text-left font-medium ${isRTL ? 'sm:text-right' : ''}`,
                                    children: t('exploreServices.subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 148,
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
                            lineNumber: 156,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                    lineNumber: 147,
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
                                lineNumber: 171,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            suppressHydrationWarning: true,
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
                            lineNumber: 187,
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
                                        suppressHydrationWarning: true,
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
                                                lineNumber: 248,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-semibold flex-1 text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`,
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                                lineNumber: 251,
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
                                                lineNumber: 255,
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
                    lineNumber: 167,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `hidden sm:flex gap-6 lg:gap-8 mb-8 overflow-x-auto pb-4 scrollbar-hide border-b border-gray-200 ${isRTL ? 'flex-row-reverse' : ''}`,
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            suppressHydrationWarning: true,
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
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs sm:text-sm font-medium whitespace-nowrap text-gray-900",
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 285,
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
                                    lineNumber: 289,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, category.id, true, {
                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                    lineNumber: 269,
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
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                lineNumber: 315,
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
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5 lg:mb-6 xl:mb-8 ${isRTL ? 'text-right' : 'text-left'}`,
                                            children: categoryContent[activeCategory]?.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                                            lineNumber: 350,
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
                                                    lineNumber: 357,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExploreOurServices.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExploreOurServices.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, activeCategory, true, {
                        fileName: "[project]/src/components/ExploreOurServices.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ExploreOurServices.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExploreOurServices.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ExploreOurServices.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ExploreOurServices, "HAWH03/SWYPo0uzZ5r4WbvSza3M=", false, function() {
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
"[project]/src/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
const About = ()=>{
    _s();
    const { t, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "w-full bg-white py-10 sm:py-14 lg:py-20 overflow-x-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-gray-200 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 lg:min-h-[420px] w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative h-56 sm:h-64 md:h-72 lg:h-auto ${isRTL ? 'lg:order-2' : ''} w-full`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    ref: (img)=>{
                                        if (img) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$performance144$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizeImage"])(img);
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-5 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center ${isRTL ? 'lg:order-1' : ''} text-center sm:text-left w-full`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h4, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3 lg:gap-4 justify-center ${isRTL ? 'sm:justify-end' : 'sm:justify-start'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(About, "W9cFMWf1YWntK3e4slGgWkMPWEM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = About;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(About);
var _c, _c1;
__turbopack_context__.k.register(_c, "About");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
"use client";
function Services() {
    return null;
}
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
"use client";
function Projects() {
    return null;
}
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
"use client";
function Contact() {
    return null;
}
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GetInTouch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SpotlightCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const GetInTouch = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(()=>{
    _s();
    const { t, isRTL } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GetInTouch.useCallback[handleChange]": (e)=>{
            const { name, value } = e.target;
            setFormData({
                "GetInTouch.useCallback[handleChange]": (prev)=>({
                        ...prev,
                        [name]: value
                    })
            }["GetInTouch.useCallback[handleChange]"]);
        }
    }["GetInTouch.useCallback[handleChange]"], []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        try {
            const formData = new FormData(e.currentTarget);
            formData.append("access_key", "09da8ae2-c231-497d-9fd9-90d7ce186857");
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setTimeout(()=>setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(()=>setSubmitStatus('idle'), 5000);
            }
        } catch (error) {
            // Error submitting form
            setSubmitStatus('error');
            setTimeout(()=>setSubmitStatus('idle'), 5000);
        } finally{
            setIsSubmitting(false);
        }
    };
    const contactInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "GetInTouch.useMemo[contactInfo]": ()=>[
                {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"],
                    title: t('contact.phoneNumber'),
                    detail: '+971 52 501 0132',
                    link: 'tel:+971525010132',
                    animation: 'pulse',
                    iconColor: 'from-green-500 to-emerald-600',
                    iconBg: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20'
                },
                {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                    title: t('contact.emailAddress'),
                    detail: 'services@aqsatech.ae',
                    link: 'mailto:services@aqsatech.ae',
                    animation: 'bounce',
                    iconColor: 'from-blue-500 to-cyan-600',
                    iconBg: 'bg-gradient-to-br from-blue-500/20 to-cyan-600/20'
                },
                {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                    title: t('contact.address'),
                    detail: 'United Arab Emirates',
                    link: '#',
                    animation: 'shake',
                    iconColor: 'from-orange-500 to-amber-600',
                    iconBg: 'bg-gradient-to-br from-orange-500/20 to-amber-600/20'
                },
                {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                    title: t('contact.workingHours'),
                    detail: 'Mon - Fri: 8AM - 6PM',
                    link: '#',
                    animation: 'pulse',
                    iconColor: 'from-purple-500 to-indigo-600',
                    iconBg: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20'
                }
            ]
    }["GetInTouch.useMemo[contactInfo]"], [
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "get-in-touch",
        className: "relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden",
        dir: isRTL ? 'rtl' : 'ltr',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-brand-teal/25 to-brand-teal/8 rounded-full blur-3xl animate-float-lg delay-120 max-w-[90vw]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GetInTouch.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-brand-blue/25 to-brand-blue/8 rounded-full blur-3xl animate-float-lg delay-320 max-w-[90vw]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GetInTouch.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-3xl animate-float-lg delay-240 max-w-[90vw]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GetInTouch.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GetInTouch.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GetInTouch.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 animate-fade-zoom anim-delayed delay-80",
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
                                    duration: 0.2,
                                    ease: [
                                        0.25,
                                        0.1,
                                        0.25,
                                        1
                                    ]
                                },
                                className: "inline-block mb-3 sm:mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 rounded-full border border-brand-teal/20 text-brand-teal font-semibold text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GetInTouch.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GetInTouch.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 sm:mb-4 lg:mb-5 xl:mb-6 animate-fade-zoom delay-120 px-2 sm:px-0",
                                children: t('contact.title')
                            }, void 0, false, {
                                fileName: "[project]/src/components/GetInTouch.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-zoom delay-160 px-2 sm:px-0 font-medium leading-relaxed",
                                children: t('contact.subtitle')
                            }, void 0, false, {
                                fileName: "[project]/src/components/GetInTouch.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GetInTouch.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: isRTL ? 50 : -50
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
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
                                className: `relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 animate-fade-zoom anim-delayed delay-200 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 form-bg-animated border border-gray-100 w-full ${isRTL ? 'lg:order-2' : 'lg:order-1'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-teal/20 via-brand-blue/20 to-brand-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-200 -z-10 blur-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-5 sm:mb-6 lg:mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-2",
                                                        children: "Fill out the form"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs sm:text-sm lg:text-base text-gray-600",
                                                        children: "We'll get back to you within 24 hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmit,
                                                className: "space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.15,
                                                            delay: 0.03,
                                                            ease: [
                                                                0.25,
                                                                0.1,
                                                                0.25,
                                                                1
                                                            ]
                                                        },
                                                        className: "animate-fade-zoom delay-240",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "name",
                                                                className: `block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-brand-teal",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 19
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    t('contact.name')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "name",
                                                                name: "name",
                                                                value: formData.name,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: `w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`,
                                                                placeholder: t('contact.enterName'),
                                                                dir: isRTL ? 'rtl' : 'ltr'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.15,
                                                            delay: 0.05,
                                                            ease: [
                                                                0.25,
                                                                0.1,
                                                                0.25,
                                                                1
                                                            ]
                                                        },
                                                        className: "animate-fade-zoom delay-280",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "email",
                                                                className: `block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-brand-teal",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 19
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    t('contact.email')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                id: "email",
                                                                name: "email",
                                                                value: formData.email,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: `w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`,
                                                                placeholder: t('contact.enterEmail'),
                                                                dir: "ltr"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.15,
                                                            delay: 0.07,
                                                            ease: [
                                                                0.25,
                                                                0.1,
                                                                0.25,
                                                                1
                                                            ]
                                                        },
                                                        className: "animate-fade-zoom delay-320",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "phone",
                                                                className: `block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-brand-teal",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 19
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    t('contact.phone')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                id: "phone",
                                                                name: "phone",
                                                                value: formData.phone,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: `w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`,
                                                                placeholder: t('contact.enterPhone'),
                                                                dir: "ltr"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.15,
                                                            delay: 0.09,
                                                            ease: [
                                                                0.25,
                                                                0.1,
                                                                0.25,
                                                                1
                                                            ]
                                                        },
                                                        className: "animate-fade-zoom delay-360",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "subject",
                                                                className: `block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-brand-teal",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 19
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    t('contact.subject')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "subject",
                                                                name: "subject",
                                                                value: formData.subject,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: `w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`,
                                                                placeholder: t('contact.enterSubject'),
                                                                dir: isRTL ? 'rtl' : 'ltr'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.15,
                                                            delay: 0.11,
                                                            ease: [
                                                                0.25,
                                                                0.1,
                                                                0.25,
                                                                1
                                                            ]
                                                        },
                                                        className: "animate-fade-zoom delay-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "message",
                                                                className: `block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-brand-teal",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 19
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    t('contact.message')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                id: "message",
                                                                name: "message",
                                                                value: formData.message,
                                                                onChange: handleChange,
                                                                required: true,
                                                                rows: 5,
                                                                className: `w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 resize-none hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`,
                                                                placeholder: t('contact.enterMessage'),
                                                                dir: isRTL ? 'rtl' : 'ltr'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 17
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.15,
                                                            delay: 0.13,
                                                            ease: [
                                                                0.25,
                                                                0.1,
                                                                0.25,
                                                                1
                                                            ]
                                                        },
                                                        className: "animate-fade-zoom delay-480 pt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            type: "submit",
                                                            variant: "dark",
                                                            size: "lg",
                                                            fullWidth: true,
                                                            leftIcon: !isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 45
                                                            }, void 0) : undefined,
                                                            disabled: isSubmitting,
                                                            className: "w-full bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-teal/90 hover:to-brand-blue/90 text-white font-bold py-4 sm:py-5 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",
                                                            children: isSubmitting ? t('contact.submitting') : `🚀 ${t('contact.send')}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GetInTouch.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    submitStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200 ${isRTL ? 'flex-row-reverse' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: `w-5 h-5 flex-shrink-0 ${isRTL ? 'order-2' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`,
                                                                children: t('contact.success')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    submitStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200 ${isRTL ? 'flex-row-reverse' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`,
                                                            children: t('contact.error')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GetInTouch.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                lineNumber: 157,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GetInTouch.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `space-y-4 sm:space-y-6 ${isRTL ? 'lg:order-1' : 'lg:order-2'} w-full`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5 w-full",
                                        children: contactInfo.map((info, index)=>{
                                            const IconComponent = info.icon;
                                            // Animation configurations for each icon
                                            const getAnimationProps = ()=>{
                                                switch(info.animation){
                                                    case 'pulse':
                                                        return {
                                                            animate: {
                                                                scale: [
                                                                    1,
                                                                    1.15,
                                                                    1
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 2.5,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                repeatDelay: 0
                                                            }
                                                        };
                                                    case 'bounce':
                                                        return {
                                                            animate: {
                                                                y: [
                                                                    0,
                                                                    -10,
                                                                    0
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                repeatDelay: 0.2
                                                            }
                                                        };
                                                    case 'shake':
                                                        return {
                                                            animate: {
                                                                scale: [
                                                                    1,
                                                                    1.05,
                                                                    1,
                                                                    1.05,
                                                                    1
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 2.5,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                repeatDelay: 0.5
                                                            }
                                                        };
                                                    case 'rotate':
                                                        return {
                                                            animate: {
                                                                scale: [
                                                                    1,
                                                                    1.1,
                                                                    1
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 3,
                                                                repeat: Infinity,
                                                                ease: [
                                                                    0.4,
                                                                    0,
                                                                    0.6,
                                                                    1
                                                                ]
                                                            }
                                                        };
                                                    default:
                                                        return {};
                                                }
                                            };
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 12
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
                                                    delay: index * 0.03,
                                                    ease: [
                                                        0.25,
                                                        0.1,
                                                        0.25,
                                                        1
                                                    ]
                                                },
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SpotlightCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    spotlightColor: info.iconColor.includes('green') || info.iconColor.includes('emerald') ? 'rgba(16, 185, 129, 0.25)' : info.iconColor.includes('blue') || info.iconColor.includes('cyan') ? 'rgba(59, 130, 246, 0.25)' : info.iconColor.includes('orange') || info.iconColor.includes('amber') ? 'rgba(249, 115, 22, 0.25)' : info.iconColor.includes('purple') || info.iconColor.includes('indigo') ? 'rgba(139, 92, 246, 0.25)' : 'rgba(99, 102, 241, 0.25)',
                                                    className: `group bg-white border border-gray-200 shadow-md p-4 sm:p-5 lg:p-6 card-lift ${info.link === '#' ? 'pointer-events-none' : 'cursor-pointer'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: info.link,
                                                        className: `flex items-start gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''} relative z-10`,
                                                        onClick: (e)=>{
                                                            if (info.link === '#') {
                                                                e.preventDefault();
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                ...getAnimationProps(),
                                                                whileHover: {
                                                                    scale: 1.12
                                                                },
                                                                className: `relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg flex items-center justify-center text-white shadow-md group-hover:shadow-xl transition-all duration-300 ${isRTL ? 'order-2' : ''} ${info.iconColor} bg-gradient-to-br`,
                                                                style: {
                                                                    boxShadow: '0 8px 18px -6px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.08) inset'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `absolute inset-0 rounded-xl ${info.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                        className: "relative z-10 w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 drop-shadow-md",
                                                                        strokeWidth: 2.3,
                                                                        style: {
                                                                            filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.25))'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 427,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 435,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: `text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-1.5 uppercase tracking-wide ${isRTL ? 'text-right' : 'text-left'}`,
                                                                        children: info.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 438,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors duration-300 truncate ${isRTL ? 'text-right' : 'text-left'}`,
                                                                        children: info.detail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 437,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GetInTouch.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: isRTL ? -50 : 50
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
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
                                        className: `relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-8 xl:p-10 text-gray-900 animate-fade-zoom anim-delayed delay-400 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 border border-gray-100 w-full ${isRTL ? 'text-right' : 'text-left'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-blue/20 via-brand-teal/20 to-brand-blue/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-5 sm:mb-6 lg:mb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: `text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 ${isRTL ? 'text-right' : 'text-left'}`,
                                                                children: t('contact.whyChooseUs')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs sm:text-sm lg:text-base text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`,
                                                                children: "What sets us apart"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: `space-y-2.5 sm:space-y-3 lg:space-y-4 mb-5 sm:mb-6 lg:mb-8 ${isRTL ? 'text-right' : 'text-left'}`,
                                                        children: [
                                                            {
                                                                text: t('contact.whyChooseItem1'),
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                                                gradient: 'from-red-500 to-orange-600'
                                                            },
                                                            {
                                                                text: t('contact.whyChooseItem2'),
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                                                gradient: 'from-blue-500 to-indigo-600'
                                                            },
                                                            {
                                                                text: t('contact.whyChooseItem3'),
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                                                gradient: 'from-green-500 to-emerald-600'
                                                            },
                                                            {
                                                                text: t('contact.whyChooseItem4'),
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                                                                gradient: 'from-purple-500 to-pink-600'
                                                            },
                                                            {
                                                                text: t('contact.whyChooseItem5'),
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                                                                gradient: 'from-teal-500 to-cyan-600'
                                                            }
                                                        ].map((item, index)=>{
                                                            const IconComponent = item.icon;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: isRTL ? 20 : -20
                                                                },
                                                                whileInView: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                viewport: {
                                                                    once: true
                                                                },
                                                                transition: {
                                                                    duration: 0.15,
                                                                    delay: index * 0.03,
                                                                    ease: [
                                                                        0.25,
                                                                        0.1,
                                                                        0.25,
                                                                        1
                                                                    ]
                                                                },
                                                                className: `flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/50 hover:bg-white transition-colors duration-300 group w-full ${isRTL ? 'flex-row-reverse' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                            className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8",
                                                                            style: {
                                                                                color: 'white',
                                                                                fill: 'white',
                                                                                stroke: 'white',
                                                                                strokeWidth: 2.5
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/GetInTouch.tsx",
                                                                            lineNumber: 486,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-gray-900 flex-1 ${isRTL ? 'text-right' : 'text-left'} break-words`,
                                                                        children: item.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 496,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-5 sm:pt-6 lg:pt-8 border-t-2 border-gray-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-gray-300 shadow-md",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-sm sm:text-base lg:text-lg text-gray-900 mb-3 sm:mb-4 lg:mb-5 font-bold ${isRTL ? 'text-right' : 'text-left'}`,
                                                                    children: t('contact.needImmediateAssistance')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GetInTouch.tsx",
                                                                    lineNumber: 504,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative w-full z-10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "tel:+971525010132",
                                                                        className: `relative flex items-center justify-center gap-2 sm:gap-3 w-full bg-white text-[#174A67] font-bold py-4 sm:py-5 lg:py-6 px-5 sm:px-6 lg:px-8 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg lg:text-xl overflow-hidden group ${isRTL ? 'flex-row-reverse' : ''}`,
                                                                        style: {
                                                                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-gradient-to-r from-brand-teal/20 via-brand-blue/20 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                                lineNumber: 516,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent ${isRTL ? 'translate-x-full group-hover:-translate-x-full' : '-translate-x-full group-hover:translate-x-full'} transition-transform duration-700`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                                lineNumber: 519,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                                                                className: `w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 relative z-10 animate-pulse group-hover:animate-none ${isRTL ? 'order-2' : ''}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                                lineNumber: 522,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "relative z-10 font-extrabold tracking-wide",
                                                                                children: "+971 52 501 0132"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                                lineNumber: 523,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#7DD3FC] via-[#45C0B0] to-[#3B82F6] opacity-100 -z-10"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                                lineNumber: 526,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "absolute inset-[2px] rounded-full bg-white -z-[1]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                                                lineNumber: 527,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                                        lineNumber: 508,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GetInTouch.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GetInTouch.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GetInTouch.tsx",
                                                lineNumber: 462,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GetInTouch.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GetInTouch.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GetInTouch.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GetInTouch.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GetInTouch.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}, "yTSMKeFjPsm0vGa7GXVT/mDJukU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "yTSMKeFjPsm0vGa7GXVT/mDJukU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = GetInTouch;
GetInTouch.displayName = 'GetInTouch';
const __TURBOPACK__default__export__ = GetInTouch;
var _c, _c1;
__turbopack_context__.k.register(_c, "GetInTouch$React.memo");
__turbopack_context__.k.register(_c1, "GetInTouch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/HomeClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StructuredData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FAQSchema.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalSEOSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LocalSEOSchema.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubheroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SubheroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DiscoverPopularServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DiscoverPopularServices.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExploreOurServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExploreOurServices.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StepByStepGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StepByStepGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Services.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Projects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GetInTouch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GetInTouch.tsx [app-client] (ecmascript)");
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
;
;
;
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
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 24,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/HomeClient.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/HomeClient.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = SmoothLoader;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Aqsatech in Dubai | #1 Aqsa Tech UAE - Best AC Service, Home Maintenance",
                description: "⭐ Aqsatech in Dubai - UAE's #1 Most Trusted Technical Services Company"
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "Organization"
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "LocalBusiness"
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalSEOSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "hero",
                className: "section-fade",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
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
                    once: true,
                    margin: "-50px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 45,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubheroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 45,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
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
                    once: true,
                    margin: "-50px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 48,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 48,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
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
                    once: true,
                    margin: "-50px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 51,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DiscoverPopularServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 51,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "services",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 54,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExploreOurServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 54,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "how-it-works",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 57,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StepByStepGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 57,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
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
                    once: true,
                    margin: "-50px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 60,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 60,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
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
                    once: true,
                    margin: "-50px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 63,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 63,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 66,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 66,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
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
                    once: true,
                    margin: "-50px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 69,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GetInTouch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/HomeClient.tsx",
                        lineNumber: 69,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/HomeClient.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/HomeClient.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SmoothLoader");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7cb185aa._.js.map