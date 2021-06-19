/**In Javascript, DOM is the object oriented view of a webpage(in tree form).
 * We can do the following things with DOM :-
 * 1. Change/ Remove html elemets
 * 2. Change & add CSS styles to elements
 * 3. Read & change element attributes (href, src, alt, custom)
 * 4. Create new HTML elements and insert into the DOM/the page
 * 5. Attach event listeners to elements (click, keypress, submit)
 */

// document is the whole html page
// node is the generic name for any object, any element is a node

// 1. Adding elements

const body_doc = document.body
body_doc.append("Hello World", "Bye") // appendChild won't work here as, appendChild takes nodes as argument whereas append takes all

// 2. Creating elements

//const body_doc = document.body (commented as written earlier)
const div_doc = document.createElement("div")
body_doc.append(div) //either we can also use appendchild as it's using node

//body_doc.appendChild(div) (like this)

// 3. Modifying Element Text

//const body_doc = document.body (commented as written earlier)
//const div_doc = document.createElement("div")
div_doc.innerText("Hello World")
div_doc.textContent("Hello World 2")
body_doc.append(div)

// 4. Modifying Element HTML

//const body_doc = document.body (commented as written earlier)
//const div_doc = document.createElement("div")

// 4.1 : innerText vs innerHTML
div_doc.innerText("<strong>innerText will print with the tag</strong>")
div_doc.innerHTML("<strong>innerHTML will print only texts between the tags</strong>")
// 4.2 : On elaboration of that innerHTML line(41), we can also write the following codes to do the same
const strong_doc = document.createElement("strong")
strong_doc.innerText = "innerHTML will print only texts between the tags"
div_doc.append(strong)
body_doc.append(div)

// 5. Query-Selector

//const body_doc = document.body
const div_doc1 = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// 6. Remove Element

spanBye.remove()
div_doc1.append(spanBye) // can add it back

// 7. Modifying Element Attributes

console.log(spanHi.getAttribute("id")) // will print the id in browser console
//either
console.log(spanHi.id)

// now for modifying attribute

console.log(spanHi.setAttribute('id','sdfsdfsf'))
//either
spanHi.id = 'sdfsdfsf'

//to remove attribute
spanHi.removeAttribute("id")

const spanData = document.querySelector("#hi_data")

// 8. Modifying Data Attributes

console.log(spanData.dataset) // return a DOMStringMap
console.log(spanData.dataset.test) //Returns value of data test
spanData.dataset.newData = "hi"

// 9. Modifying element classes

//add classes
spanHi.classList.add("new-class")
//remove classes
spanHi.classList.remove("new-class")
/*toggle classes (check presence, 
    if present, 
        removes it ---> return false
    else,
        add it ---> return true)
*/
spanHi.classList.toggle("new-class")

// 10. Modifying Element Style
spanHi.style.color = "red"
spanHi.style.backgroundColor = "Cyan"

