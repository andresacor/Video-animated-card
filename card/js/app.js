
   //play video
   let play = document.getElementById('icon')
        play.addEventListener('click', function(e){
        e.preventDefault()
        let video = document.getElementById('move');
        video.style.transform = "translateX(-420px)"
        let play = document.querySelector('video')
   })

    let close = document.getElementById('close')
        close.addEventListener('click', function(e) {
        e.preventDefault()
        let video = document.getElementById('move');
        video.style.transform = "translateX(420px)"
        let play = document.querySelector('video')
        play.pause();
    })

    let pause = document.querySelector('video')
    pause.addEventListener('click', function(){
        play = document.querySelector('video')
        play.style.cursor = 'pointer'
        play.play();  
    })
    

    // Icons control video
    let pauseIcon = document.querySelector('.pause-icon')
    pauseIcon.addEventListener('click', function(e){
        e.preventDefault()
        play = document.querySelector('video') 
        play.pause();
    })

    let playIcon = document.querySelector('.play-icon')
    playIcon.addEventListener('click', function (e) {
        e.preventDefault()
        play = document.querySelector('video')
        play.play();
    })

  

   

  
