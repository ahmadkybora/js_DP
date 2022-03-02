Designe pattern are typically split into three categories
this is called Gamma Categorization after Erich Gamma, one of Gof authors

////////////////////////////////////////////////////////
*******************************************************
Creational Patterns
*******************************************************
deal with the creation (construction) of objects
explicit(constructor) vs implicit(DI,reflection, etc)
wholesale (single statement) vs piecewise (step-by-step)
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
*******************************************************
Structural Patterns
*******************************************************
concerned with the structure(e.g., class members)
many parrents are wrappers that mimics the underlying class interface
strees the importance of good api design 
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
*******************************************************
Behavioral Patterns
*******************************************************
they are all diffrent; no central theme
////////////////////////////////////////////////////////

*******************************************************************************************************

الگوهای طراحی معمولاً به سه دسته تقسیم می شوند
این به نام Erich Gamma، یکی از نویسندگان Gof، طبقه بندی گاما نامیده می شود


////////////////////////////////////////////////////////
*******************************************************
الگوهای خلاقیت
*******************************************************
با ایجاد (ساخت) اشیا سر و کار دارد
صریح (سازنده) در مقابل ضمنی (DI، بازتاب، و غیره)
عمده فروشی (تک بیانیه) در مقابل تکه ای (گام به گام)
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
*******************************************************
الگوهای ساختاری
*******************************************************
مربوط به ساختار (به عنوان مثال، اعضای کلاس)
بسیاری از والدین بسته‌بندی‌هایی هستند که رابط کلاس زیرین را تقلید می‌کنند
به اهمیت طراحی api خوب اشاره می کند
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
*******************************************************
الگوهای رفتاری
*******************************************************
همه آنها متفاوت هستند. بدون موضوع مرکزی
////////////////////////////////////////////////////////



Design Pattern
////////////////////////////////////////////////////////
*******************************************************
Cretianal
*******************************************************
////////////////////////////////////////////////////////
Builder
*******************************************************
separate component for when object
construction gets too complicated
can create mutually cooperating sub-builders
often has a fluent interface
////////////////////////////////////////////////////////
*******************************************************
Factories
*******************************************************
factory method more expressive than constructor
a seprate class with factory methods is a factory
class hierarchies can have corresponding hierarchies of factories
(abstract factory) 
////////////////////////////////////////////////////////
*******************************************************
Prototype
*******************************************************
creation of object from an existing object
requires either explicit deep copy or copy through serilizaion
additional work required to preserve type 
////////////////////////////////////////////////////////
*******************************************************
Singletion
*******************************************************
when you needto ensure just a single instance exists
can return some object from constructor on every call
direct dependence on a singleton is dangerous
////////////////////////////////////////////////////////
*******************************************************
Structural I
*******************************************************
////////////////////////////////////////////////////////
*******************************************************
Adapter
*******************************************************
Converts the interface you get to the interface you need    
////////////////////////////////////////////////////////
Bridge
*******************************************************
decouple abstraction from implementation    
////////////////////////////////////////////////////////
Composite
*******************************************************
allows client to treat individual objects and compositions of objects uniformly    
////////////////////////////////////////////////////////
Decorator
*******************************************************
attach additional responsibitlities to objects without modyfying those objects or inheriting from them
decorators are composable with each other    
////////////////////////////////////////////////////////
*******************************************************
Structural II
*******************************************************
////////////////////////////////////////////////////////
Facade
*******************************************************
provide a single unified interface over a set of systems/interface    
////////////////////////////////////////////////////////
*******************************************************
Flyweight
*******************************************************
memory saving technique
efficiently support very large numbers of similar objects   
////////////////////////////////////////////////////////
Proxy
*******************************************************
provide a surrogate object that forwards calls to the real object while preforming additional functions
E.g, access control, communication, logging ,etc    
////////////////////////////////////////////////////////
*******************************************************
Behavorial I
*******************************************************
////////////////////////////////////////////////////////
Chain of responsibility
*******************************************************
allow components to process information/events in chain
each element in the chain refers next element; or
make a list and go throgh it      
////////////////////////////////////////////////////////
Command
*******************************************************
encapsulation a request into a separate object
Good for audit, replay, undo/redo
part of cqs/cqrs
////////////////////////////////////////////////////////
Interpreter
*******************************************************
transfrom textual input into object-oriented structures
used by interpreter, compilers static analysis tools,etc
compiler theory is a separate branch of computer scince       
////////////////////////////////////////////////////////
Iterator
*******************************************************
providers an interface for accessing elements of an aggregate object
objects can be made iterable (foor loop)      
////////////////////////////////////////////////////////
*******************************************************
Behavorial II
*******************************************************
////////////////////////////////////////////////////////
Meditor
*******************************************************
provides mediation services between two objects
E.g., message passing, chat room       
////////////////////////////////////////////////////////
Memento
*******************************************************
Yields tokens representing system states
tokens do not allow direct manipulation but cab be used in appropriate apis      
////////////////////////////////////////////////////////
Observer
*******************************************************
allows notifications of change/happenings in a component
////////////////////////////////////////////////////////
*******************************************************
Behavorial III
*******************************************************
////////////////////////////////////////////////////////
State
*******************************************************
we model systems by having one of a possible states and transitions between these states
such a system is called a state machine
special frameworks exists to orchestrate state machines
////////////////////////////////////////////////////////
Strategy & Template Method
*******************************************************
both define a skeleton algorithm with details filled in by implementor
strategy uses ordinary composition, template method uses inheritance 
////////////////////////////////////////////////////////
Visitor
*******************************************************
allows none-intrusive addition of functionality to hierarchies
////////////////////////////////////////////////////////



الگوی طراحی
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
کریتینال
********************************************** *****
///////////////////////////////////////////////////////////////////////// //////
سازنده
********************************************** *****
جزء مجزا برای زمانی که شی
ساخت و ساز خیلی پیچیده می شود
می تواند سازنده های فرعی با همکاری متقابل ایجاد کند
اغلب دارای یک رابط روان است
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
کارخانه ها
********************************************** *****
روش کارخانه گویاتر از سازنده است
یک کلاس جداگانه با روش های کارخانه ای یک کارخانه است
سلسله مراتب طبقاتی می توانند سلسله مراتب مربوط به کارخانه ها را داشته باشند
(کارخانه انتزاعی)
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
نمونه اولیه
********************************************** *****
ایجاد شی از یک شی موجود
نیاز به کپی عمیق صریح یا کپی از طریق serilizaion دارد
کار اضافی مورد نیاز برای حفظ نوع
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
مجردی
********************************************** *****
زمانی که باید مطمئن شوید که فقط یک نمونه وجود دارد
می تواند در هر فراخوانی مقداری از شی را از سازنده برگرداند
وابستگی مستقیم به تک قلو خطرناک است
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
I ساختاری
********************************************** *****
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
آداپتور
********************************************** *****
رابطی را که دریافت می کنید به رابط مورد نیاز تبدیل می کند
///////////////////////////////////////////////////////////////////////// //////
پل
********************************************** *****
جداسازی انتزاع از اجرا
///////////////////////////////////////////////////////////////////////// //////
کامپوزیت
********************************************** *****
به مشتری این امکان را می دهد تا با اشیاء و ترکیبات اشیا به طور یکنواخت رفتار کند
///////////////////////////////////////////////////////////////////////// //////
دکوراتور
********************************************** *****
بدون تغییر دادن آن اشیا یا ارث بردن از آنها، مسئولیت‌های اضافی را به اشیا اختصاص دهید
دکوراتورها با یکدیگر قابل ترکیب هستند
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
ساختاری II
********************************************** *****
///////////////////////////////////////////////////////////////////////// //////
نما
********************************************** *****
یک رابط واحد واحد را روی مجموعه ای از سیستم ها/رابط ارائه می دهد
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
وزن پرواز
********************************************** *****
تکنیک ذخیره سازی حافظه
به طور موثر از تعداد بسیار زیادی از اشیاء مشابه پشتیبانی می کند
///////////////////////////////////////////////////////////////////////// //////
پروکسی
********************************************** *****
یک شی جانشین ارائه می کند که همزمان با انجام توابع اضافی، تماس ها را به شی واقعی ارسال می کند
به عنوان مثال، کنترل دسترسی، ارتباطات، ورود به سیستم، و غیره
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
من رفتاری
********************************************** *****
///////////////////////////////////////////////////////////////////////// //////
زنجیره مسئولیت
********************************************** *****
به اجزا اجازه می دهد تا اطلاعات/رویدادها را به صورت زنجیره ای پردازش کنند
هر عنصر در زنجیره به عنصر بعدی اشاره دارد. یا
یک لیست تهیه کنید و از آن عبور کنید
///////////////////////////////////////////////////////////////////////// //////
فرمان
********************************************** *****
کپسوله کردن یک درخواست در یک شی جداگانه
برای ممیزی، پخش مجدد، لغو/دوباره خوب است
بخشی از cqs/cqrs
///////////////////////////////////////////////////////////////////////// //////
مترجم
********************************************** *****
انتقال از ورودی متنی به ساختارهای شی گرا
توسط مترجم، ابزارهای تحلیل استاتیک کامپایلرها و غیره استفاده می شود
نظریه کامپایلر شاخه ای جداگانه از علوم کامپیوتر است
///////////////////////////////////////////////////////////////////////// //////
اشاره گر
********************************************** *****
یک رابط برای دسترسی به عناصر یک شی انبوه ارائه می دهد
اشیاء را می توان تکرار پذیر کرد (حلقه عقب)
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
رفتاری II
********************************************** *****
///////////////////////////////////////////////////////////////////////// //////
مدير
********************************************** *****
خدمات میانجیگری بین دو شی را ارائه می دهد
به عنوان مثال، ارسال پیام، اتاق گفتگو
///////////////////////////////////////////////////////////////////////// //////
یادگاری
********************************************** *****
توکن هایی را به دست می دهد که حالت های سیستم را نشان می دهد
توکن ها اجازه دستکاری مستقیم را نمی دهند اما کابین در apis مناسب استفاده می شود
///////////////////////////////////////////////////////////////////////// //////
نظاره گر
********************************************** *****
اجازه می دهد تا اعلان های تغییر / اتفاقات در یک جزء
///////////////////////////////////////////////////////////////////////// //////
********************************************** *****
رفتاری III
********************************************** *****
///////////////////////////////////////////////////////////////////////// //////
دولت
********************************************** *****
ما سیستم ها را با داشتن یکی از حالت های ممکن و انتقال بین این حالت ها مدل می کنیم
چنین سیستمی ماشین حالت نامیده می شود
چارچوب های ویژه ای برای هماهنگ کردن ماشین های حالت وجود دارد
///////////////////////////////////////////////////////////////////////// //////
روش استراتژی و الگو
********************************************** *****
هر دو یک الگوریتم اسکلت را با جزئیات پر شده توسط پیاده‌ساز تعریف می‌کنند
استراتژی از ترکیب معمولی استفاده می کند، روش الگو از وراثت استفاده می کند
///////////////////////////////////////////////////////////////////////// //////
بازدید کننده
********************************************** *****
اجازه می دهد تا بدون مزاحم از عملکرد به سلسله مراتب اضافه شود
///////////////////////////////////////////////////////////////////////// //////