const log = console.log;
function switchTo(lang) {
    log(lang)
    const articleNodeList = document.querySelectorAll('[id*=art-]');
    articleNodeList.forEach(node => node.classList.remove('active'))
    log(articleNodeList)
    const articleNode = document.querySelector('#art-' + lang);
    articleNode.classList.add('active');

}