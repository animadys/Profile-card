//css version

function updateCSSVersion() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';

    const version = new Date().getTime();
    link.href = 'style.css?v=' + version;

    document.head.appendChild(link);
}

window.onload = updateCSSVersion;