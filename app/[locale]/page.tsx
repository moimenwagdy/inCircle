import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import FirstTest from "../components/FirstTest";
import LanguageSwitcher from "../components/LangSwitcher";
import Link from "next/link";

export default async function Home({ params }: { params: Params }) {
  const locale = params.locale;
  return (
    <div>
      <FirstTest />
      <LanguageSwitcher />
      <Link href={`${locale}/gege`}>to gege</Link>
    </div>
  );
}
