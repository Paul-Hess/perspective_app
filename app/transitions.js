export default function(){
  this.transition(
    this.toRoute('sign-up'),
    this.toRoute('about'),
    this.toRoute('post'),
    this.use('toUp')
  );
  this.transition(
    this.toRoute('index'),
    this.use('fade')
  );
}
