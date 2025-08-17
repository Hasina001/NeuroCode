import gsap from "gsap";

export const animateHomeElements = (elements) => {
  const { image1, image2, h1, p, bouton, badges } = elements;
  
  gsap.set([image1, image2], { opacity: 0, scale: 0.8 });
  gsap.set([h1, p, bouton], { opacity: 0, y: 30 });
  gsap.set(badges, { opacity: 0, y: 20 });
  
  const tl = gsap.timeline();

  tl.to(image1, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" })
    .to(h1, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "<0.2")
    .to(p, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "<0.2")
    .to(bouton, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "<0.2")
    .to(badges, { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      ease: "power2.out" 
    }, "<0.3");
};