import React from 'react'


function Resume() {
  React.useEffect(() => {
    // Redirect to the Google Drive PDF link
    window.open('https://drive.google.com/file/d/1GWODRH8fNUhbKKMjnmOqE-ts5XsmCaQG/view?usp=drive_link');
  }, []);

  return null; // Optionally, you can return a message here, but it's not needed for redirection
}

export default Resume