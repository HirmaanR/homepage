import Image from "next/image";
import profilePic from "../public/assets/img/hirmaan.jpg";

const Avatar = () => {
  return (
    <div
      className="flex flex-col justify-between items-center m-2
      "
    >
      <div className="avatar">
        <div
          className="w-36 lg:w-80 rounded-full ring-secondary ring-2 my-2
          "
        >
          <Image src={profilePic} alt="hirmaan picture" />
        </div>
      </div>
      <div className="text-center my-2">
        <h1 className="font-bold text-2xl lg:text-4xl capitalize">
          hirmaan rashidi
        </h1>
        <p className="font-medium lg:text-2xl my-2">Full-Stack Developer</p>
      </div>
    </div>
  );
};
export default Avatar;
