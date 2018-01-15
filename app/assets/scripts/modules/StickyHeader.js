import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
    constructor(){
        this.siteHeader = $(".site-header");
        this.headerTriggerElem = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section"); //gets every page section
        this.headerLinks = $(".primary-nav a"); //gets all link in nav bar
        this.createPageSectionWaypoint();
        this.addSmoothScrolling();
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
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

    createPageSectionWaypoint(){
        var that = this;
        this.pageSections.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element : currentPageSection,
                handler : function(direction){
                    if(direction == "down"){
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link"); //extract the data (id) from data-matching-link attribute
                        that.headerLinks.removeClass("is-current-link"); //remove highlight first
                        $(matchingHeaderLink).addClass("is-current-link"); //apply highlight to scrolled area corresponding link
                    }
                },
                offset : "22%"
            });
            new Waypoint({
                element : currentPageSection,
                handler : function(direction){
                    if(direction == "up"){
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link"); //extract the data (id) from data-matching-link attribute
                        that.headerLinks.removeClass("is-current-link"); //remove highlight first
                        $(matchingHeaderLink).addClass("is-current-link"); //apply highlight to scrolled area corresponding link
                    }
                },
                offset : "-40%"
            });
        });
    }
}

export default StickyHeader;