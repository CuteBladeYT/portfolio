window.addEventListener("hashchange", (e) => {
    update_iframe_url(e.newURL.split("#")[1]);
});
document.addEventListener("DOMContentLoaded", (e) => {
    update_iframe_url(window.location.href.split("#")[1]);
});

function update_iframe_url(subsite = "") {
    if (subsite == "") {
        document.title = `UnitedCatdom`;
        subsite = "index";
    } else {
        document.title = `UnitedCatdom - ${subsite.toUpperCase()}`;
    }

    let iframe = document.body.querySelector("div#content > iframe#subsite");
    iframe.src = `./assets/subsites/${subsite}.html`;
}