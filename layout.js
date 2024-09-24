const nesting = getNesting();

document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToLinks();
}

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">
  
  //  <li>
  //    <details>
	//	  <summary><a href="#">Submenu</a></summary>
  //      <ul>
  //        <li><a href="#">Page A</a></li>
  //        <li><a href="#">Page B</a></li>
  //        <li><a href="#">Page C</a></li>
  //        <li><a href="#">Page D</a></li>
  //        <li><a href="#">Page E</a></li>
  //      </ul>
	//		 </details>
	//    </li>
  
  return `
<header>

        <div class="header-content">
			<div class="header-title">riverpup's site :3</div>
	        <nav style='display:none'>
	          <ul>
	            <li><a href="index.html">home</a></li>
	            <li><a href="uses.html">uses</a></li>
	            <li><a href="https://riverpup.atabook.org/" target="_blank">guestbook</a></li>
	     	    <li><a href="https://cake.avris.it/pC4" target="_blank">sexuality cake (pC4)</a></li>
	          </ul>
	        </>
		</div>
      </header>
	  
      <aside class="left-sidebar">
	  
        <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="index.html">home</a></li>
            <li><a href="uses.html">uses</a></li>
            <li><a href="https://riverpup.atabook.org/" target="_blank">guestbook</a></li>
          </ul>
        </nav>
        </div>
		<div class="sidebar-section">
          <div class="sidebar-title">Buttons</div>
          <marquee>
		  	<img src="https://shishka.neocities.org/shishka/img/buttons/128.gif" alt="n64 now!">
		  	<a href="https://distrochooser.de/" target="_blank"><img src="https://bytemoth.neocities.org/88s/e-gl.png" alt="linux now!"></a>
		  	<img src="https://bytemoth.neocities.org/88s/e-priv.gif" alt="internet privacy">
		  	<a href="https://archive.org/" target="_blank"><img src="https://bytemoth.neocities.org/88s/e-ia.png" alt="internet archive"></a>
		  	<img src="https://shishka.neocities.org/shishka/img/buttons/239.gif" alt="this website sucks!">
		  	<img src="https://shishka.neocities.org/shishka/img/buttons/120.gif" alt="stop microsoft!">
		  	<img src="https://bytemoth.neocities.org/88s/i-cookie.png" alt="this site is 100% cookie free">
		  	<a href="https://diyhrt.wiki/" target="_blank"><img src="https://bytemoth.neocities.org/88s/ab-trn.png" alt="trans rights now!"></a>
		  	<a href="https://discord.com/app" target="_blank"><img src="https://bytemoth.neocities.org/88s/e-dis.png" alt="just get discord"></a>
		  	<a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank"><img src="https://bytemoth.neocities.org/88s/b-fx.png" alt="firefox"></a>
		  	<img src="https://anlucas.neocities.org/best_viewed_with_eyes.gif" alt="best viewed with eyes">
		  </marquee>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return ``;
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}

function giveActiveClassToLinks() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");

    if (href == "/" || href == "/index.html") {
      if (window.location.href == "http://localhost:8080/" || pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");

        if (el.closest("summary")) {
          el.closest("details").addAttribute("open");
          el.closest("summary").classList.add("active");
        }
      }
    }
  });
}
