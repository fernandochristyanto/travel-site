import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
    constructor(elems, offset){
        this.itemsToReveal = elems;
        this.hideInitially();
        this.offset = offset;
        this.createWaypoints();
    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
        this.itemsToReveal.addClass("reveal-item--left-offset");
    }

    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){
            var currentItem = this;
            new Waypoint({
                element : currentItem,
                handler : function(){
                    $(currentItem).addClass("reveal-item--is-visible");
                    $(currentItem).addClass("reveal-item--no-offset");
                },
                offset : that.offset
            });
        });
    }
}

export default RevealOnScroll;