// Object
function $(id) {
var about = {
   Version: 0.1,
   Author: "Adam Elliott",
   Created: "July 2017",
   Updated: "28 July 2018"
};

if (id) {
   if (window === this) {
      return new $(id);
   }
   this.e = document.querySelector(id);
   return this;
} else {
   return about;
}
};

// Methods    
$.prototype = {
  click: function (event) {
     this.e.addEventListener("click", event);
     return this;
  },
  hover: function (event) {
     this.e.addEventListener("mouseover", event);
     return this;
  },          
  hide: function () {
     this.e.style.display = 'none';
     return this;
  },
  show: function () {
     this.e.style.display = 'inherit';
     return this;
  },
  addClass: function (event) {
     this.e.classList.add(event);
     return this;
  },
  removeClass: function (event) {
     this.e.classList.remove(event);
     return this;
  },
  toggleClass: function (event) {
      this.e.classList.toggle(event);
      return this;
  }  
};