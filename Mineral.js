/**
 * A mineral deposit.
 * Can be harvested by creeps with a WORK body part using the extractor structure.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral}
 */
Mineral = function() { };

Mineral.prototype =
{
    /**
     * The density that this mineral deposit will be refilled to once ticksToRegeneration reaches 0. This is one of the DENSITY_* constants.
     *
     * @see {@link https://docs.screeps.com/api/#Mineral.density}
     *
     * @type {number}
     */
    density: 0,

    /**
     * The remaining amount of resources.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral#mineralAmount}
     *
     * @type {number}
     */
    densitynumber: 0,

    /**
     * The resource type, one of the RESOURCE_* constants.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral#mineralType}
     *
     * @type {string}
     */
    mineralType: "",

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral#id}
     *
     * @type {string}
     */
    id: "",

    /**
     * The remaining time after which the deposit will be refilled.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral#ticksToRegeneration}
     *
     * @type {number}
     */
    ticksToRegeneration: 0
};
