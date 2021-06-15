var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

//app.message = 'I have changed the data!';

const app2 = new Vue({
  el: '#app2',
  data: {
    costOfApples: 6,
    costOfBananas: 2,
    costOfCoconuts: 8,
    openHoursWeek: "09h - 17h",
    openHoursSaturday: "09h30 - 18h00",
    openHoursSunday: "10h - 16h"
  },
  computed: {
    totalAmount() {
      return this.costOfApples + this.costOfBananas + this.costOfCoconuts
    }
  }
})
