let body = document.querySelector('body');
let bar = document.createElement('div');

// create action menu items
let createButtonAndAttachMethod = function (btnText, btnFunction) {
    let button = document.createElement('button');

    button.innerText = btnText
    button.onclick = btnFunction;
    button.setAttribute('class', 'chrExtStw_Button');

    return button;
};

let showNewHTML = function () {
    let modal = document.createElement('div');
    let textarea = document.createElement('textarea');

    // we don't want the extension bar appearing on the page, right?
    body.removeChild(bar);

    // hides scrollbar
    body.style.overflow = 'hidden';

    textarea.setAttribute('class', 'chrExtStw_Textarea');
    textarea.value = document.all[0].outerHTML;

    modal.setAttribute('class', 'chrExtStw_Modal');
    modal.appendChild(textarea);
    modal.appendChild(createButtonAndAttachMethod('close', function (event) {
        if (event.target.parentElement.className === 'chrExtStw_Modal') {
            // hides modal
            event.target.parentElement.style.display = 'none';

            // shows scrollbar again
            body.style.overflow = 'auto';

            // adds bar back
            body.appendChild(bar);
        }
    }));

    body.appendChild(modal);
};

let enableEditingHTML = function () {
    body.setAttribute('contenteditable', 'true');
};

let disableEditingHTML = function () {
    body.setAttribute('contenteditable', 'false');
};

bar.setAttribute('class', 'chrExtStw_Bar');
bar.appendChild(createButtonAndAttachMethod('Enable Editing', enableEditingHTML));
bar.appendChild(createButtonAndAttachMethod('Disable Editing', disableEditingHTML));
bar.appendChild(createButtonAndAttachMethod('Show New HTML', showNewHTML));

body.appendChild(bar);
