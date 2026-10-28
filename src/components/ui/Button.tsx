import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[34px]',
    md: 'text-sm px-4 py-2 gap-2 min-h-[40px]',
    lg: 'text-base px-6 py-2.5 gap-2.5 min-h-[46px]',
  };

  const variantClasses = {
    primary:
      'bg-primary-theme hover:opacity-90 text-white font-medium shadow-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2',
    secondary:
      'bg-surface-elevated hover:bg-surface text-canvas-text border border-theme font-medium transition-all duration-150 hover:border-border-subtle active:scale-[0.98]',
    outline:
      'border border-primary-theme text-primary-theme hover:bg-subtle-accent font-medium transition-all duration-150 active:scale-[0.98]',
    ghost:
      'text-muted-theme hover:text-canvas-text hover:bg-surface-elevated font-medium transition-colors duration-150',
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg whitespace-nowrap shrink-0 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : (
        icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
