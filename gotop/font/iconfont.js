;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-comments" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M131.253515 789.333333C87.810305 789.333333 52.51282 753.473975 52.51282 709.41763L52.51282 69.333333 26.25641 96 892.853331 96C936.231586 96 971.487179 131.853286 971.487179 175.915703L971.487179 816 997.74359 789.333333 525.128205 789.333333 517.234323 789.333333 510.649171 793.754413 285.912493 944.636066C273.815607 952.757562 270.491629 969.301024 278.488179 981.586923 286.484727 993.872821 302.773675 997.248736 314.87056 989.127241L539.607238 838.245587 525.128205 842.666667 997.74359 842.666667 1024 842.666667 1024 816 1024 175.915703C1024 102.41369 965.24899 42.666667 892.853331 42.666667L26.25641 42.666667 0 42.666667 0 69.333333 0 709.41763C0 782.925715 58.804881 842.666667 131.253515 842.666667L268.117303 842.666667C282.618319 842.666667 294.373713 830.727593 294.373713 816 294.373713 801.272407 282.618319 789.333333 268.117303 789.333333L131.253515 789.333333Z"  ></path>' +
    '' +
    '<path d="M367.589743 442.666667C367.589743 383.756294 320.568162 336 262.564102 336 204.560043 336 157.538461 383.756294 157.538461 442.666667 157.538461 501.577039 204.560043 549.333333 262.564102 549.333333 320.568162 549.333333 367.589743 501.577039 367.589743 442.666667ZM210.051282 442.666667C210.051282 413.211479 233.562074 389.333333 262.564102 389.333333 291.566133 389.333333 315.076924 413.211479 315.076924 442.666667 315.076924 472.121854 291.566133 496 262.564102 496 233.562074 496 210.051282 472.121854 210.051282 442.666667Z"  ></path>' +
    '' +
    '<path d="M630.153845 442.666667C630.153845 383.756294 583.132265 336 525.128205 336 467.124145 336 420.102564 383.756294 420.102564 442.666667 420.102564 501.577039 467.124145 549.333333 525.128205 549.333333 583.132265 549.333333 630.153845 501.577039 630.153845 442.666667ZM472.615386 442.666667C472.615386 413.211479 496.126176 389.333333 525.128205 389.333333 554.130236 389.333333 577.641026 413.211479 577.641026 442.666667 577.641026 472.121854 554.130236 496 525.128205 496 496.126176 496 472.615386 472.121854 472.615386 442.666667Z"  ></path>' +
    '' +
    '<path d="M892.717948 442.666667C892.717948 383.756294 845.696367 336 787.692307 336 729.688247 336 682.666667 383.756294 682.666667 442.666667 682.666667 501.577039 729.688247 549.333333 787.692307 549.333333 845.696367 549.333333 892.717948 501.577039 892.717948 442.666667ZM735.179488 442.666667C735.179488 413.211479 758.690278 389.333333 787.692307 389.333333 816.694338 389.333333 840.205129 413.211479 840.205129 442.666667 840.205129 472.121854 816.694338 496 787.692307 496 758.690278 496 735.179488 472.121854 735.179488 442.666667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-edit" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M34.155089 230.940227 9.17948 230.940227 9.17948 256.203386 9.17948 854.158012C9.17948 923.769568 65.248004 980.289737 134.081773 980.289737L927.938515 980.289737 952.914125 980.289737 952.914125 955.026579 952.914125 471.100561C952.914125 457.148105 941.732164 445.837402 927.938515 445.837402 914.144868 445.837402 902.962906 457.148105 902.962906 471.100561L902.962906 955.026579 927.938515 929.76342 134.081773 929.76342C92.797081 929.76342 59.130699 895.825847 59.130699 854.158012L59.130699 256.203386 34.155089 281.466543 598.93821 281.466543C612.731859 281.466543 623.91382 270.155842 623.91382 256.203386 623.91382 242.250928 612.731859 230.940227 598.93821 230.940227L34.155089 230.940227Z"  ></path>' +
    '' +
    '<path d="M437.016339 593.503789 431.876019 600.104892 431.668623 608.505214 427.984924 757.709741 427.077935 794.446421 461.312335 782.146455 605.005395 730.519447 611.980762 728.013291 616.479561 722.067243 1003.181673 210.964228 1018.529978 190.678421 998.306108 175.379305 869.49174 77.932781 849.985487 63.176536 834.913446 82.53177 437.016339 593.503789ZM839.575373 118.395018 968.389739 215.841542 963.514174 180.256619 576.81206 691.359633 588.286225 682.907428 444.593165 734.534436 477.920574 758.971151 481.604275 609.766622 476.256559 624.768047 874.153664 113.79603 839.575373 118.395018Z"  ></path>' +
    '' +
    '<path d="M891.217762 310.505713 920.474916 269.553252 808.309143 187.564266 779.051989 228.516725 891.217762 310.505713Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-less" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M509.927514 387.159081C517.168621 379.168894 527.507586 379.262447 534.709532 387.493244L805.278364 696.714765C813.036915 705.581679 826.514517 706.480186 835.381431 698.721636 844.248346 690.963085 845.146852 677.485483 837.388303 668.618569L566.819471 359.397045C542.819471 331.968474 502.692194 331.60538 478.31207 358.507586L197.525612 668.340919C189.61372 677.071283 190.277222 690.562496 199.007586 698.474389 207.737949 706.386281 221.229163 705.722778 229.141056 696.992414L509.927514 387.159081Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-favoritesfilling" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M339.651042 341.097655 469.110756 58.828865C491.707678 8.534076 527.371795 8.880086 548.770042 59.60466L679.364582 341.097655M679.452297 340.474423 964.078942 371.359074C1018.894963 377.308079 1029.586705 411.333594 987.95719 447.35929L772.020879 666.738278M771.548333 663.5201 830.440373 945.270172C841.721615 999.241649 812.665359 1019.924563 765.538658 991.465092L517.688802 846.872395M517.485225 846.453572 267.723625 989.528794C219.879795 1016.935996 191.230298 995.693225 203.733911 942.078609L269.450995 660.288365M270.301116 660.710236 28.962399 447.35929C-12.667117 411.333594-1.975373 377.308079 52.840647 371.359074L338.533536 342.523883 336.275211 353.151657 338.788109 341.437007 679.762863 341.437007 771.253818 663.747471 517.557926 846.731194 270.278963 660.81351 270.301116 660.710236Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)