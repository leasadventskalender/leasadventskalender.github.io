function validateLogin() {
    const answer = document.getElementById("answer").value;
    if ( answer === "Tropfstein" ||
        answer === "tropfstein" ||
        answer === "Ein Tropfstein" ||
        answer === "ein tropfstein" ||
        answer === "ein Tropfstein"
    ){
        window.location.href = '/html/main.html'; // Redirecting to other page.
        return true;
    }
    else{
        const inputField = document.getElementById("answer");
        inputField.style.outline = "2px solid #A83939";
        inputField.value = "";
    }
}

function disableDoors() {
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1

    for (let i = 0; i < Math.min(cDay, 24); i++) {
        const door = document.getElementById("door" + (i+1));
        door.classList.add("enabled");
        door.classList.remove("disabled");
    }
}

function showPopup(number) {
    if (document.getElementById('door' + (number-1)).classList.contains('disabled')) return;

    const popups = document.getElementById("popups");

    popups.classList.add("show");
    popups.children.item(number-1).classList.add("show");

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function hidePopup(number) {
    const popups = document.getElementById("popups");

    popups.classList.remove("show");
    if (number)
        popups.children.item(number-1).classList.remove("show");
    else {
        for (let i = 0; i < popups.children.length; i++) {
            popups.children.item(i).classList.remove('show');
        }
    }

    window.onscroll = function () {}
}

function validateSchokiQuiz() {
    document.getElementById("LabelRight").classList.remove("show");
    document.getElementById("LabelWrong").classList.remove("show");
    document.getElementById("LabelNothing").classList.remove("show");

    const is1 = document.getElementById("1").checked;
    const is2 = document.getElementById("2").checked;
    const is3 = document.getElementById("3").checked;

    if (is1) {
        document.getElementById("LabelRight").classList.add('show');
    } else if (!is1 && !is2 && !is3) {
        document.getElementById("LabelNothing").classList.add('show');
    } else {
        document.getElementById("LabelWrong").classList.add('show');
    }
}

function preventPopupClicks() {
    const popups = document.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
        popups[i].addEventListener('click', function (e) {
            e.stopPropagation();
        })
    }
}