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
    gameGrid;

$(document).ready(function () {
    $('.gridOption').click(function () {
        gameGrid = $(this).val();;
        createBoard(gameGrid);
        $('td').click(function () {
            console.log('phase 1.5');

            var thisTD = $(this);
            XOGame(gameGrid, thisTD);

        });
    });





});

function createBoard(gameNet) {
    console.log('phase 1');
    var XOGameTab = '';
    for (var i = 0; i < gameNet; i++) {
        XOGameTab += '<tr>';
        for (var x = 0; x < gameNet; x++)
            XOGameTab += '<td></td>';
        XOGameTab += '</tr>';
    }
    $('table').html(XOGameTab);
}

function XOGame(gameNet, thisTD) {
    console.log('phase 2');
    console.log(gameNet);
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


    function checkIt(i, roof, two, one) {
        var prvfinal, final = [];
        var g = gameNet;
        while (i < roof) {
            console.log(i);
            var mycommand = $('tr:nth-child(' + eval(two) + ') td:nth-child(' + eval(one) + ')').text()

            var innerT = mycommand;
            final[i - 1] = innerT;
            i++;
            g -= 1;
            console.log(final);
        }
        var finalIs = final.reduce(function (a, b) {
            return (a == b) ? a : NaN;
        });
        if (finalIs) {
            WinTitle(finalIs[0] + ' won the game!');
            matchFlagIs = true;
        }


    }
    checkIt('1', gameNet, trIndex, 'i');
    checkIt('1', gameNet, 'i', tdIndex);
    checkIt('1', gameNet, 'i', 'i');
    checkIt('1', gameNet, 'g', 'i');

    function WinTitle(textIs) {
        $('h1').text(textIs);
    }


}
