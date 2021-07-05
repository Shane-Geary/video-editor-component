//Copyright 2021 Glowstik Inc. All rights reserved.
/**
 * Class representing a coordinate on a sphere, most likely Earth.
 *
 * This class is based on the code sample in this paper:
 * http://janmatuschek.de/LatitudeLongitudeBoundingCoordinates
 */
class GeoLocation {
    static DISTANCE = GeoLocation.miToKm(1 / 3); // distance to bounding box edges

    static EARTH_RADIUS = 6378.1; // km

    static MIN_LAT = GeoLocation.degToRad(-90); // -PI/2

    static MAX_LAT = GeoLocation.degToRad(90); //  PI/2

    static MIN_LON = GeoLocation.degToRad(-180); // -PI

    static MAX_LON = GeoLocation.degToRad(180); //  PI

    static degToRad(degrees) {
      return degrees * (Math.PI / 180)
    }

    static radToDeg(rad) {
      return rad / (Math.PI / 180)
    }

    static miToKm(mi) {
      return mi * 1.6093439999999999
    }

    static kmToMi(km) {
      return km * 0.621371192237334
    }

    static fromDegrees(lat, lon) {
      const result = new GeoLocation()
      result.radLat = GeoLocation.degToRad(lat)
      result.radLon = GeoLocation.degToRad(lon)
      result.degLat = lat
      result.degLon = lon
      result.checkBounds()
      return result
    }

    static fromRadians(lat, lon) {
      const result = new GeoLocation()
      result.radLat = lat
      result.radLon = lon
      result.degLat = GeoLocation.radToDeg(lat)
      result.degLon = GeoLocation.radToDeg(lon)
      result.checkBounds()
      return result
    }

    checkBounds() {
      if (this.radLat < GeoLocation.MIN_LAT || this.radLon < GeoLocation.MIN_LON
            || this.radLat > GeoLocation.MAX_LAT || this.radLon > GeoLocation.MAX_LON) {
        throw new Error('Illegal arguments')
      }
    }

    /**
     * Computes the great circle distance between this GeoLocation instance
     * and the other.
     */
    distanceTo(other, radius = GeoLocation.EARTH_RADIUS) {
      return radius * Math.acos(
        Math.sin(this.radLat) * Math.sin(other.radLat)
            + Math.cos(this.radLat)
            * Math.cos(other.radLat)
            * Math.cos(this.radLon - other.radLon),
      )
    }

    /**
     * Computes the bounding coordinates of all points on the surface
     * of a sphere that has a great circle distance to the point represented
     * by this GeoLocation instance that is less or equal to the distance argument.
     *
     * Param:
     *     distance - the distance from the point represented by this GeoLocation
     *                instance. Must be measured in the same unit as the radius
     *                argument (which is kilometers by default)
     *
     *     radius   - the radius of the sphere. defaults to Earth's radius.
     *
     * Returns a list of two GeoLocations - the SW corner and the NE corner - that
     * represents the bounding box.
     */
    boundingLocations(distance = GeoLocation.DISTANCE, radius = GeoLocation.EARTH_RADIUS) {
      if (radius < 0 || distance < 0) {
        throw new Error('Illegal arguments')
      }

      const radDist = distance / radius // angular distance in radians on a great circle

      let minLat = this.radLat - radDist
      let maxLat = this.radLat + radDist
      let minLon; let
        maxLon

      if (minLat > GeoLocation.MIN_LAT && maxLat < GeoLocation.MAX_LAT) {
        const deltaLon = Math.asin(Math.sin(radDist) / Math.cos(this.radLat))

        minLon = this.radLon - deltaLon
        if (minLon < GeoLocation.MIN_LON) {
          minLon += 2 * Math.PI
        }

        maxLon = this.radLon + deltaLon
        if (maxLon > GeoLocation.MAX_LON) {
          maxLon -= 2 * Math.PI
        }
      } else { // a pole is within the distance
        minLat = Math.max(minLat, GeoLocation.MIN_LAT)
        maxLat = Math.min(maxLat, GeoLocation.MAX_LAT)
        minLon = GeoLocation.MIN_LON
        maxLon = GeoLocation.MAX_LON
      }

      return [
        GeoLocation.fromRadians(minLat, minLon),
        GeoLocation.fromRadians(maxLat, maxLon),
      ]
    }
}

export default GeoLocation
