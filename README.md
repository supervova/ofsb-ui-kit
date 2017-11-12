TODO:
- Выяснить, как фреймворки
  - организуют и обрабатывают цвета записать в src/global/color
  - как создают стили кнопок - записать в src/base/button/_button.scss
- Прочитать
  https://madebymike.com.au/writing/accessible-contrast-with-less-and-sass/
  https://www.sitepoint.com/using-sass-build-color-palettes/
  https://github.com/thoughtbot/bourbon/blob/master/core/bourbon/library/_contrast-switch.scss
  https://www.zingdesign.com/how-to-generate-a-colour-palette-with-compass/
  https://gist.github.com/samuel-holt/82ef9305fa4779ed4f08
- Создать миксин/фунцкию расчета монохромной цветовой палитры
- Доработать, если надо, миксин подбора контрастного сочетания
- Создать миксины кнопки
- Затем сетка — заголовки
- Элементы формы 
- Сетка



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
