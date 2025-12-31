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
  sm: 'text-xs px-3 py-1.5 rounded-[14px]',
  md: 'text-sm px-5 py-2.5 rounded-[16px]',
  lg: 'text-base px-7 py-3.5 rounded-[18px]'
};

const variantClasses: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-to-br from-brand-teal to-brand-blue shadow-[0_12px_24px_-12px_rgba(15,23,42,0.55)] hover:from-brand-teal/90 hover:to-brand-blue/90',
  secondary:
    'bg-soft-gray-light text-brand-blue border border-brand-blue/40 hover:bg-white hover:text-brand-blue shadow-[0_8px_18px_-10px_rgba(15,23,42,0.25)]',
  outline:
    'bg-transparent text-brand-blue border border-brand-blue hover:bg-brand-blue hover:text-white shadow-none',
  dark:
    'text-white bg-[#111827] hover:bg-black shadow-[0_14px_28px_-16px_rgba(15,23,42,0.75)]'
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

  const isOutline = variant === 'outline';
  const isPrimary = variant === 'primary';
  const base = `relative inline-flex items-center justify-center select-none no-underline font-semibold tracking-tight ${
    sizeClasses[size as Size]
  } ${variantClasses[variant as Variant]} ${fullWidth ? 'w-full' : ''} transition-all duration-300 ease-out group pro-btn-shape pro-btn-animated ${isOutline ? 'pro-btn-outline' : ''} ${isPrimary ? 'pro-btn-primary-shimmer' : ''} focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`;

  const inner = `relative flex items-center gap-2`;

  // Unique "cut" shape using clip-path
  // clip-path handled purely via CSS class now

  const content = (
    <>
      {/* Corner accent */}
      <span
        aria-hidden
        className="pro-btn-corner"
      />
      {/* Shine on hover */}
      <span
        aria-hidden
        className="pro-btn-shine"
      />
      {/* Glow effect */}
      <span
        aria-hidden
        className="pro-btn-glow"
      />
      {/* Pulse effect for primary buttons */}
      {variant === 'primary' && (
        <span
          aria-hidden
          className="pro-btn-pulse"
        />
      )}
      <span className={inner}>
        {leftIcon && <span className="flex items-center -ml-0.5 pro-btn-icon-left">{leftIcon}</span>}
        <span className="pro-btn-text">{children}</span>
        {rightIcon && <span className="flex items-center -mr-0.5 pro-btn-icon-right">{rightIcon}</span>}
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
