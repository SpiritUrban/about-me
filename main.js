const log = console.log;


log(location.hash) // : "#de"

switch (location.hash) {
    case '#en':
        switchTo('en')
        break;
    case '#de':
        switchTo('de')
        break;
    case '#ru':
        switchTo('ru')
        break;
    default:
        console.log(`Language variant "${location.hash}" is not provided!`);
}




function switchTo(lang) {
    location.hash = lang
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