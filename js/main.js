function openPixiv() {
    let pid = document.getElementById('input-pid').value;
    if (pid == "") {
        console.log("Pid is empty!")
        return;
    }
    let url = "https://www.pixiv.net/artworks/" + pid;
    window.open(url);
}