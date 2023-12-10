const log = console.log;
function switchTo(lang) {
    log(lang)
    const articleNodeList = document.querySelectorAll('[id*=art-]');
    articleNodeList.forEach(node => node.classList.remove('active'))
    log(articleNodeList)
    const articleNode = document.querySelector('#art-' + lang);
    articleNode.classList.add('active');

    log(lang)
    const swithNodeList = document.querySelectorAll('[id*=swith-]');
    swithNodeList.forEach(node => node.classList.remove('active'))
    log(swithNodeList)
    const swithNode = document.querySelector('#swith-' + lang);
    swithNode.classList.add('active');    
}