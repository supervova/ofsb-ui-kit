# Offsidebet components

1. Сделать максимально универсально с минимальными исходными данными в  идеале мы должны написать @include button(); максимум — @include button('primary');

2. В миксине должны быть все — hover, .active, :focus — и тому подобное

3. Все завязано на переменных, но переменных должно быть как можно меньше.  Значения рассчитывать из одной переменной. Из одного цвета создавать гамму. Из одного отступа — систему отступов 

👉 Evernote ➜ A framework for creating a predictable…

4. box-header. Заголовков может быть несколько видов
  - виджеты меню слева
  - заголовки купонов  

  миксины:
  - box-header-betslip
  - box-header-section-menu
  - box-header-widget

5. @mixin headline() Заголовки первого и второго уровня

6. миксины для элементов формы 
  - input 
  - select
   - checkbox
   - radio

```
  миксины в виде scss файлов прикрепляй к задаче
  переменные необходимые для миксины пиши в том же файле
```

--------------------------------------------------------------------------------

## TODOs

### src/global/variables

#### Spectrum

TODO. Create a function for generating the list based on the user-entered
$teal-blue > [$blue, $purple, $pink, $red, $orange, $yellow, $green]
Использовать hsl, adjust-hue и https://jonasjacek.github.io/colors/

#### COLORS ROLES

*Решить стоит ли использовать карты.* Их главное преимущество — возможность обработки циклом и создание группы классов типа icon-facebook, icon-phone etc. Менее очевидное — компактный формат настроек.

Это поможет сократить пользовательский ввод в данном случае?

Что удобнее: подбирать значение цветов для состояний кнопки
$button{-hover, -focus, -active, -disabled}?-{color, bg, border-color, box-shadow}
циклом или определять их в хорошо структурированном и комментированном списке переменных?

Переменные, на первый взгляд, проще править

#### PRIMARY COLOR
TODO. Create a function for generating the array based on user input.
It can be from 1 to 3 colors: primary, secondary, background.

TODO. Create a function to create light and dark variations for all UI colors.

TODO. Make quick settings for primary/secondary/background in a separate file

#### Primary color filled areas and elements

TODO. Add primary color tones filled areas

#### Secondary color tones filled areas and elements

TODO. Add primary color tones filled areas

--------------------------------------------------------------------------------

### src/global/functions

#### CONTRASTING FOREGROUND COLOR

The W3C recommends the following contrast ratios for body text and image text
- Small text should have a contrast ratio of at least 4.5:1 against its background
- Large text (at 14 pt bold/18 pt regular and up) should have a contrast ratio of at least 3:1 against its background

[W3C Accessibility](http://www.w3.org/TR/AERT#color-contrast)

TODO. Research and use worthwhile takeaways from MDC functions for accessible color combinations
mdc-theme-luminance, mdc-theme-contrast, mdc-theme-light-or-dark, mdc-theme-clamp-percentage

#### TONAL PALETTE

Bootstrap gets result mixing given color with black or white

```sass
@function color-level($color-name: 'primary', $level: 0) {
  $color: color($color-name);
  $color-base: if($level > 0, #000, #fff);
  $level: abs($level);

  @return mix($color-base, $color, $level * $color-interval);
}
```

TODO. Research MDC functions for creation light and dark variants of the given color
mdc-theme-tonal-variants, mdc-theme-dark-variant, mdc-theme-light-variant

If the color is already very dark, mdc-theme-dark-variant function will be lightened instead of darkened. Also, mdc-theme-light-variant function will be darkened instead of lightened, if the color is already very light.

TODO. Research Foundation color functions
node_modules/foundation-sites/scss/util/_color.scss
