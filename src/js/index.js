class MobileNav{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelector(navLinks)
        this.activeClass = "active"
        this.handleClick= this.handleClick.bind(this)
    }

    
}