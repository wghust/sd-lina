export default {
  oneToTwo (num) {
    if (parseInt(num) < 10) {
      return '0' + num;
    }
    return num;
  }
}