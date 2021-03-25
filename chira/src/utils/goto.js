export const goTo = (element)=>{
    const height = document.scrollingElement.scrollHeight / 2
    switch (element) {
      case '/about':
        document.scrollingElement.scrollTop = 0
        document.scrollingElement.scrollBy({
          top: height,
          left: 0,
          behavior: 'smooth'
        }) 
        break;
      case '/contact':
        document.scrollingElement.scrollTop = 0
        document.scrollingElement.scrollBy({
          top: height*2,
          left: 0,
          behavior: 'smooth'
        }) 
        break;
      default:
        document.scrollingElement.scrollBy({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }) 
        break;
    }
  }