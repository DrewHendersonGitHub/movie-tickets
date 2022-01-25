function Ticket(movieNames, times, ages, isNew) {
  this.movieNames = movieNames;
  this.times = times;
  this.prices = 0;
  this.ages = ages;
  this.isNew = isNew;
}

Ticket.prototype.getCost = function() {

  if (this.movieNames === "1") {
    this.prices = 10;
  }
  else if (this.movieNames === "2") {
    this.prices = 15;
  }
  else if (this.movieNames === "3") {
    this.prices = 18;
  }
  else if (this.movieNames === "4") {
    this.prices = 12;
  }
  else {
    this.prices = 10;
  }

  if (this.times <= 12) {
    this.prices -=5;
  }
  else if (this.times >= 16 && this.prices < 20) {
    this.prices += 5;
  }
  else if (this.times >= 20) {
    this.prices -= 3;
  }

  if (this.ages <= 3) {
    this.prices = 0;
  }
  else if (this.ages <= 16) {
    this.prices -=2.5;
  }
  else if (this.ages >= 60) {
    this.prices -=7;
  }

  if (this.isNew === "1") {
    this.prices *= 2;
  }

  return this.prices;
};

$(document).ready(function() {
  $("#movie-form").submit(function(event) {
    event.preventDefault();
    let newTicket = new Ticket($("#movieNames").val(), $("#times").val(), $("input#age").val(), $("#is-new").val());
    $("#show-cost").html("<h3>Your ticket is... $" + newTicket.getCost() + "!</h3>");    
  });
});