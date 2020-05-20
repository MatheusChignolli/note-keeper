import React from 'react';
import './styles.css';

import Note from './Note';

const Notes = [
  {
    title: "Lorem ipsum dolor sit amet",
    content: "Cras eget maximus leo. In volutpat lacinia dictum. Nulla aliquet scelerisque turpis, non tempor sem venenatis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis tincidunt mi.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content: "Cras eget maximus leo. In volutpat lacinia dictum. Nulla aliquet scelerisque turpis, non tempor sem venenatis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis tincidunt mi.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content: "Cras eget maximus leo. In volutpat lacinia dictum. Nulla aliquet scelerisque turpis, non tempor sem venenatis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis tincidunt mi.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content: "Cras eget maximus leo. In volutpat lacinia dictum. Nulla aliquet scelerisque turpis, non tempor sem venenatis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis tincidunt mi.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content: "Cras eget maximus leo. In volutpat lacinia dictum. Nulla aliquet scelerisque turpis, non tempor sem venenatis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis tincidunt mi.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis tincidunt mi.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content: "Cras eget maximus leo. In volutpat lacinia dictum. Nulla aliquet scelerisque turpis, non tempor sem venenatis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis tincidunt mi.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    content: "Cras eget maximus leo. non tempor sem venenatis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis tincidunt mi.",
  },
]

function App() {
  return (
    <>
      <div className={"content-body"}>
        {
          Notes.map((obj, i) => 
            <Note h1={obj.title} content={obj.content} />
          )
        }
      </div>   
    </>
  );
}

export default App;
