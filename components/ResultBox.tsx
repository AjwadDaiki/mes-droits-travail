interface ResultBoxProps {
  label: string
  value: string
  subtitle?: string
  highlight?: boolean
}

export default function ResultBox({
  label,
  value,
  subtitle,
  highlight = false,
}: ResultBoxProps) {
  return (
    <div
      className={`rounded-xl p-4 text-center mt-4 ${
        highlight
          ? 'bg-[#E8F4FD] border border-blue-200'
          : 'bg-[#E8F4FD] border border-blue-100'
      }`}
    >
      <p className="text-[#0A3D6B] text-sm font-medium uppercase tracking-wide">
        {label}
      </p>
      <p className="text-[#0A3D6B] text-4xl font-bold mt-1 leading-tight">
        {value}
      </p>
      {subtitle && (
        <p className="text-[#0A3D6B] text-sm mt-2 opacity-80">{subtitle}</p>
      )}
    </div>
  )
}
