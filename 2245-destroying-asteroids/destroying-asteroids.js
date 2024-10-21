/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
    asteroids.sort((a, b) => a - b)
    for (let i = 0; i < asteroids.length; i++) {

        if (mass < asteroids[i]) {
            return false
        } else {
            mass = asteroids[i] + mass
        }
    }

    return true

};