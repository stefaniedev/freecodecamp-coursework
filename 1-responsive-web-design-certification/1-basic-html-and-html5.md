# Basic HTML & HTML5
-- Coded with 💗 by Stefanie Feltman

## Social Media
[FreeCodeCamp](https://www.freecodecamp.org/stefaniedev) |
[GitHub](https://github.com/stefaniedev) |
[LinkedIn](https://www.linkedin.com/in/stefaniefeltman/) |
[Twitter](https://twitter.com/stefaniedev) |
[CodePen](https://codepen.io/stefaniedev/)


## Say Hello to HTML Elements 
Welcome to Free Code Camp's first coding challenge.

You can edit code in your text editor, which we've embedded into this web page.

Do you see the code in your text editor that says `<h1>Hello</h1>`? That's an HTML element.

Most HTML elements have an opening tag and a closing tag.

Opening tags look like this: `<h1>` Closing tags look like this: `</h1>`

The only difference between opening and closing tags is the forward slash after the opening bracket of a closing tag.

Each challenge has tests you can run at any time by clicking the "Run tests" button. When you pass all tests, you'll be prompted to submit your solution and go to the next coding challenge.

To pass the test on this challenge, change your `h1` element's text to say "Hello World".

- [x] Your h1 element should have the text "Hello World".

```
<h1>Hello World</h1>
```


## Headline with the h2 Element 
Over the next few challenges, we'll build an HTML5 app that will look something like this:

A screen shot of our finished Cat Photo App

The `h2` element you enter will create an h2 element on the website.

This element tells the browser about the structure of your website. `h1` elements are often used for main headings, while `h2` elements are generally used for subheadings. There are also `h3`, `h4`, `h5` and `h6` elements to indicate different and new sections.

Add an `h2` tag that says "CatPhotoApp" to create a second HTML element below your "Hello World" `h1` element.

- [x] Create an `h2` element.
- [x] Make sure your `h2` element has a closing tag.
- [x] Your `h2` element should have the text "CatPhotoApp".
- [x] Your `h1` element should have the text "Hello World".

```
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```


## Inform with the Paragraph Element 
`p` elements are the preferred element for normal-sized paragraph text on websites. `p` is short for "paragraph".

You can create a paragraph element like this:

`<p>I'm a p tag!</p>`

Create a `p` element below your `h2` element, and give it the text "Hello Paragraph".

- [x] Create a `p` element.
- [x] Your `p` element should have the text "Hello Paragraph".
- [x] Make sure your `p` element has a closing tag.

```
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```


## Fill in the Blank with Placeholder Text 
Web developers traditionally use lorem ipsum text as placeholder text. The 'lorem ipsum' text is randomly scraped from a famous passage by Cicero of Ancient Rome.

Lorem ipsum text has been used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.

Well, 5 centuries is long enough. Since we're building a CatPhotoApp, let's use something called kitty ipsum text.

Replace the text inside your `p` element with the first few words of this kitty ipsum text: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

- [x] Your `p` element should contain the first few words of this provided kitty ipsum text: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

```
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```


## Uncomment HTML

Commenting is a way that you can leave comments for other developers within your code without affecting the resulting output that is displayed the end user.

Commenting is also a convenient way to make code inactive without having to delete it entirely.

Comments in HTML starts with `<!--`, and ends with a `-->`


Uncomment your `h1`, `h2` and `p` elements.

- [x] Make your `h1` element visible on your page by uncommenting it.
- [x] Make your `h2` element visible on your page by uncommenting it.
- [x] Make your `p` element visible on your page by uncommenting it.
- [x] Be sure to delete all trailing comment tags, i.e. `-->`.

```
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```


## Comment out HTML 
Remember that in order to start a comment, you need to use `<!--`  and to end a comment, you need to use `-->`

Here you'll need to end the comment before your `h2` element begins.

Comment out your `h1` element and your `p` element, but not your `h2` element.

- [x] Comment out your `h1` element so that it is not visible on your page.
- [x] Leave your `h2` element uncommented so that it is visible on your page.
- [x] Comment out your `p` element so that it is not visible on your page.
- [x] Be sure to close each of your comments with `-->`.
- [x] Do not change the order of the `h1` `h2` or `p` in the code.

```
<!--
<h1>Hello World</h1>
-->
<h2>CatPhotoApp</h2>
<!--
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```


## Delete HTML Elements 
Our phone doesn't have much vertical space.

Let's remove the unnecessary elements so we can start building our CatPhotoApp.

Delete your `h1` element so we can simplify our view.

- [x] Delete your `h1` element.
- [x] Leave your `h2` element on the page.
- [x] Leave your `p` element on the page.

```
<h2>CatPhotoApp</h2>
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```


## Introduction to HTML5 Elements

HTML5 introduces more descriptive HTML tags. These include `header`, `footer`, `nav`, `video`, `article`, `section` and others.

These tags give a descriptive structure to your HTML, make your HTML easier to read, and help with Search Engine Optimization (SEO) and accessibility. The `main` HTML5 tag helps search engines and other developers find the main content of your page.

Example usage, a `main` element with two child elements nested inside it:

```
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

__Note:__ Many of the new HTML5 tags and their benefits are covered in the Applied Accessibility section.

Create a second `p` element after the existing `p` element with the following kitty ipsum text: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched`.

Then, create a `main` element and nest the two `p` elements inside the `main` element.

- [x] You should have 2 `p` elements with Kitty Ipsum text.
- [x] Each of your `p` elements should have a closing tag.
- [x] Your `p` element should contain the first few words of the provided additional kitty ipsum text.
- [x] Your code should have one `main` element.
- [x] The `main` element should have two paragraph elements as children.
- [x] The opening `main` tag should come before the first paragraph tag.
- [x] The closing `main` tag should come after the second closing paragraph tag.

```
<h2>CatPhotoApp</h2>
<main>
    <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
    <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```


## Add Images to your Website 
You can add images to your website by using the `img` element, and point to a specific image's URL using the `src` attribute.

An example of this would be:

`<img src="https://www.your-image-source.com/your-image.jpg">`

Note that `img` elements are self-closing.

All `img` elements must have an `alt` attribute. The text inside an `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.

__Note:__ If the image is purely decorative, using an empty `alt` attribute is a best practice.

Ideally the `alt` attribute should not contain special characters unless needed.

Lets add an `alt` attribute to our img example above:

`<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">`

Let's try to add an image to our website:

Insert an `img` tag, after the `main` element.

Now set the `src` attribute so that it points to this url:

`https://bit.ly/fcc-relaxing-cat`

Finally don't forget to give your image an `alt` text.

- [x] Your page should have an image element.
- [x] Your image should have a `src` attribute that points to the kitten image.
- [x] Your image element's `alt` attribute should not be empty.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<img src="https://bit.ly/fcc-relaxing-cat" alt="Relaxing Cat">
<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```


## Link to External Pages with Anchor Elements 
You can use `a` (anchor) elements to link to content outside of your web page.

`a` elements need a destination web address called an `href` attribute. They also need anchor text. Here's an example:

`<a href="https://freecodecamp.org">this links to freecodecamp.org</a>`

Then your browser will display the text __"this links to freecodecamp.org"__ as a link you can click. And that link will take you to the web address https://www.freecodecamp.org.

Create an `a` element that links to http://freecatphotoapp.com and has "cat photos" as its anchor text.

- [x] Your `a` element should have the anchor text of "cat photos".
- [x] You need an `a` element that links to `http://freecatphotoapp.com`
- [x] Your `a` element should have a closing tag.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">
<p><a href="http://freecatphotoapp.com"> cat photos </a></p>
<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```


## Link to Internal Sections of a Page with Anchor Elements

`a` (anchor) elements can also be used to create internal links to jump to different sections within a webpage.

To create an internal link, you assign a link's `href` attribute to a hash symbol `#` plus the value of the `id` attribute for the element that you want to internally link to, usually further down the page. You then need to add the same `id` attribute to the element you are linking to. An `id` is an attribute that uniquely describes an element.

Below is an example of an internal anchor link and its target element:
```
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```
When users click the Contacts link, they'll be taken to the section of the webpage with the __Contacts__ header element.

Change your external link to an internal link by changing the `href` attribute to "#footer" and the text from "cat photos" to "Jump to Bottom".

Remove the `target="_blank`" attribute from the anchor tag since this causes the linked document to open in a new window tab.

Then add an `id` attribute with a value of `"footer"` to the `<footer>` element at the bottom of the page.

- [x] There should be only one anchor tag on your page.
- [x] There should be only one `footer` tag on your page.
- [x] The `a` tag should have an `href` attribute set to `"#footer"`.
- [x] The `a` tag should not have a `target` attribute
- [x] The `a` text should be "Jump to Bottom".
- [x] The `footer` tag should have an `id` attribute set to "footer".

```
<h2>CatPhotoApp</h2>
<main>
  <a href="#footer">Jump to Bottom</a>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>
</main>
<footer id="footer">Copyright Cat Photo App</footer>
```


## Nest an Anchor Element within a Paragraph 
You can nest links within other text elements.
```
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```
Let's break down the example: Normal text is wrapped in the `p` element:
`<p> Here's a ... for you to follow. </p>` Next is the anchor element `<a>` (which requires a closing tag `</a>`):
`<a> ... </a>` `target` is an anchor tag attribute that specifies where to open the link and the value `"'_'blank"` specifies to open the link in a new tab `href` is an anchor tag attribute that contains the URL address of the link:
`<a href="http://freecodecamp.org"> ... </a>` The text, __"link to freecodecamp.org"__, within the `a` element called anchor text, will display a link to click:
`<a href=" ... ">link to freecodecamp.org</a>` The final output of the example will look like this:

Here's a [link to freecodecamp.org](http://freecodecamp.org/) for you to follow.

Now nest the existing `a` element within a new `p` element (just after the existing `main` element). The new paragraph should have text that says "View more cat photos", where "cat photos" is a link, and the rest of the text is plain text.
 
- [x] You should have an `a` element that links to "http://freecatphotoapp.com".
- [x] Your `a` element should have the anchor text of "cat photos"
- [x] You should create a new `p` element around your `a` element. There should be at least 3 total `p` tags in your HTML code.
- [x] Your `a` element should be nested within your new `p` element.
- [x] Your `p` element should have the text "View more " (with a space after it).
- [x] Your `a` element should not have the text "View more".
- [x] Each of your `p` elements should have a closing tag.
- [x] Each of your `a` elements should have a closing tag.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>View more <a href="http://www.freecatphotoapp.com">cat photos</a></p>
<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">
<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```


## Make Dead Links using the Hash Symbol 
Sometimes you want to add `a` elements to your website before you know where they will link.

This is also handy when you're changing the behavior of a link using `JavaScript`, which we'll learn about later.

The current value of the `href` attribute is a link that points to "http://freecatphotoapp.com". Replace the `href` attribute value with a `#`, also known as a hash symbol, to create a dead link.

For example: `href="#"`

- [x] Your `a` element should be a dead link with the value of the `href` attribute set to "#".

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">
<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```


## Turn an Image into a Link 
You can make elements into links by nesting them within an `a` element.

Nest your image within an `a` element. Here's an example:

`<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera. "></a>`

Remember to use `#` as your `a` element's `href` property in order to turn it into a dead link.

Place the existing image element within an `a` (anchor) element.

Once you've done this, hover over your image with your cursor. Your cursor's normal pointer should become the link clicking pointer. The photo is now a link.

- [x] The existing `img` element should be nested within an `a` element.
- [x] Your `a` element should be a dead link with a `href` attribute set to `#`.
- [x] Each of your `a` elements should have a closing tag.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
  <p>Click here for 
    <a href="#">cat photos</a>.
  </p>
    <a href="#">
      <img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </a>
  <p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. 
  </p>
  <p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
  </p>
```


## Create a Bulleted Unordered List 
HTML has a special element for creating _unordered lists_, or bullet point-style lists.

Unordered lists start with an opening `<ul>` element, followed by any number of `<li>` elements. Finally, unordered lists close with a `</ul>`

For example:
```
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```
would create a bullet point-style list of "milk" and "cheese".

Remove the last two `p` elements and create an unordered list of three things that cats love at the bottom of the page.

- [x] Create a `ul` element.
- [x] You should have three `li` elements within your `ul` element.
- [x] Your `ul` element should have a closing tag.
- [x] Your `li` elements should have closing tags.
- [x] Your `li` elements should not contain an empty string or only white-space.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. "></a>
<ul>
  <li>milk</li>
  <li>toys</li>
  <li>hairballs</li>
</ul>
```


## Create an Ordered List 
HTML has a special element for creating ordered lists, or numbered-style lists.

Ordered lists start with an opening `<ol>` element, followed by any number of `<li>` elements. Finally, ordered lists are closed with the `</ol>` tag.

For example:
```
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```
would create a numbered list of "Garfield" and "Sylvester".

Create an ordered list of the top 3 things cats hate the most.

- [x] You should have an ordered list for "Top 3 things cats hate:"
- [x] You should have an unordered list for "Things cats love:"
- [x] You should have only one `ul` element.
- [x] You should have only one `ol` element.
- [x] You should have three `li` elements within your `ul` element.
- [x] You should have three `li` elements within your `ol` element.
- [x] Your `ul` element should have a closing tag.
- [x] Your `ol` element should have a closing tag.
- [x] Your `li` element should have a closing tag.
- [x] The `li` elements in your unordered list should not be empty.
- [x] The `li` elements in your ordered list should not be empty.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>water</li>
  <li>being carried</li>
  <li>baths</li>
</ol>
```


## Create a Text Field 
`input` elements are a convenient way to get input from your user.

You can create a text input like this:

`<input type="text">`

Note that `input` elements are self-closing.

Create an `input` element of type `text` below your lists.

- [x] Your app should have an `input` element of type `text`.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<input type="text">
```


## Add Placeholder Text to a Text Field 
Placeholder text is what is displayed in your `input` element before your user has inputted anything.

You can create placeholder text like so:

`<input type="text" placeholder="this is placeholder text">`

__Note:__ Remember that `input` elements are self-closing.

Set the `placeholder` value of your text `input` to "cat photo URL".

- [x] You should add a `placeholder` attribute to the existing text `input` element.
- [x] You should set the value of your placeholder attribute to "cat photo URL".
- [x] The finished `input` element should not have a closing tag.
- [x] The finished `input` element should have valid syntax.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<input type="text" placeholder="cat photo URL">
```

## Create a Form Element 
You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on your `form` element.

For example:

`<form action="/url-where-you-want-to-submit-form-data"></form>`

Nest your text field in a `form` element. Add the `action="/submit-cat-photo"` attribute to this form element.

- [x] Your text input element should be nested within a `form` element.
- [x] Your `form` should have an `action` attribute which is set to `/submit-cat-photo`
- [x] Your `form` element should have well-formed open and close tags.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <input type="text" placeholder="cat photo URL">
</form>
```


## Add a Submit Button to a Form 
Let's add a `submit` button to your form. Clicking this button will send the data from your form to the URL you specified with your form's `action` attribute.

Here's an example submit button:

`<button type="submit">this button submits the form</button>`

Add a button as the last element of your `form` element with a type of `submit` and "Submit" as its text.

- [x] Your form should have a button inside it.
- [x] Your submit button should have the attribute `type` set to `submit`.
- [x] Your submit button should only have the text "Submit".
- [x] Make sure your `button` element has a closing tag.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <input type="text" placeholder="cat photo URL">
  <button type="submit">Submit</button>
</form>
```


## Use HTML5 to Require a Field 
You can require specific form fields so that your user will not be able to submit your form until he or she has filled them out.

For example, if you wanted to make a text input field required, you can just add the word `required` within your `input` element, you would use: `<input type="text" required>`

Make your text `input` a `required` field, so that your user can't submit the form without completing this field.

Then try to submit the form without inputing any text. See how your HTML5 form notifies you that the field is required?

- [x] Your text `input` element should have the `required` attribute.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <input required type="text" placeholder="cat photo URL">
  <button type="submit">Submit</button>
</form>
```


## Create a Set of Radio Buttons 
You can use _radio_ buttons for questions where you want the user to only give you one answer out of multiple options.

Radio buttons are a type of `input`.

Each of your radio buttons should be nested within its own `label` element. By wrapping an `input` element inside of a `label` element it will automatically associate the radio button input with the label element surrounding it.

All related radio buttons should have the same `name` attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.

Here's an example of a radio button:

```
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```
It is considered best practice to set a `for` attribute on the `label` element, with a value that matches the value of the `id` attribute of the `input` element. This allows assistive technologies to create a linked relationship between the label and the child `input` element. For example:

```
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

Add a pair of radio buttons to your form, each nested in its own `label` element. One should have the option of `indoor` and the other should have the option of `outdoor`. Both should share the `name` attribute of `indoor-outdoor` to create a radio group.

- [x] Your page should have two radio button elements.
- [x] Give your radio buttons the `name` attribute of `indoor-outdoor`.
- [x] Each of your two radio button elements should be nested in its own `label` element.
- [x] Each of your `label` elements should have a closing tag.
- [x] One of your radio buttons should have the label `indoor`.
- [x] One of your radio buttons should have the label `outdoor`.
- [x] Each of your radio button elements should be added within the `form` tag.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
  <label><input type="radio" name="indoor-outdoor">Indoor</label>
  <label><input type="radio" name="indoor-outdoor">Outdoor</label>
</form>
```


## Create a Set of Checkboxes 
Forms commonly use _checkboxes_ for questions that may have more than one answer.

Checkboxes are a type of `input`

Each of your checkboxes should be nested within its own `label` element. By wrapping an `input` element inside of a `label` element it will automatically associate the checkbox input with the label element surrounding it.

All related checkbox inputs should have the same `name` attribute.

It is considered best practice to explicitly define the relationship between a checkbox `input` and its corresponding `label` by setting the `for` attribute on the `label` element to match the `id` attribute of the associated `input` element.

Here's an example of a checkbox:

`<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>`

Add to your form a set of three checkboxes. Each checkbox should be nested within its own `label` element. All three should share the `name` attribute of `personality`.

- [x] Your page should have three checkbox elements.
- [x] Each of your three checkbox elements should be nested in its own `label` element.
- [x] Make sure each of your `label` elements has a closing tag.
- [x] Your checkboxes should be given the `name` attribute of `personality`.
- [x] Each of your checkboxes should be added within the `form` tag.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
  <label><input type="checkbox" name="personality">Loving</label>
    <label><input type="checkbox" name="personality">Shy</label>
    <label><input type="checkbox" name="personality">Evil</label>
</form>
```


## Use the value attribute with Radio Buttons and Checkboxes
When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type `radio` and `checkbox` report their values from the `value` attribute.

For example:

```
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```

Here, you have two `radio` inputs. When the user submits the form with the `indoor` option selected, the form data will include the line: `indoor-outdoor=indoor`. This is from the `name` and `value` attributes of the "indoor" input.

If you omit the `value` attribute, the submitted form data uses the default value, which is `on`. In this scenario, if the user clicked the "indoor" option and submitted the form, the resulting form data would be `indoor-outdoor=on`, which is not useful. So the `value` attribute needs to be set to something to identify the option.

Give each of the `radio` and `checkbox` inputs the `value` attribute. Use the input label text, in lowercase, as the value for the attribute.

- [x] One of your radio buttons should have the value attribute of indoor.
- [x] One of your radio buttons should have the value attribute of outdoor.
- [x] One of your checkboxes should have the value attribute of loving.
- [x] One of your checkboxes should have the value attribute of lazy.
- [x] One of your checkboxes should have the value attribute of energetic.

```
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" value="indoor" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" value="outdoor" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" value="loving" name="personality"> Loving</label>
    <label><input type="checkbox" value="lazy" name="personality"> Lazy</label>
    <label><input type="checkbox" value="energetic" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>

```


## Check Radio Buttons and Checkboxes by Default 
You can set a checkbox or radio button to be checked by default using the `checked` attribute.

To do this, just add the word "checked" to the inside of an input element. For example:

`<input type="radio" name="test-name" checked>`

Set the first of your radio buttons and the first of your checkboxes to both be checked by default.

- [x] Your first radio button on your form should be checked by default.
- [x] Your first checkbox on your form should be checked by default.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```


## Nest Many Elements within a Single Div Element 
The `div` element, also known as a division element, is a general purpose container for other elements.

The `div` element is probably the most commonly used HTML element of all.

Just like any other non-self-closing element, you can open a `div` element with `<div>` and close it on another line with `</div>`.

Nest your "Things cats love" and "Things cats hate" lists all within a single `div` element.

Hint: Try putting your opening `div` tag above your "Things cats love" `p` element and your closing `div` tag after your closing `ol` tag so that both of your lists are within one `div`.

- [x] Your `p` elements should be nested inside your `div` element.
- [x] Your `ul` element should be nested inside your `div` element.
- [x] Your `ol` element should be nested inside your `div` element.
- [x] Your `div` element should have a closing tag.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, Monospace;
  }
  p {
    font-size: 16px;
    font-family: Monospace;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
  .smaller-image {
    width: 100px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<p>Click here for <a href="#">cat photos</a>.</p>
<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>
<div><p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
</div>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```


## Declare the Doctype of an HTML Document

The challenges so far have covered specific HTML tags and their uses. However, there are a few elements that give overall structure to your page, and should be included in every HTML document.

At the top of your document, you need to tell the browser which version of HTML your page is using. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.

You tell the browser this information by adding the `<!DOCTYPE ...>` tag on the first line, where the `"..."` part is the version of HTML. For HTML5, you use `<!DOCTYPE html>`.

The `!` and uppercase `DOCTYPE` is important, especially for older browsers. The `html` is not case sensitive.

Next, the rest of your HTML code needs to be wrapped in `html` tags. The opening `<html>` goes directly below the `<!DOCTYPE html>` line, and the closing `</html>` goes at the end of the page.

Here's an example of the page structure:
```
<!DOCTYPE html>
<html>
<!-- Your HTML code goes here -->
</html>
```
Add a `DOCTYPE` tag for HTML5 to the top of the blank HTML document in the code editor. Under it, add opening and closing `html` tags, which wrap around an `h1` element. The heading can include any text.

- [x] Your code should include a `<!DOCTYPE html>` tag.
- [x] There should be one `html` element.
- [x] The `html` tags should wrap around one `h1` element.

```
<!DOCTYPE html>
<html>
<h1> This is my HTML heading</h1>
</html>
```


## Define the Head and Body of an HTML Document

You can add another level of organization in your HTML document within the `html` tags with the `head` and `body` elements. Any markup with information about your page would go into the `head` tag. Then any markup with the content of the page (what displays for a user) would go into the `body` tag.

Metadata elements, such as `link`, `meta`, `title`, and `style`, typically go inside the `head` element.

Here's an example of a page's layout:
```
<!DOCTYPE html>
<html>
<head>
<!-- metadata elements -->
</head>
<body>
<!-- page contents -->
</body>
</html>
```
Edit the markup so there's a `head` and a `body`. The `head` element should only include the `title`, and the `body` element should only include the `h1` and `p`.

- [x] There should be only one `head` element on the page.
- [x] There should be only one `body` element on the page.
- [x] The `head` element should be a child of the `html` element.
- [x] The `body` element should be a child of the `html` element.
- [x] The `head` element should wrap around the `title` element.
- [x] The `body` element should wrap around both the `h1` and `p` elements.

```
<!DOCTYPE html>
<html>
    <head>
        <title>The best page ever</title>
    </head>
    <body>
    <h1>The best page ever</h1>
        <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
    </body>
</html>  
```