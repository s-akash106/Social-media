const Posts = ({ posts }) => {
  return (
    <div>
  

      

      {posts.map((post, index) => (
        <div key={index} className="card m-5" style={{ width:"80%" }}>
          {post.text && (
            <div className="card-body">
              <p className="card-text">{post.text}</p>
            </div>
          )}
          
          {post.image && <img src={post.image} className="card-img-top" alt="post media" />}
          
          {post.video && (
            <video controls className="card-img-top">
              <source src={post.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          
          <div className="card-footer text-muted">
            Posted on {post.createdAt}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

