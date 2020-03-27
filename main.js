/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: false, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
var X1 = 'X',
    O1 = 'O',
    Y1 = O1,
    matchFlagIs = false,
    pcOplayer = false,
    clickCheck, prvHTML, htmlIs, prvId, idIs, firstmove,
    gameGrid = 3,
    findO = localStorage.getItem('Oscore'),
    findX = localStorage.getItem('Xscore'),
    localX = !findX ? 'none' : localStorage.getItem('Xscore'),
    localO = !findO ? 'none' : localStorage.getItem('Oscore');

$(document).ready(function () {
    $('#pc').click(function () {
        pcOplayer = true;
        var tPc = this;
        chooseSolder1(tPc, X1);

    });
    $('#player').click(function () {
        var tPl = this;
        chooseSolder1(tPl, O1);
        pcOplayer = false;

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


function chooseSolder1(p) {
    console.log('phase 2 - enter function ,first time ' + p);
    $('#playersScreen h1').text('בחר/י צורה!');

    function checkidNhtml() {
        //if first click
        if (!clickCheck) {
            prvHTML = $(p).html();
            prvId = $(p).attr('id');
            clickCheck = $(p).attr('id') == 'pc' ? 1 : 2;

        } else if (clickCheck == 1 || 2) {
            clickCheck = $(p).attr('id') == 'pc' ? 1 : 2;
            htmlIs = prvHTML;
            prvHTML = $(p).html();
            idIs = prvId;
            prvId = $(p).attr('id');

        }
    }
    checkidNhtml();
    clickedC();

    $(p).siblings().click(clickedC);

    function clickedC() {
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

function createBoard(gameNet) {
    var XOGameTab = '';
    for (var i = 0; i < gameNet; i++) {
        XOGameTab += '<tr>';
        for (var x = 0; x < gameNet; x++)
            XOGameTab += '<td></td>';
        XOGameTab += '</tr>';
    }
    $('table').html(XOGameTab);
}

function changeGrid(gnumb) {
    createBoard(gnumb);
    $('td').click(function () {
        if (matchFlagIs) return;
        var thisTD = $(this);
        XOGame(thisTD);
        if (pcOplayer) pcPlayer(Y1);
    });
}


function pcPlayer(O1) {
    var numOfTd = $('td').length;
    var randi = Math.ceil(Math.random() * numOfTd);
    if (Y1 == X1) Y1 = O1;
    else {
        Y1 = X1
    }
    $('td')[randi].innerText = Y1;

}

function XOGame(thisTD) {
    var gamenet = $('tr').length;
    var cTD = thisTD;

    if (cTD.hasClass('clicked') || matchFlagIs) return;
    var tdIndex = cTD.index() + 1,
        trIndex = cTD.parent().index() + 1;

    function colorNswitch() {
        if (Y1 == X1) {
            if (firstmove) Y1 = O1;
            firstmove = true;
            cTD.addClass('clicked clicked' + Y1);
        } else {
            if (firstmove) Y1 = X1;
            firstmove = true;
            cTD.addClass('clicked clicked' + Y1);

        }
    }
    colorNswitch();
    cTD.text(Y1);
    var Yis = $(this).text();
    var gameNet = $('tr').length;

    function checkIt(i, roof, two, one) {
        var final = [];
        var g = gameNet;
        while (i < roof) {
            console.log(i);
            var mycommand = $('tr:nth-child(' + eval(two) + ') td:nth-child(' + eval(one) + ')').text()

            var innerT = mycommand;
            final[i - 1] = innerT;
            i++;
            g -= 1;
        }
        var finalIs = final.reduce(function (a, b) {
            return (a == b) ? a : NaN;
        });
        if (finalIs) {
            WinTitle(finalIs[0] + ' זכה במשחק!');
            matchFlagIs = true;
            setTimeout(function () {
                var f = eval('find' + Y1);
                var R = !f ? 1 : eval(f) + 1;
                localStorage.setItem(Y1 + 'score', R);
                callWinT();

            }, 2000);


            function callWinT() {
                localX = !findX ? 'none' : localStorage.getItem('Xscore');
                localO = !findO ? 'none' : localStorage.getItem('Oscore');
                WinTitle('X score: ' + localX + ' || O score : ' + localO);

            }
        }


    }

    checkIt('1', gameNet + 1, trIndex, 'i');
    checkIt('1', gameNet + 1, 'i', tdIndex);
    checkIt('1', gameNet + 1, 'i', 'i');
    checkIt('1', gameNet + 1, 'g', 'i');


}

function WinTitle(textIs) {
    $('.container h1').text(textIs);
}
