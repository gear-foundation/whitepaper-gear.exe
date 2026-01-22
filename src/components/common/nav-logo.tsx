import {LogoVaraEthShort} from "@/components/common/logo-vara-eth";
import {cn} from "@/lib/cn";

type Props = {
  className?: string;
};

export function NavLogo({className}: Props) {
  return (
    <div
      className={cn(
        "flex gap-2 justify-center items-center md:w-auto text-base font-semibold transition-opacity duration-300 hover:opacity-75",
        className,
      )}
    >
      <div
        className="inline-flex justify-center items-center p-1.5 aspect-square bg-linear-to-br from-emerald-400 to-emerald-300 dark:from-emerald-700 dark:to-emerald-600 rounded">
        <LogoVaraEthShort className="h-2"/>
      </div>
      {" "}
      <span>Whitepaper</span>
    </div>
  );
}
