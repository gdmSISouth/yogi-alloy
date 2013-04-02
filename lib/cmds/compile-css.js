/*
* Copyright (c) 2012, Liferay Inc. All rights reserved.
* Code licensed under the BSD License:
* https://github.com/liferay/alloy-ui/blob/master/LICENSE.txt
*
* @author Eduardo Lundgren <eduardo.lundgren@liferay.com>
*/

exports.COMMAND = {
	alias: 'c',
	description: 'Compass compile of .scss files into .css'
};

// -- Yogi Alloy Header --------------------------------------------------------
var YOGI_ALLOY_PATH = __dirname + '/../../';

var base = require(YOGI_ALLOY_PATH + '/lib/base');

// -- Requires -----------------------------------------------------------------
var compass = base.requireAlloy('lib/compass');

// -- Command ------------------------------------------------------------------
exports.run = function(payload, parsed) {
    if (base.isRepo(base.TWITTER_BOOTSTRAP)) {
        compass.run('compile', [ 'lib/bootstrap.scss', 'lib/responsive.scss' ]);
        compass.run('compile',[ 'lib/bootstrap.scss', 'lib/responsive.scss' ], { 'output-style': 'compressed' });
    }
};