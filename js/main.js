// Milestone 1:
// Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const { createApp } = Vue;

createApp ({
  data() {
    return {
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      index: 0,
      autoplayFlag: false,
      inverseFlag: false,
    }
  },
  methods: {
    interval: function() {
      this.autoplayFlag = !this.autoplayFlag
      // console.log(this.autoplayFlag);
      const play = setInterval(() => {
        // if (this.autoplayFlag) {          
        //   if (this.index === this.images.length - 1 && this.inverseFlag === false) {
        //     this.index = 0
        //   } else {
        //     if(this.inverseFlag) {
        //       if (this.index === 0) {
        //         this.index = this.images.length - 1;
        //       } else {
        //         this.index--;
        //       }
        //     } else {
        //       this.index++;
        //     }
        //   }
        // } else {
        //   clearInterval(play);
        // }
        this.autoplayFlag ? this.index === this.images.length -1 && this.inverseFlag === false ? this.index = 0 : this.inverseFlag ? this.index === 0 ? this.index = this.images.length -1 : this.index-- : this.index++ : clearInterval(play);
      },3000)
    },
    toggleInverse: function () {
      this.inverseFlag = !this.inverseFlag;
      // console.log(this.inverseFlag);
    }
  }
}).mount("#app")

