import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 text-pink-500 bg-black shadow-sm border-pink-700 border-b-2">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            objectFit="cover"
            layout="fill"
            src="https://links.papareact.com/3pi"
            className="rounded-full"
          />
        </div>
        <div className="text-left lg:text-center col-span-4">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to METAVERSE</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
