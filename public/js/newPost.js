
const newPostFormHandler = async (event) => {
    event.preventDefault();

    let action = event.submitter.value;
    if(action === 'blogPost'){
      console.log('in newPost.js')
    // gets the values from the new post form
    const title = document.querySelector('#blog-title').value;
    const body = document.querySelector('#blog-text').value;
        
      // Send a POST request to the API endpoint
      const response = await fetch('/api/blog/', {
        method: 'POST',
        // sends the title and content
        body: JSON.stringify({ title, body }),
        headers: { 
            'Content-Type': 'application/json' 
        },
      });
      if (response.ok) {
        // If successful, redirect the browser to the home page
        // document.location.reload();
     }
    }
  };
  
  document
    .querySelector('.newPost')
    .addEventListener('submit', newPostFormHandler);

