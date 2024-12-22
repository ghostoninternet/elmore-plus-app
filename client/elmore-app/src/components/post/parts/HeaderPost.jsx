import { Avatar } from "@material-tailwind/react";

export default function HeaderPost() {
  return (
    <>
      <div className="flex flex-row gap-2 h-full">
        <div className="h-full flex justify-center items-center">
          <Avatar
            src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
            alt="avatar"
            className=" h-3/4 w-auto "
          />
        </div>
        <div className="w-11/12 flex flex-col justify-center ">
          <div className=" font-bold text-black hover:underline w-full">
            <p className=" truncate w-2/3">Gumball waterson</p>
          </div>
          <div className=" text-xs ">
            <span>an hour ago </span>
          </div>
        </div>
      </div>
    </>
  );
}
