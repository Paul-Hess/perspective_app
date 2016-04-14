export default function(){
  this.transition(
    this.toRoute('index'),
    this.toRoute('sign-up'),
    this.toRoute('sign-in'),
    this.toRoute('about'),
    this.useAndReverse('fade', { duration: 1000 })
  );
}
