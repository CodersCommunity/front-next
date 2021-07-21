# Contributing

## Wymagania

- node wersja `14.x`
- git wersja > `2.9`
- (przydadzą się rozszerzenia _prettier_ i _eslint_ zainstalowane w IDE)

## Wiadomość w commicie

Commity należy pisać według poniższego wzorca:

`<typ>: <treść commita, krótkie podsumowanie>`

gdzie `<typ>`:

- `feat`: nowa funkcja/element
- `fix`: naprawa błędu
- `refactor`: poprawa jakości kodu
- `style`: zmiany w wyglądzie forum
- `test`: dodanie/edycja testów
- `docs`: zmiany w dokumentacji
- `build`: zmiany w procesie buildowania lub środowisku developerskim
- `ci`: zmiany w github CI

Na przykład:

- `feat: add avatar to inline user`
- `fix: typo in "regulamin" page`
- `refactor: question list`

## Nazwy branchy

Nazwy branchy należy tworzyć według poniższego wzorca:

`<typ>/<krótki-opis-kebab-casem>`

gdzie `<typ>` jest taki sam jak w przypadki commitów

Na przykład:

- `style/sidebar-theme-change`
- `feat/comments-to-questions`
