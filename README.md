# Assignment 2

A Pen created on CodePen.io. Original URL: [https://codepen.io/Hodan2024/pen/wvbgzWX](https://codepen.io/Hodan2024/pen/wvbgzWX).

Answers to the research questions: 

2.1)
unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
shift(): Removes the first element from an array and returns that removed element.
split(): Splits a string into an array of substrings using a specified separator string.


Example using CFGdegree streams

// Initial array of CFGdegree streams
let cfgStreams = ['Software engineering', 'Product Management', 'Data Science'];

// Using unshift() to add a new stream at the beginning
cfgStreams.unshift('FULL STACK');
console.log(cfgStreams); // Output: ['FULL STACK', 'Software engineering', 'Product Management', 'Data Science'];

// Using shift() to remove the first stream
let removedStream = cfgStreams.shift();
console.log(cfgStreams); // Output: ['Software engineering', 'Product Management', 'Data Science'];
console.log(removedStream); // Output: 'Full stack'

// Using split() to convert a string of streams into an array
let streamsString = ['Software engineering, Product Management, Data Science'];
let streamsArray = streamsString.split(',');
console.log(streamsArray); // Output: ['Software engineering', 'Product Managemen', 'Data Science']



2.2)
Object Methods = Functions that are properties of an object. These functions can perform operations on the object’s properties or perform other tasks related to the object.


// Creating an object representing different programming languages
let programmingLanguages = {
    languages: ['JavaScript', 'Python', 'Java'],
    addLanguage: function(language) {
        this.languages.push(language);
        console.log(`${language} has been added.`);
    },
    removeLanguage: function() {
        let removed = this.languages.pop();
        console.log(`${removed} has been removed.`);
    },
    listLanguages: function() {
        console.log('Programming Languages:', this.languages.join(', '));
    }
};

// Using the object methods
programmingLanguages.addLanguage('C++'); // Output: 'C++ has been added.'
programmingLanguages.removeLanguage(); // Output: 'C++ has been removed.'
programmingLanguages.listLanguages(); // Output: 'Programming Languages: JavaScript, Python, Java'



2.3)
The onmouseover event occurs when the mouse pointer is moved onto an element. It is often used to change the appearance of an element when it is hovered over.

The onclick event occurs when the user clicks on an element. It is commonly used to trigger actions like submitting a form, opening a link, or toggling visibility of an element.

The onchange event occurs when the value of an input element, such as a text field or select box, is changed. This event is useful for dynamically updating content based on user input.
