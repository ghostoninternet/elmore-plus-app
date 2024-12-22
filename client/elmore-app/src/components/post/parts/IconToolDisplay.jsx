import { Button, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMessage, faShare } from "@fortawesome/free-solid-svg-icons";

export default function IconToolDisplay() {
  return (
    <>
      <div className=" flex flex-row justify-between items-center px-2">
        <div>
          <Button
            color="red"
            variant="text"
            size="sm"
            className="text-black hover:text-red-500 mr-2"
          >
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faHeart} /> {1000}
            </span>
          </Button>
          <Button
            color="blue"
            variant="text"
            size="sm"
            className="text-black hover:text-blue-400  mr-2"
          >
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faMessage} /> {1000}
            </span>
          </Button>
        </div>
        <div>
          <IconButton variant="text" color="gray">
            <FontAwesomeIcon icon={faShare} className="text-black" />
          </IconButton>
        </div>
      </div>
    </>
  );
}
