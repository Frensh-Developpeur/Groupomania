<template>
  <div id="app">
     <!-- PAGE de l'espace connexion et inscription -->
         <principalPage></principalPage>
    <!-- PAGE de l'espace connexion et inscription -->
  </div>
</template>

<script>
import principalPage from './components/principalPage.vue'
export default {
  name: 'App',
  components: {
    principalPage
  }
}
</script>

<style>

/* Background principal du site */
body{
  background-image: url('./assets/background.jpg');
  background-size: 150%;
}
/* Background principal du site */

/* RESET CSS */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none
}
/* RESET CSS */

/* GOOGLE FONT */
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap');
/* GOOGLE FONT */
</style>
