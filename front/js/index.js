main();
function main() {
	affichageFeed();
}
function affichageFeed() {
	var feed = document.getElementById("feed");
	feed.innerHTML += `
        <a class="test" href="###">
            <p>Nom du test</p>
            <img src="../img/wallah.jpg" alt="crois moi">
        </a>
    `;
}
