// per inizializzare i plugin la sintassi è:
//dayjs.extend(window.dayjs_plugin_NOME_DEL_PLUGIN);
dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);


dayjs.locale('it');



const app = new Vue({
  el: '#app',
  data: {
    user: {
      name: 'Sofia',
      avatar: '_io',
    },

    adesso: dayjs().format('DD/MM/YYYY HH:mm:ss'),
      // adesso2: dayjs().format('dddd D MMMM, YYYY'),
      // tempoPassato: dayjs('1945-04-25').fromNow(),
      // fineGuerraMondiale: dayjs('1945-04-25'),
      // sept11: dayjs('2001-09-11'),
      // confrontoDate: ''

    activeContact: 0,
    newMessage: '',
    leftSearchbarInput: '',


    contacts: [
      {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
              {
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
              },
              {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
              },
              {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'sent'
              }
          ],
      },
      {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
              {
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
              },
              {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent'
              },
              {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Alessandro B.',
          avatar: '_4',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Alessandro L.',
          avatar: '_5',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Ricordati di chiamare la nonna',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Va bene, stasera la sento',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Claudia',
          avatar: '_6',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao Claudia, hai novità?',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Non ancora',
                  status: 'received'
              },
              {
                  date: '10/01/2020 15:51:00',
                  message: 'Nessuna nuova, buona nuova',
                  status: 'sent'
              }
          ],
      },
      {
          name: 'Federico',
          avatar: '_7',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Fai gli auguri a Martina che è il suo compleanno!',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'Grazie per avermelo ricordato, le scrivo subito!',
                  status: 'received'
              }
          ],
      },
      {
          name: 'Davide',
          avatar: '_8',
          visible: true,
          messages: [
              {
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao, andiamo a mangiare la pizza stasera?',
                  status: 'received'
              },
              {
                  date: '10/01/2020 15:50:00',
                  message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 15:51:00',
                  message: 'OK!!',
                  status: 'received'
              }
          ],
      }
    ]
  },

  methods: {
    // ciao(){console.log('ajfpaisjfpiasjfpasijfpasjf')},

    // printMessagesRight(index) {
    //   // this.activeContact = index;
    //   const messagesRight = document.querySelector(".messages-right");
    //   messagesRight.innerHTML = '';
    //   for (mex of this.contacts[index].messages) {
    //     messagesRight.innerHTML += ` <div class="message ${mex.status}">
    //     <div class="message-text">
    //       ${mex.message}
    //     </div>
    //     <div class="message-time">
    //       ${mex.date}
    //     </div>
    //     </div> `;
    //   }
    // }, 

    getLastMessage(index) {
      const contact = this.contacts[index];
      const messages = contact.messages;
      const lastMessage = messages[messages.length - 1];
      return lastMessage.message;
    }, 

    getLastDate(index) {
      const contact = this.contacts[index];
      const messages = contact.messages;
      const lastMessage = messages[messages.length -1];
      return lastMessage.date;
    }, 

    sendNewMessage() {
      // console.log(this.newMessage);
      const contact = this.contacts[this.activeContact];
      const newMessage = {
        date: this.adesso, 
        message: this.newMessage,
        status: 'sent'
      }
      this.sendMessage(newMessage, contact);
      this.newMessage = '';
      setTimeout( () => {
        this.sendAnswerFake(contact);
      }, 3000)
    },

    sendMessage(message, target) {
      setTimeout( () => {
        target.messages.push(message);
      }, 1000);
    }, 

    sendAnswerFake(contact) {
      const message = {
        date: this.adesso, 
        message: 'ok!', 
        status: 'received'
      }
      this.sendMessage(message, contact);
    },

    // isThereStringInString(string1, string2) {
    //   let flag = true;
    //   for(i=0; i<string1.length; i++) {
    //     if(string1[i] !== string2[i]) {
    //       string1 = string1.slice(0, i-1);
    //       flag = false;
    //     }
    //     return string1;
    //   }

    // },

    filtraUtenti() {
      this.contacts.forEach( (utente) => {
        if ( utente.name.toLowerCase().includes(this.leftSearchbarInput.toLowerCase()) ) {
          utente.visible = true;
        }
        else { utente.visible = false;}
      } )
    },

  },

  mounted() {

    // this.confrontoDate = this.sept11.diff(this.fineGuerraMondiale,'year');

    // setInterval( () => {
    // console.log(this.leftSearchbarInput);
    // console.log('ciao');
    // }, 3000);

    // console.log(this.isThereStringInString('marf', 'marco'));
    // this.searchContact('ma');

  }


})


