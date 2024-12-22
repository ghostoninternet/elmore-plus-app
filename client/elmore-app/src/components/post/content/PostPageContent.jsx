import FileContent from "../parts/FileContent";
import IconToolDisplay from "../parts/IconToolDisplay";
import PostTextContent from "../parts/PostTextContent";
import HeaderPost from "../parts/HeaderPost";

export default function PostPageContent() {
  return (
    <div className="w-full pt-3">
      <div className="w-full h-12 mb-6">
        <HeaderPost />
      </div>
      <div className="w-full mb-6">
        <PostTextContent isDisplayFullText={true} />
      </div>
      <div className="w-full mb-6">
        <FileContent />
      </div>
      <div className="w-full mb-0">
        <IconToolDisplay />
      </div>
    </div>
  );
}
