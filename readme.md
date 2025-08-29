
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Sir, I think getElementById is for selecting just one element because ID is always unique.
If I use getElementsByClassName, it gives me a list of elements with that class.
But querySelector is more flexible… I can use CSS selectors like #id, .class. It only gives the first one.
And querySelectorAll gives all the matching elements.

2. How do you create and insert a new element into the DOM?
First I create it with document.createElement. Then I can add text or attribute. After that, I use appendChild to add it inside the page.
Like this:

let div = document.createElement("div");
div.textContent = "Hello Pritivi";
document.body.appendChild(div);


3. What is Event Bubbling and how does it work?

bubbling means when I click a child element, the event doesn’t stop there. It goes up to the parent, then to the parent’s parent, like a bubble going up.

4. What is Event Delegation in JavaScript? Why is it useful?

Instead of putting click events on every child, we put one event on the parent and then check which child was clicked.
It’s useful because it saves time, and also works if new elements are added later.

5. Difference between preventDefault() and stopPropagation()?

preventDefault() stops the browser’s normal action, like link not opening or form not submitting. we did it in the class also.
stopPropagation() stops the event from going up to the parent.