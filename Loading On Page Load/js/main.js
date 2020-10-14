window.addEventListener('load', () => {
    let loader = document.createElement('div');
    loader.setAttribute('class', "loader");
    console.log(loader);
    document.body.appendChild(loader);
    setTimeout(() => {
        document.body.removeChild(loader);
    }, 2000);
});







// REFERANCE 
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement



// PROBLEMS
// https://stackoverflow.com/questions/1115310/how-can-i-add-a-class-to-a-dom-element-in-javascript



