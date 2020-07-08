(async function () {
    for (const el of document.querySelectorAll("div.link")) {
        el.addEventListener("click", (e) => {
            const target_el = e.path.find(
                (it) => it.nodeName === "DIV" && it.classList.contains("link")
            );
            if (!target_el) return;
            const target = target_el.dataset.target;
            window.location.replace(target);
        });
    }
})();
