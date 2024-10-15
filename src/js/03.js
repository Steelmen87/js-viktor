// обработчик , слушатель , подписчик. handler , listener , subscriber => function
// function() (вызывает браузер) => callback
// {....} => сведение о событии =>Event=>event=>e
// new Array new Object new Event()
// function(Event)

const sm = document.getElementById("small")

function handler(params) {
    console.log(params)
}

/*
sm.onclick = handler
sm.onclick = null*/
sm.addEventListener("click", handler )
