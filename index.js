var form = document.getElementById('add-todo')
var toDoList = document.getElementById('todo-list')

form.onsubmit = function (e) {
    //Prevent automatic form function
    e.preventDefault()
    //access form info
    var input = document.querySelector('input')
    //Prevent form submit when nothing or just spaces are entered
    if (!input.value == "" && !input.value.replace(/ /g, '') == '')  {
        //Add input value to ul list (nest li in button)
        var listItem = document.createElement("li")
        var nestButton = document.createElement('button')
        nestButton.innerHTML = input.value
        listItem.appendChild(nestButton)
        toDoList.appendChild(listItem);
        //reset form after user submits
        input.value = ""

        nestButton.onclick = function(item) {
            if (nestButton.style.textDecoration == "line-through") {
                // When clicked again, delete the item
                toDoList.removeChild(listItem)
            } else {
                //When clicked, mark item as done with strike text
                nestButton.style.textDecoration = "line-through"
            }
        }
    } else {
        input.value = ""
    }
}
