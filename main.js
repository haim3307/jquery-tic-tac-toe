/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
var X1 = 'X',
    O1 = 'O',
    Y1 = O1,
    matchFlagIs = false,
    gameGrid = 3,
    findO = localStorage.getItem('Oscore'),
    findX = localStorage.getItem('Xscore'),
    localX = !findX ? 'none' : localStorage.getItem('Xscore'),
    localO = !findO ? 'none' : localStorage.getItem('Oscore');
$('td').click(function () {
    console.log('phase 1.5');

    var thisTD = $(this);
    XOGame(gnumb, thisTD);
    pcPlayer(O1);
});

$(document).ready(function () {
    WinTitle('X score: ' + localX + ' || O score : ' + localO);
    changeGrid(3);
    $('.op1').click(function () {
        changeGrid(3);

    });
    $('.op2').click(function () {
        changeGrid(6);

    });
    $('.op3').click(function () {
        changeGrid(9);
    });


    $('td').click(function () {
        if (matchFlagIs) return false;
        else {
            var thisTD = $(this);
            XOGame(thisTD);
            pcPlayer(O1);
            console.log('hi');
        }
    });
});

function changeGrid(gnumb) {
    createBoard(gnumb);
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

function pcPlayer(O1) {
    var numOfTd = $('td').length;
    var randi = Math.ceil(Math.random() * numOfTd);
    $('td')[randi].innerText = O1;
}

function XOGame(thisTD) {
    var gamenet = $('tr').length;
    var cTD = thisTD;
    if (cTD.hasClass('clicked') || matchFlagIs) return;
    var tdIndex = cTD.index() + 1,
        trIndex = cTD.parent().index() + 1;

    if (Y1 == O1) {
        Y1 = X1;
        cTD.addClass('clicked clickedX');
    } else {
        Y1 = O1;
        cTD.addClass('clicked clickedO');

    }

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
            WinTitle(finalIs[0] + ' won the game!');
            setTimeout(function () {
                matchFlagIs = true;
                if (finalIs[0] == 'X') {
                    if (!findX) {
                        localStorage.setItem('Xscore', 1);
                        callWinT();
                    } else {
                        localStorage.setItem('Xscore', eval(findX) + 1);
                        callWinT();

                    }
                } else {
                    if (!findO) {
                        localStorage.setItem('Oscore', 1);
                        callWinT();

                    } else {
                        localStorage.setItem('Oscore', eval(findO) + 1);
                        callWinT();

                    }
                }
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
    $('h1').text(textIs);
}
