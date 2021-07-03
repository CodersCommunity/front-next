<template>
  <nav class="nav-main">
    <ul class="list">
      <NavMainItem
        link-to="/"
        text="Najnowsze pytania"
        icon="/images/logo.png"
      />
      <NavMainItem
        link-to="/ostatnia-aktywnosc"
        text="Ostatnia aktywność"
        icon="https://img.icons8.com/color/48/000000/calendar--v1.png"
      />
      <NavMainItem
        link-to="/bez-odpowiedzi"
        text="Bez odpowiedzi"
        icon="https://img.icons8.com/color/48/000000/delete-property.png"
      />
      <NavMainItem
        link-to="/zadaj-pytanie"
        text="Zadaj pytanie"
        icon="https://img.icons8.com/color/48/000000/ask-question.png"
      />
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
