//Definicion de clases
class Channel {
  constructor(name, subscribers, description, numberOfViews) {
    this.name = name;
    this.subscribers = subscribers;
    this.description = description;
    this.numberOfViews = numberOfViews;
    this.dateCreated = new Date();
  }
  getViewsandSubscribers() {
    return `This channel ${this.name} has ${this.subscribers} subscribers and ${this.numberOfViews} views`;
  }
  getGeneralInfo() {
    return `This channel was created on ${this.dateCreated} and has ${this.numberOfViews} views`;
  }
}

class Comment {
  constructor(user, likes, content, videoNameAssociated, numberOfResponses) {
    this.user = user;
    this.likes = likes;
    this.content = content;
    this.dateCreated = new Date();
    this.videoNameAssociated = videoNameAssociated;
    this.numberOfResponses = numberOfResponses;
  }
  getComment() {
    return `The user ${this.user} commented ${this.content}`;
  }
  getGeneralInfo() {
    return `This comment was uploaded on ${this.dateCreated} to the video ${this.videoNameAssociated}`;
  }
}

class Video {
  constructor(title, likes, description, numberOfViews, numberOfComments) {
    this.title = title;
    this.likes = likes;
    this.description = description;
    this.numberOfViews = numberOfViews;
    this.dateCreated = new Date();
    this.numberOfComments = numberOfComments;
  }

  getViewsandLikes() {
    return `This video ${this.title} has ${this.likes} likes and ${this.numberOfViews} views`;
  }
  getGeneralInfo() {
    return `This video was uploaded on ${this.dateCreated} and has ${this.numberOfComments} comments`;
  }
}

//Instancias de clases
//Channel
console.log("Instancia de Channel");
const channel = new Channel(
  "Johnn RP",
  100,
  "Here are some videos made by me",
  4000
);
console.log("Nombre del canal: " + channel.name);
console.log("Descripcion: " + channel.description);
console.log(channel.getViewsandSubscribers());
console.log(channel.getGeneralInfo());

//Comment
console.log("\nInstancia de Comment");
const comment = new Comment(
  "Frank Saldana",
  100,
  "La gastronomía mexicana nunca decepciona",
  "Suadero estilo Taqueria | La Capital",
  19
);
console.log("Nombre del usuario: " + comment.user);
console.log("Comentario: " + comment.content);
console.log(comment.getComment());
console.log(comment.getGeneralInfo());

//Comment
console.log("\nInstancia de Video");
const video = new Video("Trolololo", 100, "Video by Eduard Khin", 4000, 50);
console.log("Nombre del video: " + video.title);
console.log("Descripcion: " + video.description);
console.log(video.getViewsandLikes());
console.log(video.getGeneralInfo());
