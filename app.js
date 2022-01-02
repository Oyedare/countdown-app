const countDown = () =>{
    const countDate = new Date('December 29, 2022 20:15:00').getTime();
    const now = new Date().getTime()
    const gap = countDate - now
    // console.log(countDate);
    // console.log(gap);
    
    const second = 1000;
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)
    
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    if(textDay <= 0 &&
        textHour <= 0 &&
        textMinute <= 0 &&
        textSecond <= 0){
        document.querySelector('h2').innerText = 'We are Live!!'
        clearInterval(timer)

    document.querySelector('.day').innerText = 0;
    document.querySelector('.hour').innerText = 0;
    document.querySelector('.minute').innerText = 0;
    document.querySelector('.second').innerText = 0;
    }

}
// if(now === countDate){
    // document.querySelector('h2').innerText = 'We are Live!!'
// }
// countDown()
let timer = setInterval(countDown,1000)
// clearInterval(timer)
