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


Add the CSS property flex-direction to the #box-container element, and give it a value of row-reverse.

The `#box-container` element should have a `flex-direction` property set to `row-reverse`.

```

```


## Apply the flex-direction Property to Create Rows in the Tweet Embed


```

```


## Use the flex-direction Property to Make a Column


```

```


## Apply the flex-direction Property to Create a Column in the Tweet Embed


```

```


## Align Elements Using the justify-content Property


```

```


## Use the justify-content Property in the Tweet Embed


```

```


## Align Elements Using the align-items Property


```

```


## Use the align-items Property in the Tweet Embed


```

```


## Use the flex-wrap Property to Wrap a Row or Column


```

```


## Use the flex-shrink Property to Shrink Items


```

```


## Use the flex-grow Property to Expand Items


```

```


## Use the flex-basis Property to Set the Initial Size of an Item


```

```


## Use the flex Shorthand Property


```

```


## Use the order Property to Rearrange Items


```

```


## Use the align-self Property


```

```

