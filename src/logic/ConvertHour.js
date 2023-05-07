export const Convertminutes = ({minutes}) => {
    const min = parseInt(minutes.substring(0, 3))
    const hour = Math.floor(min / 60)
    const minute = min - (hour * 60)
    return `${hour} : ${minute.toString().length === 1 ? "0" + minute : minute} minutes`
}