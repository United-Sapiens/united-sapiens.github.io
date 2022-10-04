(function ($) {
    ("use strict");

    const RAW_DATA = "https://raw.githubusercontent.com/United-Sapiens/United-Sapiens.github.io/main";
    const URL_REPO = "https://api.github.com/repos/United-Sapiens/United-Sapiens.github.io/git/trees/main";
    const DIR_SLDS = "slides";
    const DIR_TNLS = "translations";
    const INTERVAL = 10000;  // 10 seconds is enough to read the entire clamor.

    // --- ACCESS GITHUB REPO CONTENT -------------------------------

    /**
     * Call API of GitHub to get the content of repository.
     *
     * @param urlRepo  The url of the api call, regarding repository content.
     */
    async function getRepoContent(urlRepo) {
        const response = await $.ajax({
            url: urlRepo,
            type: "GET",
            dataType: "json",
            cache: false
        });

        return response;
    }

    /**
     * Call API of GitHub to get the content of file.
     *
     * @param uriFile  The url of the api call, regarding file content.
     */
    async function getFileContent(uriFile) {
        const response = await $.ajax({
            url: uriFile,
            type: "GET",
            dataType: "html",
            cache: false
        });

        return response;
    }

    // --- ADD NEW SLIDE IN CAROUSEL --------------------------------

    /**
     * Creates new 'carousel-item' element DIV to contain added slide.
     *
     * @param itemName     Filename, and also the className for formatting colors.
     * @param itemContent  HTML content of the file, referring to the new slide.
     */
    function newCarouselItem(itemName, itemContent) {
        let html = `
            <div class="carousel-item ${itemName}" data-bs-interval="${INTERVAL}">
                ${itemContent}
            </div>
        `;
        //console.table("New DIV for 'CAROUSEL-ITEM' created:\n", html);

        return html;
    }

    /**
     * Parse object with properties of slide to be appended to 'carousel-item'.
     *
     * @param itemSlide  Object with informations regarding slide (HTML content).
     */
    async function addSlide(itemSlide) {
        // Check if itemSlide is a valid HTM file:
        let fileName = itemSlide.path;
        let fileSplit = fileName.split(".");
        if (!Array.isArray(fileSplit) || fileSplit.length !== 2 || fileSplit[1].toLowerCase() !== "htm") return;

        // Get the path of the file in the repo:
        let itemName = fileSplit[0];
        let fileUri = RAW_DATA + "/" + DIR_SLDS + "/" + fileName;

        // Download the content (HTML) of the slide.
        //console.log("File with slide to be appended:", fileName);
        let contentFile = await getFileContent(fileUri);
        //console.log("Content of", fileName, "downloaded:\n", contentFile);
        if (typeof contentFile !== "string" || contentFile === null) return;

        // Add a new item of carousel with the slide content.
        $(".carousel-inner").append(newCarouselItem(itemName, contentFile));
    }

    /**
     * Get all the files (HTML) inside the 'slides' folder of the repository
     * and set content in homepage.
     *
     * @param treeRepo  The content tree of repository.
     */
    async function setSlidesFromRepo(treeRepo) {
        // Check what is the URL of the 'slides' folder:
        let slides = treeRepo.filter((obj) => {
            return obj.path === DIR_SLDS;
        });
        //console.table("slides:", slides);
        if (!Array.isArray(slides) || !slides.length) return;

        // Get the content of the 'slides' folder to download:
        let urlSlides = slides[0].url;
        //console.log("urlSlides:", urlSlides);
        let contentSlides = await getRepoContent(urlSlides);
        //console.table("contentSlides:", contentSlides);
        if (typeof contentSlides !== "object" || contentSlides === null) return;

        // Download each HTML file, for each slide:
        contentSlides.tree.forEach(addSlide);
    }

    // --- ADD NEW TRANSLATION IN MODAL -----------------------------

    /**
     * Creates new 'nav-item' element DIV to contain added translation option.
     *
     * @param itemName  Filename, aka the language and country codes.
     */
    function newDropdownItem(itemName) {
        let codes = itemName.split("-");
        //console.table("codes:\n", codes);
        let language = window.getLanguageNativeName(codes[0].toLowerCase());
        let country = codes.length > 1 ? `(${codes[1].toUpperCase()})` : "";
        //console.log("language:", language, " - country:", country);

        let html = `
            <li><hr class="dropdown-divider" /></li>
            <li class="nav-item">
                <a href="#${itemName}" class="nav-link dropdown-item" role="tab" data-bs-toggle="tab">${language} ${country}</a>
            </li>
        `;
        //console.table("New DIV for 'DROPDOWN-MENU' created:\n", html);

        return html;
    }

    /**
     * Creates new 'tab-content' element DIV to contain added translation version.
     *
     * @param itemName     Filename, aka the language and country codes.
     * @param itemContent  HTML content of the file, referring to the new translation.
     */
    function newTabContent(itemName, itemContent) {
        let html = `
            <div id="${itemName}" class="tab-pane fade">
                ${itemContent}
            </div>
        `;
        //console.table("New DIV for 'TAB-CONTENT' created:\n", html);

        return html;
    }

    /**
     * Parse object with properties of translation to be appended to the modal.
     *
     * @param itemTranslation  Object with informations regarding translation (HTML content).
     */
    async function addTranslation(itemTranslation) {
        let fileName = itemTranslation.path;
        let fileUri = RAW_DATA + "/" + DIR_TNLS + "/" + fileName;
        let itemName = itemTranslation.path.split(".")[0];

        // Add a new item of dropdown-menu with the language/country names.
        $(".dropdown-menu").append(newDropdownItem(itemName));

        // Download the content (HTML) of the translation.
        //console.log("File with translation to be appended:", fileName);
        let contentFile = await getFileContent(fileUri);
        //console.log("Content of", fileName, "downloaded:\n", contentFile);
        if (typeof contentFile !== "string" || contentFile === null) return;

        // Add a new item of tab-content with the translation content.
        $(".tab-content").append(newTabContent(itemName, contentFile));
    }

    /**
     * Get all the files (HTML) inside the 'translations' folder of the repository
     * and set content in homepage.
     *
     * @param treeRepo  The content tree of repository.
     */
    async function setTranslationsFromRepo(treeRepo) {
        // Check what is the URL of the 'translations' folder:
        let translations = treeRepo.filter((obj) => {
            return obj.path === DIR_TNLS;
        });
        //console.table("translations:", translations);
        if (!Array.isArray(translations) || !translations.length) return;

        // Get the content of the 'translations' folder to download:
        let urlTranslations = translations[0].url;
        //console.log("urlTranslations:", urlTranslations);
        let contentTranslations = await getRepoContent(urlTranslations);
        //console.table("contentTranslations:", contentTranslations);
        if (typeof contentTranslations !== "object" || contentTranslations === null) return;

        // Download each HTML file, for each translation:
        contentTranslations.tree.forEach(addTranslation);
    }

    // --- MAIN ENTRY POINT -----------------------------------------

    /**
     * Get the content of the repo and set slides and transtions in homepage.
     *
     * @param urlRepo  The url of the api call, regarding repository content.
     */
    async function main(urlRepo) {
        // Get the repo content using GitHub API:
        let contentRepo = await getRepoContent(urlRepo);
        //console.table("contentRepo:", contentRepo);
        if (typeof contentRepo !== "object" || contentRepo === null) return;

        // Download slide files and append a new carousel-item for each file:
        setSlidesFromRepo(contentRepo.tree);

        // Download translation files and append a new tab-content for each file:
        setTranslationsFromRepo(contentRepo.tree);
    }

    // Download contents and append to the homepage:
    main(URL_REPO);

    // Show toast with the carousel navigation instructions:
    const navigationToast = document.getElementById("navigationToast");
    const nvToast = new bootstrap.Toast(navigationToast);
    nvToast.show();

})(jQuery);
