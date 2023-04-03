# Welcome to React Udemy Complete Guide 
=======================================

# WHAT IS REACT?
=>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
=> Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.
=>React makes  building complex interactive and reacive user interfaces simpler.
=>Mobile Application can be done using react.

# Why React is used instead of JAVASCRIPT?
=>It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.

# How to create React application?
=>npx create-react-app your-app-name
=>npm install
=>npm start to run the application
=>The application will run in localhost:3000

# Basics and Fundamentals of react
==================================

# React is all about "Components".

# What is a Component?
Because all user interfaces in the end are made up of components.
React allows you to build these re-usable and reactive components consisting of HTML and JavaScript
A component in a react is just a javascript funcrion.
Component name should be starts with caps (Eg:ExpenseItem.js)

# Introducing to JSX?
=>Javascript xml => xml or html code runs inside javascript file.
=>JSX allows us to write HTML elements in JavaScript and place them in the DOM.
=>You are not required to use JSX, but JSX makes it easier to write React applications.

# In normal or regular javascript we should write
Its is a imperative approach.
Because you are giving clear instructions,clear step-by-step instructions,
what JavaScript and the browser should be doing.
const para = document.createElement('p');
para.textContent = 'This is also visible';
document.getElementById('root').append(para);

# How to create a custom components?
Follow these steps.
1.You create a Component, which is in the end, just a function of returning some HTML code, you then export it.
2.And then ultimately you import it in the file
3.where you wanna use it so that they're in the JSX code,
4.you can use it like an HTML element inside the function

# How to add or run css in jsx?
The only reason it uses className instead of class is because class is a reserved keyword in JavaScript and since React uses JSX, which is a JavaScript extension, we must use className rather than class attribute.
Import css file in the component.

# Outputting Dynamic Data & Working with Expressions in JSX?
Its typically data binding like we used in angular like this {{someData}} string interpolation
But in react jsx uses single curly brace to output dynamic data 
const name = "Arun";
{name} => it will display the name as Arun.

# Working with props?
We can use data from one component to another using props.
Each component will have one parameters we can use.
Like we did in the App.js file.

# What are props children properties?
Image result for children props in react
The { props. children } property allows you to create a generic template component that can be modified by the parent when it is invoked. This means that a parent component can pass whatever is needed in the child component, even generated layout features that can then be rendered by the child.

Click event listener in react?
In order to react to <button> clicks, the onClick={functionName} prop should be added to the <button> element.

# Working with state in react?
This is a function provided by the React library
and this function allows us to define values
as state where changes to these values should reflect
in the component function being called again.

import React,{useState} from react library.
In order to change values & re-render the UI upon such changes, you must use "state" - a core React concept. In functional components, state can be registered via the useState() Hook. This Hook returns an array with exactly (!) two elements:
1.The current state value
2.A function that should be called to update the state value.

If you have data, which might change,
and where changes to that data should be reflected
on the user interface
then you need state
because a regular variables will not do the trick
with state, however you can set and change values in current component.
%State really is separated on a per component instance basis.
We can use multiple state in the components.

# Key prop?
it's a built in HTML element, you can always add this.
And if you do add it, if you add the key
to your component or HTML element,
then you can help React identify the individual items.
Eg(id)
key={obj.id}

# React Conditional Content?
In React we can also declare html elements in a variable too.
For using control structures in React we can use state and onClick methods.
Ternary operators are also acceptable inside Jsx code
In seperate variable we can use if and else statement mentioning our html elemments in it
and we can output in Jsx code as well.

# style attribute-style attribute
works a little bit differently
when building a react application.
The value is set here should be dynamic



