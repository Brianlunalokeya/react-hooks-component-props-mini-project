import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blogData from "./data/blog";

console.log(blogData);

function App() {
  const blogName = "Underreacted";
  const aboutText = "A blog about learning React";
  const aboutImage = "logo";
  const posts = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ];

  return (
    <div className="App">
      <div>
        <Header blogName = {blogName} />
      </div>
      <main>
        <About image = {aboutImage} text = {aboutText} />
      </main>
      <div>
        <ArticleList posts = {posts} />
      </div>
    </div>
  );
}

export default App;
