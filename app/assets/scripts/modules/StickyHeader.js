import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader{
    constructor(){
        this.siteHeader = $(".site-header");
        this.headerTriggerElem = $(".large-hero__title");
        this.createHeaderWaypoint();
    }

    createHeaderWaypoint(){
        var that = this;
        new Waypoint({
            element: that.headerTriggerElem[0],
            handler : function(direction){
                if(direction == "down"){
                    that.siteHeader.addClass("site-header--dark");
                }
                else if(direction == "up"){
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }
}

export default StickyHeader;