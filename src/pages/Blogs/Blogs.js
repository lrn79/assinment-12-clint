import React from 'react';
import './BLog.css'

const Blogs = () => {
    return (
        <div className='m-20'>
            <div>
                <h1 className='text-center text-4xl font-extrabold mb-10'><span className='text-5xl text-lime-500'>Q</span>na section</h1>
            </div>
            <div className=' mt-5  blog_container'>
                <h1 className='text-2xl font-semibold'>Question: How will you improve the performance of a React Application?</h1>
                <h4 className='mt-3 font-xl font-semibold'>Ans : First i have to optimized the quality of img For that Website Will be a optimized website
                    then we have to Memoizing React components to prevent unnecessary re-renders.Keeping component state local where necessary. and Windowing or list virtualization in React.
                    Lazy loading images in React.To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.
                </h4>
            </div>
            <div className=' mt-5  blog_container'>
                <h1 className='text-2xl font-semibold'>Question: What are the different ways to manage a state in a React application?</h1>
                <h4 className='mt-3 font-xl font-semibold'>Ans :React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.... There are  main types of state you need to properly manage in your React apps: <br />
                    <ul>
                        <li>1. Local state.</li>
                        <li>2.Global state.
                        </li>
                        <li>3.Server state.
                        </li>
                        <li>4.Hosting</li>
                        <li>5.URL state.
                        </li>
                    </ul>
                </h4>
            </div>
            <div className=' mt-5  blog_container'>
                <h1 className='text-2xl font-semibold'>Question:What is a unit test? Why should write unit tests?</h1>
                <h4 className='mt-3 font-xl font-semibold'>Ans :Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. </h4>
            </div>
            <div className=' mt-5  blog_container'>
                <h1 className='text-2xl font-semibold'>Question: How does prototypical inheritance work?</h1>
                <h4 className='mt-3 font-xl font-semibold'>Ans :Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. </h4>
            </div>
            <div className=' mt-5  blog_container'>
                <h1 className='text-2xl font-semibold'>Question: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <h4 className='mt-3 font-xl font-semibold'>Ans :If you need the index of the found element in the array, use findIndex() .
                    If you need to find the index of a value, use Array.prototype.indexOf() . ...
                    If you need to find if a value exists in an array, use Array.prototype.includes() . </h4>
            </div>
        </div>
    );
};

export default Blogs;