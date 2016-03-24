var firsttouch;
! function(e) {
    "use strict";

    function a() {
        return -1 != Qe.indexOf("win") ? "win" : -1 != Qe.indexOf("mac") ? "mac" : ""
    }

    function t() {
        if (-1 != Qe.indexOf("opera") || -1 != Qe.indexOf("opr")) {
            var e, a;
            return e = /(opera|opr\/?)\s?([\d\.]+)/.exec(Qe), a = e ? parseInt(e[2]) : null, "opera opera" + a
        }
        if (-1 != Qe.indexOf("msie") || -1 != Qe.indexOf("trident")) {
            var e, a;
            return e = /(msie|rv:?)\s?([\d\.]+)/.exec(Qe), a = e ? parseInt(e[2]) : null, "ie ie" + a
        }
        if (-1 != Qe.indexOf("edge")) {
            var e, a;
            return e = /(edge\/?)\s?([\d\.]+)/.exec(Qe), a = e ? parseInt(e[2]) : null, "edge edge" + a
        }
        if (-1 != Qe.indexOf("chrome")) {
            var e, a;
            return e = /(chrome|chrome\/?)\s?([\d\.]+)/.exec(Qe), a = e ? parseInt(e[2]) : null, "chrome chrome" + a
        }
        if (-1 != Qe.indexOf("safari")) {
            var e, a;
            return e = /(safari|version\/?)\s?([\d\.]+)/.exec(Qe), a = e ? parseInt(e[2]) : null, "safari safari" + a
        }
        if (-1 != Qe.indexOf("firefox")) {
            var e, a;
            return e = /(firefox|rv:?)\s?([\d\.]+)/.exec(Qe), a = e ? parseInt(e[2]) : null, "firefox firefox" + a
        }
        return ""
    }

    function s() {
        return -1 !== Qe.indexOf("iphone") ? "iphone" : -1 !== Qe.indexOf("ipad") ? "ipad" : -1 !== Qe.indexOf("android") ? "android" : -1 !== Qe.indexOf("windows phone") ? "windows-phone" : -1 !== Qe.indexOf("silk") ? "kindle" : -1 !== Qe.indexOf("playbook") || -1 !== Qe.indexOf("bb10") ? "blackberry" : ""
    }

    function n() {
        {
            var e = $("#js-wrapper"),
                a = $(".menu-label-page");
            e.is(".page-home") ? pe.addClass("top-page").removeClass("sub-page") : pe.addClass("sub-page").removeClass("top-page")
        }
        e.is(".page-home") ? a.html("Home") : e.is(".page-about") ? a.html("About Us") : e.is(".page-member") ? a.html("Member") : e.is(".page-works") ? a.html("Works") : e.is(".page-works-detail") ? a.html('<span class="icon-back"></span>Back') : e.is(".page-careers") ? a.html("Careers") : e.is(".page-contact") ? a.html("Contact") : e.is(".page-notfound") && a.html("Not Found"), a.children(':not("span")').andSelf().contents().each(function() {
            3 == this.nodeType && $(this).replaceWith($(this).text().replace(/(\S)/g, "<span>$1</span>"))
        })
    }

    function i() {
        var e = $(".js-text-split");
        e.length && (e.children(':not("span")').andSelf().contents().each(function() {
            3 == this.nodeType && $(this).replaceWith($(this).text().replace(/(\S)/g, "<span>$1</span>"))
        }), e.removeClass("js-text-split"))
    }

    function o() {
        var e = me.find(".path");
        e.each(function() {
            var e = $(this),
                a = e.get(0).getTotalLength();
            e.css({
                "stroke-dasharray": a,
                "stroke-dashoffset": a
            })
        })
    }

    function r() {
        var e = 650,
            a = 1e3 / 60 / e / 4,
            t = U(.77, 0, .175, 1, a),
            s = (U(.175, .885, .32, 1.275, a), [{
                clipPathOrigin: "M93,0c-1.7,0-3.6,0-6.2,0H68.4c-6.3,0-10.7,0-16.9,0H33.3C30.5,0,29,0,27,0H0v20 h120V0H93z"
            }, {
                clipPathTransform: "M93,0c-1.6,0.7-4.1,1.4-6.2,3.1L68.4,16.9c-4.7,3.5-12.2,3.5-16.9,0L33.3,3.1 C31.1,1.4,28.6,0.7,27,0H0v20h120V0H93z"
            }]),
            n = (s[0].clipPathOrigin, s[1].clipPathTransform),
            i = Snap(".header-clip-path"),
            o = i.select(".path-1"),
            r = $(".header-clip .path-2"),
            l = $(".subpage-header .hgroup");
        o.animate({
            d: n
        }, e, t, function() {}), TweenLite.set(l, {
            css: {
                opacity: 1
            }
        }), Ae || TweenLite.set(r, {
            css: {
                transform: "translate3d(0, -7.5px, 0)",
                opacity: 0
            }
        }), TweenLite.to(r, .25, {
            css: {
                transform: "translate3d(0, 0, 0)",
                opacity: 1
            },
            delay: .5,
            ease: Power1.easeOut
        }), TweenLite.to($(".subpage-header").find(".border-3"), .25, {
            css: {
                height: 0
            },
            delay: 0,
            ease: Quart.easeIn
        }), TweenLite.to($(".subpage-icon"), .25, {
            css: {
                transform: "translate3d(0, 0, 0)",
                opacity: 1
            },
            delay: .5,
            ease: Power1.easeOut
        }), TweenMax.staggerTo($(".subpage-header h1").find("span"), .45, {
            css: {
                transform: "translate3d(0, 0, 0)"
            },
            ease: Quart.easeOut,
            delay: .5
        }, .015), TweenMax.staggerTo($(".subpage-header h2").find("span"), .45, {
            css: {
                transform: "translate3d(0, 0, 0)"
            },
            ease: Quart.easeOut,
            delay: .6
        }, .015)
    }

    function l() {
        var e = 650,
            a = 1e3 / 60 / e / 4,
            t = U(.77, 0, .175, 1, a),
            s = (U(.175, .885, .32, 1.275, a), [{
                clipPathOrigin: "M93,0c-1.7,0-3.6,0-6.2,0H68.4c-6.3,0-10.7,0-16.9,0H33.3C30.5,0,29,0,27,0H0v20 h120V0H93z"
            }, {
                clipPathTransform: "M93,0c-1.6,0.7-4.1,1.4-6.2,3.1L68.4,16.9c-4.7,3.5-12.2,3.5-16.9,0L33.3,3.1 C31.1,1.4,28.6,0.7,27,0H0v20h120V0H93z"
            }]),
            n = (s[0].clipPathOrigin, s[1].clipPathTransform),
            i = Snap(".header-clip-path"),
            o = i.select(".path-1"),
            r = $(".header-clip .path-2");
        o.animate({
            d: n
        }, e, t, function() {}), TweenLite.set(r, {
            css: {
                transform: "translate3d(0, -7.5px, 0)",
                opacity: 0
            }
        }), TweenLite.to(r, .25, {
            css: {
                transform: "translate3d(0, 0, 0)",
                opacity: 1
            },
            delay: .5,
            ease: Power1.easeOut
        })
    }

    function c() {
        pe.removeClass("view-pc view-sp");
        pe.addClass(G >= 1024 ? "view-pc" : "view-sp")
    }

    function d() {
        $(".js-animation").viewportChecker({
            classToAdd: "",
            classToAddForFullView: "",
            classToRemove: "",
            removeClassAfterAnimation: !1,
            offset: 100,
            invertBottomOffset: !0,
            repeat: !1,
            scrollHorizontal: !1,
            callbackFunction: function(e, a) {
                if (TweenLite.to(e, .45, {
                        css: {
                            transform: "translate3d(0, 0 ,0)",
                            opacity: 1,
                            clearProps: "all"
                        },
                        ease: Quart.easeOut,
                        delay: 0,
                        onComplete: function() {
                            e.removeClass("js-animation").removeClass("no-transoform")
                        }
                    }), e.find(".green-label").length && TweenLite.to(e.find(".green-label"), .65, {
                        css: {
                            transform: "perspective(500px) rotate(0)"
                        },
                        ease: Back.easeOut,
                        delay: .35
                    }), e.is(".js-stagger")) {
                    var t = e.find("span");
                    TweenMax.staggerTo(t, .65, {
                        css: {
                            transform: "translate3d(0, 0, 0)",
                            opacity: 1
                        },
                        ease: Quart.easeOut,
                        delay: 0
                    }, .015, function() {
                        e.removeClass("js-stagger")
                    })
                }
            }
        })
    }

    function f() {
        pe.addClass("is-open");
        var e = $("#js-menu"),
            a = $("#js-menu-btn"),
            t = a.width(),
            s = $(".menu-label-page").innerWidth() - t,
            n = $(".menu-label-page"),
            i = $(".menu-label-close"),
            o = $("#js-gnav-wrap"),
            r = $("#js-gnav-mask");
        re = new TimelineLite, re.add([TweenLite.set(n, {
            css: {
                transform: "translate3d(0, 0, 0)",
                autoAlpha: 1
            }
        }), TweenLite.set(i, {
            css: {
                transform: "translate3d(-10px, 0, 0)",
                autoAlpha: 0
            }
        }), TweenLite.to(a, .65, {
            css: {
                transform: "translate3d(-" + s + "px, 0, 0)"
            },
            "transform-style": "flat",
            delay: 0,
            ease: Expo.easeInOut
        }), TweenLite.to(n, .25, {
            css: {
                transform: "translate3d(10px, 0, 0)",
                autoAlpha: 0
            },
            delay: 0,
            ease: Power1.easeInOut
        }), TweenLite.to(i, .25, {
            css: {
                transform: "translate3d(0, 0, 0)",
                autoAlpha: 1
            },
            delay: .25,
            ease: Power1.easeInOut,
            onComplete: function() {
                Ce = !0
            }
        }), TweenLite.to(e.find(".line-1"), .45, {
            css: {
                transform: "scale(0, 1) translate3d(0, 0, 0)",
                "-webkit-transform-origin": "0 50% 0",
                "transform-origin": "0 50% 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .15,
            ease: Expo.easeIn
        }), TweenLite.to(e.find(".line-2"), .45, {
            css: {
                transform: "scale(0, 1) translate3d(0, 0, 0)",
                "-webkit-transform-origin": "0 50% 0",
                "transform-origin": "0 50% 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .2,
            ease: Expo.easeIn
        }), TweenLite.to(e.find(".line-3"), .45, {
            css: {
                transform: "scale(0, 1) translate3d(0, 0, 0)",
                "-webkit-transform-origin": "0 50% 0",
                "transform-origin": "0 50% 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .25,
            ease: Expo.easeIn
        }), TweenLite.to(e.find(".line-4 i"), .45, {
            css: {
                transform: "scale(1, 1)",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .8,
            ease: Expo.easeOut
        }), TweenLite.to(e.find(".line-5 i"), .45, {
            css: {
                transform: "scale(1, 1)",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .9,
            ease: Expo.easeOut
        }), TweenLite.set(o, {
            css: {
                autoAlpha: 1
            }
        }), TweenLite.set([o.find(".split-1"), o.find(".split-2"), o.find(".split-3"), o.find(".split-4")], {
            css: {
                "-webkit-transform-origin": "50% 100% 0",
                "transform-origin": "50% 100% 0"
            }
        }), TweenLite.to(o.find(".split-1"), .35, {
            css: {
                transform: "scale(1, 1)"
            },
            delay: .35,
            ease: Quart.easeInOut
        }), TweenLite.to(o.find(".split-2"), .35, {
            css: {
                transform: "scale(1, 1)"
            },
            delay: .4,
            ease: Quart.easeInOut
        }), TweenLite.to(o.find(".split-3"), .35, {
            css: {
                transform: "scale(1, 1)"
            },
            delay: .45,
            ease: Quart.easeInOut
        }), TweenLite.to(o.find(".split-4"), .35, {
            css: {
                transform: "scale(1, 1)"
            },
            delay: .5,
            ease: Quart.easeInOut
        }), TweenLite.to(o.find(".gnav-logo"), 1, {
            css: {
                opacity: 1
            },
            delay: .6,
            ease: Power1.easeInOut
        }), TweenLite.to(o.find(".copyright"), 1, {
            css: {
                opacity: 1
            },
            delay: .6,
            ease: Power1.easeInOut
        }), TweenMax.staggerTo(o.find("a"), .75, {
            css: {
                transform: "translate3d(0, 0, 0)"
            },
            ease: Quart.easeOut,
            delay: .6
        }, .035), TweenLite.to(r, .65, {
            css: {
                autoAlpha: .35
            },
            delay: .75,
            ease: Power1.easeInOut
        })]), $("#js-wrapper").is(".page-home") && TweenLite.to($("#js-tnav"), .35, {
            css: {
                autoAlpha: 0
            },
            ease: Power1.easeInOut
        })
    }

    function p() {
        pe.removeClass("is-open");
        var e = $("#js-menu"),
            a = $("#js-menu-btn"),
            t = a.width(),
            s = ($(".menu-label-page").innerWidth() - t, $(".menu-label-page")),
            n = $(".menu-label-close"),
            i = $("#js-gnav-wrap"),
            o = $("#js-gnav-mask");
        le = new TimelineLite, le.add([TweenLite.to(a, .65, {
            css: {
                transform: "translate3d(0, 0, 0)"
            },
            delay: 0,
            ease: Expo.easeInOut
        }), TweenLite.to(s, .25, {
            css: {
                transform: "translate3d(0, 0, 0)",
                autoAlpha: 1
            },
            delay: .5,
            ease: Power1.easeInOut,
            onComplete: function() {
                Ce = !1
            }
        }), TweenLite.to(n, .25, {
            css: {
                transform: "translate3d(-10px, 0, 0)",
                autoAlpha: 0
            },
            delay: 0,
            ease: Power1.easeInOut
        }), TweenLite.to(e.find(".line-4 i"), .45, {
            css: {
                transform: "scale(0, 1)",
                "-webkit-transform-origin": "100% 50% 0",
                "transform-origin": "100% 50% 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .15,
            ease: Expo.easeIn
        }), TweenLite.to(e.find(".line-5 i"), .45, {
            css: {
                transform: "scale(0, 1)",
                "-webkit-transform-origin": "0 50% 0",
                "transform-origin": "0 50% 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .35,
            ease: Expo.easeIn
        }), TweenLite.to(e.find(".line-1"), .45, {
            css: {
                transform: "scale(1, 1) translate3d(0, 0, 0)",
                "-webkit-transform-origin": "100% 50% 0",
                "transform-origin": "100% 50% 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .9,
            ease: Expo.easeOut
        }), TweenLite.to(e.find(".line-2"), .45, {
            css: {
                transform: "scale(1, 1) translate3d(0, 0, 0)",
                "-webkit-transform-origin": "100% 50% 0",
                "transform-origin": "100% 50% 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .85,
            ease: Expo.easeOut
        }), TweenLite.to(e.find(".line-3"), .45, {
            css: {
                transform: "scale(1, 1) translate3d(0, 0, 0)",
                "-webkit-transform-origin": "100% 50% 0",
                "transform-origin": "100% 50% 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .8,
            ease: Expo.easeOut
        }), TweenLite.set([i.find(".split-1"), i.find(".split-2"), i.find(".split-3"), i.find(".split-4")], {
            css: {
                "-webkit-transform-origin": "50% 0 0",
                "transform-origin": "50% 0 0"
            }
        }), TweenLite.to(i.find(".split-1"), .35, {
            css: {
                transform: "scale(1, 0)",
                "-webkit-transform-origin": "50% 0 0",
                "transform-origin": "50% 0 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .35,
            ease: Quart.easeInOut
        }), TweenLite.to(i.find(".split-2"), .35, {
            css: {
                transform: "scale(1, 0)",
                "-webkit-transform-origin": "50% 0 0",
                "transform-origin": "50% 0 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .4,
            ease: Quart.easeInOut
        }), TweenLite.to(i.find(".split-3"), .35, {
            css: {
                transform: "scale(1, 0)",
                "-webkit-transform-origin": "50% 0 0",
                "transform-origin": "50% 0 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .45,
            ease: Quart.easeInOut
        }), TweenLite.to(i.find(".split-4"), .35, {
            css: {
                transform: "scale(1, 0)",
                "-webkit-transform-origin": "50% 0 0",
                "transform-origin": "50% 0 0",
                clearProps: "-webkit-transform-origin, transform-origin"
            },
            delay: .5,
            ease: Quart.easeInOut,
            onComplete: function() {
                TweenLite.set(i, {
                    css: {
                        autoAlpha: 0
                    }
                })
            }
        }), TweenLite.to(i.find(".gnav-logo"), .35, {
            css: {
                opacity: 0
            },
            delay: 0,
            ease: Power1.easeInOut
        }), TweenLite.to(i.find(".copyright"), .35, {
            css: {
                opacity: 0
            },
            delay: 0,
            ease: Power1.easeInOut
        }), TweenMax.staggerTo(i.find("a"), .35, {
            css: {
                transform: "translate3d(0, -2em, 0)",
                clearProps: "all"
            },
            ease: Quart.easeIn,
            delay: 0
        }, .035), TweenLite.to(o, 1, {
            css: {
                autoAlpha: 0
            },
            delay: 0,
            ease: Power1.easeInOut,
            onComplete: function() {
                TweenLite.set([o, i], {
                    css: {
                        autoAlpha: 0
                    }
                })
            }
        })]), $("#js-wrapper").is(".page-home") && TweenLite.to($("#js-tnav"), .35, {
            css: {
                autoAlpha: 1
            },
            delay: .45,
            ease: Power1.easeInOut
        })
    }

    function u() {
        fe.on({
            mouseenter: function() {
                var e = $(this);
                TweenMax.staggerTo(e.find("span"), .25, {
                    css: {
                        color: "#1CD300"
                    },
                    ease: Power1.easeIn
                }, .02)
            },
            mouseleave: function() {
                var e = $(this);
                TweenMax.staggerTo(e.find("span"), .25, {
                    css: {
                        color: "#868686"
                    },
                    ease: Power1.easeOut
                }, .02)
            }
        }, "#js-gnav a")
    }

    function m() {
        fe.on({
            mouseenter: function() {
                var e = $(".menu-label").find("span");
                TweenMax.staggerTo(e, .15, {
                    css: {
                        color: "#1CD300"
                    },
                    ease: Power1.easeIn
                }, .025, function() {
                    TweenMax.staggerTo(e, .15, {
                        css: {
                            color: "#FFFFFF",
                            clearProps: "color"
                        },
                        ease: Power1.easeOut
                    }, .025)
                })
            }
        }, "#js-menu-btn, .is-open #js-menu, .is-open.sub-page-detail .menu, .sub-page-detail .menu-label")
    }

    function w() {
        function e() {
            fe.on({
                mouseenter: function() {
                    var e = $(".start-text").find("span");
                    TweenMax.staggerTo(e, .15, {
                        css: {
                            color: "#1CD300"
                        },
                        ease: Power1.easeIn
                    }, .015, function() {
                        TweenMax.staggerTo(e, .15, {
                            css: {
                                color: "#FFFFFF"
                            },
                            ease: Power1.easeOut
                        }, .015)
                    });
                    var a = Snap(".start-heart");
                    a.animate({
                        d: l
                    }, t, n)
                },
                mouseleave: function() {
                    var e = Snap(".start-heart");
                    e.animate({
                        d: r
                    }, t, n)
                }
            }, "#js-start")
        }
        var a = $("#js-canvas");
        te();
        var t = 650,
            s = 1e3 / 60 / t / 4,
            n = U(.77, 0, .175, 1, s),
            i = U(.175, .885, .32, 1.275, s),
            o = [{
                pathScale: "M34.9,26c1,0,1.9,0.3,2.6,1c0.7,0.7,1,1.5,1,2.5c0,0.6-0.1,1.2-0.3,1.7c-0.2,0.6-0.6,1.2-1.2,1.9c-0.6,0.7-1.2,1.3-1.6,1.7 c-0.5,0.5-1.3,1.2-2.4,2.2L32,38l-1-0.8c-1.4-1.3-2.4-2.2-3.1-2.9c-0.6-0.6-1.2-1.4-1.7-2.2c-0.5-0.9-0.8-1.7-0.8-2.5 c0-1,0.3-1.9,1-2.5c0.7-0.7,1.5-1,2.6-1c1.2,0,2.2,0.5,2.9,1.4C32.8,26.5,33.8,26,34.9,26z M32.1,36.2c1-0.9,1.7-1.5,2.2-2 c0.5-0.5,1-1,1.5-1.6c0.6-0.6,0.9-1.2,1.2-1.6c0.2-0.5,0.3-0.9,0.3-1.4c0-0.7-0.2-1.2-0.7-1.6c-0.4-0.4-1-0.6-1.6-0.6 c-0.5,0-1,0.1-1.4,0.4c-0.4,0.3-0.7,0.7-0.9,1.1h-1.2c-0.2-0.5-0.5-0.8-0.9-1.1c-0.4-0.3-0.9-0.4-1.4-0.4c-0.7,0-1.2,0.2-1.6,0.6 c-0.4,0.4-0.7,1-0.7,1.6c0,0.5,0.1,0.9,0.3,1.4c0.2,0.5,0.6,1,1.2,1.6c0.6,0.6,1.1,1.1,1.5,1.6c0.5,0.5,1.2,1.1,2.2,2H32.1 L32.1,36.2z"
            }, {
                pathOrigin: "M37.6,20.5c2,0,3.6,0.7,4.9,2c1.3,1.3,2,2.9,2,4.9c0,1.1-0.2,2.2-0.6,3.3c-0.4,1.1-1.2,2.3-2.4,3.6s-2.2,2.4-3.1,3.3 c-0.9,0.9-2.4,2.3-4.5,4.2L32,43.5l-1.8-1.6c-2.7-2.4-4.6-4.2-5.8-5.4c-1.2-1.2-2.3-2.6-3.3-4.3c-1-1.6-1.5-3.2-1.5-4.7 c0-1.9,0.7-3.5,2-4.9c1.3-1.3,2.9-2,4.9-2c2.3,0,4.1,0.9,5.6,2.6C33.5,21.4,35.4,20.5,37.6,20.5z M32.1,40c1.9-1.7,3.3-2.9,4.2-3.8 c0.9-0.9,1.9-1.9,2.9-3c1.1-1.2,1.8-2.2,2.2-3.1c0.4-0.9,0.6-1.8,0.6-2.6c0-1.2-0.4-2.3-1.3-3.1c-0.8-0.8-1.9-1.2-3.1-1.2 c-1,0-1.9,0.3-2.7,0.8c-0.8,0.5-1.4,1.2-1.7,2.1h-2.3c-0.3-0.9-0.9-1.6-1.7-2.1c-0.8-0.5-1.7-0.8-2.7-0.8c-1.2,0-2.3,0.4-3.1,1.2 c-0.8,0.8-1.3,1.9-1.3,3.1c0,0.9,0.2,1.7,0.6,2.6c0.4,0.9,1.1,1.9,2.2,3.1c1.1,1.2,2,2.2,2.9,3s2.3,2.1,4.2,3.8l0.1,0.1L32.1,40z"
            }, {
                pathTransform: "M43.9,27.2l-0.2,10.6c0,0.7-0.5,1.4-1.1,1.8l-9.4,5.3c-0.3,0.2-0.6,0.2-0.8,0c-0.3,0-0.5-0.1-0.7-0.2 L23.5,40c-0.5-0.3-0.5-0.7,0-1l8.2-4.6c0.2-0.1,0.4-0.2,0.7-0.2l0-0.5c0-0.7,0.5-1.4,1.1-1.8l9.4-5.3C43.5,26.3,43.9,26.6,43.9,27.2 z M23.3,29.5l6.1,3.4c0.9,0.5,1.9,0.3,2.4-0.5c0.4-0.8,0.1-1.8-0.8-2.2l-6.2-3.5l7.4-4.5l7.4,4.1c0.8,0.5,1.8,0.2,2.3-0.5 c0.4-0.8,0.1-1.7-0.7-2.2l-7.9-4.4c-0.5-0.3-1.1-0.3-1.5-0.1c-0.3,0-0.7,0.2-1,0.4l-9.3,5.7c-0.1,0.1-0.2,0.2-0.4,0.3 c-0.1,0.1-0.3,0.2-0.4,0.4c-0.1,0.1-0.2,0.2-0.2,0.3c-0.2,0.3-0.2,0.6-0.2,0.9c0,0,0,0,0,0l0,9.7c0,1,0.7,1.8,1.6,1.8 c0.9,0,1.6-0.8,1.6-1.8L23.3,29.5z"
            }],
            r = (o[0].pathScale, o[1].pathOrigin),
            l = o[2].pathTransform,
            c = Snap(".start-circle"),
            d = Snap(".start-heart");
        c.animate({
            "stroke-dashoffset": 0
        }, t, n, function() {
            d.animate({
                d: r,
                opacity: 1
            }, t, i, function() {
                g()
            });
            !De && G >= 1024 ? e() : null;
            TweenLite.to(a, 2, {
                css: {
                    opacity: 1
                },
                ease: Power1.easeOut
            }), setTimeout(function() {
                $(".start-ring").addClass("pulse")
            }, 550)
        });
        var f = $(".start-line"),
            p = $(".start-text"),
            u = new TimelineLite;
        u.add([TweenLite.to(f, .45, {
            css: {
                transform: "translate3d(0, 0, 0) scale(1, 1)",
                opacity: 1
            },
            ease: Quart.easeOut,
            delay: .25
        }), TweenLite.to(p, .65, {
            css: {
                transform: "translate3d(0, 0, 0)",
                opacity: 1
            },
            ease: Quart.easeOut,
            delay: .45
        })]), v()
    }

    function h() {
        if (G > 600) var e = (G - 446) / 2;
        else var e = (G - 262) / 2;
        $(".line-edge").css({
            width: e
        })
    }

    function g() {
        fe.on({
            click: function() {
                !De && G >= 1024 && !be && (oe.play(), be = !0), TweenLite.set($("#js-start"), {
                    css: {
                        "pointer-events": "none"
                    }
                }), TweenLite.set($(".intro-second"), {
                    css: {
                        autoAlpha: 1
                    }
                }), $(".start-ring").removeClass("pulse");
                var e = $("#js-start"),
                    a = $("#js-tnav"),
                    t = $(".start-line"),
                    s = $(".start-text"),
                    n = $(".intro-second").find("h1"),
                    i = $(".intro-second").find("h2"),
                    o = $(".video-mask"),
                    r = $e - 57 + 2,
                    l = $(".sp-video-poster-wrap").find(".poster-1"),
                    c = $(".sp-video-poster-wrap").find(".poster-2"),
                    d = new TimelineLite;
                d.add([TweenLite.to(l, 1, {
                    css: {
                        autoAlpha: 0
                    },
                    ease: Power1.easeInOut,
                    delay: 0
                }), TweenLite.to(c, 1, {
                    css: {
                        autoAlpha: 1
                    },
                    ease: Power1.easeInOut,
                    delay: 0
                }), TweenLite.to(o, 1, {
                    css: {
                        background: "#150C33",
                        opacity: .4
                    },
                    ease: Power1.easeInOut,
                    delay: 0
                }), TweenLite.to($(".start-heart"), .25, {
                    css: {
                        autoAlpha: 0
                    },
                    ease: Power1.easeInOut,
                    delay: 0
                }), TweenLite.to(e, 1, {
                    css: {
                        transform: "translate3d(0," + r + "px, 0) scale(.15, .5)",
                        opacity: 1
                    },
                    ease: Expo.easeInOut,
                    delay: .25
                }), TweenLite.to(e, .15, {
                    css: {
                        transform: "translate3d(0," + r + "px, 0) scale(.25, .25)",
                        opacity: 1
                    },
                    ease: Power1.easeOut,
                    delay: 1,
                    onComplete: function() {
                        TweenLite.set(a, {
                            css: {
                                autoAlpha: 1
                            }
                        }), TweenLite.to(e, .25, {
                            css: {
                                autoAlpha: 0
                            },
                            ease: Power1.easeOut
                        })
                    }
                }), TweenLite.to(t, .45, {
                    css: {
                        transform: "translate3d(0, 25px, 0) scale(1, 0)",
                        opacity: 1
                    },
                    ease: Quart.easeOut,
                    delay: .25
                }), TweenMax.staggerTo(s.find("span"), .45, {
                    css: {
                        transform: "translate3d(0, 1em, 0)"
                    },
                    ease: Quart.easeOut
                }, .015, function() {
                    TweenLite.set([t, s], {
                        css: {
                            autoAlpha: 0
                        }
                    })
                }), TweenMax.staggerTo(n.find("span"), .45, {
                    css: {
                        transform: "translate3d(0, 0, 0)"
                    },
                    ease: Quart.easeOut,
                    delay: .65
                }, .015), TweenMax.staggerTo(i.find("span"), .45, {
                    css: {
                        transform: "translate3d(0, 0, 0)"
                    },
                    ease: Quart.easeOut,
                    delay: .65
                }, .015), TweenLite.set(a.find("li").eq(5).find(".circle-1"), {
                    css: {
                        transform: "scale(1, 1)"
                    }
                }), TweenLite.to(a.find("li").eq(5).find(".circle-1"), .65, {
                    css: {
                        autoAlpha: 1
                    },
                    ease: Power1.easeOut,
                    delay: 1
                }), TweenLite.to([a.find("li").eq(4).find("span"), a.find("li").eq(6).find("span")], .45, {
                    css: {
                        transform: "scale(1, 1)"
                    },
                    ease: Quart.easeOut,
                    delay: 1.05
                }), TweenLite.to([a.find("li").eq(3).find(".circle-1"), a.find("li").eq(7).find(".circle-1")], .65, {
                    css: {
                        transform: "scale(1, 1)",
                        autoAlpha: 1
                    },
                    ease: Power1.easeOut,
                    delay: 1.1
                }), TweenLite.to([a.find("li").eq(2).find("span"), a.find("li").eq(8).find("span")], .45, {
                    css: {
                        transform: "scale(1, 1)"
                    },
                    ease: Quart.easeOut,
                    delay: 1.15
                }), TweenLite.to([a.find("li").eq(1).find(".circle-1"), a.find("li").eq(9).find(".circle-1")], .65, {
                    css: {
                        transform: "scale(1, 1)",
                        autoAlpha: 1
                    },
                    ease: Power1.easeOut,
                    delay: 1.2
                }), TweenLite.to([a.find("li").eq(0).find("span"), a.find("li").eq(10).find("span")], 1, {
                    css: {
                        transform: "scale(1, 1)"
                    },
                    ease: Quart.easeOut,
                    delay: 1.25
                }), TweenLite.to(a.find("li").eq(5).find(".tnav-text span"), .65, {
                    css: {
                        transform: "transform(0, 0, 0)",
                        autoAlpha: 1
                    },
                    ease: Quart.easeOut,
                    delay: 1.2
                }), TweenLite.to([a.find("li").eq(3).find(".tnav-text span"), a.find("li").eq(7).find(".tnav-text span")], .65, {
                    css: {
                        transform: "transform(0, 0, 0)",
                        autoAlpha: 1
                    },
                    ease: Quart.easeOut,
                    delay: 1.3
                }), TweenLite.to([a.find("li").eq(1).find(".tnav-text span"), a.find("li").eq(9).find(".tnav-text span")], .65, {
                    css: {
                        transform: "transform(0, 0, 0)",
                        autoAlpha: 1
                    },
                    ease: Quart.easeOut,
                    delay: 1.4,
                    onComplete: function() {
                        ne = !0
                    }
                })]), 1 === qe && (qe = 2), 2 === qe && ae()
            }
        }, "#js-start")
    }

    function v() {
        fe.on({
            mouseenter: function() {
                if (!De && G > 1024) {
                    var e = $(this);
                    TweenMax.staggerTo(e.find(".tnav-text span"), .15, {
                        css: {
                            color: "#1CD300"
                        },
                        ease: Power1.easeIn
                    }, .025, function() {
                        TweenMax.staggerTo(e.find(".tnav-text span"), .15, {
                            css: {
                                color: "#FFFFFF",
                                clearProps: "color"
                            },
                            ease: Power1.easeOut
                        }, .025)
                    })
                }
            },
            click: function(e) {
                e.preventDefault(), we.addClass("is-visible");
                var a = $(this);
                oe.pause(), be = !1, se();
                var t = $("#js-canvas"),
                    s = $(".intro-second .hgroup"),
                    n = $("#js-tnav"),
                    i = $("#js-video-wrapper"),
                    o = $("#intro-loading"),
                    r = a.data("header"),
                    l = $(".image-set").find('[data-header="' + r + '"]').attr("src");
                o.find(".subpage-header").css({
                    "background-image": "url(" + l + ")"
                });
                var a = $(this),
                    c = a.attr("href"),
                    d = new TimelineLite;
                d.add([TweenLite.to(t, .35, {
                    css: {
                        autoAlpha: 0
                    },
                    ease: Power1.easeInOut,
                    delay: .1
                }), TweenLite.to(s, .35, {
                    css: {
                        autoAlpha: 0
                    },
                    ease: Power1.easeInOut,
                    delay: 0
                }), TweenLite.to(n, .35, {
                    css: {
                        autoAlpha: 0
                    },
                    ease: Power1.easeInOut,
                    delay: .15
                }), TweenLite.to([i, o], 1, {
                    css: {
                        transform: "translate3d(0, -" + N + "px ,0)"
                    },
                    ease: Expo.easeInOut,
                    delay: .35,
                    onComplete: function() {
                        TweenLite.set(i, {
                            css: {
                                top: "-100%",
                                clearProps: "transform"
                            }
                        }), TweenLite.set(o, {
                            css: {
                                top: 0,
                                clearProps: "transform"
                            }
                        }), $.pjax({
                            url: c,
                            container: "#js-container",
                            fragment: "#js-container",
                            timeout: 2e4
                        })
                    }
                })]);
                var f = $("#js-circle-loader"),
                    p = $(".menu-inner"),
                    u = $(".menu-inner").height();
                TweenLite.to(p, .45, {
                    css: {
                        width: u
                    },
                    ease: Quart.easeOut,
                    onComplete: function() {
                        TweenLite.to(f, .45, {
                            css: {
                                autoAlpha: 1
                            },
                            ease: Power1.easeOut,
                            delay: .45
                        }), xe = !0
                    }
                })
            }
        }, "#js-tnav li a")
    }

    function T() {
        if (ie = $("#js-video"), oe = ie.get(0), G / 1.77777777778 > N) var e = G + G / 7,
            a = G / 1.77777777778 + G / 7;
        else var e = 1.77777777778 * N + N / 7,
            a = N + N / 7;
        ie.css({
            width: e,
            height: a,
            "margin-top": -a / 2,
            "margin-left": -e / 2
        })
    }

    function y() {
        r(), L(), $(".scroll-container").perfectScrollbar(), setTimeout(function() {
            !De && G >= 1024 ? d() : null
        }, 650), setTimeout(function() {
            V()
        }, 1300)
    }

    function L() {
        $(".service-detail-btn").on("click", function(e) {
            e.preventDefault();
            var a = $(this);
            if (a.is(".is-active")) {
                a.removeClass("is-active");
                var t = (a.data("service"), a.siblings(".service-detail-wrap")),
                    s = t.find(".service-detail-inner").innerHeight();
                TweenLite.to(t, .35, {
                    css: {
                        height: 0
                    },
                    ease: Quart.easeInOut,
                    delay: 0
                })
            } else {
                a.addClass("is-active");
                var t = (a.data("service"), a.siblings(".service-detail-wrap")),
                    s = t.find(".service-detail-inner").innerHeight();
                TweenLite.to(t, .35, {
                    css: {
                        height: s + "px"
                    },
                    ease: Quart.easeInOut,
                    delay: 0
                })
            }
        })
    }

    function C() {
        r(), b(), TweenLite.set($(".member-num"), {
            css: {
                opacity: 1
            }
        }), TweenMax.staggerTo($(".member-num").find("span"), .45, {
            css: {
                autoAlpha: 1
            },
            ease: Power1.easeOut,
            delay: .35
        }, .035), setTimeout(function() {
            !De && G >= 1024 ? d() : null
        }, 650)
    }

    function b() {
        $(".member-detail-btn").on("click", function(e) {
            e.preventDefault();
            var a = $(this),
                t = a.parents("li");
            t.toggleClass("is-active")
        })
    }

    function x() {
        ke = !1, r(), O(), k(), j();
        var e = $("#js-wnav"),
            a = $("#js-work-list");
        a.find("li").addClass("is-visible"), TweenLite.to(e, .35, {
            css: {
                autoAlpha: 1
            },
            ease: Power1.easeInOut,
            delay: .45
        }), TweenMax.staggerTo(a.find("li"), .65, {
            css: {
                transform: "translate3d(0, 0, 0)",
                autoAlpha: 1
            },
            ease: Expo.easeOut,
            delay: .45
        }, .035)
    }

    function O() {
        var e = $("#js-work-list"),
            a = e.width();
        ce = e.isotope({
            itemSelector: ".works-item",
            layoutMode: "fitRows",
            transitionDuration: 0,
            masonry: {
                columnWidth: a / 2
            }
        });
        var t = $("#js-wnav"),
            s = t.find("li"),
            e = $("#js-work-list");
        fe.on("click", "#js-wnav li, .green-label", function(a) {
            a.preventDefault();
            var t = e;
            t.infinitescroll("binding", "unbind"), t.data("infinitescroll", null), de.unbind(".infscr");
            var n = $("#js-mask");
            n.addClass("is-visible");
            var i = $("#js-point"),
                o = de.height(),
                r = 100;
            TweenLite.set(i, {
                css: {
                    height: o - r
                }
            });
            var l = !0,
                c = $("#js-wrapper"),
                d = $("#js-point").position().top;
            je && l || !We ? (TweenLite.to(c, .5, {
                scrollTo: {
                    y: d
                },
                delay: 0,
                ease: Expo.easeInOut
            }), We = !0) : (!je && l || We) && TweenLite.to(c, .5, {
                scrollTo: {
                    y: d - 80
                },
                delay: 0,
                ease: Expo.easeInOut
            });
            var f = $(this);
            if (s.removeClass("is-active"), f.is(".works-filter-list")) f.addClass("is-active");
            else {
                var p = f.parents("li");
                p.is(".website") ? s.eq(1).addClass("is-active") : p.is(".apps") ? s.eq(2).addClass("is-active") : p.is(".other") && s.eq(3).addClass("is-active")
            }
            var u = $("#js-grid-changer"),
                m = u.attr("data-mode");
            TweenLite.to(e, .35, {
                css: {
                    autoAlpha: 0
                },
                ease: Power1.easeOut,
                delay: 0,
                onComplete: function() {
                    var a = f.data("filter");
                    He = "." + a, ze = !1, ".*" === He && (He = "*", ze = !0), ce.isotope({
                        filter: He
                    }), G > 768 ? 1 == m ? A() : 2 == m && I() : P(), TweenLite.set(e.find("li"), {
                        css: {
                            transform: "translate3d(0, " + o + "px, 0)",
                            autoAlpha: 0
                        },
                        delay: .15,
                        onComplete: function() {
                            n.removeClass("is-visible"), TweenLite.set(e, {
                                css: {
                                    autoAlpha: 1
                                }
                            }), TweenMax.staggerTo(e.find("li.is-visible"), .65, {
                                css: {
                                    transform: "translate3d(0, 0, 0)",
                                    autoAlpha: 1
                                },
                                ease: Expo.easeOut,
                                delay: .1
                            }, .035, function() {
                                k()
                            });
                            var a = e.outerHeight(!0);
                            o > a ? TweenLite.set(i, {
                                css: {
                                    height: o - r
                                }
                            }) : TweenLite.set(i, {
                                css: {
                                    clearProps: "height"
                                }
                            })
                        }
                    })
                }
            })
        })
    }

    function j() {
        var e = $("#js-grid-changer");
        fe.on("click", "#js-grid-changer", function(a) {
            a.preventDefault();
            var t = $("#js-work-list"),
                s = t.width(),
                n = t;
            n.infinitescroll("binding", "unbind"), n.data("infinitescroll", null), de.unbind(".infscr");
            var i = $("#js-mask");
            i.addClass("is-visible");
            var o = $("#js-point"),
                r = de.height(),
                l = 100;
            TweenLite.set(o, {
                css: {
                    height: r - l
                }
            });
            var c = !0,
                d = $("#js-wrapper"),
                f = $("#js-point").position().top;
            je && c || !We ? (TweenLite.to(d, .5, {
                scrollTo: {
                    y: f
                },
                delay: 0,
                ease: Expo.easeInOut
            }), We = !0) : !je && c && TweenLite.to(d, .5, {
                scrollTo: {
                    y: f - 80
                },
                delay: 0,
                ease: Expo.easeInOut
            });
            var p = $(this),
                u = p.attr("data-mode");
            1 == u ? TweenLite.to(t, .35, {
                css: {
                    autoAlpha: 0
                },
                ease: Power1.easeOut,
                delay: 0,
                onComplete: function() {
                    e.removeClass("grid-mode-2").addClass("grid-mode-1"), t.removeClass("grid-mode-2").addClass("grid-mode-1"), p.attr({
                        "data-mode": 2
                    }), ce = t.isotope({
                        itemSelector: ".works-item",
                        layoutMode: "fitRows",
                        transitionDuration: 0,
                        masonry: {
                            columnWidth: s / 3
                        }
                    });
                    var a = $(".works-filter li.is-active").data("filter");
                    He = "." + a, ze = !1, ".*" === He && (He = "*", ze = !0), G > 768 ? I() : P(), TweenLite.set(t.find("li"), {
                        css: {
                            transform: "translate3d(0, " + r + "px, 0)",
                            autoAlpha: 0
                        },
                        delay: .15,
                        onComplete: function() {
                            i.removeClass("is-visible"), TweenLite.set(t, {
                                css: {
                                    autoAlpha: 1
                                }
                            }), TweenMax.staggerTo(t.find("li.is-visible"), .65, {
                                css: {
                                    transform: "translate3d(0, 0, 0)",
                                    autoAlpha: 1
                                },
                                ease: Expo.easeOut,
                                delay: .1
                            }, .035, function() {
                                k()
                            });
                            var e = t.outerHeight(!0);
                            r > e ? TweenLite.set(o, {
                                css: {
                                    height: r - l
                                }
                            }) : TweenLite.set(o, {
                                css: {
                                    clearProps: "height"
                                }
                            })
                        }
                    })
                }
            }) : 2 == u && TweenLite.to(t, .35, {
                css: {
                    autoAlpha: 0
                },
                ease: Power1.easeOut,
                delay: 0,
                onComplete: function() {
                    e.removeClass("grid-mode-1").addClass("grid-mode-2"), t.removeClass("grid-mode-1").addClass("grid-mode-2"), p.attr({
                        "data-mode": 1
                    }), ce = t.isotope({
                        itemSelector: ".works-item",
                        layoutMode: "fitRows",
                        transitionDuration: 0,
                        masonry: {
                            columnWidth: s / 3
                        }
                    });
                    var a = $(".works-filter li.is-active").data("filter");
                    He = "." + a, ze = !1, ".*" === He && (He = "*", ze = !0), A(), TweenLite.set(t.find("li"), {
                        css: {
                            transform: "translate3d(0, " + r + "px, 0)",
                            autoAlpha: 0
                        },
                        delay: .15,
                        onComplete: function() {
                            i.removeClass("is-visible"), TweenLite.set(t, {
                                css: {
                                    autoAlpha: 1
                                }
                            }), TweenMax.staggerTo(t.find("li.is-visible"), .65, {
                                css: {
                                    transform: "translate3d(0, 0, 0)",
                                    autoAlpha: 1
                                },
                                ease: Expo.easeOut,
                                delay: .1
                            }, .035, function() {
                                k()
                            });
                            var e = t.outerHeight(!0);
                            r > e ? TweenLite.set(o, {
                                css: {
                                    height: r - l
                                }
                            }) : TweenLite.set(o, {
                                css: {
                                    clearProps: "height"
                                }
                            })
                        }
                    })
                }
            })
        })
    }

    function k() {
        var e = $("#js-work-list"),
            a = $(".works-next"),
            t = he + "/works/page/",
            s = parseInt(2);
        a.find("a").attr({
            href: t + s + "/"
        }), e.infinitescroll("binding", "unbind"), e.data("infinitescroll", null), e.infinitescroll("retrieve"), $("#js-wrapper").unbind(".infscr"), e.infinitescroll({
            navSelector: ".works-next",
            nextSelector: ".works-next a",
            itemSelector: ".works-item",
            binder: $("#js-wrapper"),
            debug: !1,
            localMode: !0,
            animate: !1,
            extraScrollPx: 50,
            bufferPx: 150,
            msgText: "",
            loading: {
                img: "",
                finishedMsg: "Thanks for watching !",
                finished: function(e) {
                    a.find("a").attr({
                        href: t + parseInt(s + 1) + "/"
                    }), s++, ke && $("#infscr-loading.is-infscr-done").siblings("#infscr-loading").remove()
                }
            },
            errorCallback: function(e) {
                if (ke) {
                    var a = $("#infscr-loading");
                    a.is(".is-infscr-done") || $("#infscr-loading").remove()
                } else {
                    var a = $("#infscr-loading");
                    a.stop(), a.find("img").remove(), a.addClass("is-infscr-done"), TweenLite.set(a.find("div"), {
                        css: {
                            color: "#F8F8F8",
                            opacity: 0
                        }
                    }), TweenLite.to(a.find("div"), 1, {
                        css: {
                            color: "#1CB300",
                            opacity: 1
                        },
                        ease: Power1.easeOut,
                        delay: .25
                    }), ke = !0
                }
            }
        }, function(e) {
            if (ke) $(e).remove();
            else {
                var a = $(".works-filter li.is-active").data("filter");
                He = "." + a, ze = !1, ".*" === He && (He = "*", ze = !0);
                var t = $(e);
                ce.isotope("appended", t), ce.isotope({
                    filter: He
                }), TweenLite.set($(e), {
                    css: {
                        transform: "translate3d(0, " + N + "px, 0)",
                        autoAlpha: 0
                    },
                    delay: .15,
                    onComplete: function() {
                        var e = $("#js-grid-changer"),
                            a = e.attr("data-mode");
                        G > 768 ? 1 == a ? A() : 2 == a && I() : P(), TweenMax.staggerTo(t, .65, {
                            css: {
                                transform: "translate3d(0, 0, 0)",
                                autoAlpha: 1
                            },
                            ease: Expo.easeOut,
                            delay: .1
                        }, .035)
                    }
                })
            }
        })
    }

    function P() {
        var e = $("#js-work-list");
        if (ze) var a = e.find("li");
        else var a = e.find("li" + He);
        e.find('li:not("' + He + '")');
        e.find("li").removeClass("is-visible"), e.find("li").removeClass("has-green-1"), e.find("li").removeClass("has-green-2"), e.find("li").removeClass("has-green-3"), a.addClass("is-visible"), e.find(".is-visible").each(function(a) {
            var t = ($(this), a + 1);
            e.find(".is-visible").eq(2 * t - 1).addClass("has-green-2"), e.find(".is-visible").eq(2 * t - 1 - 1).addClass("has-green-1")
        })
    }

    function I() {
        var e = $("#js-work-list");
        if (ze) var a = e.find("li");
        else var a = e.find("li" + He);
        e.find('li:not("' + He + '")');
        e.find("li").removeClass("is-visible"), e.find("li").removeClass("has-green-1"), e.find("li").removeClass("has-green-2"), e.find("li").removeClass("has-green-3"), a.addClass("is-visible"), e.find(".is-visible").each(function(a) {
            var t = ($(this), a + 1);
            e.find(".is-visible").eq(4 * t - 1).addClass("has-green-1"), e.find(".is-visible").eq(4 * t - 3 - 1).addClass("has-green-1"), e.find(".is-visible").eq(4 * t - 1 - 1).addClass("has-green-2"), e.find(".is-visible").eq(4 * t - 2 - 1).addClass("has-green-2")
        })
    }

    function A() {
        var e = $("#js-work-list");
        if (ze) var a = e.find("li");
        else var a = e.find("li" + He);
        e.find('li:not("' + He + '")');
        e.find("li").removeClass("is-visible"), e.find("li").removeClass("has-green-1"), e.find("li").removeClass("has-green-2"), e.find("li").removeClass("has-green-3"), a.addClass("is-visible"), e.find(".is-visible").each(function(a) {
            var t = ($(this), a + 1);
            e.find(".is-visible").eq(6 * t - 5 - 1).addClass("has-green-1"), e.find(".is-visible").eq(6 * t - 3 - 1).addClass("has-green-1"), e.find(".is-visible").eq(6 * t - 1 - 1).addClass("has-green-1"), e.find(".is-visible").eq(6 * t - 4 - 1).addClass("has-green-2"), e.find(".is-visible").eq(6 * t - 2 - 1).addClass("has-green-2"), e.find(".is-visible").eq(6 * t - 1).addClass("has-green-2")
        })
    }

    function M() {
        l(), q();
        var e = $("#js-works-detail-slider"),
            a = $("#js-works-detail-slider-btn");
        TweenLite.to(e, 1, {
            css: {
                autoAlpha: 1
            },
            delay: .15,
            ease: Power1.easeOut
        }), TweenLite.to(a, 1, {
            css: {
                autoAlpha: 1
            },
            delay: .35,
            ease: Power1.easeOut
        })
    }

    function q() {
        var e = $("#js-works-detail-slider"),
            a = e.find(".works-detail-image"),
            t = e.find(".works-detail-image").length,
            s = $("#js-works-detail-slider-btn"),
            n = s.find(".works-detail-slider-btn-left"),
            i = s.find(".works-detail-slider-btn-right");
        t > 1 ? (n.attr({
            "data-no": t
        }), i.attr({
            "data-no": 2
        }), TweenLite.set(a, {
            css: {
                autoAlpha: 0
            }
        }), TweenLite.set(a.eq(0), {
            css: {
                autoAlpha: 1
            }
        }), n.on({
            click: function() {
                var e = $(this),
                    s = parseInt(e.attr("data-no"));
                1 == s ? (n.attr({
                    "data-no": t
                }), i.attr({
                    "data-no": s + 1
                })) : s == t ? (n.attr({
                    "data-no": s - 1
                }), i.attr({
                    "data-no": 1
                })) : (n.attr({
                    "data-no": s - 1
                }), i.attr({
                    "data-no": s + 1
                })), TweenLite.to(a, .25, {
                    css: {
                        transform: "scale(.95, .95)",
                        autoAlpha: 0
                    },
                    delay: 0,
                    ease: Quart.easeIn,
                    onComplete: function() {
                        TweenLite.set(a.eq(s - 1), {
                            css: {
                                transform: "scale(1.25, 1.25)",
                                autoAlpha: 0
                            },
                            delay: .1
                        }), TweenLite.to(a.eq(s - 1), 1, {
                            css: {
                                transform: "scale(1, 1)",
                                autoAlpha: 1
                            },
                            delay: .1,
                            ease: Quart.easeOut
                        })
                    }
                });
                var o = e.find(".line-1"),
                    r = e.find(".line-2");
                TweenLite.to(o, .65, {
                    css: {
                        transform: "rotateZ(-225deg)",
                        clearProps: "transform"
                    },
                    ease: Quart.easeInOut
                }), TweenLite.to(r, .65, {
                    css: {
                        transform: "rotateZ(225deg)",
                        clearProps: "transform"
                    },
                    ease: Quart.easeInOut
                })
            },
            mouseenter: function() {}
        }), i.on({
            click: function() {
                var e = $(this),
                    s = parseInt(e.attr("data-no"));
                1 == s ? (n.attr({
                    "data-no": t
                }), i.attr({
                    "data-no": s + 1
                })) : s == t ? (n.attr({
                    "data-no": s - 1
                }), i.attr({
                    "data-no": 1
                })) : (n.attr({
                    "data-no": s - 1
                }), i.attr({
                    "data-no": s + 1
                })), TweenLite.to(a, .25, {
                    css: {
                        transform: "scale(1.25, 1.25)",
                        autoAlpha: 0
                    },
                    delay: 0,
                    ease: Quart.easeIn,
                    onComplete: function() {
                        TweenLite.set(a.eq(s - 1), {
                            css: {
                                transform: "scale(.85, .85)",
                                autoAlpha: 0
                            },
                            delay: .1
                        }), TweenLite.to(a.eq(s - 1), 1, {
                            css: {
                                transform: "scale(1, 1)",
                                autoAlpha: 1
                            },
                            delay: .1,
                            ease: Quart.easeOut
                        })
                    }
                });
                var o = e.find(".line-1"),
                    r = e.find(".line-2");
                TweenLite.to(o, .65, {
                    css: {
                        transform: "rotateZ(225deg)",
                        clearProps: "transform"
                    },
                    ease: Quart.easeInOut
                }), TweenLite.to(r, .65, {
                    css: {
                        transform: "rotateZ(-225deg)",
                        clearProps: "transform"
                    },
                    ease: Quart.easeInOut
                })
            },
            mouseenter: function() {}
        })) : TweenLite.set([n, i], {
            css: {
                autoAlpha: 0
            }
        })
    }

    function F() {
        r(), setTimeout(function() {
            !De && G >= 1024 ? d() : null
        }, 650)
    }

    function Q() {
        r(), E();
        var e = "/firsttouch/wp/wp-content/plugins/contact-form-7/includes/js/";
        if ($.getScript(he + e + "jquery.form.min.js").done(function(a, t) {
                $.getScript(he + e + "scripts.js")
            }), $("select").selectric({
                keySearchTimeout: 250,
                disableOnMobile: !0,
                responsive: !0,
                customClass: {
                    prefix: "ft-select",
                    camelCase: !1,
                    overwrite: !0
                }
            }), $("#c-submit").on("click", function() {
                var e = $("#js-wrapper");
                TweenLite.to(e, .5, {
                    scrollTo: {
                        y: 0
                    },
                    ease: Expo.easeInOut,
                    delay: .5
                })
            }), $(".input-wrap").on("click", function(e) {
                e.preventDefault();
                var a = $(this);
                setTimeout(function() {
                    a.find("input").focus()
                }, 0)
            }), Pe) {
            var a = $("#js-contact"),
                t = $(".form-category-list"),
                s = t.find("li"),
                n = $("#contact-cat"),
                i = n.find("> span > input");
            a.addClass("is-careers"), s.eq(0).removeClass("is-active"), i.eq(0).prop("checked", !1), s.eq(2).addClass("is-active"), i.eq(2).prop("checked", !0), S(3), Pe = !1
        }
        setTimeout(function() {
            !De && G >= 1024 ? d() : null
        }, 650)
    }

    function E() {
        var e = ($("#js-contact"), $("#js-contact-form")),
            a = $(".form-category-list"),
            t = a.find("li"),
            s = $("#contact-cat"),
            n = s.find("> span > input"),
            i = !0,
            o = $("#not-spam"),
            r = $("#c-submit");
        t.eq(0).addClass("is-active"), n.eq(0).prop("checked", !0), o.prop("checked", !1), t.on("click", function(a) {
            a.preventDefault();
            var s = $(this),
                i = s.data("cat");
            t.removeClass("is-active"), s.addClass("is-active"), n.prop("checked", !1), n.eq(i - 1).prop("checked", !0), S(i, e)
        }), o.on("click", function() {
            i ? (r.addClass("is-visible"), i = !1) : (r.removeClass("is-visible"), i = !0)
        })
    }

    function S(e, a) {
        var t = a || $("#js-contact-form"),
            s = $("#js-contact");
        1 === e ? (s.removeClass("is-careers"), t.find(".row").removeClass("is-hidden"), t.find(".row").eq(6).addClass("is-hidden"), t.find(".row").eq(8).removeClass("is-hidden"), t.find(".row").eq(9).addClass("is-hidden"), t.find(".row").eq(6).find("option").prop("selected", !1), t.find(".row").eq(8).find("option").prop("selected", !1), t.find(".row").eq(9).find("option").prop("selected", !1)) : 2 === e ? (s.removeClass("is-careers"), t.find(".row").removeClass("is-hidden"), t.find(".row").eq(6).addClass("is-hidden"), t.find(".row").eq(8).addClass("is-hidden"), t.find(".row").eq(9).removeClass("is-hidden"), t.find(".row").eq(6).find("option").prop("selected", !1), t.find(".row").eq(8).find("option").prop("selected", !1), t.find(".row").eq(9).find("option").prop("selected", !1)) : 3 === e ? (s.addClass("is-careers"), t.find(".row").removeClass("is-hidden"), t.find(".row").eq(5).addClass("is-hidden"), t.find(".row").eq(6).addClass("is-hidden"), t.find(".row").eq(7).addClass("is-hidden"), t.find(".row").eq(8).addClass("is-hidden"), t.find(".row").eq(9).addClass("is-hidden"), t.find(".row").eq(5).find("option").prop("selected", !1), t.find(".row").eq(6).find("option").prop("selected", !1), t.find(".row").eq(7).find("option").prop("selected", !1), t.find(".row").eq(8).find("option").prop("selected", !1), t.find(".row").eq(9).find("option").prop("selected", !1)) : 4 === e && (s.removeClass("is-careers"), t.find(".row").removeClass("is-hidden"), t.find(".row").eq(5).addClass("is-hidden"), t.find(".row").eq(6).removeClass("is-hidden"), t.find(".row").eq(7).addClass("is-hidden"), t.find(".row").eq(8).addClass("is-hidden"), t.find(".row").eq(9).addClass("is-hidden"), t.find(".row").eq(5).find("option").prop("selected", !1), t.find(".row").eq(6).find("option").prop("selected", !1), t.find(".row").eq(7).find("option").prop("selected", !1), t.find(".row").eq(8).find("option").prop("selected", !1), t.find(".row").eq(9).find("option").prop("selected", !1))
    }

    function D() {
        W(), H(), setTimeout(function() {
            !De && G >= 1024 ? d() : null
        }, 650)
    }

    function H() {
        $(".layer");
        TweenLite.set($(".layer"), {
            css: {
                transform: "scale(1.1)",
                opacity: 0
            }
        }), TweenLite.to($(".layer"), 2, {
            css: {
                transform: "scale(1)",
                opacity: 1
            },
            delay: .1,
            ease: Quart.easeInOut
        })
    }

    function z() {
        var e, a;
        fe.on({
            mouseenter: function(t) {
                var s = $(this);
                e = s.width(), a = s.height()
            },
            mousemove: function(e) {
                function a() {
                    TweenLite.to(t.find(".layer-2"), 1, {
                        css: {
                            transform: "translate3d(" + i / 32 + "px, " + o / 32 + "px , 0)    rotateX(" + r / 8 + "deg) rotateY(" + l / 8 + "deg)",
                            opacity: .25
                        },
                        ease: Power1.easeOut
                    }), TweenLite.to(t.find(".layer-3"), 1, {
                        css: {
                            transform: "translate3d(" + i / 32 + "px, " + o / 32 + "px , 25px) rotateX(" + r / 7 + "deg) rotateY(" + l / 7 + "deg)",
                            opacity: .2
                        },
                        ease: Power1.easeOut
                    }), TweenLite.to(t.find(".layer-4"), 1, {
                        css: {
                            transform: "translate3d(" + i / 32 + "px, " + o / 32 + "px , 50px) rotateX(" + r / 6 + "deg) rotateY(" + l / 6 + "deg)",
                            opacity: .15
                        },
                        ease: Power1.easeOut
                    }), TweenLite.to(t.find(".layer-5"), 1, {
                        css: {
                            transform: "translate3d(" + i / 32 + "px, " + o / 32 + "px , 75px) rotateX(" + r / 5 + "deg) rotateY(" + l / 5 + "deg)",
                            opacity: .1
                        },
                        ease: Power1.easeOut
                    })
                }
                var t = $(this),
                    s = t.width(),
                    n = t.height();
                if (~Se.indexOf("firefox")) var i = e.pageX - t.offset().left - s / 2,
                    o = e.pageY - t.offset().top - n / 2,
                    r = -o / n * 180 / 2,
                    l = i / s * 180 / 2;
                else var i = e.offsetX - s / 2,
                    o = e.offsetY - n / 2,
                    r = -o / n * 180 / 2,
                    l = i / s * 180 / 2;
                Fe(a)
            },
            mouseleave: function(e) {
                var a = $(this);
                TweenLite.to([a.find(".layer-2"), a.find(".layer-3"), a.find(".layer-4"), a.find(".layer-5")], 1, {
                    css: {
                        transform: "translate3d(0, 0, 0)"
                    },
                    ease: Power1.easeOut
                })
            }
        }, "#js-notfound")
    }

    function W() {
        function e(e) {
            TweenLite.to(e.target, .65, {
                css: {
                    transform: "rotateZ(45deg) translate3d(20px, 20px, 0)",
                    opacity: 0,
                    clearProps: "all"
                },
                ease: Quart.easeOut
            })
        }
        var a = $(".notfound-title"),
            t = $(".notfound-text");
        TweenLite.set(t.find(".btn"), {
            css: {
                transform: "translate3d(0, -25px, 0)",
                autoAlpha: 0
            }
        }), TweenMax.staggerTo(a.find("span"), .45, {
            css: {
                transform: "translate3d(0, 0, 0)",
                opacity: 1
            },
            ease: Quart.easeOut,
            delay: 1
        }, .035, function() {
            TweenMax.staggerTo(a.find("span"), 1, {
                css: {
                    transform: "rotateZ(45deg)",
                    opacity: 1
                },
                ease: Back.easeOut,
                delay: 0,
                onCompleteParams: ["{self}"],
                onComplete: e
            }, .05, function() {
                TweenLite.to(t.find(".btn"), .65, {
                    css: {
                        transform: "translate3d(0, 0, 0)",
                        autoAlpha: 1
                    },
                    ease: Quart.easeOut,
                    delay: .15,
                    onComplete: z
                })
            })
        })
    }

    function R() {
        G = G = De ? window.innerWidth : de.width(), N = N = De ? window.innerHeight : de.height(), ye = G / 2, $e = N / 2;
        var e = $("#js-wrapper");
        e.is(".page-home") && (1 !== qe || $("#js-canvas").find("canvas").length || Y("js-canvas", 512, 512, 5, 128, 2), e.height(N), T(), h())
    }

    function B() {
        if (ve = G = De ? window.innerWidth : de.width(), Te = N = De ? window.innerHeight : de.height(), 600 >= Le && G > 600) TweenLite.to(ue, .45, {
            css: {
                autoAlpha: 0
            },
            ease: Power1.easeOut,
            onComplete: function() {
                location.reload()
            }
        });
        else {
            Le = G, R(), c();
            var e = $("#js-wrapper");
            e.is(".page-home") && (oe.pause(), T(), setTimeout(function() {
                be ? oe.play() : null
            }, 1e3))
        }
    }

    function X() {
        Oe = !1, xe = !1, je = !1, R(), c(), n(), i(), o();
        var e = $("#js-wrapper");
        ge = 0, ge = e.scrollTop(ge);
        J = e.is(".page-works-detail") ? !0 : !1;
        if ($(".header-clip").length && G > 1024 && !De) {
            var a = $("#js-point").position().top,
                t = $("#js-logo");
            e.on("scroll", function() {
                ge = e.scrollTop(), a - 1 >= ge ? ($(".subpage-header-mask").length && (TweenLite.set($(".subpage-header"), {
                    css: {
                        "background-position": "50% " + ge / 4 + "px"
                    }
                }), !$("#js-wnav").length || je || J || (1366 > G && t.removeClass("is-hidden"), pe.removeClass("wnav-fixed"), TweenLite.to($(".works-filter li"), .45, {
                    css: {
                        width: "25%",
                        clearProps: "width"
                    },
                    delay: 0,
                    ease: Quart.easeOut
                }), TweenLite.to($("#js-grid-changer"), .25, {
                    css: {
                        position: "absolute",
                        autoAlpha: 0,
                        clearProps: "all"
                    },
                    delay: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        TweenLite.set($("#js-grid-changer"), {
                            css: {
                                position: "absolute",
                                autoAlpha: 0
                            }
                        })
                    }
                }), je = !0)), J && (1366 > G && t.removeClass("is-hidden"), TweenLite.set($("#js-works-detail-slider"), {
                    css: {
                        transform: "translate3d(0, " + ge / 4 + "px, 0)"
                    }
                }))) : ($("#js-wnav").length && $(".subpage-header-mask").length && je && !J && (1366 > G && t.addClass("is-hidden"), pe.addClass("wnav-fixed"), TweenLite.to($(".works-filter li"), .45, {
                    css: {
                        width: "12.5%"
                    },
                    delay: 0,
                    ease: Quart.easeOut
                }), TweenLite.to($("#js-grid-changer"), .45, {
                    css: {
                        position: "fixed",
                        autoAlpha: 1
                    },
                    delay: .25,
                    ease: Power1.easeOut
                }), je = !1, We = !0), J && (1366 > G && t.addClass("is-hidden"), TweenLite.set($("#js-works-detail-slider"), {
                    css: {
                        transform: "translate3d(0, " + ge / 4 + "px, 0)"
                    }
                })))
            })
        }
    }

    function Z() {
        var e = $("#js-wrapper");
        e.is(".page-home") && w(), e.is(".page-about") && y(), e.is(".page-member") && C(), e.is(".page-works") && x(), e.is(".page-works-detail") && M(), e.is(".page-careers") && F(), e.is(".page-contact") && Q(), e.is(".page-notfound") && D();
        J ? pe.addClass("sub-page-detail") : pe.removeClass("sub-page-detail")
    }

    function Y(e, a, t, s, n, i) {
        var o = o = window.devicePixelRatio > 1 ? 2 : 1;
        K = new PIXI.autoDetectRenderer(a, t, {
            backgroundColor: 0,
            transparent: !0,
            antialias: !0,
            resolution: o
        }), K.autoResize = !0, K.view.id = "js-canvas", document.getElementById(e).appendChild(K.view), _ = new PIXI.Container;
        for (var r = [], l = s, n = n, c = n / 4, d = a / 2, f = t / 2, i = i, p = [], u = [], m = ["0xFFFFFF", "0xFFFFFF", "0xFFFFFF", "0xFFFFFF", "0xFFFFFF", "0xFFFFFF", "0xFFFFFF", "0xFFFFFF", "0x1CD300", "0x1CD300"], w = 0; n > w; w++) {
            var l = Math.floor(10 * Math.random() + 3),
                h = Math.floor(9 * Math.random() + 1),
                g = Math.floor(3 * Math.random() + 3) / 10;
            if (2 * c > w > 0) var v = -Math.floor(Math.random() * (2 * l - 1) + 1 + 2.5 * i);
            else var v = Math.floor(Math.random() * (2 * l - 1) + 1 + 2.5 * i);
            if (c > w > 0 || 4 * c > w && w >= 3 * c) var T = -Math.floor(Math.random() * (2 * l - 1) + 1 + 2.5 * i);
            else var T = Math.floor(Math.random() * (2 * l - 1) + 1 + 2.5 * i);
            r.push(ee = new PIXI.Graphics), p[w] = r[w].position.x = (a / 2 - l) * Math.sin(360 * w / n * Math.PI / 180) + v, u[w] = r[w].position.y = (t / 2 - l) * Math.cos(360 * w / n * Math.PI / 180) + T, ee.lineStyle(0).beginFill(m[h], g).drawCircle(d, f, l).endFill(), _.addChild(r[w])
        }
        var y = function() {
            if (1 === qe) {
                for (w = 0; w < r.length; w++) {
                    var e = .1 + Math.sin(.2 * (w + Me / 2)) * Math.cos(.2 * (w + Me / 2)),
                        s = a / 2 - a / 2 * e,
                        n = t / 2 - t / 2 * e;
                    r[w].scale.set(e, e), r[w].position.x = p[w] / 3 + s + Math.cos(.2 * (w + Me)) * i + Math.cos(.3 * (w + Me)) * i, r[w].position.y = u[w] / 3 + n + Math.sin(.3 * (w + Me)) * i + Math.sin(.2 * (w + Me)) * i
                }
                Me += .1
            } else if (2 === qe) Me = Me;
            else if (3 === qe) {
                for (w = 0; w < r.length; w++) {
                    var o = o = G > 600 ? 1 : 1.5,
                        e = .75 / o + Math.sin(.2 * (w + Me / 2)) * Math.cos(.2 * (w + Me / 2)),
                        s = a / 2 - a / 2 * e,
                        n = t / 2 - t / 2 * e;
                    r[w].scale.x = e, r[w].scale.y = e, r[w].position.x = p[w] / o + s + Math.cos(.2 * (w + Me)) * i + Math.cos(.3 * (w + Me)) * i, r[w].position.y = u[w] / o + n + Math.sin(.3 * (w + Me)) * i + Math.sin(.2 * (w + Me)) * i
                }
                Me += .1
            }
            K.render(_)
        };
        ae = function() {
            if (2 === qe)
                for (w = 0; w < r.length; w++) {
                    var e = e = G > 600 ? 1 : 1.5,
                        s = .85 / e + Math.sin(.2 * (w + Me / 2)) * Math.cos(.2 * (w + Me / 2)),
                        n = a / 2 - a / 2 * s,
                        o = t / 2 - t / 2 * s,
                        l = p[w] / e + n + Math.cos(.3 * (w + Me)) * i + Math.cos(.2 * (w + Me)) * i,
                        c = u[w] / e + o + Math.sin(.2 * (w + Me)) * i + Math.sin(.3 * (w + Me)) * i;
                    TweenLite.to(r[w].position, .75, {
                        x: l,
                        y: c,
                        ease: Expo.easeInOut,
                        delay: 0
                    }), TweenLite.to(r[w].scale, .75, {
                        x: s,
                        y: s,
                        ease: Expo.easeInOut,
                        delay: 0,
                        onComplete: function() {
                            qe = 3
                        }
                    })
                }
        }, te = function() {
            TweenLite.ticker.addEventListener("tick", y)
        }, se = function() {
            TweenLite.ticker.removeEventListener("tick", y)
        }
    }

    function V() {
        var e = ue.attr("data-temp"),
            a = new google.maps.LatLng(35.660007, 139.7065808),
            t = {
                zoom: 18,
                center: a,
                disableDefaultUI: !0,
                disableDoubleClickZoom: !0,
                scrollwheel: !1,
                mapTypeControlOptions: {
                    mapTypeIds: ["sample", google.maps.MapTypeId.ROADMAP]
                }
            },
            s = new google.maps.Map(document.getElementById("js-maps"), t),
            n = new google.maps.MarkerImage(e + "/assets/img/icon/pin.png", new google.maps.Size(64, 64), new google.maps.Point(0, 0));
        n.scaledSize = new google.maps.Size(64, 64);
        var i = {
                position: a,
                map: s,
                icon: n,
                title: "FirstTouch"
            },
            o = (new google.maps.Marker(i), [{
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                    hue: "#1cb300"
                }, {
                    saturation: 10
                }, {
                    lightness: -10
                }, {
                    gamma: 1
                }]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    hue: "#1cb300"
                }, {
                    saturation: 0
                }, {
                    lightness: 5
                }, {
                    gamma: 1
                }]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                    hue: "#1cb300"
                }, {
                    saturation: -50
                }, {
                    lightness: 0
                }, {
                    gamma: 1
                }]
            }, {
                featureType: "road",
                elementType: "all",
                stylers: [{
                    hue: "#1cb300"
                }, {
                    saturation: -50
                }, {
                    lightness: 25
                }, {
                    gamma: 1
                }]
            }, {
                stylers: [{
                    visibility: "simplified"
                }, {
                    hue: "#1cb300"
                }, {
                    saturation: -10
                }, {
                    lightness: 0
                }, {
                    gamma: 1
                }]
            }]),
            r = {
                name: "FirstTouch"
            },
            l = new google.maps.StyledMapType(o, r);
        s.mapTypes.set("sample", l), s.setMapTypeId("sample")
    }

    function U(e, a, t, s, n) {
        var i = function(a) {
                var s = 1 - a;
                return 3 * s * s * a * e + 3 * s * a * a * t + a * a * a
            },
            o = function(e) {
                var t = 1 - e;
                return 3 * t * t * e * a + 3 * t * e * e * s + e * e * e
            },
            r = function(a) {
                var s = 1 - a;
                return 3 * (2 * (a - 1) * a + s * s) * e + 3 * (-a * a * a + 2 * s * a) * t
            };
        return function(e) {
            var a, t, s, l, c, d, f = e;
            for (s = f, d = 0; 8 > d; d++) {
                if (l = i(s) - f, Math.abs(l) < n) return o(s);
                if (c = r(s), Math.abs(c) < 1e-6) break;
                s -= l / c
            }
            if (a = 0, t = 1, s = f, a > s) return o(a);
            if (s > t) return o(t);
            for (; t > a;) {
                if (l = i(s), Math.abs(l - f) < n) return o(s);
                f > l ? a = s : t = s, s = .5 * (t - a) + a
            }
            return o(s)
        }
    }
    var G, N, J, K, _, ee, ae, te, se, ne, ie, oe, re, le, ce, de = $(window),
        fe = $(document),
        pe = $("html"),
        ue = $("body"),
        me = ($("#js-container"), $("#js-wrapper")),
        we = $("#js-mask"),
        he = ue.data("path"),
        ge = (ue.data("temp"), 0),
        ve = G = De ? window.innerWidth : de.width(),
        Te = N = De ? window.innerHeight : de.height(),
        ye = G / 2,
        $e = N / 2,
        Le = G,
        Ce = !1,
        be = !1,
        xe = !1,
        Oe = !1,
        je = !1,
        ke = !1,
        Pe = !1,
        Ie = !1,
        Ae = !1,
        Me = 0,
        qe = 1,
        Fe = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = Fe;
    var Qe = window.navigator.userAgent.toLowerCase(),
        Ee = a(),
        Se = t(),
        De = s();
    ! function() {
        fe.on({
            click: function(e) {
                if (e.preventDefault(), G = de.width(), De || !(G > 1024)) return !1;
                Ce ? p() : f()
            },
            touchend: function(e) {
                if (e.preventDefault(), G = window.innerWidth, !(De && 1024 >= G)) return !1;
                Ce ? p() : f()
            }
        }, "#js-menu-btn, #js-gnav-mask, .is-open #js-menu")
    }();
    var He, ze = !1,
        We = !1;
    de.on("resize", function() {
        var e = !1;
        e !== !1 && clearTimeout(e), e = setTimeout(function() {
            B()
        }, 10)
    });
    ! function() {
        fe.on("click", 'a[data-pjax="true"], .sub-page-detail .menu-label-page', function(e) {
            Ie = !1, Ae = !1, e.preventDefault();
            var a = (be ? oe.pause() : null, $("#js-mask")),
                t = $("#js-container"),
                s = $("#js-wrapper"),
                n = $("#js-logo"),
                i = $("#js-video-wrapper");
            $([de, fe, s]).off("scroll mouseenter mouseemove mouseleave"), TweenLite.set(a, {
                css: {
                    autoAlpha: 1
                }
            }), TweenLite.to(s, .5, {
                scrollTo: {
                    y: 0
                },
                ease: Expo.easeInOut
            }), TweenLite.to([n, t, i], .5, {
                css: {
                    opacity: 0
                },
                ease: Power1.easeIn
            }), s.is(".page-home") && se();
            var o = $(this),
                r = o.attr("href");
            J && void 0 == r && (r = "../../works/"), Pe = o.data("recruit") === !0 ? !0 : !1, Ce ? (p(), setTimeout(function() {
                var e = $("#js-circle-loader"),
                    a = $(".menu-inner"),
                    t = $(".menu-inner").height();
                TweenLite.to(a, .45, {
                    css: {
                        width: t
                    },
                    ease: Quart.easeOut,
                    onComplete: function() {
                        TweenLite.to(e, .45, {
                            css: {
                                autoAlpha: 1
                            },
                            ease: Power1.easeOut,
                            delay: 0
                        }), Oe = !0
                    }
                })
            }, 450), setTimeout(function() {
                $.pjax({
                    url: r,
                    container: "#js-container",
                    fragment: "#js-container",
                    timeout: 2e4
                })
            }, 1e3)) : (setTimeout(function() {
                var e = $("#js-circle-loader"),
                    a = $(".menu-inner"),
                    t = $(".menu-inner").height();
                TweenLite.to(a, .45, {
                    css: {
                        width: t
                    },
                    ease: Quart.easeOut,
                    onComplete: function() {
                        TweenLite.to(e, .45, {
                            css: {
                                autoAlpha: 1
                            },
                            ease: Power1.easeOut,
                            delay: 0
                        }), Oe = !0
                    }
                })
            }, 10), setTimeout(function() {
                $.pjax({
                    url: r,
                    container: "#js-container",
                    fragment: "#js-container",
                    timeout: 2e4
                })
            }, 650))
        }), fe.on("pjax:end", function() {
            Ie = !0, Ie && !Ae && e()
        });
        var e = function() {
            Me = 0, K = _ = ee = null, 3 === qe && (qe = 1), TweenLite.set($(".video-mask"), {
                css: {
                    clearProps: "opacity"
                }
            });
            var e = document.getElementById("js-video");
            e.currentTime = 0, be = !1;
            var a = $("#js-circle-loader"),
                t = $(".menu-label-page"),
                s = $(".menu-inner");
            TweenLite.to(a, .45, {
                css: {
                    autoAlpha: 0,
                    clearProps: "all"
                },
                ease: Power1.easeInOut,
                onComplete: function() {
                    TweenLite.set(t, {
                        css: {
                            position: "absolute"
                        },
                        onComplete: function() {
                            var e = t.outerWidth(!0);
                            TweenLite.set(t, {
                                css: {
                                    position: "relative",
                                    clearProps: "position"
                                }
                            }), TweenLite.to(s, .65, {
                                css: {
                                    width: e
                                },
                                ease: Expo.easeInOut
                            })
                        }
                    })
                }
            });
            var n = $("#js-mask"),
                i = $("#js-container"),
                o = ($("#js-wrapper"), $("#js-logo")),
                r = $("#js-video-wrapper");
            if (pe.removeClass("wnav-fixed"), o.removeClass("is-hidden"), xe) {
                var r = $("#js-video-wrapper"),
                    l = $("#intro-loading");
                TweenLite.set(r, {
                    css: {
                        top: 0,
                        clearProps: "top"
                    },
                    delay: .25
                }), TweenLite.set(l, {
                    css: {
                        top: "100%",
                        clearProps: "top"
                    },
                    delay: .25
                }), TweenLite.set(n, {
                    css: {
                        autoAlpha: 0
                    }
                }), setTimeout(function() {
                    X()
                }, 0), setTimeout(function() {
                    Z()
                }, 100); {
                    var c = $(".sp-video-poster-wrap").find(".poster-1");
                    $(".sp-video-poster-wrap").find(".poster-2")
                }
                TweenLite.set(c, {
                    css: {
                        autoAlpha: 1
                    }
                })
            }
            Oe && (TweenLite.set([o, i, r], {
                css: {
                    opacity: 0
                },
                onComplete: function() {
                    TweenLite.to([o, i, r], .5, {
                        css: {
                            opacity: 1,
                            clearProps: "opacity"
                        },
                        ease: Power1.easeOut,
                        delay: .05,
                        onComplete: function() {
                            TweenLite.set(n, {
                                css: {
                                    autoAlpha: 0
                                }
                            })
                        }
                    })
                }
            }), setTimeout(function() {
                X()
            }, 0), setTimeout(function() {
                Z()
            }, 100))
        };
        fe.on("pjax:popstate", function() {
            Ae = !0, Ie && Ae && a()
        });
        var a = function() {
            var e = $("#js-wrapper");
            $([de, fe, e]).off("scroll mouseenter mouseemove mouseleave"), 3 === qe && (qe = 1), TweenLite.set($(".video-mask"), {
                css: {
                    clearProps: "opacity"
                }
            });
            var a = document.getElementById("js-video");
            a.currentTime = 0, be = !1;
            var t = $("#js-mask"),
                s = $("#js-container"),
                n = $("#js-logo"),
                i = $("#js-video-wrapper");
            pe.removeClass("wnav-fixed"), n.removeClass("is-hidden"), TweenLite.set(t, {
                css: {
                    autoAlpha: 1
                }
            }), TweenLite.set([s, i], {
                css: {
                    opacity: 0
                }
            }), setTimeout(function() {
                var e = $("#js-wrapper");
                e.is(".page-home") ? location.reload() : TweenLite.to([s, i], .5, {
                    css: {
                        opacity: 1,
                        clearProps: "opacity"
                    },
                    ease: Power1.easeOut,
                    delay: .1,
                    onComplete: function() {
                        TweenLite.set(t, {
                            css: {
                                autoAlpha: 0
                            }
                        }), X();
                        var e = ($("#js-circle-loader"), $(".menu-label-page")),
                            a = $(".menu-inner"),
                            s = $(".menu-inner").height();
                        TweenLite.to(a, .45, {
                            css: {
                                width: s
                            },
                            ease: Quart.easeOut,
                            onComplete: function() {
                                TweenLite.set(e, {
                                    css: {
                                        position: "absolute"
                                    },
                                    onComplete: function() {
                                        var t = e.outerWidth(!0);
                                        TweenLite.set(e, {
                                            css: {
                                                position: "relative",
                                                clearProps: "position"
                                            }
                                        }), TweenLite.to(a, .65, {
                                            css: {
                                                width: t
                                            },
                                            ease: Expo.easeInOut,
                                            delay: 0
                                        }), Z()
                                    }
                                })
                            }
                        })
                    }
                })
            }, 100)
        };
        fe.on("pjax:timeout", function() {
            location.reload()
        })
    }(),
    function() {
        pe.addClass(Ee).addClass(Se).addClass(De), X();
        !De && G >= 1024 ? u() : null, !De && G >= 1024 ? m() : null;
        fe.on("click", "a[data-href]", function(e) {
            e.preventDefault();
            var a = $("#js-wrapper"),
                t = "#" + $(this).attr("data-href"),
                s = $(t).position().top;
            TweenLite.to(a, .75, {
                scrollTo: {
                    y: s
                },
                ease: Power4.easeInOut
            })
        })
    }(),
    function() {
        function e(e) {
            var a = e.progress;
            TweenLite.killTweensOf(r), 1 === a ? (clearInterval(f), TweenLite.to(r, .65, {
                css: {
                    transform: "scale(" + a + ", 1)"
                },
                ease: Quart.easeInOut,
                delay: .15,
                onComplete: function() {
                    TweenLite.to(c, .25, {
                        css: {
                            autoAlpha: 0
                        },
                        ease: Power1.easeInOut
                    }), TweenLite.to(l, .45, {
                        css: {
                            transform: "scale(1, 0.002)"
                        },
                        ease: Expo.easeIn
                    }), TweenLite.to(l, .45, {
                        css: {
                            "background-color": "#1CB300",
                            transform: "scale(0, 0.002)"
                        },
                        ease: Expo.easeOut,
                        delay: .5,
                        onComplete: Z
                    }), TweenLite.to(r, .65, {
                        css: {
                            transform: "scale(0, 1)",
                            "-webkit-transform-origin": "100% 50% 0",
                            "transform-origin": "100% 50% 0",
                            clearProps: "transform-origin"
                        },
                        ease: Quart.easeInOut,
                        delay: .9,
                        onComplete: function() {
                            TweenLite.set(l, {
                                css: {
                                    autoAlpha: 0
                                }
                            })
                        }
                    })
                }
            })) : d = a
        }

        function a() {}

        function t() {}

        function s() {
            TweenLite.set(r, {
                css: {
                    transform: "scale(" + d + ", 1)"
                }
            })
        }
        var n = new createjs.LoadQueue,
            i = [],
            o = $("#js-progress-bar"),
            r = o.find(".bar"),
            l = $("#js-loading"),
            c = l.find(".loading-logo");
        ue.find(".bg-image").each(function(e, a) {
            var t = $(a).css("background-image").replace(/(url\(|\)|")/g, "");
            i.push(t), $(a).removeClass("bg-image")
        }), ue.find("img").each(function(e, a) {
            i.push($(a).attr("src"))
        }), n.loadManifest(i, !0), n.on("progress", e, this), n.on("fileload", t, this), n.on("complete", a, this);
        var d = 0,
            f = setInterval(s, 1e3 / 60)
    }()
}(firsttouch || (firsttouch = {}));
