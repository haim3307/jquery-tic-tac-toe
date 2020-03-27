/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler

$(document).ready(function () {
    "use strict";
    var XOGameTab = '',
        gameNet = 9,
        numbed = 1;
    for (var i = 0; i < gameNet; i++) {
        XOGameTab += '<tr>';
        for (var x = 0; x < gameNet; x++) {
            XOGameTab += '<td>' + numbed + '</td>';
            numbed++;
        }
        XOGameTab += '</tr>';

    }
    $('table').html(XOGameTab);
    var trLengh = document.getElementsByTagName('tr').length - 1;
    //    console.log(trLengh);
    var X1 = 'X',
        O1 = 'O',
        Y1 = Y1 == O1 ? 'X' : 'O';

    $('td').click(function () {

        var clckedTD = $(this);

        var tdIndex = clckedTD.index(),
            trIndex = clckedTD.parent().index();

        Y1 = Y1 == O1 ? 'X' : 'O';
        $(this).text(Y1);
        var Yis = $(this).text();

        function checkIt(way, i, plus, roof) {
            var prvfinal, final = [];
            var i = i;
            var g = 8;

            while (i < roof) {
                console.log(g);
                console.log(way);
                var mycommand = eval(way);
                console.log(mycommand);

                var innerT = mycommand;
                final[i] = innerT;
                eval(plus);
                console.log(i);
                console.log('loop');
                console.log(final);
                g -= 1;

            }
            var finalIs = !!final.reduce(function (a, b) {
                return (a === b) ? a : NaN;
            });
            if (finalIs) alert('win');


        }
        //        checkIt("");
        checkIt("document.getElementsByTagName('tr')[i].getElementsByTagName('td')[tdIndex].innerText", '0', 'i++', gameNet);
        checkIt("document.getElementsByTagName('tr')[trIndex].getElementsByTagName('td')[i].innerText", '0', 'i++', gameNet);
        checkIt("document.getElementsByTagName('tr')[i].getElementsByTagName('td')[i].innerText", '0', 'i++', gameNet);
        checkIt("document.getElementsByTagName('tr')[g].getElementsByTagName('td')[i].innerText", '0', 'i++', gameNet);
    })





});
