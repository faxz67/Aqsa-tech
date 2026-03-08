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
"[project]/src/components/TextType.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const TextType = ({ text, as: Component = 'div', typingSpeed = 50, initialDelay = 0, pauseDuration = 2000, deletingSpeed = 30, loop = true, className = '', showCursor = true, hideCursorWhileTyping = false, cursorCharacter = '|', cursorClassName = '', cursorBlinkDuration = 0.5, textColors = [], variableSpeed, onSentenceComplete, startOnVisible = false, reverseMode = false, ...props })=>{
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentCharIndex, setCurrentCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTextIndex, setCurrentTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!startOnVisible);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.isArray(text) ? text : [
            text
        ], [
        text
    ]);
    const getRandomSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!variableSpeed) return typingSpeed;
        const { min, max } = variableSpeed;
        return Math.random() * (max - min) + min;
    }, [
        variableSpeed,
        typingSpeed
    ]);
    const getCurrentTextColor = ()=>{
        if (textColors.length === 0) return;
        return textColors[currentTextIndex % textColors.length];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!startOnVisible || !containerRef.current) return;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, {
            threshold: 0.1
        });
        observer.observe(containerRef.current);
        return ()=>observer.disconnect();
    }, [
        startOnVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showCursor && cursorRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursorRef.current, {
                opacity: 1
            });
            const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                opacity: 0,
                duration: cursorBlinkDuration,
                repeat: -1,
                yoyo: true,
                ease: 'power2.inOut',
                force3D: true,
                willChange: 'opacity'
            });
            return ()=>{
                animation.kill();
            };
        }
    }, [
        showCursor,
        cursorBlinkDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        let timeout;
        let rafId;
        const currentText = textArray[currentTextIndex];
        const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;
        const executeTypingAnimation = ()=>{
            if (isDeleting) {
                if (displayedText === '') {
                    setIsDeleting(false);
                    if (currentTextIndex === textArray.length - 1 && !loop) {
                        return;
                    }
                    if (onSentenceComplete) {
                        onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                    }
                    setCurrentTextIndex((prev)=>(prev + 1) % textArray.length);
                    setCurrentCharIndex(0);
                    timeout = setTimeout(()=>{}, pauseDuration);
                } else {
                    rafId = requestAnimationFrame(()=>{
                        timeout = setTimeout(()=>{
                            setDisplayedText((prev)=>prev.slice(0, -1));
                        }, deletingSpeed);
                    });
                }
            } else {
                if (currentCharIndex < processedText.length) {
                    rafId = requestAnimationFrame(()=>{
                        timeout = setTimeout(()=>{
                            setDisplayedText((prev)=>prev + processedText[currentCharIndex]);
                            setCurrentCharIndex((prev)=>prev + 1);
                        }, variableSpeed ? getRandomSpeed() : typingSpeed);
                    });
                } else if (textArray.length > 1) {
                    timeout = setTimeout(()=>{
                        setIsDeleting(true);
                    }, pauseDuration);
                }
            }
        };
        if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
            timeout = setTimeout(executeTypingAnimation, initialDelay);
        } else {
            executeTypingAnimation();
        }
        return ()=>{
            clearTimeout(timeout);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Component, {
        ref: containerRef,
        className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
        ...props
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline",
        style: {
            color: getCurrentTextColor() || 'inherit'
        },
        children: displayedText
    }, void 0, false, {
        fileName: "[project]/src/components/TextType.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: cursorRef,
        className: `ml-1 inline-block opacity-100 ${shouldHideCursor ? 'hidden' : ''} ${cursorClassName}`,
        children: cursorCharacter
    }, void 0, false, {
        fileName: "[project]/src/components/TextType.tsx",
        lineNumber: 197,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = TextType;
}),
"[project]/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextType.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const HeroSection = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shouldLoadVideo, setShouldLoadVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVideoLoaded, setIsVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
    // Scroll-based zoom animation
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: heroRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    // Transform scroll progress to scale value for professional zoom effect
    // Zoom in slightly as we scroll down (1.1 -> 1.3) for cinematic effect
    const videoScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        1.1,
        1.3
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Use Intersection Observer for better performance
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    requestAnimationFrame(()=>{
                        setShouldLoadVideo(true);
                    });
                    observer.disconnect();
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: heroRef,
                className: "relative min-h-screen flex flex-col overflow-hidden pt-24 sm:pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 w-full h-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                scale: prefersReducedMotion ? 1 : videoScale,
                                transform: 'translateZ(0)',
                                willChange: 'transform',
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden'
                            },
                            className: "w-full h-full",
                            children: shouldLoadVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 bg-black/40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-48 sm:h-56 md:h-64 lg:h-72 z-0 bg-gradient-to-t from-black via-black/98 to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto w-full text-center overflow-hidden px-2 sm:px-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            "aria-label": "5 star rating",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
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
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroTypingHeading, {
                                    prefersReducedMotion: prefersReducedMotion
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-6xl mx-auto text-center px-3 sm:px-0",
                    children: t('hero.description').split(/(\{seamless\}|\{userFriendly\}|\{simpleBooking\})/).map((part, i)=>{
                        if (part === '{seamless}') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-brand-teal",
                            children: t('hero.seamless')
                        }, i, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 217,
                            columnNumber: 47
                        }, ("TURBOPACK compile-time value", void 0));
                        if (part === '{userFriendly}') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-brand-blue",
                            children: t('hero.userFriendly')
                        }, i, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 218,
                            columnNumber: 51
                        }, ("TURBOPACK compile-time value", void 0));
                        if (part === '{simpleBooking}') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-brand-teal",
                            children: t('hero.simpleBooking')
                        }, i, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 219,
                            columnNumber: 52
                        }, ("TURBOPACK compile-time value", void 0));
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
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
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(HeroSection);
// Local component to render the hero headline and subheadline.
const HeroTypingHeading = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ prefersReducedMotion = false })=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const line1 = t('hero.heading1');
    const line2 = t('hero.heading2');
    const sub = t('hero.subheading');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center w-full mt-0 sm:mt-2 md:mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-center leading-[1.1] sm:leading-[1.05] md:leading-[0.95] mb-3 sm:mb-4 md:mb-5 px-2 sm:px-4 w-full",
                children: [
                    prefersReducedMotion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-center w-full mb-1 sm:mb-0 break-words",
                        children: line1
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-center w-full mb-1 sm:mb-0 break-words",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    prefersReducedMotion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-center w-full break-words",
                        children: line2
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white text-center w-full break-words",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
});
}),
"[project]/src/components/SEOHead.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const SEOHead = ({ title, description, keywords, image = 'https://aqsatech.ae/Logo Chatgpt.png', type = 'website', noindex = false })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const baseUrl = 'https://aqsatech.ae';
    const currentUrl = `${baseUrl}${pathname}`;
    // Default SEO values - Use translated values
    const defaultTitle = t('seo.title');
    const defaultDescription = t('seo.description');
    const defaultKeywords = 'aqsatech in dubai, aqsatech dubai, aqsatech uae, aqsatech.ae, aqsa tech dubai, aqsa tech uae, aqsatech services dubai, aqsatech contact dubai, aqsatech phone dubai, aqsatech ac service dubai, aqsatech home maintenance dubai, aqsatech renovation dubai, aqsatech handyman dubai, aqsatech plumbing dubai, aqsatech electrical dubai, aqsatech painting dubai, aqsatech tiling dubai, aqsatech office fit out dubai, aqsatech villa renovation dubai, aqsatech apartment renovation dubai, aqsatech kitchen renovation dubai, aqsatech ac installation dubai, aqsatech ac repair dubai, aqsatech ac maintenance dubai, aqsatech emergency services dubai, aqsatech 24/7 dubai, aqsatech same day service dubai, aqsatech free quote dubai, aqsatech property maintenance dubai, aqsatech building maintenance dubai, aqsatech MEP services dubai, aqsatech HVAC dubai, aqsatech carpentry dubai, aqsatech waterproofing dubai, aqsatech licensed contractor dubai, Aqsa Tech, AQSATECH, technical services UAE, home maintenance Dubai, AC service UAE, renovation Dubai, handyman UAE, fit out UAE, villa renovation UAE, apartment renovation UAE, AC repair Dubai, plumbing services Dubai, electrical services UAE, painting contractors Dubai, tiling services Dubai, carpentry Dubai, HVAC Dubai, building maintenance UAE, property maintenance Dubai, office fit out Dubai, kitchen renovation UAE, AC installation Dubai, AC maintenance UAE, emergency plumber Dubai, 24/7 handyman services, same day AC repair, licensed electrician Dubai, waterproofing UAE';
    const finalTitle = title || defaultTitle;
    const finalDescription = description || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Update document title
        document.title = finalTitle;
        // Update or create meta tags
        const updateMetaTag = (name, content, attribute = 'name')=>{
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.content = content;
        };
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
        const updateHreflang = (lang, href)=>{
            let hreflang = document.querySelector(`link[hreflang="${lang}"]`);
            if (!hreflang) {
                hreflang = document.createElement('link');
                hreflang.rel = 'alternate';
                hreflang.setAttribute('hreflang', lang);
                document.head.appendChild(hreflang);
            }
            hreflang.href = href;
        };
        updateHreflang('en', currentUrl);
        updateHreflang('x-default', currentUrl);
        // Update HTML lang attribute
        document.documentElement.lang = 'en';
    }, [
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
const __TURBOPACK__default__export__ = SEOHead;
}),
"[project]/src/components/StructuredData.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const StructuredData = ({ type, data })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const baseUrl = 'https://aqsatech.ae';
    const socialProfiles = [
        'https://www.facebook.com/share/1CiAnnR5uL/',
        'https://www.instagram.com/aqsa.techs?igsh=bjJld3Y0anhiam1i',
        'https://twitter.com/aqsatech_ae',
        'https://www.linkedin.com/company/aqsatech-ae/'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>{
            const scriptToRemove = document.getElementById(`structured-data-${type.toLowerCase()}`);
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [
        type,
        data,
        pathname,
        baseUrl
    ]);
    return null;
};
const __TURBOPACK__default__export__ = StructuredData;
}),
"[project]/src/components/FAQSchema.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const FAQSchema = ({ faqs })=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const structuredData = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqList.map((faq)=>({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer
                    }
                }))
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
        return ()=>{
            const scriptToRemove = document.getElementById('faq-schema');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [
        faqList
    ]);
    return null;
};
const __TURBOPACK__default__export__ = FAQSchema;
}),
"[project]/src/components/LocalSEOSchema.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
/**
 * Local SEO Schema Component
 * Optimized for "aqsatech in dubai" local search rankings
 */ const LocalSEOSchema = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>{
            const localToRemove = document.getElementById('local-seo-schema');
            const serviceToRemove = document.getElementById('service-seo-schema');
            if (localToRemove) localToRemove.remove();
            if (serviceToRemove) serviceToRemove.remove();
        };
    }, []);
    return null;
};
const __TURBOPACK__default__export__ = LocalSEOSchema;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StructuredData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQSchema$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FAQSchema.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalSEOSchema$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LocalSEOSchema.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const SubheroSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/SubheroSection.tsx [app-ssr] (ecmascript, async loader)"));
const DiscoverPopularServices = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/DiscoverPopularServices.tsx [app-ssr] (ecmascript, async loader)"));
const ExploreOurServices = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/ExploreOurServices.tsx [app-ssr] (ecmascript, async loader)"));
const StepByStepGuide = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/StepByStepGuide.tsx [app-ssr] (ecmascript, async loader)"));
const About = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/About.tsx [app-ssr] (ecmascript, async loader)"));
const Services = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/Services.tsx [app-ssr] (ecmascript, async loader)"));
const Projects = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/Projects.tsx [app-ssr] (ecmascript, async loader)"));
const Contact = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/Contact.tsx [app-ssr] (ecmascript, async loader)"));
const GetInTouch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/GetInTouch.tsx [app-ssr] (ecmascript, async loader)"));
const SmoothLoader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-16 h-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 border-4 border-brand-blue/20 rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 24,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Aqsatech in Dubai | #1 Aqsa Tech UAE - Best AC Service, Home Maintenance",
                description: "⭐ Aqsatech in Dubai - UAE's #1 Most Trusted Technical Services Company"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                type: "Organization"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                type: "LocalBusiness"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalSEOSchema$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQSchema$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "hero",
                className: "section-fade",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubheroSection, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(About, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiscoverPopularServices, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "services",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExploreOurServices, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "how-it-works",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 57,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StepByStepGuide, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 57,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Services, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Projects, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothLoader, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 69,
                        columnNumber: 37
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GetInTouch, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 69,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_45ae5473._.js.map