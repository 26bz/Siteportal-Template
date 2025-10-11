const MinecraftButton = ({
  children,
  className = '',
  onClick,
  icon,
  disabled,
  variant = 'default', // 'default', 'primary', 'danger'
  size = 'medium', // 'small', 'medium', 'large'
}) => {
  const sizeClasses = {
    small: 'h-8 text-sm',
    medium: 'h-12 text-lg',
    large: 'h-16 text-2xl',
  };

  const variantClasses = {
    default: 'hover:bg-gray-500/60',
    primary: 'hover:bg-blue-500/60 hover:text-yellow-100',
    danger: 'hover:bg-red-500/60 hover:text-yellow-100',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        w-full px-4 my-1
        bg-[url('/bgbtn.png')] bg-cover bg-center
        border-4 border-black/50
        font-['minecraft'] uppercase leading-none
        text-gray-200
        transition-all duration-75
        cursor-pointer
        [image-rendering:pixelated]
        flex items-center justify-between
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        shadow-[inset_-2px_-4px_rgba(0,0,0,0.5),inset_2px_2px_rgba(255,255,255,0.3)]
        hover:shadow-[inset_-2px_-4px_rgba(0,0,0,0.3),inset_2px_2px_rgba(255,255,255,0.25)]
        active:shadow-[inset_-1px_-2px_rgba(0,0,0,0.4),inset_1px_1px_rgba(255,255,255,0.2)]
        active:translate-y-[1px]
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:bg-transparent
        disabled:active:translate-y-0
        disabled:active:scale-100
        ${className}
      `}
    >
      <span className="flex-1 text-shadow-[2px_2px_rgba(0,0,0,0.8)]">{children}</span>
      {icon && <span className="ml-2 flex items-center">{icon}</span>}
    </button>
  );
};

export default MinecraftButton;
