function fadeOutLoadingOverlay(){$loadingOverlay.addClass("loaded")}function showTeaserView(){$teaserView.addClass("active"),setTimeout(function(){$loadingOverlay.removeClass("active")},2e3)}function navClicked(e){$(e.target).hasClass("mute-btn")||$(this).find("ul").toggleClass("active")}function resizeBrowser(){var e=$(window.location.hash.toLowerCase()).offset().top;$("html, body").scrollTop(e)}function anchorItemClicked(){var e=$(this).attr("href"),n=$(this),i=$(e);return 1===i.length&&($("body > div.view").removeClass("start-animation"),i.addClass("start-animation"),$("html, body").animate({scrollTop:i.offset().top},1e3),setTimeout(function(){$pagePosHeadline.text(n.text()),window.location.hash=e.toUpperCase()},1e3)),$nav.find("ul").removeClass("active"),!1}function scrollToTop(){$("html, body").scrollTop(0)}function muteBtnClicked(){$(this).toggleClass("active"),$(this).hasClass("active")?$soundMainTheme[0].pause():$soundMainTheme[0].play()}function initVariables(){$nav=$(".navigation"),$pagePosHeadline=$nav.find(".page-pos-headline"),$muteBtn=$nav.find(".mute-btn"),$loadingOverlay=$(".main-loading-overlay-view"),$teaserView=$(".teaser-view"),$soundMainTheme=$(".sound-main-theme")}function bindEvents(){$(window).on("resize",resizeBrowser),$nav.on("click",navClicked),$nav.on("click","a",anchorItemClicked),$muteBtn.on("click",muteBtnClicked)}function main(){scrollToTop(),fadeOutLoadingOverlay(),showTeaserView()}function init(){initVariables(),bindEvents(),main()}function error(e){console.error(e)}var requiredScripts=["jquery/jquery-2.1.3.min"],$loadingOverlay,$nav,$pagePosHeadline,$muteBtn,$soundMainTheme,$teaserView;require(requiredScripts,init,error);