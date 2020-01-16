import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ap-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements AfterViewInit {
	
    ngAfterViewInit() {
        $(function () {

            $(".sidebartoggler").on('click', function () {
                if ($("body").hasClass("mini-sidebar")) {
                    $("body").trigger("resize");
                    $(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
                    $("body").removeClass("mini-sidebar");
                    $('.navbar-brand span').show();
                    //$(".sidebartoggler i").addClass("ti-menu");
                }
                else {
                    $("body").trigger("resize");
                    $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
                    $("body").addClass("mini-sidebar");
                    $('.navbar-brand span').hide();
                    //$(".sidebartoggler i").removeClass("ti-menu");
                }
            });

            
            var url = window.location.toString();
            var element = $('ul#sidebarnav li').filter(function () {
                let a = <HTMLAnchorElement>this;
                return (a.href == url ? true : false);
            }).addClass('active').parent().addClass('active');
            while (true) {
                if (element.is('li')) {
                    element = element.parent().addClass('in').parent().addClass('active');
                }
                else {
                    break;
                }
            }

            (<any>$('#sidebarnav')).metisMenu();
        });
    }
}
