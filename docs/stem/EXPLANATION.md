# Explanation

Most Websites you go to are written in html or Hypertext Markup Language. Hypertext Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.

I used HTML For the main code, CSS for the style and animations, and JS for the Editors like Plain (Monaco).

I also used other Open Source code and made WebIDE and File Explorer!

After you download WebIDE and open index.html, you will be able to use an IDE from your web browser!

> [Click to go to Analyzing Data](https://josephworks.github.io/WebIDE/stem/ANALYZING/)

# Example of WebIDE's Code

> Note: Provided by josephworks' gists

HTML:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>WebIDE</title>
      <meta charset="utf-8">
      <link href="https://unpkg.com/webkul-micron@1.0.4/dist/css/micron.min.css" type="text/css" rel="stylesheet">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <script src="https://unpkg.com/webkul-micron@1.0.4/dist/script/micron.min.js" type="text/javascript"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1">
   </head>
   <body>
      <h1>WebIDE</h1>
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