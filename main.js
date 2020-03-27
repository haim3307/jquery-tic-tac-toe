/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler

$(document).ready(function () {
    var XOGameTab = '',
        gameNet = 9;
    for (var i = 0; i < gameNet; i++) {
        XOGameTab += '<tr>';
        for (var x = 0; x < gameNet; x++)
            XOGameTab += '<td></td>';
        XOGameTab += '</tr>';
    }
    $('table').html(XOGameTab);
    var X1 = 'X',
        O1 = 'O',
        Y1 = O1;
    $('td').click(function () {

        var cTD = $(this);
        if (cTD.hasClass('clicked')) return;


        var tdIndex = cTD.index() + 1,
            trIndex = cTD.parent().index() + 1;

        if (Y1 == O1) {
            Y1 = 'X';
            cTD.addClass('clicked clickedX');
        } else {
            Y1 = 'O';
            cTD.addClass('clicked clickedO');

        }
        $(this).text(Y1);
        var Yis = $(this).text();
        function checkIt(i, roof, choose) {
            var final = [];
            while (i < roof) {
                var mycommand = $('tr:nth-child(' + two + ') td:nth-child(' + i + ')').text()
                var innerT = mycommand;
                final[i - 1] = innerT;
                i++;
                g -= 1;
            }
            var finalIs=final.reduce(function (a, b) {
                return (a==b) ? a : NaN;
            });
            if (finalIs) {
                alert('win');

            }


        }
        checkIt(1, gameNet + 1, trIndex);
        checkIt(1, gameNet + 1, tdIndex);
        //checkIt('1', gameNet + 1, 'i', 'i');
        //checkIt('1', gameNet + 1, 'g', 'i');

    })





});
