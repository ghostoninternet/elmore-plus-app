import { Link } from "react-router-dom";
import FileContent from "../parts/FileContent";
import IconToolDisplay from "../parts/IconToolDisplay";
import PostTextContent from "../parts/PostTextContent";
import { Card, CardBody } from "@material-tailwind/react";
import HeaderPost from "../parts/HeaderPost";
export default function MainPost() {
  return (
    <>
      <Card className="w-full">
        <CardBody className="h-full w-full">
          <div className="w-full h-12 mb-3">
            <HeaderPost />
          </div>
          <div className="w-full mb-1">
            <PostTextContent />
          </div>
          <div className="w-full mb-4">
            <Link
              to="/post/id"
              className="text-sm text-blue-300 hover:text-blue-600 underline"
            >
              Read more ...
            </Link>
          </div>
          <div className="w-full mb-6">
            <FileContent />
          </div>
          <div className="w-full mb-0">
            <IconToolDisplay />
          </div>
        </CardBody>
      </Card>
    </>
  );
}
