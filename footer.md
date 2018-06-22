Two major ways of getting the sticky footer:
a. The "wrapper-push" method
b. The "Flex" method

The "Wrapper-Push" Method:
1. This method is fast
2. ******Limitation: The height of footer must be known.

Example:
i. HTML structure

<!DOCTYPE html>
<html>
  <head>
    <title>The Sticky Footer Way</title>
    <link rel='stylesheet' href='style.css'>
  </head>
  <body>
    <main class='wrapper'>
      All contents apart from the footer's content should be placed here even the header
      <div class='push'></div>
    </main>
    <footer class='footer'>This is my Footer</footer>
  </body>
</html>

ii. CSS structure

html, body {
  height: 100%;
  margin: 0;
     /* Trivial style make the text large */
  font-size: 48px; 
}
.wrapper {
  min-height: 100%;
  
     /* This is the same as the height of the footer */
  margin-bottom: -100px; 
}
    /* The height of the footer and push must be the same */
.footer,
.push {
  height: 100px;
}
.footer {
    /* Trivial style to differentiate the footer */
  background-color: #a12444; 
}

a. height: 100% --> Property on html makes sure that the base height which all html elements will be relative to is 100% of the height 
   of the viewport.
b. height: 100% --> This is also specified on body so that it will take the height of the whole html.
c. min-height: 100% --> property on .wrapper makes the minimum height of the wrapper to be at least the height of the body (which is 
   also the height of the viewport) 
d. margin-bottom: -100px; --> accounts for getting the footer to overlap the wrapper at the bottom.
e. .push div --> accounts for the area that the footer will overlap on the wrapper.This is necessary so that the footer won’t overlap 
   some of the areas that need to be seen on the wrapper.

The "Flex" method:
1. Limitation - it requires browser prefix and sometimes have browser backward compatibility issues.
2. There are ways to handle this via npm modules. A good example is autoprefixer.

Example:
i. HTML structure

<!DOCTYPE html>
<html>
  <head>
    <title>The Sticky Footer Way</title>
    <link rel='stylesheet' href='style2.css'>
  </head>
  <body>
    <main>
      All contents apart from the footer's content should be placed here even the header.
    </main>
    <footer>This is my Footer</footer>
  </body>
</html>

ii. CSS structure

html, body {
  height: 100%;
  margin: 0;
/* Trivial style make the text large */
  font-size: 48px;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
main {
  flex: 1;
}
footer {
  /* Trivial style to differentiate the footer */
  background-color: #a12444;
}

a. In the html structure, the pusher div has been removed. Also, body now has some more styles.
b. display: flex; sets body display to flex.
c. flex-direction: column; sets the direction of the flex display as column i.e main axis of the display is along the vertical axis
d. justify-content: space-between; makes main and footer in this context to appear at the top and the bottom of body respectively.
e. flex: 1; This is the shorthand for flex-grow, flex-shrink and flex-basis. The second and third parameters (flex-shrink and flex-basis) 
   are optional. Setting the flex-grow property to 1 makes main to receive the specified proportion of the free space in the flex 
   container. main takes it’s own space before footer takes it’s own.

https://medium.com/@kayodeniyi/understanding-the-sticky-footer-trick-1e5686c232b6








