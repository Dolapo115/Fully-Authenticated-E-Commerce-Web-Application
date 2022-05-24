const topBar = document.getElementById('top-bar')
    const hamburger = document.getElementById('hamburger')
    const cancel = document.getElementById('cancel')
    const navigation = document.getElementById('navigation')
    const getStarted = document.getElementById('get-started')
    const home = document.getElementById('home')
    const mediaQuery = window.matchMedia('(max-width: 600px)')

        if (mediaQuery.matches){
            topBar.appendChild(hamburger);
            topBar.removeChild(navigation);
            topBar.removeChild(cancel);
            navigation.style.height = '92vh';
        }
        
        if (!mediaQuery.matches){
            topBar.removeChild(hamburger);
            topBar.removeChild(cancel);
            topBar.appendChild(navigation);
        }

        hamburger.addEventListener('click', ()=>{
            topBar.appendChild(navigation);
            topBar.removeChild(hamburger)
            navigation.appendChild(cancel);
            // topBar.style.height = '200px';
        })

        cancel.addEventListener('click', ()=>{
            topBar.removeChild(navigation);
            topBar.appendChild(hamburger)
            navigation.removeChild(cancel);
            //topBar.style.height = '80px';
        })