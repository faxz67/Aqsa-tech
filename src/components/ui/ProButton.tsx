import React from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'outline' | 'dark';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
};

type ButtonNativeProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'>;
type AnchorNativeProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'>;

type ButtonProps = ButtonNativeProps & CommonProps & {
  as?: 'button';
};

type AnchorProps = AnchorNativeProps & CommonProps & {
  as: 'a';
  href: string;
};

export type ProButtonProps = ButtonProps | AnchorProps;

const sizeClasses: Record<Size, string> = {
  sm: 'text-xs px-4 py-2 rounded-full',
  md: 'text-sm px-6 py-2.5 rounded-full',
  lg: 'text-base px-8 py-3.5 rounded-full'
};

const variantClasses: Record<Variant, string> = {
  primary:
    'text-[#174A67] bg-white border-2 border-transparent bg-clip-padding shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
  secondary:
    'text-[#174A67] bg-white border-2 border-transparent bg-clip-padding shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
  outline:
    'text-[#174A67] bg-white border-2 border-transparent bg-clip-padding shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
  dark:
    'text-gray-900 bg-white border-2 border-transparent bg-clip-padding shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
};

export default function ProButton(props: ProButtonProps) {
  const {
    children,
    variant = 'dark',
    size = 'md',
    fullWidth,
    leftIcon,
    rightIcon,
    className = '',
    as = 'button',
    ...rest
  } = props;

  // Determine text color based on variant
  const textColorClass = variant === 'dark' ? 'text-gray-900' : 'text-[#174A67]';

  const base = `relative inline-flex items-center justify-center select-none no-underline font-semibold tracking-tight ${
    sizeClasses[size as Size]
  } ${variantClasses[variant as Variant]} ${fullWidth ? 'w-full' : ''} transition-all duration-300 ease-out group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden`;

  const inner = `relative flex items-center gap-2`;

  // Unique "cut" shape using clip-path
  // clip-path handled purely via CSS class now

  const content = (
    <>
      {/* Gradient border background */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7DD3FC] via-[#45C0B0] to-[#3B82F6] opacity-100 -z-10"
      />
      {/* White background overlay */}
      <span
        aria-hidden
        className="absolute inset-[2px] rounded-full bg-white -z-[1]"
      />
      <span className={`${inner} relative z-10`}>
        {leftIcon && <span className={`flex items-center -ml-0.5 pro-btn-icon-left ${textColorClass}`}>{leftIcon}</span>}
        <span className={`pro-btn-text ${textColorClass} font-semibold`}>{children}</span>
        {rightIcon && <span className={`flex items-center -mr-0.5 pro-btn-icon-right ${textColorClass}`}>{rightIcon}</span>}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { 
      scale: 1.03,
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 17 }
    },
    whileTap: { 
      scale: 0.97,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 17 }
    },
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  };

  if (as === 'a') {
    const { href, onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...anchorRest } = rest as AnchorProps & { onDrag?: any; onDragStart?: any; onDragEnd?: any; onAnimationStart?: any; onAnimationEnd?: any };
    return (
      <motion.a
        {...motionProps}
        {...(anchorRest as any)}
        href={href}
        className={`${base} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  const { onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...buttonRest } = rest as ButtonProps & { onDrag?: any; onDragStart?: any; onDragEnd?: any; onAnimationStart?: any; onAnimationEnd?: any };
  return (
    <motion.button
      {...motionProps}
      {...(buttonRest as any)}
      className={`${base} ${className}`}
    >
      {content}
    </motion.button>
  );
}
