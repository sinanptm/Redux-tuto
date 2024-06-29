const sizes = {
  md: 'px-4 py-2 rounded-md text-base',
  lg: 'px-5 py-3 rounded-lg text-lg',
}

const colors = {
  indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white',
  red: 'bg-red-500 hover:bg-red-600 text-white', 
}

export default function Button({ color, size, children, onClick }) {
  let colorClasses = colors[color];
  let sizeClasses = sizes[size];

  return (
    <button type="button" onClick={onClick} className={`font-bold ${sizeClasses} ${colorClasses}`}>
      {children}
    </button>
  )
}
