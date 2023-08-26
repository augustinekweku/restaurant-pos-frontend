import Vue from "vue";

export default class extends Vue {
  greeting: string = "";
  message: string = "world";
  get hello() {
    return this.greeting + " " + this.message + "!";
  }
}
