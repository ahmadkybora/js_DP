iteration (traversal) is a core functionality of various data structures 
an iterator is a class that facilitates the traversal 
keep a refrence to the current element 
knows how to move to a diffrent element
knows when its done and there are no elements to move to
javascript supports this through:
symbol.iterator member that returns
an iterator object with a function called next() that 
returns an object containing: 
the value beign iterated
the done flag indicating whether iteration is finished
an iterator object itself can also be made iterable 
iterator an object that facilitates the traversal of a data structure 


تکرار (پیمایش) یک عملکرد اصلی ساختارهای داده مختلف است
یک تکرار کننده کلاسی است که پیمایش را تسهیل می کند
رفرنس عنصر فعلی را حفظ کنید
می داند چگونه به یک عنصر متفاوت حرکت کند
می داند چه زمانی کار تمام شده است و هیچ عنصری برای حرکت وجود ندارد
جاوا اسکریپت این را از طریق:
عضو symbol.iterator که برمی گردد
یک شی iterator با تابعی به نام next() که
یک شی حاوی:
مقدار تکرار شد
پرچم انجام شده نشان می دهد که آیا تکرار به پایان رسیده است
خود یک شی iterator نیز می تواند قابل تکرار باشد
تکرار کننده یک شی که عبور از یک ساختار داده را تسهیل می کند