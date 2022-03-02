propagate an accept(Visitor v) method throughout the entire hiearchy
create a visitor with visitFoo (Foo), visitBar(Bar), ...for each element in the hierarchy  
each accept() simply calls visitor.visitXxx(this) 


یک روش پذیرش (Visitor v) را در کل سلسله مراتب منتشر کنید
یک بازدیدکننده با visitFoo (Foo)، visitBar (Bar)، ... برای هر عنصر در سلسله مراتب ایجاد کنید.
هر ()accept به سادگی visitor.visitXxx (this) را فرا می خواند