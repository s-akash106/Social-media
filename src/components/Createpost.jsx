import { useState } from "react";

const Createpost = ({addPost}) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

   const handlePostSubmit = (e) => {
    e.preventDefault();
    
    // Create a new post object with the data
    const newPost = {
      text,
      image,
      video,
      createdAt: new Date().toLocaleString(), // Timestamp
    };

    addPost(newPost); // Add the new post to the posts state
    setText("");
    setImage(null);
    setVideo(null);
  };

    const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleVideoUpload = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <form onSubmit={handlePostSubmit}>
        <div className="mb-3">
          <label className="form-label">Write something...</label>
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind?"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload an image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload a video</label>
          <input
            type="file"
            className="form-control"
            accept="video/*"
            onChange={handleVideoUpload}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};
export default Createpost
