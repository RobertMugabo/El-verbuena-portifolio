import {Link} from "@/i18n/navigation";

type LanguageSwitcherProps = {
  locale: string;
};

const locales = [
  {code: "en", label: "EN"},
  {code: "fr", label: "FR"}
] as const;

export function LanguageSwitcher({locale}: LanguageSwitcherProps) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      {locales.map((item) => (
        <Link
          key={item.code}
          href="/"
          locale={item.code}
          className={item.code === locale ? "locale-link active" : "locale-link"}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
