you are calling foo.bar()
this assumes that foo is in the same process bar()
what if, later on, you want to put all Foo-related operations into a separate process
can you acoid changing your code?
proxy to the rescue
same interface, entirly diffrent behavior
this is called communication proxy
other types: logging, virtual, guarding
proxy a class that functions as an interface to a particular resource. that resource may be remote, expensive to construct, or may require lggoing or some other added functionality.  

شما در حال تماس با foo.bar() هستید
این فرض می‌کند که foo در همان نوار فرآیند () است.
اگر بعداً بخواهید تمام عملیات مربوط به Foo را در یک فرآیند جداگانه قرار دهید چه می شود
آیا می توانید کد خود را تغییر دهید؟
پروکسی برای نجات
رابط یکسان، رفتار کاملاً متفاوت
این پروکسی ارتباطی نامیده می شود
انواع دیگر: ورود به سیستم، مجازی، نگهبانی
پروکسی کلاسی که به عنوان رابط برای یک منبع خاص عمل می کند. این منبع ممکن است از راه دور باشد، ساخت آن پرهزینه باشد، یا ممکن است نیاز به lggoing یا برخی عملکردهای اضافه دیگر داشته باشد.