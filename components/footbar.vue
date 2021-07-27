<template>
  <footer class="footer">
    <div class="layout-container footbar-columns">
      <div class="footbar-column-container">
        <h3 class="footbar-section-header">Facebook Pasja Informatyki</h3>
        <ul class="footbar-link-list">
          <li>
            <a href="https://www.facebook.com/pasjainformatykifanpage/">
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
            <router-link to="/">
              Jak Korzystać z Forum? Częste pytania
            </router-link>
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
            <a href="https://github.com/CodersCommunity/" target="_blank">
              GitHub CodersCommunity
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/pasjainformatykitutoriale"
              target="_blank"
            >
              Kanał YouTube Pasja informatyki
            </a>
          </li>
          <li>
            <a href="http://miroslawzelent.pl" target="_blank">
              Blog informatyczny
            </a>
          </li>
          <li>
            <a href="http://egzamin-informatyk.pl/" target="_blank">
              Egzaminy EE08 EE09 informatyka
            </a>
          </li>
          <li>
            <a href="http://egzamin-e13.pl/" target="_blank">
              Kwalifikacja E.13
            </a>
          </li>
          <li>
            <a href="https://www.phpdevs.pl/" target="_blank">
              Kurs PHPDevs.pl
            </a>
          </li>
          <li>
            <a href="https://egzamin-ekonomista.pl/" target="_blank">
              Egzamin ekonomista AU35 AU36
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="acknowledgments-container">
      <div>
        <a href="https://github.com/CodersCommunity/front-next/issues">
          Zgłoś problem
        </a>
        <a href="https://icons8.com/">Icons8</a>
      </div>
      <div>
        <a href="https://github.com/CodersCommunity/front-next">
          Repozytorium front-end
        </a>
        <a href="https://www.question2answer.org/">
          Powered by Question2Answer
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: $gap-width;
  color: var(--footbar--text-color);
  background: var(--footbar--background-color);
  border-top: 1px solid var(--top-bar--border-color);
}

.footbar-columns {
  display: flex;
  justify-content: center;

  @include mobile {
    flex-direction: column;
  }
}

.footbar-link-list {
  font-size: size(14);

  a {
    text-decoration: none;
    color: inherit;
  }
}

.footbar-column-container {
  padding: size(20);
  width: calc(100% / 3);

  @include mobile {
    width: 100%;
    padding: size(10) size(20);
  }
}

.acknowledgments-container {
  display: flex;
  justify-content: space-between;
  background-color: var(--footbar--acknowledgment--background-color);
  border-top: 1px solid var(--top-bar--border-color);
  padding: size(12);
  font-size: size(12);

  @include mobile {
    display: block;
    padding: size(12) size(20);
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 4px;

    @include mobile {
      display: block;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
