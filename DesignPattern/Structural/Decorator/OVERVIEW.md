want to augment an object with additional functionality
do not want to review or alter existing code (OCP)
want to keep new funtionality separate (SRP)
need to be able to interact with existing structures
two options:
inherit from required object (if possible)
build a decorator, which simply refrences the decorated object(s)
Decorator Facilitates the addition of behaviors to individual objects without inheriting from them.


می خواهید یک شی را با عملکرد اضافی تقویت کنید
نمی خواهم کد موجود (OCP) را بررسی یا تغییر دهم
می خواهید عملکرد جدید را جدا نگه دارید (SRP)
باید بتواند با ساختارهای موجود تعامل داشته باشد
دو گزینه:
ارث بردن از شی مورد نیاز (در صورت امکان)
یک دکوراتور بسازید که به سادگی به شی (های) تزئین شده اشاره می کند.
دکوراتور افزودن رفتارها به اشیاء فردی را بدون ارث بردن از آنها تسهیل می کند.