document.querySelector('span').previousElementSibling.innerHTML = 'DOM method description';
// console.log(document.querySelector('span').previousElementSibling);


const uapages = document.querySelectorAll('a[href^="site.ua/ua/"]');
for (let i = 0; i < uapages.length; i++) {
    console.log(uapages[i]);
}


document.getElementById('first').before(document.getElementById('null'));
document.getElementById('first').after(document.getElementById('second'));
document.getElementById('third').after(document.getElementById('fourth'));


const link = document.createElement('a');
link.setAttribute('id', "link");
link.setAttribute('href', "https//dom.spec.whatwg.org/");
link.append(document.querySelector('ul').nextElementSibling);
document.querySelector('ul').after(link);
