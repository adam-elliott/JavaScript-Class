function Movie(title) {
                        this.title = title;
                        this.ratings = [];
                        this.addRating = function(n) {
                                                this.ratings.push(n);
                                                let sum = 0;
                                                for (let i=0; i < this.ratings.length; i++) {
                                                                        sum += parseInt(this.ratings[i]);
                                                                        this.avgRating = sum/this.ratings.length;
                                                                         }
                                                }
}

let movie = new Movie("Titanic");

movie.addRating(10);
console.log(movie.avgRating);

movie.addRating(6);
console.log(movie.avgRating);