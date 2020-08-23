// Animation Header


TweenMax.to('#bt1', 3.5, {

    delay: 1,
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('#txt1', 2, {

    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('#flag', 3.5, {

    delay: 1,
    opacity: 1,
    ease: Expo.easeInOut
})

// Animation NavBar


TweenMax.to('#main-nav', 3, {

    opacity: 1,
    ease: Expo.easeInOut
})


TweenMax.from('#main-nav', 1.4, {

    delay: .1,
    y: -73,
    ease: Expo.easeIn
})


TweenMax.from('#animation-greenSock a:nth-child(1)', 1.5, {
    delay: 1.5,
    opacity: 0,
    y: -15,
    ease: Expo.easeInOut,
})

TweenMax.from('#animation-greenSock a:nth-child(2)', 1.5, {
    delay: 1.5,
    opacity: 0,
    y: -15,
    ease: Expo.easeInOut,
})