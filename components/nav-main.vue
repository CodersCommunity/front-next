<template>
  <nav class="nav-main">
    <ul class="list">
      <NavMainItem
        link-to="/"
        text="Najnowsze pytania"
        icon="/images/logo.png"
        exact
      />
      <NavMainItem
        link-to="/ostatnia-aktywnosc"
        text="Ostatnia aktywność"
        icon="https://img.icons8.com/color/48/000000/calendar--v1.png"
      />
      <NavMainItem
        link-to="/pytania"
        text="Pytania"
        icon="https://img.icons8.com/color/48/000000/ask-question.png"
      />
      <NavMainItem
        link-to="/kategorie"
        text="Kategorie"
        icon="https://img.icons8.com/color/48/000000/flow-chart.png"
      />
      <NavMainItem
        link-to="/discord"
        text="Discord"
        icon="https://img.icons8.com/fluent/48/000000/discord-logo.png"
      />
      <!--
      <NavMainItem
        link-to="/bez-odpowiedzi"
        text="Bez odpowiedzi"
        icon="https://img.icons8.com/color/48/000000/delete-property.png"
      />
      <NavMainItem
        link-to="/zadaj-pytanie"
        text="Zadaj pytanie"
        icon="https://img.icons8.com/color/48/000000/ask-question.png"
      /> -->
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  @include mobile {
    flex-direction: column;
  }
}
</style>
