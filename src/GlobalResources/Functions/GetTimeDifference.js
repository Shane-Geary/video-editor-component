//Copyright 2021 Glowstik Inc. All rights reserved.
const getTimeDifference = (createdOn) => {
  const date = new Date()
  const dateCreated = new Date()
  dateCreated.setUTCFullYear(createdOn.slice(0, 4))
  dateCreated.setUTCMonth(createdOn.slice(5, 7) - 1)
  dateCreated.setUTCDate(createdOn.slice(8, 10))
  dateCreated.setUTCHours(createdOn.slice(11, 13))
  dateCreated.setUTCMinutes(createdOn.slice(14, 16))
  dateCreated.setUTCSeconds(createdOn.slice(17, 19))
  const timeDifference = date.getTime() - dateCreated.getTime()
  const sec = Math.floor(timeDifference / 1000)
  const min = Math.floor(timeDifference / 60000)
  const hour = Math.floor(timeDifference / 3600000)
  const day = Math.floor(timeDifference / 86400000)
  if (sec >= 60) {
    if (min < 60) {
      return `${min}m`
    }
    if (hour < 24) {
      return `${hour}h`
    }
    return `${day}d`
  }
  if (sec < 10) {
    return 'now'
  }
  return `${sec}s`
}

export default getTimeDifference
