# Strona o szczepionkach na COVID-19

> ### [Link do strony](https://malelus.github.io/SzczepionkiCovid/)

---

#### Strona została napisana w edytorze Visual Studio Code używając składni SCSS preprocesora SASS do pisania kodu CSS oraz użyto ikon ze strony https://fontawesome.com/.

- czcionki:
  - [Roboto](https://fonts.google.com/specimen/Roboto?query=robot),
  - [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue?query=bebas).

---

### Obowiązkowe:

- układ:

  - logo,
  - linki,
  - zawartość,
  - stopka.

- 3 szczepionki (Moderna, AstraZeneca, CureVac) ([źródło](https://businessinsider.com.pl/technologie/nowe-technologie/szczepionki-przeciw-covid-19-moderna-astrazeneca-curevac-sanofi/k4znpqf)),

- formularz zapisu na szczepienie.

---

### Dodatkowe:

#### Budowa:

- strona została zaprojektowana w sposób responsywny dzięki czemu umożliwia to swobodne i wygodne korzystanie z niej na każdym urządzeniu:

| Smartphone                                                                                                       | Mobile                                                                                          | Desktop                                                                       |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| < 699px                                                                                                          | 700px - 999px                                                                                   | > 1000px                                                                      |
| widok przystowany do korzystania na smartphonie, hamburger menu (nawigacja rozwijana) (pierwotny design strony), | widok mobilny, pasek nawigacji na górze, dostosowanie czcionek i animacji do większych ekranów, | widok desktop , dostosowanie czcionek i animacji do komputerów stacjonarnych, |

- użyto znaczników semantycznych,

- okno popup umieszczone w stopce strony, zawiera:

  - skrócone informacje o zawartości strony (dodatkowy link do formularza szczepień),
  - link do repozytorium GitHub'a,
  - informacje o autorze,
  - datę wykonania,

  - okno można wyłączyć na 3 sposoby:

    - przycisk Zamknij,
    - kliknięcie poza obszar okna,
    - za pomocą przycisku ESC.

#### Wygląd:

- animacja przejścia między podstronami wykonana przy pomocy CSS oraz JavaScript,

- linki aktywne oraz znacznik na której stronie aktualnie znajduję się użytkownik,

- zmieniony wygląd scrollbar'a,

- animacja na głównej stronie, po najechaniu na nazwę akcji szczepień pojawia się link przenoszący na stronę [gov](https://www.gov.pl/web/szczepimysie),

- link do strony głównej umieszczony w napisie "SzczepionkiCovid",

- symulowane wysłanie formularza na serwer komunikowany poprzez komunikat, następnie strona zostaje odświeżona.

#### Dodatki:

- informacje w konsoli o statusie animacji oraz o czasach trwania wszystkich animacji znajdujących się na stronie,

- możliwość wyłączenia całkowicie animacji znajdujących się na stronie.

  > (aby wyłączyć animacje: Ustawienia > Ułatwienia dostępu > Wyświetlacz > Pokaż animacje w systemie Windows (Wyłącz)) (Ustawienie znajduje się w pliku \_reset.scss).

---

#### Wykonał: Mateusz Narowski

#### Data: 02.02.2021
