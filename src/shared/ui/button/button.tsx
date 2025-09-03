import Link from "next/link";

type IsButtonProp = {
  text: string;
  link: string;
  active?: boolean;
};

export default function Button({text, link, active}:IsButtonProp) {
  return (
    <button type="button" className="">
      <Link href={link} className={`flex items-center justify-center hover:text-[var(--secondary-color)] hover:underline underline-offset-10 transition-colors ease-in ${active ? "underline" : "" }`}>
        {text}
      </Link>
    </button>
  );
}
