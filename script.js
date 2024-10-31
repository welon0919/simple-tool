let mainContainer = document.getElementById("main-container");
// nums that should be used
let valid_nums = [18, 4, 39, 2, 14, 30, 3, 35, 10, 8];

// grids that can be used
let valid_grids = []

// valid grid status
// key: grid_item_text, value: false(white), true(green)
let grid_status = {}
startUp()

function startUp() {
    mainContainer.innerHTML = "";
    for (let i = 1; i <= 42; i++) {
        let grid_item = document.createElement("div");
        grid_item.className = "grid-item";
        grid_item.textContent = i;
        grid_item.setAttribute('valid', valid_nums.includes(i) ? '1' : '0');
        if (valid_nums.includes(i)) {
            // set style for grids that are valid
            grid_item.style.backgroundColor = 'white';
            grid_item.style.cursor = 'pointer';
            // make a list of valid grids
            valid_grids.push(grid_item);
            grid_status[grid_item.textContent] = false;

        } else {
            // make unused greed backgroundColor gray
            grid_item.style.backgroundColor = '#8b8b8c';

        }
        // let the grids show up in the browser
        mainContainer.appendChild(grid_item)
    }
    // add event listner to grids
    valid_grids.forEach((element) => {
        element.addEventListener("click", () => {
            changeStatus(element);
        })
    })

}
function changeStatus(element) {
    // X console.log(element.textContent);
    let key = element.textContent;
    if (grid_status[key]) {
        // grid is on
        // X console.log("turn white");
        grid_status[key] = false;
        element.style.backgroundColor = "white";
        element.style.color = "black";

    } else {
        // grid is off
        // X console.log("turn green");
        grid_status[key] = true;

        element.style.backgroundColor = "green";
        element.style.color = "white";
    }

}
function log_status() {
    for (let key in grid_status) {
        if (grid_status.hasOwnProperty(key)) {
            console.log(`key:${key}, value:${grid_status[key]}`);
        }
    }
}
// * something
// ! error
// TODO todo