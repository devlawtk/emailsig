$("#genSig").click(function() {
    
    let name = $("#inputName").val();
    let email = $("#inputEmail").val();
    let phone = $("#inputPhone").val();
    let title = $("#inputTitle").val();

    let cardHTML = `
    <img class="imgOBS px-1" src="./assets/images/obsHomeLog.png" />
    <div class="vl imgOBS pl-2"></div>
    <h5 class="card-title">${name}</h5><br/>
    <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
    <small class="card-subtitle mb-2">Cell: ${phone}</small><br/>
    <small><a href="mailto:${email}" class="card-link">${email}</a></small><br/>
    <a href="#" class="card-link">OBSatHome.com</a>
    ` 

    $("#cardBod").html(cardHTML);
    $("#cardMain").removeClass("d-none");

    CopyToClipboard("cardMain");

    alert("Signature card has been copied to clipboard. Paste it in your email signature")

});

function CopyToClipboard(containerid) {
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }

    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
}