# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./assets/images/results.png)

### Links

- Solution URL: [(https://github.com/Kofiastro/Social-proof-section-solution)]
- Live Site URL:[(https://poetic-paletas-7d009c.netlify.app/)]

## My process
Using Tailwindcss i have been able to work on designs much faster and i want to learn more by working on more projects at frontendmentor to help me be good at it.

### Built with

- TailwindCss

### What I learned

Sixth Project using TailwindCSS.So far so good.I was faced with one big issue regarding arranging rating cards stacked on top and also the testimonial card section. .I was able to figure it out using items-baseline in tailwind css and using margin left for the stars rating cards.i also figured how to properly set background  multiple images using input.css by writng raw css to make it possible.The code below was one important key thing i was able to identify.

```html
  <!--Rating Section-->
          <!--Card 2-->
            <div class="p-2 rounded-lg space-y-2 bg-LightGrayishMagenta md:flex md:justify-center md:max-w-md  md:space-x-3 md:-ml-20">
              <div class="flex justify-center space-x-2 items-center ">
                <img src="./images/icon-star.svg" alt=""> <img src="./images/icon-star.svg" alt=""><img
                  src="./images/icon-star.svg" alt=""><img src="./images/icon-star.svg" alt=""><img
                  src="./images/icon-star.svg" alt="">
              </div>
              <div class="text-center text-VeryDarkMagenta font-bold text-md">
                Rated 5 Stars in Report Guru
              </div>
            </div>

```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body{
    background-image:url('../images/bg-pattern-top-desktop.svg'),url('../images/bg-pattern-bottom-desktop.svg');
    background-repeat:no-repeat ,no-repeat;
    background-position:left top,right bottom;
    background-size:40%,70%;
}
@media(max-width:576px){
body{
    background-image:url('../images/bg-pattern-top-mobile.svg'),url('../images/bg-pattern-bottom-mobile.svg');
    background-position:left top,right bottom;
    background-size:contain,contain;
}
}
```
## Author

- Frontend Mentor - [@Kofiastro](https://www.frontendmentor.io/profile/kofiastro)

## Acknowledgments

Big thanks to Traversy Media and the frontendmentor team 🎉
