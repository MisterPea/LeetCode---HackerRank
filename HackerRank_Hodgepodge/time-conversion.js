/* Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/
function timeConversion(s) {
  const timeArray = s.split(/(\d\d):(\d\d):(\d\d)(|AM|PM)/).filter(Boolean);
  const [hour, min, sec, am_pm] = timeArray;
  let hourOut = undefined;

  if (hour === '12' && am_pm === 'AM') {
    hourOut = '00';
  } else if (hour !== '12' && am_pm === 'PM') {
    hourOut = `${Number(hour) + 12}`;
  } else {
    hourOut = hour;
  }

  return `${hourOut}:${min}:${sec}`;
}
