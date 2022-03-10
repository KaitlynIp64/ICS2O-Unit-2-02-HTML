// Copyright (c) 2020 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById('multiply-math').innerHTML = '<p>The area: ? cm' + (5 * 3) + '</p>'
  document.getElementById('add-math').innerHTML = '<p>(The perimeter is: ? cm ' + (5+5+3+3) + '</p>'
}
