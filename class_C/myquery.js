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
   if (typeof(id) == "object") {
      this.e = [id];
   } else {
         this.e = document.querySelectorAll(id);
   }
   return this;
   
} else {
   return about;
}
};

// Methods    
$.prototype = {
  click: function (event) {
    for (let i=0; i<this.e.length; i++){
    this.e[i].addEventListener("click", event);
   }
   return this;
  },
  hover: function (event) {
     this.e[0].addEventListener("mouseover", event);
     return this;
  },          
  hide: function () {
     this.e[0].style.display = 'none';
     return this;
  },
  show: function () {
     this.e[0].style.display = 'inherit';
     return this;
  },
  addClass: function (event) {
     this.e[0].classList.add(event);
     return this;
  },
  removeClass: function (event) {
     this.e[0].classList.remove(event);
     return this;
  },
  toggleClass: function (event) {
      this.e[0].classList.toggle(event);
      return this;
  },
  attr : function (event) {
   return this.e[0].getAttribute(event);
  }
};

//for (let node of nodesList){  
//}