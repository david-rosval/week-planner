import { useGlobal } from "../hooks/useGlobal"

export default function ToggleLanguageButton() {
  const { toggleLanguage, language } = useGlobal()
  return (
    <button
      onClick={toggleLanguage}
      className="uppercase size-8 absolute right-0 m-2 border rounded-full bg-white font-semibold dark:bg-neutral-900 border-neutral-900 dark:border-white z-10 hover:bg-neutral-100 transition-colors"
    >
      {language}
    </button>
  )
}
