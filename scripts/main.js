function lightMode(){
    document.getElementById("page").style = "background-color: lightyellow; color: #03071e;"
    document.getElementById("main_title").style = "border: #03071e, solid, 6px;"
}

function darkMode(){
    document.getElementById("page").style = "background-color: #03071e; color: white;"
    document.getElementById("main_title").style = "border: #6a040f, solid, 6px;"
}

function defaultMode(){
    document.getElementById("page").attributeStyleMap.clear();
    document.getElementById("main_title").attributeStyleMap.clear();

}