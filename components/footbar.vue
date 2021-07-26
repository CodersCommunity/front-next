<template>
  <footer class="footer-container">
    <div class="footbar-columns">
      <div class="footbar-column-container">
        <h3 class="footbar-section-header">Facebook Pasja Informatyki</h3>
        <ul class="footbar-link-list">
          <li>
            <a
              class="facebook-link"
              href="https://www.facebook.com/pasjainformatykifanpage/"
            >
              Polub nas na Facebooku
            </a>
          </li>
        </ul>
      </div>
      <div class="footbar-column-container">
        <h3 class="footbar-section-header">Cenne informacje</h3>
        <!--TODO Link to actual pages-->
        <ul class="footbar-link-list">
          <li>
            <router-link to="/"
              >Jak Korzystać z Forum? Częste pytania</router-link
            >
          </li>
          <li>
            <router-link to="/">Książki Informatyczne warte uwagi</router-link>
          </li>
          <li>
            <router-link to="/">Po co nam Forum? Manifest</router-link>
          </li>
          <li>
            <router-link to="/">Regulamin tego miejsca</router-link>
          </li>
          <li>
            <router-link to="/">Polityka prywatności</router-link>
          </li>
          <li>
            <router-link to="/">Zasłużeni Pasjonaci</router-link>
          </li>
          <li>
            <router-link to="/">Zasady przyznawania punktów</router-link>
          </li>
        </ul>
      </div>
      <div class="footbar-column-container">
        <h3 class="footbar-section-header">Polecane miejsca w Sieci</h3>
        <ul class="footbar-link-list">
          <li>
            <a href="https://github.com/CodersCommunity/" target="_blank"
              >GitHub CodersCommunity</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/pasjainformatykitutoriale"
              target="_blank"
              >Kanał YouTube Pasja informatyki</a
            >
          </li>
          <li>
            <a href="http://miroslawzelent.pl" target="_blank"
              >Blog informatyczny</a
            >
          </li>
          <li>
            <a href="http://egzamin-informatyk.pl/" target="_blank"
              >Egzaminy EE08 EE09 informatyka</a
            >
          </li>
          <li>
            <a href="http://egzamin-e13.pl/" target="_blank"
              >Kwalifikacja E.13</a
            >
          </li>
          <li>
            <a href="https://www.phpdevs.pl/" target="_blank"
              >Kurs PHPDevs.pl</a
            >
          </li>
          <li>
            <a href="https://egzamin-ekonomista.pl/" target="_blank"
              >Egzamin ekonomista AU35 AU36</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="acknowledgments-container">
      <div>
        <a href="https://github.com/CodersCommunity/front-next/issues"
          >Zgłoś problem</a
        >
        <a href="https://icons8.com/">Icons8</a>
      </div>
      <div>
        <a href="https://github.com/CodersCommunity/front-next"
          >Repozytorium front-end</a
        >
        <a href="https://www.question2answer.org/"
          >Powered by Question2Answer</a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  margin-top: $gap-width;

  color: var(--footbar--text-color);
  border: 1px solid var(--top-bar--border-color);
}

.footbar-columns {
  display: flex;
  justify-content: center;
  @include mobile {
    flex-direction: column;
  }
  background: var(--footbar--background-color);
}

.footbar-section-header {
  padding: 4px 0;
  border-bottom: 1px solid var(--footbar--heading-underline);
}
.footbar-link-list {
  padding-left: 0;
  list-style: none;
  font-size: size(14);
  li {
    padding: 4px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
.footbar-column-container {
  margin: size(20);
}

.facebook-link {
  &:before {
    content: '\1F44D';
  }
}

.acknowledgments-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--footbar--acknowledgment--background-color);
  padding: 4px;
  font-size: size(14);
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
    padding: 4px 8px;
  }
}
</style>
