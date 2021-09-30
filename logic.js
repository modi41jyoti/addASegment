var displayTableData = [{ name: 'test', icon: 1, color: "red" }, { name: 'table1', icon: 2, color: "blue" }, { name: 'table2', icon: 3, color: "pink" }]

// const displayListItem = () => {
//     var tableItem = document.getElementById("displayTableData")
//     console.log(tableItem)
//     displayTableData.map((item) => {
//         return (tableItem.style.border = `1px solid ${item.color}`,
//             tableItem.innerHTML = item.icon
//         );
//     })
// }

// displayListItem()

const addASegmentClicked = () => {
    var x = document.getElementById("segmentClick")
    var windowBlur = document.getElementById("bodyWrapper")
    x.style.display = "block";
    windowBlur.style.filter = "blur(5px)";
}

const closeDialogBox = () => {
    var x = document.getElementById("segmentClick")
    var windowBlur = document.getElementById("bodyWrapper")
    x.style.display = "none";
    windowBlur.style.filter = "blur(0px)";
}

window.onclick = function (event) {
    var x = document.getElementById("segmentClick")
    if (event.target == x) {
        x.style.display = "none";
    }
}

const addATableClicked = () => {
    var x = document.getElementById("tableClick")
    var windowBlur = document.getElementById("bodyWrapper")
    x.style.display = "block";
    windowBlur.style.filter = "blur(5px)";

}

const closeTableDialogBox = () => {
    var x = document.getElementById("tableClick")
    var windowBlur = document.getElementById("bodyWrapper")
    x.style.display = "none";
    windowBlur.style.filter = "blur(0px)";

}

const saveTableData = () => {

    const name = document.getElementById('name');
    const icon = document.getElementById('icons');
    const color = document.getElementById('color');
    var data = {
        name: `${name.value}`,
        icon: `${icon.value}`,
        color: `${color.value}`
    }
    displayTableData.push(data)

}