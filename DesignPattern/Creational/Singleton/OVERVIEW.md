when discussing which patterns to drop, we found that we still love them all.(not really
im in favor of dropping singleton. its use is almost always a design smell)  
erich gamma 

هنگام بحث درباره اینکه کدام الگوها را رها کنیم، متوجه شدیم که هنوز همه آنها را دوست داریم. (در واقع نه
من طرفدار کنار گذاشتن تک تن هستم. استفاده از آن تقریبا همیشه بوی طراحی است)
اریش گاما

Motivation
for some components it only makes sense to have one in the system
database repository
object factory
e.g, the constructor call is expensive
we want initialization to only happen once
we provide everyone with same instance
want to prevent anyone creating additional copies

singleton a component which is instantiated only once


هنگام بحث درباره اینکه کدام الگوها را رها کنیم، متوجه شدیم که هنوز همه آنها را دوست داریم. (در واقع نه
من طرفدار کنار گذاشتن تک تن هستم. استفاده از آن تقریبا همیشه بوی طراحی است)
اریش گاما

انگیزه
برای برخی از مؤلفه‌ها تنها داشتن یکی در سیستم منطقی است
مخزن پایگاه داده
کارخانه اشیا
به عنوان مثال، تماس سازنده گران است
ما می خواهیم مقداردهی اولیه فقط یک بار اتفاق بیفتد
ما به همه یک نمونه ارائه می دهیم
می‌خواهید از ایجاد نسخه‌های اضافی جلوگیری کنید

singleton کامپوننتی که فقط یک بار نمونه سازی می شود