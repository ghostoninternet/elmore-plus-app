import SecondaryMainSideBar from "../../components/sidebar/SecondaryMainSideBar";
import "../../css/CustomOne.css";
import MakePostInput from "../../components/makepost/makepostinput/MakePostInput";
import MainContent from "../../components/main/MainContent";
import FriendMainSidebar from "../../components/sidebar/FriendMainSidebar";

export default function PostPage() {
  return (
    <div className="relative w-full flex flex-row justify-between">
      <div className="ml-14  w-1/2 pt-4 min-h-96">
        <div className="w-full">
          
        </div>
      </div>
      <div className=" w-1/3 px-5 border-l-[1px] border-blue-100 custom-height sticky top-16">
        <SecondaryMainSideBar />
      </div>
      <div className="w-16 sticky top-16 custom-height border-l-[1px] border-blue-100 bg-white">
        <FriendMainSidebar />
      </div>
    </div>
  );
}
