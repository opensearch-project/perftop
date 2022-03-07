/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

require('console-stamp')(console, '[HH:MM:ss.l]');

var temperatureProfileDataGenerator = require('./util/temperature-profile/generate-data.js');
var metricGraphs = require('../metric-graphs');
var metricDonut = require('./util/metric-donut');
var metricLine = require('./util/metric-line.js');
var metricTable = require('./util/metric-table.js');

/**
 * Initialize all the graph objects and generate RCA analysis.
 *
 * @param {object} jsonData - hashmap of dashboard configuration.
 */
function initAndStart (jsonData) {
  var graphs = new metricGraphs.metricGraphs();
  var dataGenerator = selectDataGenerator(jsonData);
  var queryParams = jsonData.queryParams;
  for (var i = 0; i < jsonData.graphs.length; i++) {
    var graphConfig = jsonData.graphs[i];
    var graphType = graphConfig.graphType;
    if ((graphType === 'donuts')) {
      graph = new metricDonut.metricDonut(jsonData.endpoint, jsonData.gridOptions, queryParams,
        graphConfig.options, graphConfig.dimension, graphConfig.graphParams, dataGenerator, graphs.screen);
    } else if ((graphType === 'lines')) {
      graph = new metricLine.metricLine(jsonData.endpoint, jsonData.gridOptions, queryParams,
        graphConfig.options, graphConfig.dimension, graphConfig.graphParams, dataGenerator, graphs.screen);
    } else if (graphType === 'tables') {
      graph = new metricTable.metricTable(jsonData.endpoint, jsonData.gridOptions, queryParams,
        graphConfig.options, graphConfig.dimension, graphConfig.graphParams, dataGenerator, graphs.screen);
    }
    graphs.allGraphs.push(graph);
  }
  // Generate graph on screen
  graphs.resizeGraphsToScreen();
  graphs.start();
}

/**
 * Select the data generator based on the query name in jsonData
 *
 * @param {object} jsonData - hashmap of dashboard configuration.
 */
function selectDataGenerator(jsonData){
  switch(jsonData.queryParams.name){
    case 'AllTemperatureDimensions':
      return temperatureProfileDataGenerator;
    // case 'HighHeapUsageClusterRca': 
      // return HeapUsageDataGenerator;
    default:
      return temperatureProfileDataGenerator;   
  }
}

module.exports.initAndStart = initAndStart;
