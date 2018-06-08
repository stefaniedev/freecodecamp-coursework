# HTML5 & CSS
-- Coded with 💗 by Stefanie Feltman

## Social Media
[FreeCodeCamp](https://www.freecodecamp.org/portfolio/stefaniedev) |
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

Note that the only difference between opening tags and closing tags is that closing tags have a slash after their opening angle bracket.

Each challenge has tests that you can run at any time by clicking the "Run tests" button. Once you get all tests passing, you can advance to the next challenge.

To pass the test on this challenge, change your h1 element's text to say "Hello World" instead of "Hello". Then click the "Run tests" button.

- [x] Your h1 element should have the text "Hello World".

```
<h1>Hello World</h1>
```


## Headline with the h2 Element 

Over the next few challenges, we'll build an HTML5 app that will look something like this:

A screen shot of our finished Cat Photo App

The h2 element you enter will create an h2 element on the website.

This element tells the browser about the structure of your website. h1 elements are often used for main headings, while h2 elements are generally used for subheadings. There are also h3, h4, h5 and h6 elements to indicate different and new sections.

Add an h2 tag that says "CatPhotoApp" to create a second HTML element below your "Hello World" h1 element.

- [x] Create an h2 element.
- [x] Make sure your h2 element has a closing tag.
- [x] Your h2 element should have the text "CatPhotoApp".
- [x] Your h1 element should have the text "Hello World".

```
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

## Inform with the Paragraph Element 
p elements are the preferred element for normal-sized paragraph text on websites. P is short for "paragraph".

You can create a p element like this:

`<p>I'm a p tag!</p>`

Create a p element below your h2 element, and give it the text "Hello Paragraph".

- [x] Create a p element.
- [x] Your p element should have the text "Hello Paragraph".
- [x] Make sure your p element has a closing tag.

```
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```

## Comment out HTML 
Remember that in order to start a comment, you need to use `<!--`  and to end a comment, you need to use `-->`

Here you'll need to end the comment before your h2 element begins.

Comment out your h1 element and your p element, but leave your h2 element uncommented.

- [x] Comment out your h1 element so that it is not visible on your page.
- [x] Leave your h2 element uncommented so that it is visible on your page.
- [x] Comment out your p element so that it is not visible on your page.
- [x] Be sure to close each of your comments with -->.
- [x] Do not change the order of the h1 h2 or p in the code.


```
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2>
<!--<p>Hello Paragraph</p>-->
```

## Fill in the Blank with Placeholder Text 
Web developers traditionally use lorem ipsum text as placeholder text. The 'lorem ipsum' text is randomly scraped from a famous passage by Cicero of Ancient Rome.

Lorem ipsum text has been used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.

Well, 5 centuries is long enough. Since we're building a CatPhotoApp, let's use something called kitty ipsum text.

Replace the text inside your p element with the first few words of this kitty ipsum text: Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.

- [x] Your p element should contain the first few words of the provided kitty ipsum text.

```
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Delete HTML Elements 
Our phone doesn't have much vertical space.

Let's remove the unnecessary elements so we can start building our CatPhotoApp.

Delete your h1 element so we can simplify our view.

- [x] Delete your h1 element.
- [x] Leave your h2 element on the page.
- [x] Leave your p element on the page.

```
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Change the Color of Text 
Now let's change the color of some of our text.

We can do this by changing the style of your h2 element.

The style that is responsible for the color of an element's text is the "color" style.

Here's how you would set your h2 element's text color to blue:

`<h2 style="color: blue">CatPhotoApp</h2>`

Change your h2 element's style so that its text color is red.

- [x] Your h2 element should be red.


```
<h2 style="color:red">CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Use CSS Selectors to Style Elements 
With CSS, there are hundreds of CSS properties that you can use to change the way an element looks on your page.

When you entered `<h2 style="color: red">CatPhotoApp</h2>`, you were giving that individual h2 element an inline style.

That's one way to add style to an element, but a better way is by using CSS, which stands for Cascading Style Sheets.

At the top of your code, create a style element like this:
```
<style>
</style>
```
Inside that style element, you can create a CSS selector for all h2 elements. For example, if you wanted all h2 elements to be red, your style element would look like this:
```
<style>
  h2 {color: red;}
</style>
```
Note that it's important to have both opening and closing curly braces ({ and }) around each element's style. You also need to make sure your element's style is between the opening and closing style tags. Finally, be sure to add the semicolon to the end of each of your element's styles.

Delete your h2 element's style attribute and instead create a CSS style element. Add the necessary CSS to turn all h2 elements blue.

- [x] Remove the style attribute from your h2 element.
- [x] Create a style element.
- [x] Your h2 element should be blue.
- [x] Ensure that your stylesheet h2 declaration is valid with a semicolon and closing brace.
- [x] Make sure all your style elements are valid and have a closing tag.
```
<style>
  h2 {
    color:blue;
  }
</style>
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Use a CSS Class to Style an Element 
Classes are reusable styles that can be added to HTML elements.

Here's an example CSS class declaration:
```
<style>
  .blue-text {
    color: blue;
  }
</style>
```
You can see that we've created a CSS class called blue-text within the `<style>`  tag.

You can apply a class to an HTML element like this:

`<h2 class="blue-text">CatPhotoApp</h2>`

Note that in your CSS style element, classes should start with a period. In your HTML elements' class declarations, classes shouldn't start with a period.

Inside your style element, change the h2 selector to .red-text and update the color's value from blue to red.

Give your h2 element the class attribute with a value of 'red-text'.

- [x] Your h2 element should be red.
- [x] Your h2 element should have the class red-text.
- [x] Your stylesheet should declare a red-text class and have its color set to red.
- [x] Do not use inline style declarations like `style="color: red"` in your h2 element.


```
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Style Multiple Elements with a CSS Class 
Remember that you can attach classes to HTML elements by using class="your-class-here" within the relevant element's opening tag.

Remember that CSS class selectors require a period at the beginning like this:
```
.blue-text {
  color: blue;
}
```
But also remember that class declarations don't use a period, like this:

`<h2 class="blue-text">CatPhotoApp</h2>`

Apply the red-text class to your h2 and p elements.

- [x] Your h2 element should be red.
- [x] Your h2 element should have the class red-text.
- [x] Your p element should be red.
- [x] Your p element should have the class red-text.

```
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

## Change the Font Size of an Element 
Font size is controlled by the font-size CSS property, like this:
```
h1 {
  font-size: 30px;
}
```
Create a second p element after the existing p element with the following kitty ipsum text: Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.

Inside the same `<style>` tag that contains your red-text class, create an entry for p elements and set the font-size to 16 pixels (16px).

Note
Due to browser implementation differences, you may need to be at 100% zoom to pass the tests on this challenge.

Also, please do not add a class attribute to your new p element.

- [x] You need 2 p elements with Kitty Ipsum text.
- [x] Make sure each of your p elements has a closing tag.
- [x] Your p element should contain the first few words of the provided additional kitty ipsum text.
- [x] The first p element should have the class red-text.
- [x] Do not add a class attribute to the second p element.
- [x] Between the style tags, give the p elements font-size of 16px. Browser and Text zoom should be at 100%.

```
<style>
  .red-text {
    color: red;
  }
  p {
    font-size:16px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Set the Font Family of an Element 
You can set an element's font by using the font-family property.

For example, if you wanted to set your h2 element's font to Sans-serif, you would use the following CSS:
```
h2 {
  font-family: Sans-serif;
}
```
Make all of your p elements use the Monospace font.

- [x] Your p elements should use the font Monospace.

```
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Import a Google Font 
Now, let's import and apply a Google font (note that if Google is blocked in your country, you will need to skip this challenge).

First, you'll need to make a call to Google to grab the Lobster font and load it into your HTML.

Copy the following code snippet and paste it into the top of your code editor:
```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```
Now you can set Lobster as a font-family value on your h2 element.

Apply the font-family of Lobster to your h2 element.

- [x] Import the Lobster font.
- [x] Your h2 element should use the font Lobster.
- [x] Your p element should still use the font Monospace.
```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }
  
  h2{
    font-family: Lobster;
  }
  
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Specify How Fonts Should Degrade 
There are several default fonts that are available in all browsers. These include Monospace, Serif and Sans-Serif

When one font isn't available, you can tell the browser to "degrade" to another font.

For example, if you wanted an element to use the Helvetica font, but also degrade to the Sans-Serif font when Helvetica wasn't available, you could use this CSS style:
```
p {
  font-family: Helvetica, Sans-Serif;
}
```
Now comment out your call to Google Fonts, so that the Lobster font isn't available. Notice how it degrades to the Monospace font.

- [x] Your h2 element should use the font Lobster.
- [x] Your h2 element should degrade to the font Monospace when Lobster is not available.
- [x] Comment out your call to Google for the Lobster font by putting <!-- in front of it.
- [x] Be sure to close your comment by adding -->.
```
<!--
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
-->
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

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Add Images to your Website 
You can add images to your website by using the img element, and point to a specific image's URL using the src attribute.

An example of this would be:
```
<img src="https://www.your-image-source.com/your-image.jpg">
```
All img elements must have an alt attribute. The text inside an alt attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.

Lets add an alt attribute to our img example above:
```
<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up. ">
```
Note that in most cases, img elements are self-closing.

Try it with this image:
```
https://bit.ly/fcc-relaxing-cat
```
- [x] Your page should have an image element.
- [x] Your image should have a src attribute that points to the kitten image.
- [x] Your image element must have an alt attribute.

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

## Size your Images 
CSS has a property called width that controls an element's width. Just like with fonts, we'll use px (pixels) to specify the image's width.

For example, if we wanted to create a CSS class called larger-image that gave HTML elements a width of 500 pixels, we'd use:
```
<style>
  .larger-image {
    width: 500px;
  }
</style>
```
Create a class called smaller-image and use it to resize the image so that it's only 100 pixels wide.

Note
Due to browser implementation differences, you may need to be at 100% zoom to pass the tests on this challenge.

- [x] Your img element should have the class smaller-image.
- [x] Your image should be 100 pixels wide. Browser zoom should be at 100%.

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
  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Add Borders Around your Elements 
CSS borders have properties like style, color and width

For example, if we wanted to create a red, 5 pixel border around an HTML element, we could use this class:
```
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```
Create a class called thick-green-border that puts a 10-pixel-wide green border with a style of solid around an HTML element, and apply that class to your cat photo.

Remember that you can apply multiple classes to an element by separating each class with a space within its class attribute. For example:
```
<img class="class1 class2">
```
- [x] Your img element should have the class smaller-image.
- [x] Your img element should have the class thick-green-border.
- [x] Give your image a border width of 10px.
- [x] Give your image a border style of solid.
- [x] The border around your img element should be green.

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

  .smaller-image {
    width: 100px;
  }
  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```

## Add Rounded Corners with a Border Radius 
Your cat photo currently has sharp corners. We can round out those corners with a CSS property called border-radius.

You can specify a border-radius with pixels. Give your cat photo a border-radius of 10px.

Note: this waypoint allows for multiple possible solutions. For example, you may add border-radius to either the .thick-green-border class or .smaller-image class.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your image element should have the class "thick-green-border".
Your image should have a border radius of 10px


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
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>


## Make Circular Images with a Border Radius 
In addition to pixels, you can also specify a border-radius using a percentage.

Give your cat photo a border-radius of 50%.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your image should have a border radius of 50%, making it perfectly circular.
Be sure to use a percentage instead of a pixel value.


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
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
    border-radius: 50%;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>


## Link to External Pages with Anchor Elements 
a elements, also known as anchor elements, are used to link to content outside of the current page.

Here's a diagram of an a element. In this case, the a element is used in the middle of a paragraph element, which means the link will appear in the middle of a sentence.

Here's an example:

<p>Here's a <a href="http://freecodecamp.org"> link to Free Code Camp</a> for you to follow.</p>

Create an a element that links to http://freecatphotoapp.com and has "cat photos" as its anchor text.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your a element should have the anchor text of "cat photos".
You need an a element that links to http://freecatphotoapp.com
Make sure your a element has a closing tag.


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


## Nest an Anchor Element within a Paragraph 
Again, here's a diagram of an a element for your reference:

a diagram of how anchor tags are composed with the same text as on the following line

Here's an example:

<p>Here's a <a href="https://freecodecamp.org"> link to Free Code Camp</a> for you to follow.</p>

Nesting just means putting one element inside of another element.

Now nest your existing a element within a new p element (just after the existing h2 element) so that the surrounding paragraph says "View more cat photos", but where only "cat photos" is a link, and the rest of the text is plain text.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
You need an a element that links to "http://www.freecatphotoapp.com".
Your a element should have the anchor text of "cat photos"
Create a new p element around your a element.
Your a element should be nested within your new p element.
Your p element should have the text "View more " (with a space after it).
Your a element should not have the text "View more".
Make sure each of your p elements has a closing tag.
Make sure each of your a elements has a closing tag.


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


## Make Dead Links using the Hash Symbol 
Sometimes you want to add a elements to your website before you know where they will link.

This is also handy when you're changing the behavior of a link using jQuery, which we'll learn about later.

Replace the value of your a element's href attribute with a #, also known as a hash symbol, to turn it into a dead link.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your a element should be a dead link with a href attribute set to "#".


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


## Turn an Image into a Link 
You can make elements into links by nesting them within an a element.

Nest your image within an a element. Here's an example:

<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera. "></a>

Remember to use # as your a element's href property in order to turn it into a dead link.

Place the existing image element within an anchor element.

Once you've done this, hover over your image with your cursor. Your cursor's normal pointer should become the link clicking pointer. The photo is now a link.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Nest the existing img element within an a element.
Your a element should be a dead link with a href attribute set to #.
Make sure each of your a elements has a closing tag.


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


## Create a Bulleted Unordered List 
HTML has a special element for creating unordered lists, or bullet point-style lists.

Unordered lists start with a <ul> element. Then they contain some number of <li> elements.

For example:

<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
would create a bullet point-style list of "milk" and "cheese".

Remove the last two p elements and create an unordered list of three things that cats love at the bottom of the page.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Create a ul element.
You should have three li elements within your ul element.
Make sure your ul element has a closing tag.
Make sure your li elements have closing tags.


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


## Create an Ordered List 
HTML has a special element for creating ordered lists, or numbered-style lists.

Ordered lists start with a <ol> element. Then they contain some number of <li> elements.

For example:

<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
would create a numbered list of "Garfield" and "Sylvester".

Create an ordered list of the top 3 things cats hate the most.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
You should have an ordered list for "Top 3 things cats hate:"
You should have an unordered list for "Things cats love:"
You should have three li elements within your ul element.
You should have three li elements within your ol element.
Make sure your ul element has a closing tag.
Make sure your ol element has a closing tag.
Make sure your li element has a closing tag.


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


## Create a Text Field 
Now let's create a web form.

Text inputs are a convenient way to get input from your user.

You can create one like this:

<input type="text">

Note that input elements are self-closing.

Create an input element of type text below your lists.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your app should have an input element of type text.


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


## Add Placeholder Text to a Text Field 
Your placeholder text is what appears in your text input before your user has input anything.

You can create placeholder text like so:

<input type="text" placeholder="this is placeholder text">

Set the placeholder value of your text input to "cat photo URL".

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Add a placeholder attribute text input element.
Set the value of your placeholder attribute to "cat photo URL".
The finished input element should have valid syntax.


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


## Create a Form Element 
You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on your form element.

For example:

<form action="/url-where-you-want-to-submit-form-data"></form>

Nest your text field in a form element. Add the action="/submit-cat-photo" attribute to this form element.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Nest your text input element within a form element.
Make sure your form has an action attribute which is set to /submit-cat-photo
Make sure your form element has a closing tag.


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


## Add a Submit Button to a Form 
Let's add a submit button to your form. Clicking this button will send the data from your form to the URL you specified with your form's action attribute.

Here's an example submit button:

<button type="submit">this button submits the form</button>

Add a submit button to your form element with type submit and "Submit" as its text.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your form should have a button inside it.
Your submit button should have the attribute type set to submit.
Your submit button should only have the text "Submit".
Make sure your button element has a closing tag.


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


## Use HTML5 to Require a Field 
You can require specific form fields so that your user will not be able to submit your form until he or she has filled them out.

For example, if you wanted to make a text input field required, you can just add the word required within your input element, you would use: <input type="text" required>

Make your text input a required field, so that your user can't submit the form without completing this field.

Then try to submit the form without inputing any text. See how your HTML5 form notifies you that the field is required?

Note: This field does not work in Safari.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your text input element should have the required attribute.


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


## Create a Set of Radio Buttons 
You can use radio buttons for questions where you want the user to only give you one answer.

Radio buttons are a type of input

Each of your radio buttons should be nested within its own label element.

All related radio buttons should have the same name attribute.

Here's an example of a radio button:

<label><input type="radio" name="indoor-outdoor"> Indoor</label>

Add a pair of radio buttons to your form. One should have the option of indoor and the other should have the option of outdoor.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your page should have two radio button elements.
Give your radio buttons the name attribute of indoor-outdoor.
Each of your two radio button elements should be nested in its own label element.
Make sure each of your label elements has a closing tag.
One of your radio buttons should have the label indoor.
One of your radio buttons should have the label outdoor.


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


## Create a Set of Checkboxes 
Forms commonly use checkboxes for questions that may have more than one answer.

Checkboxes are a type of input

Each of your checkboxes should be nested within its own label element.

All related checkbox inputs should have the same name attribute.

Here's an example of a checkbox:

<label><input type="checkbox" name="personality"> Loving</label>

Add to your form a set of three checkboxes. Each checkbox should be nested within its own label element. All three should share the name attribute of personality.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your page should have three checkbox elements.
Each of your three checkbox elements should be nested in its own label element.
Make sure each of your label elements has a closing tag.
Give your checkboxes the name attribute of personality.


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


## Check Radio Buttons and Checkboxes by Default 
You can set a checkbox or radio button to be checked by default using the checked attribute.

To do this, just add the word "checked" to the inside of an input element. For example:

<input type="radio" name="test-name" checked>

Set the first of your radio buttons and the first of your checkboxes to both be checked by default.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your first radio button on your form should be checked by default.
Your first checkbox on your form should be checked by default.


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


## Nest Many Elements within a Single Div Element 
The div element, also known as a division element, is a general purpose container for other elements.

The div element is probably the most commonly used HTML element of all. It's useful for passing the CSS of its own class declarations down to all the elements that it contains.

Just like any other non-self-closing element, you can open a div element with <div> and close it on another line with </div>.

Try putting your opening div tag above your "Things cats love" p element and your closing div tag after your closing ol tag so that both of your lists are within one div.

Nest your "Things cats love" and "Things cats hate" lists all within a single div element.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Nest your p elements inside your div element.
Nest your ul element inside your div element.
Nest your ol element inside your div element.
Make sure your div element has a closing tag.


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


## Give a Background Color to a Div Element 
You can set an element's background color with the background-color property.

For example, if you wanted an element's background color to be green, you'd put this within your style element:

.green-background {
  background-color: green;
}
Create a class called silver-background with the background-color of silver. Assign this class to your div element.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Give your div element the class silver-background.
Your div element should have a silver background.


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
  
  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<div class="silver-background">
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


## Set the ID of an Element 
In addition to classes, each HTML element can also have an id attribute.

There are several benefits to using id attributes, and you'll learn more about them once you start using jQuery.

id attributes should be unique. Browsers won't enforce this, but it is a widely agreed upon best practice. So please don't give more than one element the same id attribute.

Here's an example of how you give your h2 element the id of cat-photo-app:

<h2 id="cat-photo-app">

Give your form element the id cat-photo-form.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Give your form element the id of cat-photo-form.


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
  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<div class="silver-background">
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
</div>

<form id="cat-photo-form" action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>


## Use an ID Attribute to Style an Element 
One cool thing about id attributes is that, like classes, you can style them using CSS.

Here's an example of how you can take your element with the id attribute of cat-photo-element and give it the background color of green. In your style element:

#cat-photo-element {
  background-color: green;
}
Note that inside your style element, you always reference classes by putting a . in front of their names. You always reference ids by putting a # in front of their names.

Try giving your form, which now has the id attribute of cat-photo-form, a green background.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Give your form element the id of cat-photo-form.
Your form element should have the background-color of green.
Make sure your form element has an id attribute.
Do not give your form any class or style attributes.


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

  .silver-background {
    background-color: silver;
  }
  
  #cat-photo-form {
    background: green;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" alt="A cute orange cat lying on its back. " src="https://bit.ly/fcc-relaxing-cat"></a>

<div class="silver-background">
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
</div>

<form action="/submit-cat-photo" id="cat-photo-form">
  <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality" checked> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Energetic</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>


## Adjusting the Padding of an Element 
Now let's put our Cat Photo App away for a little while and learn more about styling HTML.

You may have already noticed this, but all HTML elements are essentially little rectangles.

Three important properties control the space that surrounds each HTML element: padding, margin, and border.

An element's padding controls the amount of space between the element and its border.

Here, we can see that the green box and the red box are nested within the yellow box. Note that the red box has more padding than the green box.

When you increase the green box's padding, it will increase the distance between the text padding and the border around it.

Change the padding of your green box to match that of your red box.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your green-box class should give elements 20px of padding.


<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }
  
  .red-box {
    background-color: red;
    padding: 20px;
  }

  .green-box {
    background-color: green;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>


## Adjust the Margin of an Element 
An element's margin controls the amount of space between an element's border and surrounding elements.

Here, we can see that the green box and the red box are nested within the yellow box. Note that the red box has more margin than the green box, making it appear smaller.

When you increase the green box's margin, it will increase the distance between its border and surrounding elements.

Change the margin of the green box to match that of the red box.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your green-box class should give elements 20px of margin.


<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }
  
  .red-box {
    background-color: red;
    padding: 20px;
    margin: 20px;
  }

  .green-box {
    background-color: green;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>


## Add a Negative Margin to an Element 
An element's margin controls the amount of space between an element's border and surrounding elements.

If you set an element's margin to a negative value, the element will grow larger.

Try to set the margin to a negative value like the one for the red box.

Change the margin of the green box to -15px, so it fills the entire horizontal width of the yellow box around it.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your green-box class should give elements -15px of margin.


<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }
  
  .red-box {
    background-color: red;
    padding: 20px;
    margin: -15px;
  }

  .green-box {
    background-color: green;
    padding: 20px;
    margin: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>


## Add Different Padding to Each Side of an Element 
Sometimes you will want to customize an element so that it has different padding on each of its sides.

CSS allows you to control the padding of an element on all four sides with padding-top, padding-right, padding-bottom, and padding-left properties.

Give the green box a padding of 40px on its top and left side, but only 20px on its bottom and right side.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your green-box class should give the top of the elements 40px of padding.
Your green-box class should give the left of the elements 40px of padding.
Your green-box class should give the right of the elements 20px of padding.
Your green-box class should give the bottom of the elements 20px of padding.


<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }
  
  .red-box {
    background-color: red;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .green-box {
    background-color: green;
    padding-top: 40px;
    padding-left: 40px;
    padding-bottom: 20px;
    padding-right: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>


## Add Different Margins to Each Side of an Element 
Sometimes you will want to customize an element so that it has a different margin on each of its sides.

CSS allows you to control the margin of an element on all four sides with margin-top, margin-right, margin-bottom, and margin-left properties.

Give the green box a margin of 40px on its top and left side, but only 20px on its bottom and right side.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your green-box class should give the top of elements 40px of margin.
Your green-box class should give the left of elements 40px of margin.
Your green-box class should give the right of elements 20px of margin.
Your green-box class should give the bottom of elements 20px of margin.


<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }
  
  .red-box {
    background-color: red;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .green-box {
    background-color: green;
    margin-top: 40px;
    margin-left: 40px;
    margin-bottom: 20px;
    margin-right: 20px;
    
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>


## Use Clockwise Notation to Specify the Padding of an Element 
Instead of specifying an element's padding-top, padding-right, padding-bottom, and padding-left properties, you can specify them all in one line, like this:

padding: 10px 20px 10px 20px;

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.

Use Clockwise Notation to give the ".green-box" class a padding of 40px on its top and left side, but only 20px on its bottom and right side.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your green-box class should give the top of elements 40px of padding.
Your green-box class should give the right of elements 20px of padding.
Your green-box class should give the bottom of elements 20px of padding.
Your green-box class should give the left of elements 40px of padding.


<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }
  
  .red-box {
    background-color: red;
    padding: 20px 40px 20px 40px;
  }

  .green-box {
    background-color: green;
    padding: 40px 20px 20px 40px
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>


## Use Clockwise Notation to Specify the Margin of an Element 
Let's try this again, but with margin this time.

Instead of specifying an element's margin-top, margin-right, margin-bottom, and margin-left properties, you can specify them all in one line, like this:

margin: 10px 20px 10px 20px;

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.

Use Clockwise Notation to give the element with the green-box class a margin of 40px on its top and left side, but only 20px on its bottom and right side.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your green-box class should give the top of elements 40px of margin.
Your green-box class should give the right of elements 20px of margin.
Your green-box class should give the bottom of elements 20px of margin.
Your green-box class should give the left of elements 40px of margin.


<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }
  
  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
  }

  .green-box {
    background-color: green;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>


## Style the HTML Body Element 
Now let's start fresh and talk about CSS inheritance.

Every HTML page has a body element.

We can prove that the body element exists here by giving it a background-color of black.

We can do this by adding the following to our style element:

body {
  background-color: black;
}
Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Give your body element the background-color of black.
Make sure your CSS rule is properly formatted with both opening and closing curly brackets.
Make sure your CSS rule ends with a semi-colon.


<style>
  body {
    background-color: black;
  }
</style>


## Inherit Styles from the Body Element 
Now we've proven that every HTML page has a body element, and that its body element can also be styled with CSS.

Remember, you can style your body element just like any other HTML element, and all your other elements will inherit your body element's styles.

First, create a h1 element with the text Hello World

Then, let's give all elements on your page the color of green by adding color: green; to your body element's style declaration.

Finally, give your body element the font-family of Monospace by adding font-family: Monospace; to your body element's style declaration.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Create an h1 element.
Your h1 element should have the text Hello World.
Make sure your h1 element has a closing tag.
Give your body element the color property of green.
Give your body element the font-family property of Monospace.
Your h1 element should inherit the font Monospace from your body element.
Your h1 element should inherit the color green from your body element.


<style>
  body {
    background-color: black;
    color: green;
    font-family: Monospace;
  }

</style>
<h1> Hello World</h1>


## Prioritize One Style Over Another 
Sometimes your HTML elements will receive multiple styles that conflict with one another.

For example, your h1 element can't be both green and pink at the same time.

Let's see what happens when we create a class that makes text pink, then apply it to an element. Will our class override the body element's color: green; CSS property?

Create a CSS class called pink-text that gives an element the color pink.

Give your h1 element the class of pink-text.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your h1 element should have the class pink-text.
Your <style> should have a pink-text CSS class with its color set to pink.
Your h1 element should be pink.


<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>


## Override Styles in Subsequent CSS 
Our "pink-text" class overrode our body element's CSS declaration!

We just proved that our classes will override the body element's CSS. So the next logical question is, what can we do to override our pink-text class?

Create an additional CSS class called blue-text that gives an element the color blue. Make sure it's below your pink-text class declaration.

Apply the blue-text class to your h1 element in addition to your pink-text class, and let's see which one wins.

Applying multiple class attributes to a HTML element is done with a space between them like this:

class="class1 class2"

Note: It doesn't matter which order the classes are listed in the HTML element.

However, the order of the class declarations in the <style> section are what is important. The second declaration will always take precedence over the first. Because .blue-text is declared second, it overrides the attributes of .pink-text

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your h1 element should have the class pink-text.
Your h1 element should have the class blue-text.
Both blue-text and pink-text should belong to the same h1 element.
Your h1 element should be blue.


<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>


## Override Class Declarations by Styling ID Attributes 
We just proved that browsers read CSS from top to bottom. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last.

But we're not done yet. There are other ways that you can override CSS. Do you remember id attributes?

Let's override your pink-text and blue-text classes, and make your h1 element orange, by giving the h1 element an id and then styling that id.

Give your h1 element the id attribute of orange-text. Remember, id styles look like this:

<h1 id="orange-text">

Leave the blue-text and pink-text classes on your h1 element.

Create a CSS declaration for your orange-text id in your style element. Here's an example of what this looks like:

#brown-text {
  color: brown;
}
Note: It doesn't matter whether you declare this css above or below pink-text class, since id attribute will always take precedence.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your h1 element should have the class pink-text.
Your h1 element should have the class blue-text.
Give your h1 element the id of orange-text.
Create a CSS declaration for your orange-text id
Do not give your h1 any style attributes.
Your h1 element should be orange.


<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }
</style>
<h1 class="pink-text blue-text" id="orange-text">Hello World!</h1>


## Override Class Declarations with Inline Styles 
So we've proven that id declarations override class declarations, regardless of where they are declared in your style element CSS.

There are other ways that you can override CSS. Do you remember inline styles?

Use an in-line style to try to make our h1 element white. Remember, in line styles look like this:

<h1 style="color: green">

Leave the blue-text and pink-text classes on your h1 element.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your h1 element should have the class pink-text.
Your h1 element should have the class blue-text.
Your h1 element should have the id of orange-text.
Give your h1 element the inline style of color: white.
Your h1 element should be white.


<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>


## Override All Other Styles by using Important 
Yay! We just proved that in-line styles will override all the CSS declarations in your style element.

But wait. There's one last way to override CSS. This is the most powerful method of all. But before we do it, let's talk about why you would ever want to override CSS.

In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use !important

Let's go all the way back to our pink-text class declaration. Remember that our pink-text class was overridden by subsequent class declarations, id declarations, and in-line styles.

Let's add the keyword !important to your pink-text element's color declaration to make 100% sure that your h1 element will be pink.

An example of how to do this is:

color: red !important;

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your h1 element should have the class pink-text.
Your h1 element should have the class blue-text.
Your h1 element should have the id of orange-text.
Your h1 element should have the inline style of color: white.
Your pink-text class declaration should have the !important keyword to override all other declarations.
Your h1 element should be pink.


<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>


## Use Hex Code for Specific Colors 
Did you know there are other ways to represent colors in CSS? One of these ways is called hexadecimal code, or hex code for short.

We usually use decimals, or base 10 numbers, which use the symbols 0 to 9 for each digit. Hexadecimals (or hex) are base 16 numbers. This means it uses sixteen distinct symbols. Like decimals, the symbols 0-9 represents values zero to nine. Then A,B,C,D,E,F represent values ten to fifteen. Altogether, 0 to F can represent a digit in hexadecimal, giving us 16 total possible values. You can find more information about hexadecimal numbers here.

In CSS, we can use 6 hexadecimal digits to represent colors, two each for the red (R), green (G), and blue (B) components. For example, #000000 is black and is also the lowest possible value. You can find more information about the RGB color system here.

Replace the word black in our body element's background-color with its hex code representation, #000000.

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Give your body element the background-color of black.
Use the hex code for the color black instead of the word black. For example body { color: #000000; }


<style>
  body {
    background-color: #000000;
  }
</style>


## Use Hex Code to Mix Colors 
To review, hex codes use 6 hexadecimal digits to represent colors, two each for red (R), green (G), and blue (B) components.

From these three pure colors (red, green, and blue), we can vary the amounts of each to create over 16 million other colors!

For example, orange is pure red, mixed with some green, and no blue. In hex code, this translates to being #FFA500.

The digit 0 is the lowest number in hex code, and represents a complete absence of color.

The digit F is the highest number in hex code, and represents the maximum possible brightness.

Replace the color words in our style element with their correct hex codes.

Color	Hex Code
Dodger Blue	#2998E4
Green	#00FF00
Orange	#FFA500
Red	#FF0000
Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Give your h1 element with the text I am red! the color red.
Use the hex code for the color red instead of the word red.
Give your h1 element with the text I am green! the color green.
Use the hex code for the color green instead of the word green.
Give your h1 element with the text I am dodger blue! the color dodger blue.
Use the hex code for the color dodger blue instead of the word dodgerblue.
Give your h1 element with the text I am orange! the color orange.
Use the hex code for the color orange instead of the word orange.


<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #2998E4;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>


## Use Abbreviated Hex Code 
Many people feel overwhelmed by the possibilities of more than 16 million colors. And it's difficult to remember hex code. Fortunately, you can shorten it.

For example, red's hex code #FF0000 can be shortened to #F00. This shortened form gives one digit for red, one digit for green, and one digit for blue.

This reduces the total number of possible colors to around 4,000. But browsers will interpret #FF0000 and #F00 as exactly the same color.

Go ahead, try using the abbreviated hex codes to color the correct elements.

Color	Short Hex Code
Cyan	#0FF
Green	#0F0
Red	#F00
Fuchsia	#F0F
Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Give your h1 element with the text I am red! the color red.
Use the abbreviate hex code for the color red instead of the hex code #FF0000.
Give your h1 element with the text I am green! the color green.
Use the abbreviated hex code for the color green instead of the hex code #00FF00.
Give your h1 element with the text I am cyan! the color cyan.
Use the abbreviated hex code for the color cyan instead of the hex code #00FFFF.
Give your h1 element with the text I am fuchsia! the color fuchsia.
Use the abbreviated hex code for the color fuchsia instead of the hex code #FF00FF.


<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>


## Use RGB values to Color Elements 
Another way you can represent colors in CSS is by using RGB values.

The RGB value for black looks like this:

rgb(0, 0, 0)

The RGB value for white looks like this:

rgb(255, 255, 255)

Instead of using six hexadecimal digits like you do with hex code, with RGB you specify the brightness of each color with a number between 0 and 255.

If you do the math, the two digits for one color equal 16 times 16, which gives us 256 total values. So RGB, which starts counting from zero, has the exact same number of possible values as hex code.

Let's replace the hex code in our body element's background color with the RGB value for black: rgb(0, 0, 0)

Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Your body element should have a black background.
Use rgb to give your body element a color of black. For example body { background-color: rgb(255, 165, 0); }


<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>


## Use RGB to Mix Colors 
Just like with hex code, you can mix colors in RGB by using combinations of different values.

Replace the color words in our style element with their correct RGB values.

Color	RGB
Blue	rgb(0, 0, 255)
Red	rgb(255, 0, 0)
Orchid	rgb(218, 112, 214)
Sienna	rgb(160, 82, 45)
Run tests (ctrl - [x]enter)
Reset your code
Get a hint
Ask for help on the forum
Give your h1 element with the text I am red! the color red.
Use rgb for the color red.
Give your h1 element with the text I am orchid! the color orchid.
Use rgb for the color orchid.
Give your h1 element with the text I am blue! the color blue.
Use rgb for the color blue.
Give your h1 element with the text I am sienna! the color sienna.
Use rgb for the color sienna.


<style>
  .red-text {
    color: rgb(255,0,0);
  }
  .orchid-text {
    color: rgb(218,112,214);
  }
  .sienna-text {
    color: rgb(160,82,45);
  }
  .blue-text {
    color: rgb(0,0,255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
