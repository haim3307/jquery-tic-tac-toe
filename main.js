/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: false, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
let X1 = 'X',
    O1 = 'O',
    Y1 = O1,
    matchFlagIs = false,
    pcOrPlayer = false,
    clickCheck, prvHTML, htmlIs, prvId, idIs, firstMove,
    gameGrid = 3,
    findO = localStorage.getItem('Oscore'),
    findX = localStorage.getItem('Xscore'),
    localX = !findX ? 'none' : localStorage.getItem('Xscore'),
    localO = !findO ? 'none' : localStorage.getItem('Oscore');

$(document).ready(function () {
    $('#pc').click(function () {
        pcOrPlayer = true;
        const tPc = this;
        chooseSolder1(tPc, X1);

    });
    $('#player').click(function () {
        const tPl = this;
        chooseSolder1(tPl, O1);
        pcOrPlayer = false;

    });
    changeGrid(3);
    $('.op1').click(function () {
        changeGrid(3)
    });
    $('.op2').click(function () {
        changeGrid(6)
    });
    $('.op3').click(function () {
        changeGrid(9)
    });



});

class XoGame {
    static clickedC(p) {
        console.log('click time is : ' + clickCheck);

        if (clickCheck) {
            console.log('p= ' + $(p).html());
            $(p).html(htmlIs);
            $(p).attr('id', idIs);


        }

        $(p).siblings().click(function () {
            $(p).html(prvHTML);
            $(p).attr('id', prvId);

        });

    }

    static checkIdAndHtml(p) {
        //if first click
        if (!clickCheck) {
            prvHTML = $(p).html();
            prvId = $(p).attr('id');
            clickCheck = $(p).attr('id') === 'pc' ? 1 : 2;

        } else if (clickCheck === 1 || 2) {
            clickCheck = $(p).attr('id') === 'pc' ? 1 : 2;
            htmlIs = prvHTML;
            prvHTML = $(p).html();
            idIs = prvId;
            prvId = $(p).attr('id');

        }
    }

    static chooseSolder1(p) {
        console.log('phase 2 - enter function ,first time ' + p);
        $('#playersScreen h1').text('בחר/י צורה!');

        checkIdAndHtml(p);

        clickedC(p);

        $(p).siblings().click(clickedC);

        $(p).html('<div class="halfO">O</div><div class="halfX">X</div>');
        $('.half' + X1).click(function () {
            setSolder(X1);
        });
        $('.half' + O1).click(function () {
            setSolder(O1);
        });

        function setSolder(u) {
            WinTitle('X score: ' + localX + ' || O score : ' + localO);
            Y1 = u;
            $('#playersScreen').hide();
            $('#theBoard').fadeIn(500);
        }
    }

    static createBoard(gameNet) {
        $('table').html(`
        <tr>
            ${`<td></td>`.repeat(gameNet)}
        </tr>
     `.repeat(gameNet)
        );
    }

    static changeGrid(gridNumber) {
        matchFlagIs = false;
        createBoard(gridNumber);
        $('td').click(function () {
            if (matchFlagIs) return;
            let validMove = play($(this));
            if (pcOrPlayer && validMove) {
                let pcChoice = pcPlayer(Y1);
                play(pcChoice);
            }
        });
    }

    static pcPlayer() {
        const $tds = $('td:not(.clicked)');
        const randi = Math.floor(Math.random() * $tds.length);
        return $($tds[randi]);
    }

    static colorAndSwitch(cTD) {
        if (Y1 === X1) {
            if (firstMove) Y1 = O1;
            firstMove = true;
            cTD.addClass('clicked clicked' + Y1);
        } else {
            if (firstMove) Y1 = X1;
            firstMove = true;
            cTD.addClass('clicked clicked' + Y1);

        }
    }

    static play(cTD) {
        if (cTD.hasClass('clicked') || matchFlagIs) return false;
        const tdIndex = cTD.index() + 1,
            trIndex = cTD.parent().index() + 1;

        colorAndSwitch(cTD);
        cTD.text(Y1);
        gameGrid = $('tr').length;

        checkIt('1', gameGrid + 1, trIndex, 'i');
        checkIt('1', gameGrid + 1, 'i', tdIndex);
        checkIt('1', gameGrid + 1, 'i', 'i');
        checkIt('1', gameGrid + 1, 'g', 'i');

        return true;
    }

    static checkIt(i, roof, two, one) {
        const final = [];
        let g = gameGrid;
        while (i < roof) {
            console.log(i);
            final[i - 1] = $('tr:nth-child(' + eval(two) + ') td:nth-child(' + eval(one) + ')').text();
            i++;
            g -= 1;
        }
        const finalIs = final.reduce( (a, b) => (a === b) ? a : NaN);
        if (finalIs) {
            WinTitle(finalIs[0] + ' זכה במשחק!');
            matchFlagIs = true;
            setTimeout(() => {
                const f = eval('find' + Y1);
                const R = !f ? 1 : eval(f) + 1;
                localStorage.setItem(Y1 + 'score', String(R));
                callWinT();

            }, 2000);
        }

    }

    static callWinT() {
        localX = !findX ? 'none' : localStorage.getItem('Xscore');
        localO = !findO ? 'none' : localStorage.getItem('Oscore');
        WinTitle('X score: ' + localX + ' || O score : ' + localO);

    }
    static WinTitle(textIs) {
        $('.container h1').text(textIs);
    }
}

let {clickedC,callWinT, checkIdAndHtml, chooseSolder1, createBoard, changeGrid, pcPlayer, colorAndSwitch, play,WinTitle,checkIt} = XoGame;
