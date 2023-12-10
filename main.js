const log = console.log;


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
    // 1 - set hash to url
    location.hash = lang
    // 2 - show switched content
    const articleNodeList = document.querySelectorAll('[id*=art-]');
    articleNodeList.forEach(node => node.classList.remove('active'))
    const articleNode = document.querySelector('#art-' + lang);
    articleNode.classList.add('active');
    // 3 - switch flag indication
    const swithNodeList = document.querySelectorAll('[id*=swith-]');
    swithNodeList.forEach(node => node.classList.remove('active'))
    const swithNode = document.querySelector('#swith-' + lang);
    swithNode.classList.add('active');
}