/*
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = { family: 4 }
) {

    var baseTime = 500; // для базовых навыков
    var fullTime = 800; // для овладения языком
    var coefficient = 1;

    if (knowsProgramming == true) {
        coefficient;
    } else if (knowsProgramming == false) {
        coefficient = ((fullTime + baseTime) / fullTime);
    }

    switch (focus) {
        case 'family':
            return Math.ceil(coefficient * (fullTime / config.family));
            break;
        case 'friends':
            return Math.ceil(coefficient * (fullTime / config.friends));
            break;
        case 'normal_life':
            return Math.ceil(coefficient * (fullTime / config.normal_life));
            break;
        case 'profession':
            return Math.ceil(coefficient * (fullTime / config.profession));
            break;
        case 'carrier':
            return Math.ceil(coefficient * (fullTime / config.carrier));
            break;
        case 'top_peformance':
            return Math.ceil(coefficient * (fullTime / config.top_peformance));
            break;
    }
};