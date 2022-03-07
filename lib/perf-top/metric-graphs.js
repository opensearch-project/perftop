/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

var blessed = require('blessed');

/**
 * Creates a new metricGraph that has a shared screen for all metricTable, metricBar, and metricLine objects.
 *
 * @class
 */
function metricGraphs () {
  this.screen = blessed.screen();
  this.screen.key(['escape', 'q', 'C-c'], function () {
    return process.exit(0);
  });
  this.allGraphs = [];
  this.metricUnits = {};
}

/**
 * Adjust the graphs if screen resizes
 */
metricGraphs.prototype.resizeGraphsToScreen = function () {
  // Adjust the graphs if screen resizes
  var graphs = this.allGraphs;
  var graphScreen = this.screen;
  this.screen.on('resize', function () {
    for (var i = 0; i < graphs.length; i++) {
      graphs[i].emit();
    }
    graphScreen.render();
  });
};

/**
 * Generate the graphs and update the graphs every refreshInterval milliseconds.
 */
metricGraphs.prototype.start = function () {
  for (var graph in this.allGraphs) {
    var metricGraph = this.allGraphs[graph];
    metricGraph.generateGraph(metricGraph, this.screen);
    setInterval(metricGraph.generateGraph, metricGraph.refreshInterval, metricGraph, this.screen);
  }
};

module.exports.metricGraphs = metricGraphs;
