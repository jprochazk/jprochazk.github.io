(async function () {
    const root = document.querySelector(":root");

    const properties = [
        "--color-background",
        "--color-error",
        "--color-error-background",
        "--color-literal",
        "--color-name",
        "--color-operator",
        "--color-operator-word",
        "--color-other",
        "--color-punctuation",
        "--color-comment",
        "--color-comment-multiline",
        "--color-comment-preproc",
        "--color-comment-single",
        "--color-comment-special",
        "--color-comment-special-background",
        "--color-generic",
        "--color-generic-deleted",
        "--color-generic-emph",
        "--color-generic-error",
        "--color-generic-heading",
        "--color-generic-inserted",
        "--color-generic-inserted-border",
        "--color-generic-output",
        "--color-generic-prompt",
        "--color-generic-strong",
        "--color-generic-subheading",
        "--color-generic-traceback",
        "--color-keyword",
        "--color-keyword-constant",
        "--color-keyword-declaration",
        "--color-keyword-namespace",
        "--color-keyword-pseudo",
        "--color-keyword-reserved",
        "--color-keyword-type",
        "--color-name-attribute",
        "--color-name-builtin",
        "--color-name-builtin-pseudo",
        "--color-name-class",
        "--color-name-constant",
        "--color-name-decorator",
        "--color-name-entity",
        "--color-name-exceptio",
        "--color-name-function",
        "--color-name-label",
        "--color-name-namespace",
        "--color-name-other",
        "--color-name-property",
        "--color-name-tag",
        "--color-name-variable",
        "--color-name-variable-class",
        "--color-name-variable-global",
        "--color-name-variable-instance",
        "--color-text-whitespace",
        "--color-literal-date",
        "--color-literal-number",
        "--color-literal-string",
        "--color-literal-number-floatr",
        "--color-literal-number-hex",
        "--color-literal-number-integer",
        "--color-literal-number-oct",
        "--color-literal-number-integer-long",
        "--color-literal-string-backtick",
        "--color-literal-string-charcolor-",
        "--color-literal-string-doc-color-d",
        "--color-literal-string-doubleolo",
        "--color-literal-string-escapecolo",
        "--color-literal-string-heredoc",
        "--color-literal-string-interpol",
        "--color-literal-string-other",
        "--color-literal-string-regex",
        "--color-literal-string-single",
        "--color-literal-string-symbol",
        "--color-primary",
        "--color-text",
        "--color-link",
        "--color-footer-bg",
        "--color-footer-text",
        "--color-box-shadow",
    ];

    if (window.localStorage) {
        const persist = (value) => {
            value = value === "light" ? "light" : "dark";
            localStorage.setItem("colorscheme", JSON.stringify({ value }));
        };
        const set = (value) => {
            value = value === "light" ? "light" : "dark";
            let styles = getComputedStyle(root);
            for (const property of properties) {
                const specific = property.replace(
                    "--color",
                    `--color-${value}`
                );
                const pvalue = styles.getPropertyValue(specific);
                const ppriority = styles.getPropertyPriority(specific);
                //console.log(property, pvalue, ppriority);
                root.style.setProperty(property, pvalue, ppriority);
            }
            persist(value);
        };

        const mode_json =
            localStorage.getItem("colorscheme") ||
            JSON.stringify({ value: "dark" });
        const mode = JSON.parse(mode_json);

        if (mode.value === "light") {
            for (const icon of document.querySelectorAll(`a.dark-icon`)) {
                icon.style.display = "inherit";
            }
            for (const icon of document.querySelectorAll(`a.light-icon`)) {
                icon.style.display = "none";
            }
            set("light");
        } else {
            for (const icon of document.querySelectorAll(`a.dark-icon`)) {
                icon.style.display = "none";
            }
            for (const icon of document.querySelectorAll(`a.light-icon`)) {
                icon.style.display = "inherit";
            }
            set("dark");
        }

        const lbutton = document.querySelector(`a.light-button`);
        lbutton.addEventListener("click", () => {
            for (const icon of document.querySelectorAll(`a.dark-icon`)) {
                icon.style.display = "inherit";
            }
            for (const icon of document.querySelectorAll(`a.light-icon`)) {
                icon.style.display = "none";
            }
            set("light");
        });
        const dbutton = document.querySelector(`a.dark-button`);
        dbutton.addEventListener("click", () => {
            for (const icon of document.querySelectorAll(`a.dark-icon`)) {
                icon.style.display = "none";
            }
            for (const icon of document.querySelectorAll(`a.light-icon`)) {
                icon.style.display = "inherit";
            }
            set("dark");
        });
    }
})();
