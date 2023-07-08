//===================================================MY AOS UNIVERSAL
function myAosImg(elm, a, aap, ad){
    elm.setAttribute('data-aos', a)
    elm.setAttribute('data-aos-anchor-placement', aap)
    elm.setAttribute('data-aos-duration', ad)
}

const myFadeIn_bb = document.querySelectorAll('.myFadeIn_bb')
for( mf=0; mf<myFadeIn_bb.length; mf++ ){
    myFadeIn_bb[mf].setAttribute('data-aos', 'fade-in')
    myFadeIn_bb[mf].setAttribute('data-aos-anchor-placement', 'bottom-bottom')
}

const myFadeIn_cb = document.querySelectorAll('.myFadeIn_cb')
for( mf=0; mf<myFadeIn_cb.length; mf++ ){
    myFadeIn_cb[mf].setAttribute('data-aos', 'fade-in')
    myFadeIn_cb[mf].setAttribute('data-aos-anchor-placement', 'center-bottom')
}

const myFadeUp_bb = document.querySelectorAll('.myFadeUp_bb')
for( let mf=0; mf<myFadeUp_bb.length; mf++ ){
    myFadeUp_bb[mf].setAttribute('data-aos', 'fade-up')
    myFadeUp_bb[mf].setAttribute('data-aos-anchor-placement', 'bottom-bottom')
    myFadeUp_bb[mf].setAttribute('data-aos-duration', '600')
}

const myFadeUp_cb = document.querySelectorAll('.myFadeUp_cb')
for( let mf=0; mf<myFadeUp_cb.length; mf++ ){
    myFadeUp_cb[mf].setAttribute('data-aos', 'fade-up')
    myFadeUp_cb[mf].setAttribute('data-aos-anchor-placement', 'center-bottom')
    myFadeUp_cb[mf].setAttribute('data-aos-duration', '600')
}

//===================================================NAVBAR ICON HOVER
const iconlinks = document.querySelectorAll('nav .iconlink')

for(let il=0; il<iconlinks.length; il++){
    const p = iconlinks[il].querySelector('p')
    const p_width = p.clientWidth
    iconlinks[il].setAttribute('data-p', p_width)
    p.style.width = '0'
    p.style.paddingLeft = '0'

    iconlinks[il].onmouseover = (e)=>{
        e.preventDefault()
        
        let p2 = iconlinks[il].querySelector('p')
        const p2_width = iconlinks[il].getAttribute('data-p')
        p2.style.width = `${p2_width}px`
        p2.style.paddingLeft = '10px'
    }

    iconlinks[il].onmouseout = ()=>{
        p.style.width = '0'
        p.style.paddingLeft = '0'
    }
}

//===================================================NAVBAR ANIM
const nav = document.querySelector('nav')
const navbar = nav.querySelector('#navbar')
const btnNav = nav.querySelector('#menu')
const dotAll = nav.querySelectorAll('.dot')
const ch_menu = nav.querySelector('#ch-menu p')

const bgNav = nav.querySelector('.bg-nav')
const secBgNav = bgNav.querySelectorAll('.bg-nav span')
const navHide = nav.querySelector('#nav-hide')

const navshow = 'navshow'
const bgNavShow = 'bgNavShow'
const navbarShow = 'navbar-show'
const bgShow = 'bgShow'
const bodyHide = 'bodyHide'
const navbarShowScroll = 'navbar-show-scroll'
const navHideShow1 = 'nav-hide-show1'
const navHideShow2 = 'nav-hide-show2'
const transitionFromCss = 300

btnNav.onclick = (e)=>{
    e.preventDefault()

    nav.classList.toggle(navshow)

    for(let da=0; da<dotAll.length; da++){
        dotAll[da].classList.toggle('dotYellow')
        if(dotAll[da].id){
            dotAll[da].classList.toggle('dotHide')
        }
    }

    let numTime = []

    if( nav.classList.contains(navshow) ){
        if(window.scrollY > 100) wsbttwh()
        bgNav.classList.add(bgNavShow)
        navbar.classList.add(navbarShow)
        for(let bn=0; bn<secBgNav.length; bn++){
            let bnTime = 200
            if( bn >= 1 ){
                bnTime = bnTime * bn
                setTimeout(() => {
                    secBgNav[bn].classList.add(bgShow)
                    if(bn == (secBgNav.length-1)){
                        setTimeout(() => {
                            document.body.classList.add(bodyHide)
                            navbar.classList.add(navbarShowScroll)
                            ch_menu.innerText = 'close'
                        }, transitionFromCss)
                    }
                }, bnTime)
                numTime.push(bnTime)
            }else{
                secBgNav[bn].classList.add(bgShow)
            }
        }

        // SHOW NAV HIDE
        const sum = numTime.reduce((a, b)=> a + b, 0)
        setTimeout(() => {
            navHide.classList.add(navHideShow1)
            setTimeout(() => {
                navHide.classList.add(navHideShow2)
            }, transitionFromCss)
        }, sum)

    }else{
        const indexSecBgNav = secBgNav.length-1
        for(let bn=indexSecBgNav; bn>=0; bn--){
            // REMOVE NAV HIDE
            navHide.classList.remove(navHideShow2)

            setTimeout(() => {
                // REMOVE NAV HIDE
                navHide.classList.remove(navHideShow1)

                let bnTime = 200
                if( bn < indexSecBgNav ){
                    bnTime = bnTime * (indexSecBgNav - bn)
                    setTimeout(() => {
                        secBgNav[bn].classList.remove(bgShow)
                        if(bn == 0){
                            setTimeout(() => {
                                if(window.scrollY > 100) wsbttws()
                                bgNav.classList.remove(bgNavShow)
                                navbar.classList.remove(navbarShow, navbarShowScroll)
                                document.body.classList.remove(bodyHide)
                                ch_menu.innerText = 'menu'
                            }, transitionFromCss)
                        }
                    }, bnTime)
                }else{
                    secBgNav[bn].classList.remove(bgShow)
                }
            }, transitionFromCss);
        }

    }
}

// NAV LINK HOVER
const thislink = nav.querySelectorAll('#thislink')
const link2Show_large = 'link2Show_large'
const link2Show_small = 'link2Show_small'
const active_small = 'active_small'
const active_large = 'active_large'

for( let l1=0; l1<thislink.length; l1++ ){

    thislink[l1].onmouseover = ()=>{
        thislink[l1].classList.add(active_large)
        const getLink2 = thislink[l1].nextElementSibling
        if( getLink2 != null ){
            getLink2.classList.add(link2Show_large)
            getLink2.onmouseover = ()=>{
                thislink[l1].classList.add(active_large)
                getLink2.classList.add(link2Show_large)
            }

            getLink2.onmouseout = ()=>{
                getLink2.classList.remove(link2Show_large)
            }
        }
    }

    thislink[l1].onmouseout = ()=>{
        thislink[l1].classList.remove(active_large)
        const getLink2 = thislink[l1].nextElementSibling
        if( getLink2 != null ){
            getLink2.classList.remove(link2Show_large)
            getLink2.onmouseout = ()=>{
                thislink[l1].classList.remove(active_large)
                getLink2.classList.remove(link2Show_large)
            }
        }
    }

    thislink[l1].onclick = (e)=>{
        if(thislink[l1].hasAttribute('data-subLink')){
            e.preventDefault()
            const getLink2 = thislink[l1].nextElementSibling
            if( getLink2 != null ){
                getLink2.classList.toggle(link2Show_small)
                thislink[l1].classList.toggle(active_small)
                thislink[l1].querySelector('i').classList.toggle('toUp')
            }
        }
    }
}


const mainNav = nav.querySelector('#main-nav')
const logo = nav.querySelector('.boxnavlogo #logo')
const iconSvg = nav.querySelectorAll('.boxnavlink svg')
const iconP = nav.querySelectorAll('.boxnavlink p')
const textBtnNav = btnNav.querySelector('p')

let oldVal = 0
let newVal = 0

function wsbttws(){
    mainNav.classList.add('main-nav-bgwhite')
    mainNav.classList.add('main-nav-shrink')
    logo.classList.add('toBlack')
    for( let isg=0; isg<iconSvg.length; isg++ ){
        iconSvg[isg].classList.add('toBlack')
        iconP[isg].classList.add('toBlack')
    }
    for(let da=0; da<dotAll.length; da++){
        dotAll[da].classList.add('dotToYellow')
    }
    textBtnNav.classList.add('toBlack')
}

function wsbttwh(){
    mainNav.classList.remove('main-nav-bgwhite')
    mainNav.classList.remove('main-nav-shrink')
    logo.classList.remove('toBlack')
    for( let isg=0; isg<iconSvg.length; isg++ ){
        iconSvg[isg].classList.remove('toBlack')
        iconP[isg].classList.remove('toBlack')
    }
    for(let da=0; da<dotAll.length; da++){
        dotAll[da].classList.remove('dotToYellow')
    }
    textBtnNav.classList.remove('toBlack')
}

window.addEventListener('scroll', (e) => {
    if(window.scrollY > 100){
        wsbttws()
    }else{
        wsbttwh()
    }

    if(window.scrollY > 200){
    }else{
    }

    newVal = window.scrollY;
    if (oldVal < newVal) {
        // UP
    } else if (oldVal > newVal) {
        // DOWN
    }

    oldVal = newVal;
});

//===================================================SEE IMAGE
const modalImg = document.querySelector('#modal-img')
const imgOfModal = modalImg.querySelector('#img')
const crossModalImg = modalImg.querySelector('#close')
const downloadModalImg = modalImg.querySelector('#downloadImg')

const btnSeeImage = document.querySelectorAll('#see-img')

for(let bi=0; bi<btnSeeImage.length; bi++){
    btnSeeImage[bi].onclick = (e)=>{
        e.preventDefault()

        const dataUrlImg = btnSeeImage[bi].getAttribute('data-urlImg')
        
        addModalImg(dataUrlImg)
        
        func_ModalImg()
    }
}

function addModalImg(urlImg){
    imgOfModal.style.backgroundImage = `url(${urlImg})`
    modalImg.classList.remove('hide-modal-img')
}

function removeModalImg(){
    modalImg.classList.add('hide-modal-img')
}

function func_ModalImg(){
    downloadModalImg.onclick = ()=>{
        console.log('ok')
    }

    crossModalImg.onclick = ()=>{
        removeModalImg()
    }
    
    window.onclick = (e)=>{
        if( !modalImg.classList.contains('hide-modal-img') ){
            const c1 = e.target.closest('#box-content-modal-img')
            const c2 = e.target.closest('#see-img')
            if( !c1 && !c2 ){
                removeModalImg()
            }
        }
    }
}