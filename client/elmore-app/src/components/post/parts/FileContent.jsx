import PropTypes from "prop-types";
import { Carousel } from "@material-tailwind/react";

export default function FileContent({
  isHavingVideo,
  isHavingImage,
  isMultipleFiles,
  isHavingFiles,
}) {
  return (
    <>
      <div className="w-full h-96">
        <Carousel className="rounded-xl w-full h-full ">
          <video
            className="h-full w-full rounded-lg object-cover"
            autoPlay={false}
            controls
          >
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </>
  );
}

//? Use for testing only with real data will have to handle differently
FileContent.propTypes = {
  isHavingVideo: PropTypes.bool.isRequired,
  isHavingImage: PropTypes.bool.isRequired,
  isMultipleFiles: PropTypes.bool.isRequired,
  isHavingFiles: PropTypes.bool.isRequired,
};
