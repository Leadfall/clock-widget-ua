Віджет годинника Українською

https://leadfall.github.io/clock-widget-ua/

Формат дати можна налаштувати, додавши **?dateFormat=** до URL-адреси.
Нижче наведено кілька прикладів:
| Приклад | **?dateFormat=** | **URL** |
| --- | --- | --- |
| пт 19 груд 2025 03:13:14 дня | ddd DD MMM yyyy hh:mm:ss A | [**Натисніть тут**](https://leadfall.github.io/clock-widget-ua/?dateFormat=ddd%20DD%20MMM%20yyyy%20hh:mm:ss%20A) |
| 12/19/2025 03:13 дня | MM/DD/yy hh:mm A | [**Натисніть тут**](https://leadfall.github.io/clock-widget-ua/?dateFormat=MM/DD/yy%20hh:mm%20A) |
| 2025-19-12 15:14 | yyyy-DD-MM HH:mm | [**Натисніть тут**](https://leadfall.github.io/clock-widget-ua/?dateFormat=yyyy-DD-MM%20HH:mm) |
| 19-го грудня 2025 | Do MMMM yyyy | [**Натисніть тут**](https://leadfall.github.io/clock-widget-ua/?dateFormat=Do%20MMMM%20yyyy) |
<aside>
ℹ️
Більше варіантів форматування дивіться на https://momentjs.com/docs/#/displaying/
</aside>

Custom CSS Template (Optional)
---
```css
body {
	background-color: rgba(0, 0, 0, 0);
	margin: 0px auto;
	overflow: hidden;
}

#timeLabel {
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
	font-size: 50px;
}

#mainContainer {
	text-align: center;
}
```
