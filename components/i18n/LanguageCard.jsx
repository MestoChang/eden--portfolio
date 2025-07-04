import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function LanguageCard({ locale, currentPath, onClick }) {
  return (
    <Link
      href={currentPath}
      locale={locale.code}
      className="hover:text-primary flex items-center gap-2 px-4 py-2 text-sm transition-all duration-300"
      onClick={onClick}
    >
      <Image src={locale.flagImg} alt={locale.label} width={16} height={16} />
      {locale.label}
    </Link>
  );
}
