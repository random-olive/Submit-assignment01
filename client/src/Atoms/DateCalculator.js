const DateCalculator = () => {
  const dummy = new Date();
  let a, b, c;

  const hour = dummy.getHours();
  if (hour >= 0 && hour < 12) {
    if (hour === 0) {
      a = `AM 12`;
    } else if (hour < 10) {
      a = `AM 0${hour}`;
    } else {
      a = `AM ${hour}`;
    }
  } else if (hour >= 12 && hour <= 23) {
    if (hour === 12) {
      a = `PM 12`;
    } else {
      a = `PM ${hour - 12}`;
    }
  }

  const minute = dummy.getMinutes();
  const second = dummy.getSeconds();
  if (minute < 10) {
    b = `0${minute}`;
  } else {
    b = minute;
  }

  if (second < 10) {
    c = `0${second}`;
  } else {
    c = second;
  }

  return `${dummy.toLocaleDateString().slice(0,-5)} ${a}:${b}:${c}`;
};

export default DateCalculator;
