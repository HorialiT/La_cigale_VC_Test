import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-sm font-serif font-bold transition-all duration-300 tracking-wider text-sm uppercase";
  
  const variants = {
    primary: "bg-cigale-gold text-white hover:bg-yellow-700 shadow-md",
    outline: "border-2 border-cigale-teal text-cigale-teal hover:bg-cigale-teal hover:text-white",
    ghost: "text-cigale-teal hover:text-cigale-gold bg-transparent"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;