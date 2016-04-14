export default function(){
  this.transition(
    this.fromRoute('sign-up'),
    this.fromRoute('sign-in'),
    this.fromRoute('about'),
    this.use('toUp', { duration: 1000 })
  )
  this.transition(
    this.fromRoute('index'),
    this.use('fade', { duration: 1000 })
  );
}
