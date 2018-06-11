# CSS Flexbox
-- Coded with 💗 by Stefanie Feltman

## Social Media
[FreeCodeCamp](https://www.freecodecamp.org/portfolio/stefaniedev) |
[GitHub](https://github.com/stefaniedev) |
[LinkedIn](https://www.linkedin.com/in/stefaniefeltman/) |
[Twitter](https://twitter.com/stefaniedev) |
[CodePen](https://codepen.io/stefaniedev/)


## Use display: flex to Position Two Boxes
This section uses alternating challenge styles to show how to use CSS to position elements in a flexible way. First, a challenge will explain theory, then a practical challenge using a simple tweet component will apply the flexbox concept.

Placing the CSS property `display: flex;` on an element allows you to use other flex properties to build a responsive page.


Add the CSS property `display` to `#box-container` and set its `value to flex`.

- [x] `#box-container` should have the `display` property set to a value of `flex`.

```
<style>
  #box-container {
    height: 500px;
    display: flex;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }
  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Add Flex Superpowers to the Tweet Embed
To the right is the tweet embed that will be used as the practical example. Some of the elements would look better with a different layout. The last challenge demonstrated `display: flex`. Here you'll add it to several components in the tweet embed to start adjusting their positioning.


Add the CSS property `display: flex` to all of the following items - note that the selectors are already set up in the CSS:

`header`, the header's `.profile-name`, the header's `.follow-btn`, the header's `h3` and `h4`, the `footer`, and the footer's `.stats`.

- [x] Your `header` should have a `display` property set to `flex`.
- [x] Your `footer` should have a `display` property set to `flex`.
- [x] Your `h3` should have a `display` property set to `flex`.
- [x] Your `h4` should have a `display` property set to `flex`.
- [x] Your `.profile-name` should have a `display` property set to `flex`.
- [x] Your `.follow-btn` should have a `display` property set to `flex`.
- [x] Your `.stats` should have a `display` property set to `flex`.

```
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
    display: flex;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```


## Use the flex-direction Property to Make a Row
Adding `display: flex` to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the `flex-direction` property to the parent item and setting it to `row` or `column`. Creating a row will align the children horizontally, and creating a column will align the children vertically.

Other options for `flex-direction` are `row-reverse` and `column-reverse`.

Note
The default value for the `flex-direction` property is `row`.


Add the CSS property `flex-direction` to the `#box-container` element, and give it a value of `row-reverse`.

- [x] The `#box-container` element should have a `flex-direction` property set to `row-reverse`.

```
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }
  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Apply the flex-direction Property to Create Rows in the Tweet Embed
The `header` and `footer` in the tweet embed example have child items that could be arranged as rows using the `flex-direction` property. This tells CSS to align the children horizontally.


Add the CSS property `flex-direction` to both the `header` and `footer` and set the value to `row`.

- [x] The `header` should have a `flex-direction` property set to `row`.
- [x] The `footer` should have a `flex-direction` property set to `row`.

```
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;
    flex-direction: row;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```


## Use the flex-direction Property to Make a Column
The last two challenges used the `flex-direction` property set to `row`. This property can also create a column by vertically stacking the children of a flex container.


Add the CSS property `flex-direction` to the `#box-container` element, and give it a value of `column`.

- [x] The `#box-container` element should have a `flex-direction` property set to `column`.

```
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: column;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }
  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Apply the flex-direction Property to Create a Column in the Tweet Embed
The tweet embed `header` and `footer` used the `flex-direction` property earlier with a `row` value. Similarly, the items inside the `.profile-name` element would work well stacked as a column.


Add the CSS property `flex-direction` to the header's `.profile-name` element and set the value to `column`.

The `.profile-name` element should have a `flex-direction` property set to `column`.

```
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```


## Align Elements Using the justify-content Property
Sometimes the flex items within a flex container do not fill all the space in the container. It is common to want to tell CSS how to align and space out the flex items a certain way. Fortunately, the `justify-content` property has several options to do this. But first, there is some important terminology to understand before reviewing those options.

Here is a useful image showing a row to illustrate the concepts below.

Recall that setting a flex container as a row places the flex items side-by-side from left-to-right. A flex container set as a column places the flex items in a vertical stack from top-to-bottom. For each, the direction the flex items are arranged is called the main axis. For a row, this is a horizontal line that cuts through each item. And for a column, the main axis is a vertical line through the items.

There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is `justify-content: center;`, which aligns all the flex items to the center inside the flex container. Others options include:

* `flex-start`: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container.
* `flex-end`: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.
* `space-between`: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the other items between them are spaced evenly.
* `space-around`: similar to `space-between` but the first and last items are not locked to the edges of the container, the space is distributed around all the items


An example helps show this property in action. Add the CSS property `justify-content` to the `#box-container` element, and give it a value of `center`.

Bonus
Try the other options for the `justify-content` property in the code editor to see their differences. But note that a value of `center` is the only one that will pass this challenge.

- [x] The `#box-container` element should have a `justify-content` property set to a value of `center`.

```
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }
  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Use the justify-content Property in the Tweet Embed
The last challenge showed an example of the `justify-content` property. For the tweet embed, this property can be applied to align the items in the `.profile-name` element.


Add the CSS property `justify-content` to the header's `.profile-name` element and set the value to any of the options from the last challenge.

- [x] The `.profile-name` element should have the `justify-content` property set to any of these values: `center`, `flex-start`, `flex-end`, `space-between`, or `space-around`.

```
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```


## Align Elements Using the align-items Property
The `align-items` property is similar to `justify-content`. Recall that the `justify-content` property aligned flex items along the main axis. For rows, the main axis is a horizontal line and for columns it is a vertical line.

Flex containers also have a cross axis which is the opposite of the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.

CSS offers the `align-items` property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.

The different values available for `align-items` include:

* `flex-start`: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.
* `flex-end`: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.
* `center`: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).
* `stretch`: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom.
* `baseline`: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.


An example helps show this property in action. Add the CSS property `align-items` to the `#box-container` element, and give it a value of `center`.

Bonus
Try the other options for the `align-items` property in the code editor to see their differences. But note that a value of `center` is the only one that will pass this challenge.

- [x] The `#box-container` element should have an `align-items` property set to a value of `center`.

```
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }
  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>
<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```


## Use the align-items Property in the Tweet Embed
The last challenge introduced the `align-items` property and gave an example. This property can be applied to a few tweet embed elements to align the flex items inside them.


Add the CSS property `align-items` to the header's `.follow-btn` element, the header's `h3`, and the header's `h4`. Set the value to `center`.

- [x] The `.follow-btn` element should have the `align-items` property set to a value of `center`.
- [x] The `h3` element should have the `align-items` property set to a value of `center`.
- [x] The `h4` element should have the `align-items` property set to a value of `center`.

```
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    align-items: center;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```


## Use the flex-wrap Property to Wrap a Row or Column
CSS flexbox has a feature to split a flex item into multiple rows (or columns). By default, a flex container will fit all flex items together. For example, a row will all be on one line.

However, using the `flex-wrap` property, it tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.

CSS also has options for the direction of the wrap:

* `nowrap`: this is the default setting, and does not wrap items.
* `wrap`: wraps items from left-to-right if they are in a row, or top-to-bottom if they are in a column.
* `wrap-reverse`: wraps items from right-to-left if they are in a row, or bottom-to-top if they are in a column.


The current layout has too many boxes for one row. Add the CSS property `flex-wrap` to the `#box-container` element, and give it a value of `wrap`.

- [x] The `#box-container` element should have the `flex-wrap` property set to a value of `wrap`.

```
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }
  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```


## Use the flex-shrink Property to Shrink Items
So far, all the properties in the challenges apply to the flex container (the parent of the flex items). However, there are several useful properties for the flex items.

The first is the `flex-shrink` property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

The `flex-shrink` property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a `flex-shrink` value of `1` and the other has a `flex-shrink` value of `3`, the one with the value of `3` will shrink three times as much as the other.


Add the CSS property `flex-shrink` to both `#box-1` and `#box-2`. Give `#box-1` a value of `1` and `#box-2` a value of `2`.

- [x] The `#box-1` element should have the `flex-shrink` property set to a value of `1`.
- [x] The `#box-2` element should have the `flex-shrink` property set to a value of `2`.

```
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }
  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Use the flex-grow Property to Expand Items
The opposite of `flex-shrink` is the `flex-grow` property. Recall that `flex-shrink` controls the size of the items when the container shrinks. The `flex-grow` property controls the size of items when the parent container expands.

Using a similar example from the last challenge, if one item has a `flex-grow` value of `1` and the other has a `flex-grow` value of `3`, the one with the value of `3` will grow three times as much as the other.


Add the CSS property `flex-grow` to both `#box-1` and `#box-2`. Give `#box-1` a value of `1` and `#box-2` a value of `2`.

- [x] The `#box-1` element should have the `flex-grow` property set to a value of `1`.
- [x] The `#box-2` element should have the `flex-grow` property set to a value of `2`.

```
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }
  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Use the flex-basis Property to Set the Initial Size of an Item
The `flex-basis` property specifies the initial size of the item before CSS makes adjustments with `flex-shrink` or `flex-grow`.

The units used by the `flex-basis` property are the same as other size properties (`px`, `em`, `%`, etc.). The value auto sizes items based on the content.


Set the initial size of the boxes using `flex-basis`. Add the CSS property `flex-basis` to both `#box-1` and `#box-2`. Give #box-1 a value of `10em` and `#box-2` a value of `20em`.

- [x] The `#box-1` element should have a `flex-basis` property.
- [x] The `#box-1` element should have a `flex-basis` value of `10em`.
- [x] The `#box-2` element should have the `flex-basis` property.
- [x] The `#box-2` element should have a `flex-basis` value of `20em`.

```
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-basis: 10em;
  }
  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Use the flex Shorthand Property
There is a shortcut available to set several flex properties at once. The `flex-grow`, `flex-shrink`, and `flex-basis` properties can all be set together by using the `flex` property.

For example, `flex: 1 0 10px;` will set the item to `flex-grow: 1;`, `flex-shrink: 0;`, and `flex-basis: 10px;`.

The default property settings are `flex: 0 1 auto;`.


Add the CSS property `flex` to both `#box-1` and `#box-2`. Give `#box-1` the values so its `flex-grow` is `2`, its `flex-shrink` is `2`, and its `flex-basis` is `150px`. Give `#box-2` the values so its `flex-grow` is `1`, its `flex-shrink` is `1`, and its `flex-basis` is `150px`.

These values will cause `#box-1` to grow to fill the extra space at twice the rate of `#box-2` when the container is greater than 300px and shrink at twice the rate of `#box-2` when the container is less than 300px. 300px is the combined size of the flex-basis values of the two boxes.

- [x] The `#box-1` element should have the `flex` property set to a value of `2 2 150px`.
- [x] The `#box-2` element should have the flex property set to a value of `1 1 150px`.
- [x] Your code should use the `flex` property for `#box-1` and `#box-2`.

```
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }
  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Use the order Property to Rearrange Items
The `order` property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.


Add the CSS property `order` to both `#box-1` and `#box-2`. Give `#box-1` a value of `2` and give `#box-2` a value of `1`.

- [x] The `#box-1` element should have the `order` property set to a value of `2`.
- [x] The `#box-2` element should have the `order` property set to a value of `1`.

```
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }
  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```


## Use the align-self Property
The final property for flex items is `align-self`. This property allows you to adjust each item's alignment individually, instead of setting them all at once. This is useful since other common adjustment techniques using the CSS properties `float`, `clear`, and `vertical-align` do not work on flex items.

`align-self` accepts the same values as `align-items` and will override any value set by the `align-items` property.


Add the CSS property `align-self` to both `#box-1` and `#box-2`. Give `#box-1` a value of `center` and give `#box-2` a value of `flex-end`.

- [x] The `#box-1` element should have the `align-self` property set to a value of `center`.
- [x] The `#box-2` element should have the `align-self` property set to a value of `flex-end`.

```
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    align-self: center;
    height: 200px;
    width: 200px;
  }
  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

