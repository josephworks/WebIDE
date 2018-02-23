# Explanation

Most Websites you go to are written in html or Hypertext Markup Language. Hypertext Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.

I used HTML For the main code, CSS for the style and animations, and JS for the Editors like Plain (Monaco).

I also used other Open Sourced code and made WebIDE and File Explorer!

After you download WebIDE and open index.html, you will be able to use an IDE from your web browser!

> [Click to go to Analyzing Data](https://josephworks.github.io/WebIDE/stem/ANALYZING/)

# Example of WebIDE's Code

> Note: Provided by josephworks' gists

HTML:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Title</title>
      <meta charset="utf-8">
   </head>
   <body>
      <h1>Header</h1>
   </body>
<html>
```

CSS:

```css
body {
    margin: 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 25%;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
}

li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

li a.active {
    background-color: lightBlue;
    color: white;
}

li a:hover:not(.active) {
    background-color: #555;
    color: white;
}

h1 {
    color: lightBlue;
}

h2 {
    color: Green;
    background: Black;
}
```