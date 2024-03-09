const newCommentFormHandler = async (event) => {
    event.preventDefault();
    let action = event.submitter.value;
    if(action === 'comment'){

      // Collects the info from the comment text box
      const commentPost = document.querySelector("#comment-text").value;
      // gets the blogPost id so the comment can then be attached to that value in the database
      // it's used so when you click on a blog post you get the comments for it
      const blogPost_id = document.querySelector("#postId").dataset.blogid;

      
      if(!commentPost){
        alert('you need to enter a comment');
        return;
      }
      // Send a POST request to the comment api
      const response = await fetch("/api/blog/comment", {
        method: "POST",
        // sends the comment text and the blogPost (the api will add it to the database)
        body: JSON.stringify({ commentPost, blogPost_id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // this was just for troubleshooting
      // console.log(response);
      // console.log(blogPost_Id);
    
      if (response.ok) {
        // If it talks to the api correctly
        // reloads the page so the new comment will be loaded up to/displayed
        // document.location.reload();
      } 
    }
  };
  
  document
    .querySelector(".newComment")
    .addEventListener("submit-comment", newCommentFormHandler);
  