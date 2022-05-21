import overrides from "./overrides.json";

function overrideSearch(formId, textId) {
    console.log('hola');
    let form = document.getElementById(formId);
    let field = document.getElementById(textId);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let keys = Object.keys(overrides);
        for (var i = 0, length = keys.length; i < length; i++) {
            let key = keys[i];
            if (field.value === key) {  // if
              return window.location.assign(json[key]);  // then
            }
          }
    });
}
export default overrideSearch('tsf','search-field');