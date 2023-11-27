// ---------- Variables ---------- //

let nipah = document.querySelector('.nipah');
let covid = document.querySelector('.covid-19');
let i_btns = document.querySelectorAll('.info-icons');
let drop_down = document.querySelector('.drop-down');
let virus_select = document.querySelector('.virus_select');
let heading = document.querySelector('.heading');

let DEG_RATE = 0;

// ---------- Drop Down List Functioning ---------- //

function SelectedValue(sel) {
    let value = sel.options[sel.selectedIndex].value;
    for (let i = 0; i < i_btns.length; i++) {

        // ---------- Select Virus ---------- //

        if (value == '') {
            nipah.style.display = 'none';
            covid.style.display = 'none';
            i_btns[i].style.display = 'none';

            drop_down.style.top = '50%';
            drop_down.style.left = '50%';
            drop_down.style.transform = 'translate(-50%, -50%)';
            drop_down.style.margin = '0px';

            virus_select.style.width = '330px';
            virus_select.style.height = '65px';
            virus_select.style.fontSize = '25px';
            virus_select.style.paddingLeft = '20px';

            heading.style.top = '0';
            heading.style.position = 'absolute';
            heading.style.marginTop = '40px';
        }

        // ---------- Novel CoronaVirus ---------- //

        else if (value == 'NOVEL CORONAVIRUS') {
            nipah.style.display = 'none';
            covid.style.display = 'flex';
            i_btns[i].style.display = 'block';
            i_btns[2].classList.add('info1-hover');
            i_btns[1].classList.add('info2-hover');
            i_btns[0].classList.add('info3-hover');
            i_btns[3].classList.add('info4-hover');
            i_btnsFun();

            drop_down.style.top = '80px';
            drop_down.style.left = '0%';
            drop_down.style.margin = '20px';
            drop_down.style.marginTop = '50px';
            drop_down.style.transform = 'translate(0, 0)';

            virus_select.style.width = '230px';
            virus_select.style.height = '45px';
            virus_select.style.fontSize = '20px';
            virus_select.style.paddingLeft = '10px';

            heading.style.top = '0';
            heading.style.position = 'relative';
            heading.style.marginTop = '0px';
        }

        // ---------- View Both ---------- //

        else if (value == 'VIEW BOTH') {
            nipah.style.display = 'flex';
            covid.style.display = 'flex';
            i_btns[i].style.display = 'none';

            drop_down.style.top = '80px';
            drop_down.style.left = '0%';
            drop_down.style.margin = '20px';
            drop_down.style.marginTop = '50px';
            drop_down.style.transform = 'translate(0, 0)';

            virus_select.style.width = '230px';
            virus_select.style.height = '45px';
            virus_select.style.fontSize = '20px';
            virus_select.style.paddingLeft = '10px';

            heading.style.top = '0';
            heading.style.position = 'relative';
            heading.style.marginTop = '0px';
        }

        // ---------- Nipah Virus ---------- //

        else {
            covid.style.display = 'none';
            nipah.style.display = 'flex';
            i_btns[i].style.display = 'block';
            i_btns[6].classList.add('info6-hover');
            i_btns[5].classList.add('info5-hover');
            i_btns[4].classList.add('info7-hover');
            i_btns[7].classList.add('info8-hover');
            i_btnsFun2();

            drop_down.style.top = '80px';
            drop_down.style.left = '0%';
            drop_down.style.margin = '20px';
            drop_down.style.marginTop = '50px';
            drop_down.style.transform = 'translate(0, 0)';

            virus_select.style.width = '230px';
            virus_select.style.height = '45px';
            virus_select.style.fontSize = '20px';
            virus_select.style.paddingLeft = '10px';

            heading.style.top = '0';
            heading.style.position = 'relative';
            heading.style.marginTop = '0px';
        }
    }
}

// ---------- Corona Virus Btns Animation and Position ---------- //

function i_btnsFun() {
    setInterval(() => {

        let NAV_PERSPECTIVE = "270px";

        for (let i = 0; i < i_btns.length; i++) {
            i_btns[0].style.transform = `translate(calc(cos(${DEG_RATE + 45}deg) * ${NAV_PERSPECTIVE}), calc(sin(${DEG_RATE + 45}deg) * ${NAV_PERSPECTIVE}))`;

            i_btns[1].style.transform = `translate(calc(cos(${DEG_RATE + 135}deg) * ${NAV_PERSPECTIVE}), calc(sin(${DEG_RATE + 135}deg) * ${NAV_PERSPECTIVE}))`;

            i_btns[2].style.transform = `translate(calc(cos(${DEG_RATE + 225}deg) * ${NAV_PERSPECTIVE}), calc(sin(${DEG_RATE + 225}deg) * ${NAV_PERSPECTIVE}))`;

            i_btns[3].style.transform = `translate(calc(cos(${DEG_RATE + 315}deg) * ${NAV_PERSPECTIVE}), calc(sin(${DEG_RATE + 315}deg) * ${NAV_PERSPECTIVE}))`;
        }
    }, 1000);
}

// ---------- Nipah Virus Btns Animation and Position ---------- //

function i_btnsFun2() {
    setInterval(() => {

        let NAV_PERSPECTIVE_2 = "270px";

        for (let i = 0; i < i_btns.length; i++) {
            i_btns[4].style.transform = `translate(calc(cos(${DEG_RATE + 45}deg) * ${NAV_PERSPECTIVE_2}), calc(sin(${DEG_RATE + 45}deg) * ${NAV_PERSPECTIVE_2}))`;

            i_btns[5].style.transform = `translate(calc(cos(${DEG_RATE + 135}deg) * ${NAV_PERSPECTIVE_2}), calc(sin(${DEG_RATE + 135}deg) * ${NAV_PERSPECTIVE_2}))`;

            i_btns[6].style.transform = `translate(calc(cos(${DEG_RATE + 225}deg) * ${NAV_PERSPECTIVE_2}), calc(sin(${DEG_RATE + 225}deg) * ${NAV_PERSPECTIVE_2}))`;

            i_btns[7].style.transform = `translate(calc(cos(${DEG_RATE + 315}deg) * ${NAV_PERSPECTIVE_2}), calc(sin(${DEG_RATE + 315}deg) * ${NAV_PERSPECTIVE_2}))`;
        }
    }, 1000);
}