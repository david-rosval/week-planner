import { useGlobal } from "../hooks/useGlobal";

export default function TextContent({ className, children }: {
  className: string;
  children: React.ReactNode
}) {
  const { language } = useGlobal()
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}
