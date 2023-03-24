# Welcome to React Udemy Complete Guide 
=======================================

WHAT IS REACT?
=>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
=> Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.
=>React makes  building complex interactive and reacive user interfaces simpler

Why React is used instead of JAVASCRIPT?
=>It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.

# Basics and Fundamentals of react
==================================
React is all about "Components".

What is a Component?
Because all user interfaces in the end are made up of components.
React allows you to build these re-usable and reactive components consisting of HTML and JavaScript
A component in a react is just a javascript funcrion.
Component name should be starts with caps (Eg:ExpenseItem.js)

Introducing to JSX?
=>Javascript xml => xml or html code runs inside javascript file.
=>JSX allows us to write HTML elements in JavaScript and place them in the DOM.
=>You are not required to use JSX, but JSX makes it easier to write React applications.

In normal or regular javascript we should write
Its is a imperative approach.
Because you are giving clear instructions,clear step-by-step instructions,
what JavaScript and the browser should be doing.
const para = document.createElement('p');
para.textContent = 'This is also visible';
document.getElementById('root').append(para);

How to create a custom components?
Follow these steps.
1.You create a Component, which is in the end, just a function of returning some HTML code, you then export it.
2.And then ultimately you import it in the file
3.where you wanna use it so that they're in the JSX code,
4.you can use it like an HTML element inside the function


