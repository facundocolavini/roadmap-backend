export const formatTodayDate = (): string =>{
    let today = new Date();
    let dd = String(today.getDate()). padStart(2, '0');
    let mm = String(today.getMonth() + 1). padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let hh = today.getHours()
    let min = today.getMinutes()
    let ss = today.getSeconds()
    return `${dd}/${mm}/${yyyy} - ${hh}:${min}:${ss}`;
}

module.exports = {
    formatTodayDate
}