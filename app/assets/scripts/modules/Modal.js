import $ from'jquery'

class Modal{
    constructor(){
        this.openModalBtn = $(".open-modal");   //btn that triggers the modal
        this.modal = $(".modal"); //the modal
        this.closeModalBtn = $(".modal__close"); //The X in the upper right in the modal
        this.events();
    }
    events(){
        //clicking the modal btn
        this.openModalBtn.click(this.openModal.bind(this));
        //clicking the X in modal
        this.closeModalBtn.click(this.closeModal.bind(this));
        //pushes any key on keyboard
        $(document).keyup(this.keyPressHandler.bind(this)); //when user click on any key, fires the handler
    }

    keyPressHandler(key){
        //if key pressed is ESC, then close modal
        if(key.keyCode == 27){ //27 = esc key
            this.closeModal();
        }
    }
    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
        /*
            * By default, when a 'a href' is clicked, it will navigate back up (because of the href), 
            * return false to deny that behaviour
        */
    }
    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;