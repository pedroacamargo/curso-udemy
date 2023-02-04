function changeBg() {
    document.getElementById("input").className = "yellow"
}

function changeToDefault() {
    document.getElementById("input").className = ""
    const ipt = document.getElementById("input").value
    if (ipt.length < 3) {
        document.getElementById("input").style.backgroundColor = "red"
    } else {
        document.getElementById("input").style.backgroundColor = "green"
    }

}