# Basic CSS
-- Coded with 💗 by Stefanie Feltman

## Social Media
[FreeCodeCamp](https://www.freecodecamp.org/stefaniedev) |
[GitHub](https://github.com/stefaniedev) |
[LinkedIn](https://www.linkedin.com/in/stefaniefeltman/) |
[Twitter](https://twitter.com/stefaniedev) |
[CodePen](https://codepen.io/stefaniedev/)


## Change the Color of Text 
Now let's change the color of some of our text.

We can do this by changing the style of your h2 element.

The style that is responsible for the color of an element's text is the `"color"` style.

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
Note that it's important to have both opening and closing curly braces `({` and `})` around each element's style. You also need to make sure your element's style is between the opening and closing style tags. Finally, be sure to add the semicolon to the end of each of your element's styles.

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

Inside your style element, change the h2 selector to `.red-text` and update the color's value from blue to red.

Give your h2 element the class attribute with a value of `'red-text'`.

- [x] Your h2 element should be red.
- [x] Your h2 element should have the class `red-text`.
- [x] Your stylesheet should declare a `red-text` class and have its color set to red.
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
Remember that you can attach classes to HTML elements by using `class="your-class-here"` within the relevant element's opening tag.

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
- [x] Your h2 element should have the class `red-text`.
- [x] Your p element should be red.
- [x] Your p element should have the class `red-text`.

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

Inside the same `<style>` tag that contains your `red-text` class, create an entry for p elements and set the `font-size` to 16 pixels (16px).

Note
Due to browser implementation differences, you may need to be at 100% zoom to pass the tests on this challenge.

Also, please do not add a class attribute to your new p element.

- [x] You need 2 p elements with Kitty Ipsum text.
- [x] Make sure each of your p elements has a closing tag.
- [x] Your p element should contain the first few words of the provided additional kitty ipsum text.
- [x] The first p element should have the class `red-text`.
- [x] Do not add a class attribute to the second p element.
- [x] Between the style tags, give the p elements `font-size` of 16px. Browser and Text zoom should be at 100%.

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
You can set an element's font by using the `font-family` property.

For example, if you wanted to set your h2 element's font to `Sans-serif`, you would use the following CSS:
```
h2 {
  font-family: Sans-serif;
}
```
Make all of your p elements use the `Monospace` font.

- [x] Your p elements should use the font `Monospace`.

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

First, you'll need to make a call to Google to grab the `Lobster` font and load it into your HTML.

Copy the following code snippet and paste it into the top of your code editor:

`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">`

Now you can set `Lobster` as a `font-family` value on your h2 element.

Apply the `font-family` of `Lobster` to your h2 element.

- [x] Import the `Lobster` font.
- [x] Your h2 element should use the font `Lobster`.
- [x] Your p element should still use the font `Monospace`.
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
There are several default fonts that are available in all browsers. These include `Monospace`, `Serif` and `Sans-Serif`

When one font isn't available, you can tell the browser to "degrade" to another font.

For example, if you wanted an element to use the `Helvetica` font, but also degrade to the `Sans-Serif` font when `Helvetica` wasn't available, you could use this CSS style:
```
p {
  font-family: Helvetica, Sans-Serif;
}
```
Now comment out your call to Google Fonts, so that the `Lobster` font isn't available. Notice how it degrades to the `Monospace` font.

- [x] Your h2 element should use the font `Lobster`.
- [x] Your h2 element should degrade to the font `Monospace` when `Lobster` is not available.
- [x] Comment out your call to Google for the Lobster font by putting `<!--` in front of it.
- [x] Be sure to close your comment by adding `-->`.

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


## Size your Images 
CSS has a property called `width` that controls an element's width. Just like with fonts, we'll use px (pixels) to specify the image's width.

For example, if we wanted to create a CSS class called `larger-image` that gave HTML elements a width of 500 pixels, we'd use:
```
<style>
  .larger-image {
    width: 500px;
  }
</style>
```
Create a class called `smaller-image` and use it to resize the image so that it's only 100 pixels wide.

Note
Due to browser implementation differences, you may need to be at 100% zoom to pass the tests on this challenge.

- [x] Your img element should have the class `smaller-image`.
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
CSS borders have properties like `style`, `color` and `width`

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
Create a class called `thick-green-border` that puts a 10-pixel-wide green border with a style of solid around an HTML element, and apply that class to your cat photo.

Remember that you can apply multiple classes to an element by separating each class with a space within its class attribute. For example: `<img class="class1 class2">`

- [x] Your img element should have the class `smaller-image`.
- [x] Your img element should have the class `thick-green-border`.
- [x] Give your image a border width of `10px`.
- [x] Give your image a border style of `solid`.
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
Your cat photo currently has sharp corners. We can round out those corners with a CSS property called `border-radius`.

You can specify a `border-radius` with pixels. Give your cat photo a `border-radius` of `10px`.

Note: this waypoint allows for multiple possible solutions. For example, you may add `border-radius` to either the `.thick-green-border` class or `.smaller-image` class.

- [x] Your image element should have the class `"thick-green-border"`.
- [x] Your image should have a border radius of `10px`

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
```


## Make Circular Images with a Border Radius 
In addition to pixels, you can also specify a `border-radius` using a percentage.

Give your cat photo a `border-radius` of `50%`.

- [x] Your image should have a border radius of `50%`, making it perfectly circular.
- [x] Be sure to use a percentage instead of a pixel value.

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
```


## Give a Background Color to a Div Element 
You can set an element's background color with the `background-color` property.

For example, if you wanted an element's background color to be green, you'd put this within your style element:
```
.green-background {
  background-color: green;
}
```
Create a class called `silver-background` with the `background-color` of silver. Assign this class to your div element.

- [x] Give your div element the class `silver-background`.
- [x] Your div element should have a silver background.

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
```


## Set the ID of an Element 
In addition to classes, each HTML element can also have an `id` attribute.

There are several benefits to using `id` attributes, and you'll learn more about them once you start using jQuery.

`id` attributes should be unique. Browsers won't enforce this, but it is a widely agreed upon best practice. So please don't give more than one element the same `id` attribute.

Here's an example of how you give your h2 element the `id` of `cat-photo-app`:

`<h2 id="cat-photo-app">`

Give your form element the `id cat-photo-form`.

- [x] Give your form element the `id` of `cat-photo-form`.

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
```


## Use an ID Attribute to Style an Element 
One cool thing about `id` attributes is that, like `classes`, you can style them using CSS.

Here's an example of how you can take your element with the `id` attribute of `cat-photo-element` and give it the background color of green. In your style element:
```
#cat-photo-element {
  background-color: green;
}
```
Note that inside your style element, you always reference classes by putting a . in front of their names. You always reference ids by putting a # in front of their names.

Try giving your form, which now has the `id` attribute of `cat-photo-form`, a green background.

- [x] Give your form element the `id` of `cat-photo-form`.
- [x] Your form element should have the `background-color` of green.
- [x] Make sure your form element has an `id` attribute.
- [x] Do not give your form any `class` or `style` attributes.

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
```


## Adjusting the Padding of an Element 
Now let's put our Cat Photo App away for a little while and learn more about styling HTML.

You may have already noticed this, but all HTML elements are essentially little rectangles.

Three important properties control the space that surrounds each HTML element: `padding`, `margin`, and `border`.

An element's padding controls the amount of space between the element and its border.

Here, we can see that the green box and the red box are nested within the yellow box. Note that the red box has more padding than the green box.

When you increase the green box's padding, it will increase the distance between the text padding and the border around it.

Change the `padding` of your green box to match that of your red box.

- [x] Your `green-box` class should give elements `20px` of `padding`.

```
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
```


## Adjust the Margin of an Element 
An element's `margin` controls the amount of space between an element's border and surrounding elements.

Here, we can see that the green box and the red box are nested within the yellow box. Note that the red box has more `margin` than the green box, making it appear smaller.

When you increase the green box's `margin`, it will increase the distance between its border and surrounding elements.

Change the `margin` of the green box to match that of the red box.

- [x] Your `green-box` class should give elements `20px` of `margin`.

```
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
```


## Add a Negative Margin to an Element 
An element's `margin` controls the amount of space between an element's border and surrounding elements.

If you set an element's `margin` to a negative value, the element will grow larger.

Try to set the margin to a negative value like the one for the red box.

Change the `margin` of the green box to `-15px`, so it fills the entire horizontal width of the yellow box around it.

- [x] Your `green-box` class should give elements `-15px` of `margin`.

```
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
```


## Add Different Padding to Each Side of an Element 
Sometimes you will want to customize an element so that it has different `padding` on each of its sides.

CSS allows you to control the `padding` of an element on all four sides with `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` properties.

Give the green box a `padding` of `40px` on its top and left side, but only `20px` on its bottom and right side.

- [x] Your `green-box` class should give the top of the elements `40px` of `padding`.
- [x] Your `green-box` class should give the left of the elements `40px` of `padding`.
- [x] Your `green-box` class should give the right of the elements `20px` of `padding`.
- [x] Your `green-box` class should give the bottom of the elements `20px` of `padding`.

```
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
```


## Add Different Margins to Each Side of an Element 
Sometimes you will want to customize an element so that it has a different `margin` on each of its sides.

CSS allows you to control the margin of an element on all four sides with `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` properties.

Give the green box a `margin` of `40px` on its top and left side, but only `20px` on its bottom and right side.

- [x] Your `green-box` class should give the top of elements `40px` of `margin`.
- [x] Your `green-box` class should give the left of elements `40px` of `margin`.
- [x] Your `green-box` class should give the right of elements `20px` of `margin`.
- [x] Your `green-box` class should give the bottom of elements `20px` of `margin`.

```
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
```


## Use Clockwise Notation to Specify the Padding of an Element 
Instead of specifying an element's `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` properties, you can specify them all in one line, like this:

`padding: 10px 20px 10px 20px;`

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.

Use Clockwise Notation to give the `".green-box"` class a `padding` of `40px` on its top and left side, but only `20px` on its bottom and right side.

- [x] Your `green-box` class should give the top of elements `40px` of `padding`.
- [x] Your `green-box` class should give the right of elements `20px` of `padding`.
- [x] Your `green-box` class should give the bottom of elements `20px` of `padding`.
- [x] Your `green-box` class should give the left of elements `40px` of `padding`.

```
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
```


## Use Clockwise Notation to Specify the Margin of an Element 
Let's try this again, but with `margin` this time.

Instead of specifying an element's `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` properties, you can specify them all in one line, like this:

`margin: 10px 20px 10px 20px;`

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.

Use Clockwise Notation to give the element with the `green-box` class a `margin` of `40px` on its top and left side, but only `20px` on its bottom and right side.

- [x] Your `green-box` class should give the top of elements `40px` of `margin`.
- [x] Your `green-box` class should give the right of elements `20px` of `margin`.
- [x] Your `green-box` class should give the bottom of elements `20px` of `margin`.
- [x] Your `green-box` class should give the left of elements `40px` of `margin`.

```
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
```


## Use Attribute Selectors to Style Elements
You have been giving `id` or `class` attributes to elements that you wish to specifically style. These are known as `ID` and `class` selectors. There are other CSS Selectors you can use to select custom groups of elements to style.

Let's bring out CatPhotoApp again to practice using CSS Selectors.

For this challenge, you will use the `[attr=value]` attribute selector to style the checkboxes in CatPhotoApp. This selector matches and styles elements with a specific attribute value. For example, the below code changes the margins of all elements with the attribute type and a corresponding value of radio:
```
[type='radio'] {
margin: 20px 0px 20px 0px;
}
```
Using the type attribute selector, try to give the checkboxes in CatPhotoApp a `top margin` of `10px` and a `bottom margin` of `15px`.

- [x] The `type` attribute selector should be used to select the checkboxes.
- [x] The `top margins` of the checkboxes should be `10px`.
- [x] The `bottom margins` of the checkboxes should be `15px`.

```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster, monospace;
  }
  p {
    font-size: 16px;
    font-family: monospace;
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
  [type='checkbox'] {
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>
<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```


## Understand Absolute versus Relative Units
The last several challenges all set an element's margin or padding with pixels (`px`). Pixels are a type of length unit, which is what tells the browser how to size or space an item. In addition to px, CSS has a number of different length unit options that you can use.

The two main types of length units are `absolute` and `relative`. Absolute units tie to physical units of length. For example, `in` and `mm` refer to inches and millimeters, respectively. Absolute length units approximate the actual measurement on a screen, but there are some differences depending on a screen's resolution.

Relative units, such as `em` or `rem`, are relative to another length value. For example, `em` is based on the size of an element's font. If you use it to set the `font-size` property itself, it's relative to the parent's `font-size`.

Note
There are several relative unit options that are tied to the size of the viewport. They are covered in the Responsive Web Design Principles section.


Add a `padding` property to the element with class `red-box` and set it to `1.5em`.

- [x] Your `red-box` class should have a `padding` property.
- [x] Your `red-box` class should give elements `1.5em` of padding.

```
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
    padding: 1.5em;
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
```


## Style the HTML Body Element 
Now let's start fresh and talk about CSS inheritance.

Every HTML page has a body element.

We can prove that the body element exists here by giving it a `background-color` of black.

We can do this by adding the following to our style element:
```
body {
  background-color: black;
}
```

- [x] Give your body element the `background-color` of black.
- [x] Make sure your CSS rule is properly formatted with both opening and closing curly brackets.
- [x] Make sure your CSS rule ends with a semi-colon.

```
<style>
  body {
    background-color: black;
  }
</style>
```


## Inherit Styles from the Body Element 
Now we've proven that every HTML page has a body element, and that its body element can also be styled with CSS.

Remember, you can style your body element just like any other HTML element, and all your other elements will inherit your body element's styles.

First, create a h1 element with the text Hello World

Then, let's give all elements on your page the color of green by adding `color: green;` to your body element's style declaration.

Finally, give your body element the `font-family` of `Monospace` by adding `font-family: Monospace;` to your body element's style declaration.

- [x] Create an h1 element.
- [x] Your h1 element should have the text Hello World.
- [x] Make sure your h1 element has a closing tag.
- [x] Give your body element the `color` property of `green`.
- [x] Give your body element the `font-family` property of `Monospace`.
- [x] Your h1 element should inherit the font `Monospace` from your body element.
- [x] Your h1 element should inherit the color `green` from your body element.

```
<style>
  body {
    background-color: black;
    color: green;
    font-family: Monospace;
  }
</style>
<h1> Hello World</h1>
```


## Prioritize One Style Over Another 
Sometimes your HTML elements will receive multiple styles that conflict with one another.

For example, your h1 element can't be both green and pink at the same time.

Let's see what happens when we create a class that makes text pink, then apply it to an element. Will our class override the body element's `color: green;` CSS property?

Create a CSS class called `pink-text` that gives an element the color pink.

Give your h1 element the class of `pink-text`.

- [x] Your h1 element should have the `class pink-text`.
- [x] Your `<style>` should have a `pink-text` CSS class with its `color` set to `pink`.
- [x] Your h1 element should be pink.

```
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
```


## Override Styles in Subsequent CSS 
Our `"pink-text"` class overrode our body element's CSS declaration!

We just proved that our classes will override the body element's CSS. So the next logical question is, what can we do to override our `pink-text` class?

Create an additional CSS class called `blue-text` that gives an element the color blue. Make sure it's below your `pink-text` class declaration.

Apply the `blue-text` class to your h1 element in addition to your `pink-text` class, and let's see which one wins.

Applying multiple class attributes to a HTML element is done with a space between them like this:

`class="class1 class2"`

Note: It doesn't matter which order the classes are listed in the HTML element.

However, the order of the class declarations in the `<style>` section are what is important. The second declaration will always take precedence over the first. Because `.blue-text` is declared second, it overrides the attributes of `.pink-text`

- [x] Your h1 element should have the class `pink-text`.
- [x] Your h1 element should have the class `blue-text`.
- [x] Both `blue-text` and `pink-text` should belong to the same h1 element.
- [x] Your h1 element should be blue.

```
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
```


## Override Class Declarations by Styling ID Attributes 
We just proved that browsers read CSS from top to bottom. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last.

But we're not done yet. There are other ways that you can override CSS. Do you remember `id` attributes?

Let's override your `pink-text` and `blue-text` classes, and make your h1 element orange, by giving the h1 element an `id` and then styling that id.

Give your h1 element the `id` attribute of `orange-text`. Remember, id styles look like this:

`<h1 id="orange-text">`

Leave the `blue-text` and `pink-text` classes on your h1 element.

Create a CSS declaration for your `orange-text` id in your style element. Here's an example of what this looks like:
```
#brown-text {
  color: brown;
}
```
Note: It doesn't matter whether you declare this css above or below `pink-text` class, since id attribute will always take precedence.

- [x] Your h1 element should have the class `pink-text`.
- [x] Your h1 element should have the class `blue-text`.
- [x] Give your h1 element the id of `orange-text`.
- [x] Create a CSS declaration for your `orange-text` id
- [x] Do not give your h1 any style attributes.
- [x] Your h1 element should be orange.

```
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
```


## Override Class Declarations with Inline Styles 
So we've proven that id declarations override class declarations, regardless of where they are declared in your style element CSS.

There are other ways that you can override CSS. Do you remember inline styles?

Use an in-line style to try to make our h1 element white. Remember, in line styles look like this:

`<h1 style="color: green">`

Leave the `blue-text` and `pink-text` classes on your h1 element.

- [x] Your h1 element should have the class `pink-text`.
- [x] Your h1 element should have the class `blue-text`.
- [x] Your h1 element should have the id of `orange-text`.
- [x] Give your h1 element the inline style of `color: white`.
- [x] Your h1 element should be white.

```
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
```


## Override All Other Styles by using Important 
Yay! We just proved that in-line styles will override all the CSS declarations in your style element.

But wait. There's one last way to override CSS. This is the most powerful method of all. But before we do it, let's talk about why you would ever want to override CSS.

In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use `!important`

Let's go all the way back to our `pink-text` class declaration. Remember that our `pink-text` class was overridden by subsequent class declarations, id declarations, and in-line styles.

Let's add the keyword `!important` to your `pink-text` element's color declaration to make 100% sure that your h1 element will be pink.

An example of how to do this is: `color: red !important;`


- [x] Your h1 element should have the class `pink-text`.
- [x] Your h1 element should have the class `blue-text`.
- [x] Your h1 element should have the id of `orange-text`.
- [x] Your h1 element should have the inline style of `color: white`.
- [x] Your pink-text class declaration should have the `!important` keyword to override all other declarations.
- [x] Your h1 element should be pink.

```
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
```


## Use Hex Code for Specific Colors 
Did you know there are other ways to represent colors in CSS? One of these ways is called hexadecimal code, or hex code for short.

We usually use decimals, or base 10 numbers, which use the symbols 0 to 9 for each digit. Hexadecimals (or hex) are base 16 numbers. This means it uses sixteen distinct symbols. Like decimals, the symbols 0-9 represents values zero to nine. Then A,B,C,D,E,F represent values ten to fifteen. Altogether, 0 to F can represent a digit in hexadecimal, giving us 16 total possible values. You can find more information about hexadecimal numbers here.

In CSS, we can use 6 hexadecimal digits to represent colors, two each for the red (R), green (G), and blue (B) components. For example, `#000000` is black and is also the lowest possible value. You can find more information about the RGB color system here.

Replace the word black in our body element's `background-color` with its hex code representation, `#000000`.

- [x] Give your body element the `background-color` of black.
- [x] Use the hex code for the color black instead of the word black. For example body `{ color: #000000; }`

```
<style>
  body {
    background-color: #000000;
  }
</style>
```

## Use Hex Code to Mix Colors 
To review, hex codes use 6 hexadecimal digits to represent colors, two each for red (R), green (G), and blue (B) components.

From these three pure colors (red, green, and blue), we can vary the amounts of each to create over 16 million other colors!

For example, orange is pure red, mixed with some green, and no blue. In hex code, this translates to being `#FFA500`.

The digit 0 is the lowest number in hex code, and represents a complete absence of color.

The digit F is the highest number in hex code, and represents the maximum possible brightness.

Replace the color words in our style element with their correct hex codes.
```
Color Hex Code
Dodger Blue #2998E4
Green #00FF00
Orange  #FFA500
Red #FF0000
```

- [x] Give your h1 element with the text I am red! the color red.
- [x] Use the hex code for the color red instead of the word red.
- [x] Give your h1 element with the text I am green! the color green.
- [x] Use the hex code for the color green instead of the word green.
- [x] Give your h1 element with the text I am dodger blue! the color dodger blue.
- [x] Use the hex code for the color dodger blue instead of the word dodgerblue.
- [x] Give your h1 element with the text I am orange! the color orange.
- [x] Use the hex code for the color orange instead of the word orange.

```
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
```


## Use Abbreviated Hex Code 
Many people feel overwhelmed by the possibilities of more than 16 million colors. And it's difficult to remember hex code. Fortunately, you can shorten it.

For example, red's hex code `#FF0000` can be shortened to `#F00`. This shortened form gives one digit for red, one digit for green, and one digit for blue.

This reduces the total number of possible colors to around 4,000. But browsers will interpret `#FF0000` and `#F00` as exactly the same color.

Go ahead, try using the abbreviated hex codes to color the correct elements.
```
Color Short Hex Code
Cyan  #0FF
Green #0F0
Red #F00
Fuchsia #F0F
```

- [x] Give your h1 element with the text I am red! the color red.
- [x] Use the abbreviate hex code for the color red instead of the hex code `#FF0000`.
- [x] Give your h1 element with the text I am green! the color green.
- [x] Use the abbreviated hex code for the color green instead of the hex code `#00FF00`.
- [x] Give your h1 element with the text I am cyan! the color cyan.
- [x] Use the abbreviated hex code for the color cyan instead of the hex code `#00FFFF`.
- [x] Give your h1 element with the text I am fuchsia! the color fuchsia.
- [x] Use the abbreviated hex code for the color fuchsia instead of the hex code `#FF00FF`.

```
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
```


## Use RGB values to Color Elements 
Another way you can represent colors in CSS is by using RGB values.

The RGB value for black looks like this: `rgb(0, 0, 0)`

The RGB value for white looks like this: `rgb(255, 255, 255)`

Instead of using six hexadecimal digits like you do with hex code, with RGB you specify the brightness of each color with a number between 0 and 255.

If you do the math, the two digits for one color equal 16 times 16, which gives us 256 total values. So RGB, which starts counting from zero, has the exact same number of possible values as hex code.

Let's replace the hex code in our body element's background color with the RGB value for black: `rgb(0, 0, 0)`

- [x] Your body element should have a black background.
- [x] Use rgb to give your body element a color of black. For example body `{ background-color: rgb(255, 165, 0); }`

```
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```


## Use RGB to Mix Colors 
Just like with hex code, you can mix colors in RGB by using combinations of different values.

Replace the color words in our style element with their correct RGB values.
```
Color RGB
Blue  rgb(0, 0, 255)
Red rgb(255, 0, 0)
Orchid  rgb(218, 112, 214)
Sienna  rgb(160, 82, 45)
```

- [x] Give your h1 element with the text I am red! the color red.
- [x] Use rgb for the color red.
- [x] Give your h1 element with the text I am orchid! the color orchid.
- [x] Use rgb for the color orchid.
- [x] Give your h1 element with the text I am blue! the color blue.
- [x] Use rgb for the color blue.
- [x] Give your h1 element with the text I am sienna! the color sienna.
- [x] Use rgb for the color sienna.

```
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
```


## Use CSS Variables to change several elements at once
CSS Variables are a powerful way to change many CSS style properties at once by changing only one value.

Follow the instructions below to see how changing just three values can change the styling of many elements.


In the `penguin` class, change the `black` value to `gray`, the `gray` value to `white`, and the `yellow` value to `orange`.

- [x] `penguin` class should declare the `--penguin-skin` variable and assign it to `gray`.
- [x] `penguin` class should declare the `--penguin-belly` variable and assign it to `white`.
- [x] `penguin` class should declare the `--penguin-beak` variable and assign it to `orange`.

```
<style>
  .penguin {
    /* change code below */
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
    /* change code above */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;  
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;  
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%; 
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;  
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;  
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;  
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;  
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;  
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;  
  }
  body {
    background:#c6faf1;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```


## Create a custom CSS Variable
To create a CSS Variable, you just need to give it a name with two dashes in front of it and assign it a value like this:
`--penguin-skin: gray;`
This will create a variable named `--penguin-skin` and assign it the value of `gray`.

Now you can use that variable elsewhere in your CSS to change the value of other elements to gray.


In the `penguin` class, create a variable name `--penguin-skin` and give it a value of `gray`

- [x] `penguin` class should declare the `--penguin-skin` variable and assign it to `gray`.

```
<style>
  .penguin {
    /* add code below */
    --penguin-skin: gray;
    /* add code above */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: black;
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: black;
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    background: black;
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    background: black;
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: white;
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;  
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;  
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%; 
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;  
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;  
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;  
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;  
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: orange;
    width: 20%;
    height: 10%;
    border-radius: 50%;  
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: orange;
    width: 16%;
    height: 10%;
    border-radius: 50%;  
  }
  body {
    background:#c6faf1;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```


## Use a custom CSS Variable
After you create your variable, you can assign its value to other CSS properties by referencing the name you gave it.

`background: var(--penguin-skin);`
This will change the background of whatever element you are targeting to gray because that is the value of the `--penguin-skin` variable.

Note that styles will not be applied unless the variable names are an exact match.


Apply the --penguin-skin variable to the background property of the penguin-top, penguin-bottom, right-hand and left-hand classes.

- [x] Apply the `--penguin-skin` variable to the `background` property of the `pengiun-top` class.
- [x] Apply the `--penguin-skin` variable to the `background` property of the `pengiun-bottom` class.
- [x] Apply the `--penguin-skin` variable to the `background` property of the `right-hand` class.
- [x] Apply the `--penguin-skin` variable to the `background` property of the `left-hand` class.

```
<style>
  .penguin {
    --penguin-skin: gray;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    /* change code below */
    background: var(--penguin-skin);
    /* change code above */
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    /* change code below */
    background: var(--penguin-skin);
    /* change code above */
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    /* change code below */
    background: var(--penguin-skin);
    /* change code above */
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    /* change code below */
    background: var(--penguin-skin);
    /* change code above */
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: white;
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;  
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;  
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%; 
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: orange;
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: orange;
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  body {
    background:#c6faf1;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```


## Attach a Fallback value to a CSS Variable
When using your variable as a CSS property value, you can attach a fallback value that your page will revert to if for some reason it can't get your variable to work.

It could be that someone is using an older browser that hasn't yet adopted CSS Variables, or perhaps their device doesn't support the value you gave the variable. Here's how you do it:

`background: var(--penguin-skin, black);`
This will set background to black if there is a problem with your variable.

Note that this can be useful for debugging.


Add a fallback value of `black` to the `background` property of `penguin-top` and `penguin-bottom` classes. This style will be applied because of a typo in the variable name.

- [x] Apply the fallback value of `black` to the `background` property of the `penguin-top` class.
- [x] Apply the fallback value of `black` to the `background` property of the `penguin-bottom` class.

```
<style>
  .penguin {
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    /* change code below */
    background: var(--pengiun-skin, black);
    /* change code above */
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    /* change code below */
    background: var(--pengiun-skin, black);
    /* change code above */
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  body {
    background:#c6faf1;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```


## Improve Compatibility with Browser Fallbacks
When working with CSS you will likely run into browser compatibility issues at some point. This is why it's important to provide browser fallbacks to avoid potential problems.

When your browser parses the CSS of a webpage, it ignores any properties that it doesn't recognize or support. For example, if you use a CSS variable to assign a background color on a site, Internet Explorer will ignore the background color because it does not support CSS variables. In that case, the browser will use whatever value it has for that property. If it can't find any other value set for that property, it will revert to the default value, which is typically not ideal.

This means that if you do want to provide a browser fallback, it's as easy as providing another more widely supported value immediately before your declaration. That way an older browser will have something to fall back on, while a newer browser will just interpret whatever declaration comes later in the cascade.

It looks like a variable is being used to set the background color of the `.red-box` class. Let's improve our browser compatibility by adding another `background` declaration right before the existing declaration and set its value to red.

- [x] Your `.red-box` rule should include a fallback with the `background` set to red immediately before the existing `background` declaration.

```
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>

```


## Cascading CSS variables
When you create a variable, it becomes available for you to use inside the element in which you create it. It also becomes available within any elements nested within it. This effect is known as cascading.

Because of cascading, CSS variables are often defined in the `:root` element.

You can think of the :root element as a container for your entire HTML document, in the same way that an html element is a container for the body element.

By creating your variables in `:root`, they will be available throughout the whole web page.


Define a variable named `--penguin-belly` in the `:root` selector and give it the value of `pink`. You can then see how the value will cascade down to change the value to `pink`, anywhere that variable is used.

- [x] declare the `--penguin-belly` variable in the `:root` and assign it to `pink`.

```
<style>
  :root {
    /* add code below */
    --penguin-belly: pink;
    /* add code above */
  }
  body {
    background: var(--penguin-belly, #c6faf1);
  }
  .penguin {
    --penguin-skin: gray;
    --penguin-beak: orange;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```


## Change a variable for a specific area
When you create your variables in `:root` they will set the value of that variable for the whole page.

You can then over-write these variables by setting them again within a specific element.


Change the value of `--penguin-belly` to `white` in the `penguin` class.

- [x] The `penguin` class should reassign the `--penguin-belly` variable to `white`.

```
<style>
  :root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }
  body {
    background: var(--penguin-belly, #c6faf1);
  }
  .penguin {
    /* add code below */
    --penguin-belly: white;
    /* add code above */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, pink);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```


## Use a media query to change a variable
CSS Variables can simplify the way you use media queries.

For instance, when your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.


In the `:root` selector of the media query, change it so `--penguin-size` is redefined and given a value of `200px`. Also, redefine `--penguin-skin` and give it a value of `black`. Then resize the preview to see this change in action.

Run the Tests
Reset All Code
Ask for help
- [x] `:root` should reassign the `--penguin-size` variable to `200px`.
- [x] `:root` should reassign the `--penguin-skin` variable to `black`.

```
<style>
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }
  @media (max-width: 350px) {
    :root {
      /* add code below */
      --penguin-size: 200px;
      --penguin-skin: black;
      /* add code above */
    }
  }
  .penguin {
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: var(--penguin-size, 300px);
    height: var(--penguin-size, 300px);
  }
  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }
  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }
  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
  .right-hand {
    top: 5%;
    left: 25%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(130deg);
    z-index: -1;
    animation-duration: 3s;
    animation-name: wave;
    animation-iteration-count: infinite;
    transform-origin:0% 0%;
    animation-timing-function: linear;
  }
  @keyframes wave {
      10% {
        transform: rotate(110deg);
      }
      20% {
        transform: rotate(130deg);
      }
      30% {
        transform: rotate(110deg);
      } 
      40% {
        transform: rotate(130deg);
      }  
    }
  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }
  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }
  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }
  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }
  .sparkle {
    top: 25%;
    left:-23%;
    background: white;
    width: 150%;
    height: 100%;
    border-radius: 50%;
  }
  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }
  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }
  body {
    background:#c6faf1;
  }
  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```


