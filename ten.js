vue.component('modal',{
    template: 
    <div class="modal" is-active>
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Quo quos quaerat dolore repudiandae dolor doloribus suscipit ullam similique voluptas. 
             Natus ipsum est dolorem temporibus fuga architecto quis rerum corporis debitis.
        </p>
    </div>
       Any other Bulma elements you want 
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div> 
    

});

new vue({
    el: '#root',

    data: {
        Show Modal: False
    }
});  