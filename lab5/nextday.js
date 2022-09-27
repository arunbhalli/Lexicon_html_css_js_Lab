function nextday(dateArr) {
  let year = parseInt(dateArr[0]);
  let month = parseInt(dateArr[1]);
  let dayCount = parseInt(dateArr[2]);

  let newday = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (dayCount == 31) {
        month = month + 1;
        newday = 1;

        console.log('next date is ' + year + '-' + month + '-' + newday);
      } else {
        newday = dayCount + 1;

        console.log('next date is ' + year + '-' + month + '-' + newday);
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (dayCount == 30) {
        month = month + 1;
        newday = 1;

        console.log('next date is ' + year + '-' + month + '-' + newday);
      } else {
        newday = dayCount + 1;

        console.log('next date is ' + year + '-' + month + '-' + newday);
      }
      break;
    case 2:
      if (dayCount == 29) {
        month = month + 1;
        newday = 1;
        // newdate = year + '-' + month + '-' + newday;
        console.log('next date is ' + year + '-' + month + '-' + newday);
      } else if (dayCount == 28) {
        month = month + 1;
        newday = 1;
        // newdate = year + '-' + month + '-' + newday;
        console.log('next date is ' + year + '-' + month + '-' + newday);
      } else {
        newday = dayCount + 1;
        // newdate = year + '-' + month + '-' + newday;
        console.log('next date is ' + year + '-' + month + '-' + newday);
      }
      break;
  }
}
nextday(['2016', '2', '28']);
