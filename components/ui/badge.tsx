export function Badge({ children, className = '' }: any) {
  return (
    <span className={`text-xs px-2 py-1 rounded-md ${className}`}>
      {children}
    </span>
  )
}

