# jQuery
-- Coded with 💗 by Stefanie Feltman

## Social Media
[FreeCodeCamp](https://www.freecodecamp.org/portfolio/stefaniedev) |
[GitHub](https://github.com/stefaniedev) |
[LinkedIn](https://www.linkedin.com/in/stefaniefeltman/) |
[Twitter](https://twitter.com/stefaniedev) |
[CodePen](https://codepen.io/stefaniedev/)


## Learn how Script Tags and Document Ready Work 
Now we're ready to learn jQuery, the most popular JavaScript tool of all time. Don't worry about JavaScript itself - we will cover it soon.

Before we can start using jQuery, we need to add some things to our HTML.

First, add a script element at the top of your page. Be sure to close it on the following line.

Your browser will run any JavaScript inside a script element, including jQuery.

Inside your script element, add this code: `$(document).ready(function() {` to your script. Then close it on the following line (still inside your script element) with: `});`

We'll learn more about functions later. The important thing to know is that code you put inside this function will run as soon as your browser has loaded your page.

This is important because without your document ready function, your code may run before your HTML is rendered, which would cause bugs.

- [x] Create a script element making sure it is valid and has a closing tag.
- [x] You should add `$(document).ready(function() {` to the beginning of your script element.
- [x] Close your `$(document).ready(function() {` function with `});`

```
<script>
  $(document).ready(function() {
    });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Target HTML Elements with Selectors Using jQuery 
Now we have a document ready function.

Now let's write our first jQuery statement. All jQuery functions start with a `$`, usually referred to as a dollar sign operator, or as bling.

jQuery often selects an HTML element with a selector, then does something to that element.

For example, let's make all of your button elements bounce. Just add this code inside your document ready function:

`$("button").addClass("animated bounce");`

Note that we've already included both the jQuery library and the Animate.css library in the background so that you can use them in the editor. So you are using jQuery to apply the Animate.css bounce class to your button elements.

Additionally make sure to use `$("button").addClass("animated bounce");` instead of `$('button').addClass("animated bounce");` since single-quote selectors will not pass our tests.

- [x] Use the jQuery `addClass()` function to give the classes animated and bounce to your button elements.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
$("button").addClass("animated bounce");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Target Elements by Class Using jQuery 
You see how we made all of your button elements bounce? We selected them with `$("button")`, then we added some CSS classes to them with `.addClass("animated bounce");`.

You just used jQuery's `.addClass()` function, which allows you to add classes to elements.

First, let's target your div elements with the class `well` by using the `$(".well")` selector.

Note that, just like with CSS declarations, you type a `.` before the class's name.

Then use jQuery's `.addClass()` function to add the classes animated and shake.

For example, you could make all the elements with the class `text-primary` shake by adding the following to your document ready function:

`$(".text-primary").addClass("animated shake");`

- [x] Use the jQuery `addClass()` function to give the classes animated and shake to all your elements with the class `well`.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Target Elements by ID Using jQuery 
You can also target elements by their `id` attributes.

First target your button element with the id `target3` by using the `$("#target3")` selector.

Note that, just like with CSS declarations, you type a `#` before the `id`'s name.

Then use jQuery's `.addClass()` function to add the classes animated and fadeOut.

Here's how you'd make the button element with the id target6 fade out:

`$("#target6").addClass("animated fadeOut").`

- [x] Select the button element with the `id` of `target3` and use the jQuery `addClass()` function to give it the class of `animated`.
- [x] Target the element with the `id target3` and use the jQuery `addClass()` function to give it the class `fadeOut`.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
$("#target3").addClass("animated fadeOut");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Delete your jQuery Functions 
These animations were cool at first, but now they're getting kind of distracting.

Delete all three of these jQuery functions from your document ready function, but leave your document ready function itself intact.

- [x] Delete all three of your jQuery functions from your document ready function.
- [x] Leave your script element intact.
- [x] Leave your `$(document).ready(function() {` to the beginning of your script element.
- [x] Leave your `"document ready function"` closing `})` intact.
- [x] Leave your script element closing tag intact.

```
<script>
  $(document).ready(function() {
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Target the same element with multiple jQuery Selectors 
Now you know three ways of targeting elements: by type: `$("button")`, by class: `$(".btn")`, and by id `$("#target1")`.

Although it is possible to add multiple classes in a single `.addClass()` call, let's add them to the same element in three separate ways.

Using `.addClass()`, add only one class at a time to the same element, three different ways:

Add the animated class to all elements with `type button`.

Add the shake class to all the buttons with `class .btn`.

Add the btn-primary class to the button with `id #target1`.

Note
You should only be targeting one element and adding only one class at a time. Altogether, your three individual selectors will end up adding the three classes shake, animated, and btn-primary to #target1.

- [x] Use the `$("button")` selector.
- [x] Use the `$(".btn")` selector.
- [x] Use the `$("#target1")` selector.
- [x] Only add one class with each of your three selectors.
- [x] Your #target1 element should have the classes `animated`‚ shake and `btn-primary`.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
  $("button").addClass("animated");
  $(".btn").addClass("shake");
  $("#target1").addClass("btn-primary");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Remove Classes from an element with jQuery 
In the same way you can add classes to an element with jQuery's `addClass()` function, you can remove them with jQuery's `removeClass()` function.

Here's how you would do this for a specific button:

`$("#target2").removeClass("btn-default");`

Let's remove the `btn-default` class from all of our button elements.

- [x] Remove the `btn-default` class from all of your button elements.
- [x] Only use jQuery to remove this class from the element.
- [x] Only remove the `btn-default` class.

```
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Change the CSS of an Element Using jQuery 
We can also change the CSS of an HTML element directly with jQuery.

jQuery has a function called `.css()` that allows you to change the CSS of an element.

Here's how we would change its color to blue:

`$("#target1").css("color", "blue");`

This is slightly different from a normal CSS declaration, because the CSS property and its value are in quotes, and separated with a comma instead of a colon.

Delete your jQuery selectors, leaving an empty document ready function.

Select `target1` and change its color to `red`.

- [x] Your `target1` element should have red text.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Disable an Element Using jQuery 
You can also change the non-CSS properties of HTML elements with jQuery. For example, you can disable buttons.

When you disable a button, it will become grayed-out and can no longer be clicked.

jQuery has a function called `.prop()` that allows you to adjust the properties of elements.

Here's how you would disable all buttons:

`$("button").prop("disabled", true);`

Disable only the `target1` button.


- [x] Disable your `target1` button.
- [x] Do not disable any other buttons.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", "true");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Change Text Inside an Element Using jQuery 
Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

Here's how you would rewrite and emphasize the text of our heading:

`$("h3").html("<em>jQuery Playground</em>");`

jQuery also has a similar function called `.text()` that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.

Change the button with `id target4` by emphasizing its text.


- [x] Emphasize the text in your `target4` button by adding HTML tags.
- [x] Make sure the text is otherwise unchanged.
- [x] Do not alter any other text.
- [x] Make sure you are using `.html()` and not `.text()`.
- [x] Make sure to select button `id="target4"` with jQuery.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html("<em>#target4</em>");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Remove an Element Using jQuery 
Now let's remove an HTML element from your page using jQuery.

jQuery has a function called `.remove()` that will remove an HTML element entirely

Remove element target4 from the page by using the `.remove()` function.

- [x] Use jQuery to remove your `target4` element from your page.
- [x] Only use jQuery to remove this element.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Use appendTo to Move Elements with jQuery 
Now let's try moving elements from one div to another.

jQuery has a function called `appendTo()` that allows you to select HTML elements and append them to another element.

For example, if we wanted to move `target4` from our right well to our left well, we would use:

`$("#target4").appendTo("#left-well");`

Move your `target2` element from your `left-well` to your `right-well`.


- [x] Your `target2` element should not be inside your `left-well`.
- [x] Your `target2` element should be inside your `right-well`.
- [x] Only use jQuery to move these elements.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
$("#target2").appendTo("#right-well");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Clone an Element Using jQuery 
In addition to moving elements, you can also copy them from one place to another.

jQuery has a function called `clone()` that makes a copy of an element.

For example, if we wanted to copy `target2` from our `left-well` to our `right-well`, we would use:

`$("#target2").clone().appendTo("#right-well");`

Did you notice this involves sticking two jQuery functions together? This is called function chaining and it's a convenient way to get things done with jQuery.

Clone your `target5` element and append it to your `left-well`.

- [x] Your `target5` element should be inside your `right-well`.
- [x] A copy of your `target5` element should also be inside your `left-well`.
- [x] Only use jQuery to move these elements.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
$("#target5").clone().appendTo("#left-well");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Target the Parent of an Element Using jQuery 
Every HTML element has a parent element from which it inherits properties.

For example, your jQuery Playground h3 element has the parent element of `<div class="container-fluid">`, which itself has the parent body.

jQuery has a function called `parent()` that allows you to access the parent of whichever element you've selected.

Here's an example of how you would use the `parent()` function if you wanted to give the parent element of the `left-well` element a background color of blue:

`$("#left-well").parent().css("background-color", "blue")`

Give the parent of the `#target1` element a `background-color` of `red`.

- [x] Your `left-well` element should have a red background.
- [x] You should use the `.parent()` function to modify this element.
- [x] The `.parent()` method should be called on the `#target1` element.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
$("#target1").parent().css("background-color","red");
  });
</script>
<!-- Only change code above this line. -->
<body>
  <div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
      <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
          <button class="btn btn-default target" id="target1">#target1</button>
          <button class="btn btn-default target" id="target2">#target2</button>
          <button class="btn btn-default target" id="target3">#target3</button>
        </div>
      </div>
      <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
          <button class="btn btn-default target" id="target4">#target4</button>
          <button class="btn btn-default target" id="target5">#target5</button>
          <button class="btn btn-default target" id="target6">#target6</button>
        </div>
      </div>
    </div>
  </div>
</body>
```


## Target the Children of an Element Using jQuery 
Many HTML elements have children which inherit their properties from their parent HTML elements.

For example, every HTML element is a child of your body element, and your "jQuery Playground" h3 element is a child of your `<div class="container-fluid"> `element.

jQuery has a function called `children()` that allows you to access the children of whichever element you've selected.

Here's an example of how you would use the `children()` function to give the children of your `left-well` element the color of blue:

`$("#left-well").children().css("color", "blue")`

Give all the children of your `#right-well` element a color of orange.

- [x] All children of `#right-well` should have orange text.
- [x] You should use the `children()` function to modify these elements.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
$("#right-well").children().css("color","orange");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Target a Specific Child of an Element Using jQuery 
You've seen why `id` attributes are so convenient for targeting with jQuery selectors. But you won't always have such neat ids to work with.

Fortunately, jQuery has some other tricks for targeting the right elements.

jQuery uses CSS Selectors to target elements. `target:nth-child(n)` css selector allows you to select all the `nth` elements with the `target` class or element type.

Here's how you would give the third element in each well the bounce class:

`$(".target:nth-child(3)").addClass("animated bounce");`

Make the second child in each of your well elements bounce. You must target the children of element with the `target` class.

- [x] The second element in your `target` elements should bounce.
- [x] You should use the `:nth-child()` function to modify these elements.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
$(".target:nth-child(2)").addClass("animated bounce");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Target Even Numbered Elements Using jQuery 
You can also target all the even-numbered elements.

Here's how you would target all the odd-numbered elements with class target and give them classes:

`$(".target:odd").addClass("animated shake");`

Note that jQuery is zero-indexed, meaning that, counter-intuitively, `:odd` selects the second element, fourth element, and so on.

Try selecting all the even-numbered elements and giving them the classes of `animated` and `shake`.

- [x] All the target elements that computer considers even should shake.
- [x] You should use the `:even` function to modify these elements.
- [x] Only use jQuery to add these classes to the element.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
$(".target:even").addClass("animated shake");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```


## Use jQuery to Modify the Entire Page 
We're done playing with our jQuery playground. Let's tear it down!

jQuery can target the body element as well.

Here's how we would make the entire body fade out: `$("body").addClass("animated fadeOut");`

But let's do something more dramatic. Add the classes `animated` and `hinge` to your body element.

- [x] Add the classes `animated` and `hinge` to your body element.

```
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
$("body").addClass("animated hinge");
  });
</script>
<!-- Only change code above this line. -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```