import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from "react";
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

export default function Animations() {


  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();
  

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");
    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char,i) => {

      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars'})

      gsap.from(text.chars, {
              scrollTrigger: {
                trigger: char,
                start: 'top 70%',
                end: 'bottom 30%',
                scrub: true,
              },
              opacity: 0.2,
              stagger: 0.1,
      })
  })

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      //FIRST TO SECOND

    tl

    .to(".carousel-content", {
      ease: "none",
      x: () => -(cont.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: cont,
        pin: cont,
        start: "center center",
        end: () => "+=" + (cont.scrollWidth - window.innerWidth),
        scrub: true,
        invalidateOnRefresh: true,
      }
    })

    // REVIEW ONE

    .to(".review-one", {
      width: isMobile ? "90%" : "70%",
      height: isMobile ? "300px" : "62.5vh",
      opacity: 1,
        scrollTrigger: {
          trigger: ".review-one",
          start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".review-one-text", {
        fontSize: "1.7vw",
        opacity: 1,
          scrollTrigger: {
            trigger: ".review-one",
            start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".review-logo-one", {
          height: "3vw",
          width: "3vw",
          opacity: 1,
            scrollTrigger: {
              trigger: ".review-one",
              start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".review-logo-text-one", {
            fontSize: "1.25vw",
            opacity: 1,
              scrollTrigger: {
                trigger: ".review-one",
                start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })

    // REVIEW TWO

    .to(".review-two", {
      width: isMobile ? "90%" : "70%",
      height: isMobile ? "300px" : "62.5vh",
      opacity: 1,
        scrollTrigger: {
          trigger: ".review-two",
          start: "top bottom-=100", // Start when the bottom of the viewport touches the bottom of .project-one
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".review-two-text", {
        fontSize: "1.7vw",
        opacity: 1,
          scrollTrigger: {
            trigger: ".review-two",
            start: "top bottom-=100", // Start when the bottom of the viewport touches the bottom of .project-one
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".review-logo-two", {
          height: "3vw",
          width: "3vw",
          opacity: 1,
            scrollTrigger: {
              trigger: ".review-two",
              start: "top bottom-=100", // Start when the bottom of the viewport touches the bottom of .project-one
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".review-logo-text-two", {
            fontSize: "1.25vw",
            opacity: 1,
              scrollTrigger: {
                trigger: ".review-two",
                start: "top bottom-=100", // Start when the bottom of the viewport touches the bottom of .project-one
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })

    // REVIEW THREE

    .to(".review-three", {
      width: isMobile ? "90%" : "70%",
      height: isMobile ? "300px" : "62.5vh",
      opacity: 1,
        scrollTrigger: {
          trigger: ".review-three",
          start: "top bottom-=200", // Start when the bottom of the viewport touches the bottom of .project-one
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".review-three-text", {
        fontSize: "1.7vw",
        opacity: 1,
          scrollTrigger: {
            trigger: ".review-three",
            start: "top bottom-=200", // Start when the bottom of the viewport touches the bottom of .project-one
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".review-logo-three", {
          height: "3vw",
          width: "3vw",
          opacity: 1,
            scrollTrigger: {
              trigger: ".review-three",
              start: "top bottom-=200", // Start when the bottom of the viewport touches the bottom of .project-one
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".review-logo-text-three", {
            fontSize: "1.25vw",
            opacity: 1,
              scrollTrigger: {
                trigger: ".review-three",
                start: "top bottom-=200", // Start when the bottom of the viewport touches the bottom of .project-one
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })

    // REVIEW FOUR

    .to(".review-four", {
      width: isMobile ? "90%" : "70%",
      height: isMobile ? "300px" : "62.5vh",
      opacity: 1,
        scrollTrigger: {
          trigger: ".review-four",
          start: "top bottom-=400", // Start when the bottom of the viewport touches the bottom of .project-one
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".review-four-text", {
        fontSize: "1.7vw",
        opacity: 1,
          scrollTrigger: {
            trigger: ".review-four",
            start: "top bottom-=400", // Start when the bottom of the viewport touches the bottom of .project-one
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".review-logo-four", {
          height: "3vw",
          width: "3vw",
          opacity: 1,
            scrollTrigger: {
              trigger: ".review-four",
              start: "top bottom-=400", // Start when the bottom of the viewport touches the bottom of .project-one
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".review-logo-text-four", {
            fontSize: "1.25vw",
            opacity: 1,
              scrollTrigger: {
                trigger: ".review-four",
                start: "top bottom-=400", // Start when the bottom of the viewport touches the bottom of .project-one
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })


    })
  }, [])


  return (
    <>
    </>
  );
}