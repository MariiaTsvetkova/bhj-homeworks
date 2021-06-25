

(() => {
    const getCounter = () => {
        return +document.getElementById('clicker__counter').innerText;
    };
   let counter = getCounter(),
       initialTime = +Date.now(),
       totalTime = () => {
            const ticks = +Date.now() - initialTime;
            return Math.round(ticks / 1000);
       };

   const refreshClicksCounter = () => {
        document.getElementById('clicker__counter').innerText = counter;
        },
       addClickToCounter = () => {
            if (counter === 0) {
                initialTime = +Date.now();
            }
            counter +=1;
       },
        getAverage = () => {
            document.getElementById('clicker__frequency').innerText = (counter / totalTime()).toFixed(0);
        },
       cookie = document.getElementById(`cookie`),
       baseWidth  = cookie.width,
       cookieTremor = (ratio = 1.1) => {
            return cookie.width === baseWidth ? cookie.width * ratio : baseWidth;
       };
       cookie.onclick = () => {
            addClickToCounter();
            refreshClicksCounter();
            cookie.width = cookieTremor();
            getAverage();
    };



})();