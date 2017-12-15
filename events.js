
// Output target is the output-target element.
let outputTarget = document.getElementById("output-target");
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
let sections = document.getElementsByClassName("article-section");
console.log(sections);

let addMessageWhenClicked = () => outputTarget.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
// function addMessageWhenClicked (){
//    outputTarget.innerHTML = `You clicked on the ${event.target.innerHTML} section`
// }
for (let i=0; i<sections.length; i++){
    sections[i].addEventListener("click", addMessageWhenClicked)
}
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
let h1tag = document.getElementById("page-title");
h1tag.addEventListener("mouseover" ,function(){
    outputTarget.innerHTML = `You moved your mouse over the header`;
});
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1tag.addEventListener("mouseout", function(){
    outputTarget.innerHTML = `You left me!!`
});
// When you type characters into the input field, the output element should mirror the text in the input field.

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.


