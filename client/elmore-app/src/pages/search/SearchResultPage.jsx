import { useSearchParams } from "react-router-dom";
import RecommendFriends from "../../components/sidebar/minisidebar/RecommendFriends";
import MiniFooter from "../../components/footer/MiniFooter";
import MainPost from "../../components/post/mainpost/MainPost";
import SharedPost from "../../components/post/mainpost/SharedPost";

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  return (
    <div className="w-full min-h-96 ">
      <div className="h-full flex flex-row gap-0">
        <div className="min-h-screen w-2/3 border-r-[1px] border-blue-300 ">
          <div className="w-full text-lg p-6">
            <span className="fredoka-font font-black">Search result for: </span>
            <span>{query}</span>
          </div>
          <div className="flex flex-col gap-12 py-6 px-24">
            <MainPost />
            <MainPost />
            <SharedPost />
            <SharedPost />
            <SharedPost />
            <MainPost />
            <MainPost />
          </div>
        </div>
        <div className="w-1/3">
          <div className="mx-auto w-11/12 sticky top-20">
            <RecommendFriends />
            <div className="mt-6">
              <MiniFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
