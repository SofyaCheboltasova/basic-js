const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

	if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid date!');
  }
		
	const month = date.getMonth();
	switch(month) {
		case(month >= 2 && month <= 4): {
			return 'spring';
		}
		case(month >= 8 && month <= 10): {
			return 'autumn';
		}
		case(month >= 5 && month <= 7):{
			return 'summer';
		}
		default: {
			return 'winter';
		}
	}
}

module.exports = {
  getSeason
};
