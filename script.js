const buttons = document.querySelectorAll('section.buisnes .busines-text button')


buttons.forEach(button => {
    const container = button.closest('.busines-text')
    const info = container.querySelector('p#info')
    let click = 1
    
    button.addEventListener("click", (event)=>{
        if(click === 1){
            info.style.display = "block";
            click = 2
        } else if (click === 2){
            info.style.display = "none";
            click = 1
        }
    })
})


const projectButtons = document.querySelectorAll('section.project .projects-btns button')
const projects = document.querySelectorAll('section.project .projects .projects-item')

const visibleAll = () => {
    projects.forEach(project => (
        project.style.display = 'block'
    ))
}

const categorize = (target) => {
    visibleAll()
    projects.forEach(project => {
        const type = project.getAttribute('data-type')

        if (type !== target) {
            project.style.display = 'none'
        }

    })
}

projectButtons.forEach(button => {
    const target = button.getAttribute('target')


    button.addEventListener('click', () => {
        if (target === 'all' ) {
            visibleAll()
        } else {
            categorize(target)
        }
    })

})