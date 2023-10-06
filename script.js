const navFeatures = document.getElementById('navFeatures') || null
const navDownload = document.getElementById('navDownload')
const navContact = document.getElementById('navContact')

const setActiveLink = (activeBtn) => {
    if (activeBtn == 'navFeatures') {
        navFeatures.classList.add('active')
        navDownload.classList.remove('active')
        navContact.classList.remove('active')
    }
    else if (activeBtn == 'navDownload') {
        navFeatures.classList.remove('active')
        navDownload.classList.add('active')
        navContact.classList.remove('active')
    }
    else if (activeBtn == 'navContact') {
        navFeatures.classList.remove('active')
        navDownload.classList.remove('active')
        navContact.classList.add('active')
    }
    else {
        navFeatures.classList.remove('active')
        navDownload.classList.remove('active')
        navContact.classList.remove('active')
    }
}

function isEndOfPage() {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    return scrollTop + windowHeight + 5 >= documentHeight;
}

navFeatures.addEventListener('click', () => {
    setActiveLink('navFeatures')
})
navDownload.addEventListener('click', () => {
    setActiveLink('navDownload')
})
navContact.addEventListener('click', () => {
    setActiveLink('navContact')
})

