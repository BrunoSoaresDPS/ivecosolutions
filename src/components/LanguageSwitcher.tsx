import { useLanguage, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const flags: Record<Language, { emoji: string; label: string }> = {
  pt: { emoji: "🇧🇷", label: "Português" },
  es: { emoji: "🇪🇸", label: "Español" },
  en: { emoji: "🇺🇸", label: "English" },
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {(Object.keys(flags) as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={cn(
            "text-lg sm:text-xl p-1 rounded transition-all duration-200 hover:scale-110",
            language === lang
              ? "opacity-100 ring-2 ring-white/50 bg-white/10"
              : "opacity-60 hover:opacity-100"
          )}
          title={flags[lang].label}
        >
          {flags[lang].emoji}
        </button>
      ))}
    </div>
  );
}
