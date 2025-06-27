function Button({ children, variant = "primary", className = "" }) {
  const baseClasses = `
    transition ease-in-out duration-300
    text-sm md:text-md lg:text-lg
    py-1 px-3 rounded font-medium
  `;
  const variantClasses = getVariantClasses(variant);
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}

function getVariantClasses(variant) {
  switch (variant) {
    case "primary":
      return "text-primary bg-secondary hover:bg-transparent hover:text-secondary";
    case "secondary":
      return "text-secondary hover:bg-secondary hover:text-primary";
    default:
      return "";
  }
}

export default Button;
