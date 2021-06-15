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
    hours: {
        openHoursWeek: 1,
        openHoursSaturday: 2,
        openHoursSunday: 3
    }
  },
  computed: {
    totalAmount() {
      return this.costOfApples + this.costOfBananas + this.costOfCoconuts
    }
  }
})
