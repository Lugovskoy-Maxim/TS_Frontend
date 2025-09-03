import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
export default function Logo () {
  return (
      <div>
        <h1>
          <Link href="/">
            <Image src={logo} alt="Трансстрой" width={200} height={46} className="dark:invert-80"/>
          </Link>
        </h1>
      </div>
  );
}
